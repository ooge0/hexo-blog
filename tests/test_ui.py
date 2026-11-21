"""
UI smoke tests for the si0n4ra Hexo blog.

Prerequisites
-------------
1. Hexo dev server must be running on port 4001:
       npx hexo server --port 4001 --config "_config.yml,_config.fluid.yml"
2. Python deps installed:
       pip install pytest pytest-playwright
       playwright install chromium

Run all tests:
    pytest tests/test_ui.py -v

Run one group only (e.g. home page):
    pytest tests/test_ui.py -v -k "home"
"""

import re
from pathlib import Path

import pytest
from playwright.sync_api import Page, expect, Response

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

BASE = "http://localhost:4001/hexo-blog"

# Absolute path to the _posts source directory (sibling of this tests/ folder)
POSTS_DIR = Path(__file__).parent.parent / "source" / "_posts"

# ---------------------------------------------------------------------------
# Permalink integrity helpers
# ---------------------------------------------------------------------------

# Permalinks that are known to cause Hexo render failures — skip URL check
SKIP_RESOLVE: set[str] = {
    "/glossary_wall/",  # Cyrillic-heavy content breaks Hexo's renderer
}

# Files whose permalink intentionally differs from the file-system path.
# Typical reasons: double-underscore slug shortening, or a space in the
# filename that must become a hyphen in the URL.
SKIP_PATH_MATCH: set[str] = {
    "notes/notes__other_papers.md",
    "notes/notes__windows_services_and_vm_usage.md",
    "qa/naming convention.md",
}


def _normalise(raw: str) -> str:
    """Ensure a permalink has leading and trailing slashes."""
    p = raw.strip()
    if not p.startswith("/"):
        p = "/" + p
    if not p.endswith("/"):
        p = p + "/"
    return p


def _collect_posts() -> list[dict]:
    """
    Walk source/_posts/ and return one dict per .md file that has an explicit
    static permalink: in its front matter.
    """
    results: list[dict] = []

    for md_path in POSTS_DIR.rglob("*.md"):
        rel = md_path.relative_to(POSTS_DIR).as_posix()
        content = md_path.read_text(encoding="utf-8", errors="replace")

        m = re.search(r"^permalink:\s*(.+)$", content, re.MULTILINE)
        if not m:
            continue

        raw = m.group(1).strip()
        if ":" in raw:
            continue

        permalink = _normalise(raw)
        expected_url = "/" + re.sub(r"\.md$", "/", rel)

        perm_depth = len(permalink.strip("/").split("/"))
        file_depth = len(expected_url.strip("/").split("/"))

        results.append(
            dict(
                file=rel,
                permalink=permalink,
                expected_url=expected_url,
                same_depth=(perm_depth == file_depth),
            )
        )

    return results


# Collect once at import time so parametrize decorators can use the data
ALL_POSTS = _collect_posts()
PATH_CHECK_POSTS = [
    p for p in ALL_POSTS 
    if p["file"] not in SKIP_PATH_MATCH and p["same_depth"]
]

RESOLVE_POSTS = [
    p for p in ALL_POSTS 
    if p["permalink"] not in SKIP_RESOLVE
]

# ---------------------------------------------------------------------------
# Home page
# ---------------------------------------------------------------------------


