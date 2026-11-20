"""
Shared pytest-playwright configuration for the si0n4ra blog test suite.

The base URL and browser settings live here so individual test files don't
need to repeat them.  The Hexo dev server must be running before tests start:

    npx hexo server --port 4001 --config "_config.yml,_config.fluid.yml"
"""

import pytest


# ---------------------------------------------------------------------------
# Base URL — single source of truth used in every test module
# ---------------------------------------------------------------------------

BASE_URL = "http://localhost:4001/hexo-blog"


@pytest.fixture(scope="session")
def base_url() -> str:
    """Return the blog's root URL (no trailing slash)."""
    return BASE_URL


# ---------------------------------------------------------------------------
# pytest-playwright options (applied session-wide)
# ---------------------------------------------------------------------------

def pytest_configure(config):
    # Increase default navigation timeout to 15 s — the dev server can be slow
    # on first requests while Hexo generates pages on-the-fly.
    pass  # timeout is set per-test via page.set_default_timeout()
