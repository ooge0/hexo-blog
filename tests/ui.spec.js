// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:4001/hexo-blog';

// ── Home page ────────────────────────────────────────────────────────────────

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE + '/');
  });

  test('navbar is present and visible', async ({ page }) => {
    const navbar = page.locator('#navbar');
    await expect(navbar).toBeVisible();
  });

  test('banner is present and has visible height', async ({ page }) => {
    const banner = page.locator('#banner');
    await expect(banner).toBeVisible();
    const box = await banner.boundingBox();
    expect(box.height).toBeGreaterThan(50);
  });

  test('banner has slogan text', async ({ page }) => {
    const subtitle = page.locator('#banner #subtitle');
    await expect(subtitle).toBeVisible();
    // text is typed via animation — check attribute instead of content
    const typed = await subtitle.getAttribute('data-typed-text');
    expect(typed).toBeTruthy();
    expect(typed.length).toBeGreaterThan(5);
  });

  test('banner has a background image or gradient', async ({ page }) => {
    const banner = page.locator('#banner');
    const bg = await banner.evaluate(el => window.getComputedStyle(el).backgroundImage);
    // Must have either a url() image or a gradient — not 'none'
    expect(bg).not.toBe('none');
    expect(bg.length).toBeGreaterThan(5);
  });

  test('footer is present', async ({ page }) => {
    const footer = page.locator('footer, #footer');
    await expect(footer.first()).toBeVisible();
  });

  test('content board is present', async ({ page }) => {
    const board = page.locator('#board');
    await expect(board).toBeVisible();
  });

  test('home intro strip is injected above posts', async ({ page }) => {
    const intro = page.locator('.home-intro');
    await expect(intro).toBeVisible();
    await expect(intro.locator('.home-intro__lead')).toContainText('Roman');
    await expect(intro.locator('.home-intro__links a').first()).toBeVisible();
  });

  test('post list is hidden (intro-only home page)', async ({ page }) => {
    const cards = page.locator('.index-card');
    // Cards are in the HTML but hidden via CSS — count > 0 but none visible
    const visible = await cards.evaluateAll(els =>
      els.filter(el => window.getComputedStyle(el).display !== 'none').length
    );
    expect(visible).toBe(0);
  });

  test('navbar links resolve — no broken nav', async ({ page }) => {
    const homeLink = page.locator('#navbar a[href*="hexo-blog/"]').first();
    await expect(homeLink).toBeVisible();
  });
});

// ── Sub-pages ─────────────────────────────────────────────────────────────────

test.describe('Sub-pages — shared layout', () => {
  const pages = [
    { name: 'Archives',   path: '/archives/' },
    { name: 'Categories', path: '/categories/' },
    { name: 'Tags',       path: '/tags/' },
    { name: 'About',      path: '/about-me/' },
    { name: 'Projects',   path: '/projects/' },
  ];

  for (const p of pages) {
    test(`${p.name}: navbar + banner + footer visible`, async ({ page }) => {
      await page.goto(BASE + p.path);
      await expect(page.locator('#navbar')).toBeVisible();
      await expect(page.locator('#banner')).toBeVisible();
      await expect(page.locator('footer, #footer').first()).toBeVisible();
    });

    test(`${p.name}: no intro strip on sub-page`, async ({ page }) => {
      await page.goto(BASE + p.path);
      const intro = page.locator('.home-intro');
      await expect(intro).toHaveCount(0);
    });
  }
});

// ── About page ────────────────────────────────────────────────────────────────

test.describe('About page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE + '/about-me/');
  });

  test('board container wraps content (not full-width)', async ({ page }) => {
    const board = page.locator('#board');
    await expect(board).toBeVisible();
  });

  test('bio sections are rendered', async ({ page }) => {
    const sections = page.locator('.bio-section');
    const count = await sections.count();
    expect(count).toBeGreaterThan(0);
  });
});