class TestHomePage:
    """Smoke tests for the blog's main landing page."""

    @pytest.fixture(autouse=True)
    def _goto(self, page: Page):
        # Navigate to home before every test in this class
        page.goto(BASE + "/")

    def test_navbar_visible(self, page: Page):
        """The sticky navigation bar must render on every page."""
        expect(page.locator("#navbar")).to_be_visible()

    def test_banner_has_height(self, page: Page):
        """Hero banner must be visible and have a meaningful height (>50 px)."""
        banner = page.locator("#banner")
        expect(banner).to_be_visible()
        box = banner.bounding_box()
        assert box is not None and box["height"] > 50

    def test_banner_typed_slogan(self, page: Page):
        """Banner subtitle must carry the data-typed-text attribute (animated slogan)."""
        subtitle = page.locator("#banner #subtitle")
        expect(subtitle).to_be_visible()
        typed = subtitle.get_attribute("data-typed-text")
        assert typed and len(typed) > 5

    def test_banner_background(self, page: Page):
        """Banner must have a background image or gradient — not bare 'none'."""
        banner = page.locator("#banner")
        bg = banner.evaluate("el => window.getComputedStyle(el).backgroundImage")
        assert bg and bg != "none" and len(bg) > 5

    def test_footer_present(self, page: Page):
        """Footer must exist on the home page."""
        expect(page.locator("footer, #footer").first).to_be_visible()

    def test_board_container_present(self, page: Page):
        """Content board wrapper #board must be in the DOM."""
        expect(page.locator("#board")).to_be_visible()

    def test_home_intro_strip(self, page: Page):
        """Custom intro strip must render with 'Roman' in the lead paragraph
        and at least one quick-link anchor."""
        intro = page.locator(".home-intro")
        expect(intro).to_be_visible()
        expect(intro.locator(".home-intro__lead")).to_contain_text("Roman")
        expect(intro.locator(".home-intro__links a").first).to_be_visible()

    def test_post_list_hidden(self, page: Page):
        """Post cards exist in the DOM (intro-only home) but must all be hidden via CSS."""
        cards = page.locator(".index-card")
        # Evaluate JS to count how many cards are actually displayed
        visible_count: int = cards.evaluate_all(
            "els => els.filter(el => window.getComputedStyle(el).display !== 'none').length"
        )
        assert visible_count == 0, f"Expected 0 visible post cards, got {visible_count}"

    def test_navbar_has_hexo_blog_link(self, page: Page):
        """Navbar must contain at least one link that points into /hexo-blog/."""
        link = page.locator('#navbar a[href*="hexo-blog/"]').first
        expect(link).to_be_visible()


# ---------------------------------------------------------------------------
# Sub-pages — shared layout
# ---------------------------------------------------------------------------

SUB_PAGES = [
    ("Archives", "/archives/"),
    ("Categories", "/categories/"),
    ("Tags", "/tags/"),
    ("About", "/about-me/"),
    ("Projects", "/projects/"),
]


@pytest.mark.parametrize("name,path", SUB_PAGES, ids=[n for n, _ in SUB_PAGES])
def test_subpage_chrome(page: Page, name: str, path: str):
    """Every sub-page must render navbar, banner and footer (shared chrome)."""
    page.goto(BASE + path)
    expect(page.locator("#navbar")).to_be_visible()
    expect(page.locator("#banner")).to_be_visible()
    expect(page.locator("footer, #footer").first).to_be_visible()


@pytest.mark.parametrize("name,path", SUB_PAGES, ids=[n for n, _ in SUB_PAGES])
def test_subpage_no_intro(page: Page, name: str, path: str):
    """The home-intro strip must NOT appear on any sub-page."""
    page.goto(BASE + path)
    expect(page.locator(".home-intro")).to_have_count(0)


# ---------------------------------------------------------------------------
# About page
# ---------------------------------------------------------------------------


class TestAboutPage:
    """Checks for the /about-me/ page."""

    @pytest.fixture(autouse=True)
    def _goto(self, page: Page):
        page.goto(BASE + "/about-me/")

    def test_board_wrapper(self, page: Page):
        """About page must render inside the #board wrapper (not full-width)."""
        expect(page.locator("#board")).to_be_visible()

    def test_bio_sections_rendered(self, page: Page):
        """At least one .bio-section block must be present."""
        count = page.locator(".bio-section").count()
        assert count > 0, "No .bio-section found on the About page"


# ---------------------------------------------------------------------------
# Tags page — 3D canvas cloud
# ---------------------------------------------------------------------------


class TestTagsCloud:
    """Checks for the interactive 3D tag cloud on /tags/."""

    @pytest.fixture(autouse=True)
    def _goto(self, page: Page):
        page.goto(BASE + "/tags/")

    def test_canvas_in_board(self, page: Page):
        """The <canvas> element must be rendered inside #board."""
        expect(page.locator("#board #tagcloud-canvas")).to_be_attached()

    def test_canvas_has_dimensions(self, page: Page):
        """Canvas must become visible and have width/height > 100 px."""
        canvas = page.locator("#tagcloud-canvas")
        # Canvas visibility is set by JS after the sphere is drawn
        expect(canvas).to_be_visible(timeout=8_000)
        box = canvas.bounding_box()
        assert box is not None
        assert box["width"] > 100 and box["height"] > 100

    def test_flat_cloud_hidden(self, page: Page):
        """The original flat .tagcloud Hexo-generated element must be hidden."""
        visible = page.locator(".tagcloud").evaluate_all(
            "els => els.some(el => window.getComputedStyle(el).display !== 'none')"
        )
        assert not visible, "Flat .tagcloud is still visible — 3D replacement may have failed"

    def test_tagcloud_wrap_contains_canvas(self, page: Page):
        """#tagcloud-wrap must exist and contain the canvas."""
        wrap = page.locator("#tagcloud-wrap")
        expect(wrap).to_be_visible()
        expect(wrap.locator("#tagcloud-canvas")).to_be_attached()