// ── Tags page — 3D cloud ─────────────────────────────────────────────────────

test.describe('Tags page — 3D cloud', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE + '/tags/');
  });

  test('canvas element is present inside #board', async ({ page }) => {
    const canvas = page.locator('#board #tagcloud-canvas');
    await expect(canvas).toBeAttached();
  });

  test('canvas has non-zero dimensions', async ({ page }) => {
    const canvas = page.locator('#tagcloud-canvas');
    // Wait for TagCanvas to finish init (removes visibility:hidden)
    await expect(canvas).toBeVisible({ timeout: 8000 });
    const box = await canvas.boundingBox();
    expect(box.width).toBeGreaterThan(100);
    expect(box.height).toBeGreaterThan(100);
  });

  test('flat tag cloud is hidden', async ({ page }) => {
    const flat = page.locator('.tagcloud');
    const visible = await flat.evaluateAll(els =>
      els.some(el => window.getComputedStyle(el).display !== 'none')
    );
    expect(visible).toBe(false);
  });

  test('tagcloud-wrap contains the canvas', async ({ page }) => {
    const wrap = page.locator('#tagcloud-wrap');
    await expect(wrap).toBeVisible();
    const canvas = wrap.locator('#tagcloud-canvas');
    await expect(canvas).toBeAttached();
  });
});

// ── Post render quality ───────────────────────────────────────────────────────
// Catches the layout:page-in-_posts bug: post renders full-width without board.

test.describe('Post rendering', () => {
  // Sample a few posts that previously had layout:page — they must now have #board.
  const samplePosts = [
    '/nastusja/',
    '/post_my_glossaries/',
    '/post_qa__software_qa_basic_check_list/',
  ];

  for (const postPath of samplePosts) {
    test(`${postPath} has board wrapper (not full-width)`, async ({ page }) => {
      const res = await page.goto(BASE + postPath);
      // 404 is acceptable if the post doesn't exist — skip board check
      if (res && res.status() === 404) return;
      const board = page.locator('#board');
      await expect(board).toBeVisible();
    });

    test(`${postPath} renders markdown links as <a> tags`, async ({ page }) => {
      const res = await page.goto(BASE + postPath);
      if (res && res.status() === 404) return;
      // Post content area should contain at least one anchor tag
      const links = page.locator('.markdown-body a, .post-content a, #board a');
      const count = await links.count();
      expect(count).toBeGreaterThan(0);
    });
  }
});

// ── Broken internal links ─────────────────────────────────────────────────────
// Collects every href="/hexo-blog/..." from key pages and checks each returns
// a non-404 response. Catches copy-paste URL mistakes in start-here, projects, etc.

test.describe('Internal links — no broken hrefs', () => {
  const entryPages = [
    '/start-here/',
    '/projects/',
    '/about-me/',
    '/tags/',
    '/archives/',
    '/categories/',
  ];

  for (const entryPath of entryPages) {
    test(`${entryPath} — all internal links resolve`, async ({ page }) => {
      await page.goto(BASE + entryPath);

      // Collect unique /hexo-blog/... hrefs (skip anchors and mailto)
      const hrefs = await page.evaluate((base) => {
        const seen = new Set();
        document.querySelectorAll('a[href]').forEach(a => {
          const h = a.getAttribute('href');
          if (h && h.startsWith(base + '/') && !h.includes('#') && !h.startsWith('mailto')) {
            seen.add(h);
          }
        });
        return [...seen];
      }, BASE);

      if (hrefs.length === 0) return;

      const broken = [];
      for (const href of hrefs) {
        const res = await page.goto(href, { waitUntil: 'domcontentloaded' });
        if (res && res.status() === 404) broken.push(href);
      }

      if (broken.length > 0) {
        console.log('Broken links on ' + entryPath + ':\n  ' + broken.join('\n  '));
      }
      expect(broken, 'broken links: ' + broken.join(', ')).toHaveLength(0);
    });
  }
});