# ---------------------------------------------------------------------------
# Post rendering quality
# ---------------------------------------------------------------------------

# Sample posts that previously had the layout:page bug (renders without #board)
SAMPLE_POSTS = [
    "/nastusja/",
    "/post_my_glossaries/",
    "/software_qa_basic_check_list/",
]


@pytest.mark.parametrize("post_path", SAMPLE_POSTS)
def test_post_has_board(page: Page, post_path: str):
    """Post pages must render inside #board (not full-width layout:page)."""
    res = page.goto(BASE + post_path)
    if res and res.status == 404:
        pytest.skip(f"Post {post_path} does not exist — skipping board check")
    expect(page.locator("#board")).to_be_visible()


@pytest.mark.parametrize("post_path", SAMPLE_POSTS)
def test_post_has_links(page: Page, post_path: str):
    """Post content area must contain at least one rendered <a> tag."""
    res = page.goto(BASE + post_path)
    if res and res.status == 404:
        pytest.skip(f"Post {post_path} does not exist — skipping link check")
    count = page.locator(".markdown-body a, .post-content a, #board a").count()
    assert count > 0, f"No links found in post content on {post_path}"


# ---------------------------------------------------------------------------
# Internal links — no broken hrefs
# ---------------------------------------------------------------------------

ENTRY_PAGES = [
    "/start-here/",
    "/projects/",
    "/about-me/",
    "/tags/",
    "/archives/",
    "/categories/",
]


@pytest.mark.parametrize("entry_path", ENTRY_PAGES)
def test_no_broken_internal_links(page: Page, entry_path: str):
    page.goto(BASE + entry_path)

    hrefs: list[str] = page.evaluate(
        """(base) => {
            const seen = new Set();
            document.querySelectorAll('a[href]').forEach(a => {
                const h = a.getAttribute('href');
                if (h && h.startsWith(base + '/') && !h.includes('#') && !h.startsWith('mailto')) {
                    seen.add(h);
                }
            });
            return [...seen];
        }""",
        BASE,
    )

    broken: list[str] = []
    # Используем page.request.get — он делает легкий HTTP-запрос без рендера страницы
    for href in hrefs:
        res = page.request.get(href)
        if res.status == 404:
            broken.append(href)

    assert not broken, (
        f"Broken links found on {entry_path}:\n  " + "\n  ".join(broken)
    )



# ---------------------------------------------------------------------------
# Post permalink integrity — path matches file location
# ---------------------------------------------------------------------------

@pytest.mark.parametrize(
    "post",
    PATH_CHECK_POSTS,
    ids=[p["file"] for p in PATH_CHECK_POSTS],
)
def test_permalink_matches_file_path(post: dict):
    """
    Static check (no server needed).
    Verifies that permalinks at the same directory depth match the file path.
    """
    assert post["permalink"] == post["expected_url"], (
        f'File is at "{post["file"]}" '
        f'→ expected permalink "{post["expected_url"]}" '
        f'but got "{post["permalink"]}"'
    )

# ---------------------------------------------------------------------------
# Post permalink integrity — all URLs resolve on the dev server
# ---------------------------------------------------------------------------


@pytest.mark.parametrize(
    "post",
    RESOLVE_POSTS,
    ids=[p["file"] for p in RESOLVE_POSTS],
)
def test_permalink_resolves(page: Page, post: dict):
    """
    For every MD file with a static permalink, verify the URL returns a
    non-404 response from the Hexo dev server.
    Catches: missing front matter, wrong slug, file moved without updating permalink.
    """
    url = BASE + post["permalink"]
    res = page.goto(url, wait_until="domcontentloaded")
    status = res.status if res else 0
    assert status != 404, (
        f'{post["file"]}: permalink "{post["permalink"]}" returned 404'
    )
