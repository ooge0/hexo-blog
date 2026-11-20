# si0n4ra — Hexo Blog

Personal blog built with [Hexo 7.3.0](https://hexo.io) + [Fluid 1.9.9](https://github.com/fluid-dev/hexo-theme-fluid).

---

## Local development

### Start dev server

```powershell
cd D:\trash\claude_store\my_blog
npx hexo server --port 4001 --config "_config.yml,_config.fluid.yml"
# → http://localhost:4001/hexo-blog/
```

Hexo watches source files and hot-reloads on most changes.
Config changes (`_config.yml`, `_config.fluid.yml`) and new scripts in `scripts/` require a restart.

### Kill the server (if port is busy)

```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 4001).OwningProcess -Force
```

### Run UI tests (server must be running first)

Two test suites cover the same scenarios — JavaScript (Playwright) and Python (pytest-playwright).
Both must pass before deploying.

**JavaScript** (original):
```powershell
npx playwright test --config playwright.config.js
```

**Python** (rewrite, identical coverage):
```powershell
C:\Python314\python.exe -m pytest tests/test_ui.py -v
# or just: pytest tests/test_ui.py -v   (if Python 3.14 is on PATH)
```

One-time Python setup (only needed once per machine):
```powershell
C:\Python314\python.exe -m pip install pytest pytest-playwright
C:\Python314\python.exe -m playwright install chromium
```

**What tests cover**

| Group | What is checked |
|-------|----------------|
| Home page | navbar, hero banner, slogan animation, background, footer, intro strip, posts hidden |
| Sub-pages | navbar + banner + footer on Archives, Categories, Tags, About, Projects; no intro strip leaking |
| About page | `#board` wrapper present, `.bio-section` blocks rendered |
| Tags — 3D cloud | canvas exists inside `#board`, visible with size >100 px, flat cloud hidden |
| Post rendering | sample posts have `#board` wrapper and at least one link in content |
| Internal links | every `/hexo-blog/…` href on 6 key pages resolves (non-404) |
| Permalink path-match | static check: permalink depth == file depth → value must match (catches typos like `/dev1/`) |
| Permalink URL resolve | every MD file with a static `permalink:` returns non-404 from the dev server |

### Regenerate static files without serving

```powershell
npx hexo generate --config "_config.yml,_config.fluid.yml"
# output → public/
```

### Check post layout issues

```powershell
node tools/check-layouts.js
```

Finds any `_posts/` file with `layout: page` (renders without board wrapper — a known Hexo/Fluid gotcha).

---

## Deploy to GitHub Pages — when you have the token

### 1. Get a GitHub Personal Access Token

GitHub → **Settings → Developer settings → Personal access tokens → Tokens (classic)**

Required scope: `repo` (full access)

Copy the token — it looks like `ghp_xxxxxxxxxxxxxxxxxxxx`.

### 2. Set the token in PowerShell (session only, never saved to disk)

```powershell
$env:GITHUB_TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxx"
```

### 3. Build and deploy

```powershell
cd D:\trash\claude_store\my_blog
hexo clean
hexo generate --config "_config.yml,_config.fluid.yml"
hexo deploy  --config "_config.yml,_config.fluid.yml"
```

Or in one step:
```powershell
hexo generate --deploy --config "_config.yml,_config.fluid.yml"
```

The deployer pushes the generated `public/` folder to the `master` branch of `github.com/ooge0/hexo-blog`.
Source files stay local — only the built HTML/CSS/JS goes to GitHub.

### 4. One-time GitHub Pages check (first deploy only)

Go to: `https://github.com/ooge0/hexo-blog` → **Settings → Pages**

Confirm:
- **Source**: Deploy from a branch
- **Branch**: `master` / `/ (root)`

### 5. Verify

After deploy completes, open: **https://ooge0.github.io/hexo-blog/**

---

## Project structure

```
source/
  _posts/              — all blog posts, organised by topic (layout: post)
  about-me/            — About page (standalone, layout: page)
  projects/            — Projects page
  start-here/          — Start Here page
  arcade/              — hidden easter egg Breakout game (/arcade/)
  css/custom.css       — Fluid theme overrides (colors, layout, intro strip)
  js/                  — static JS assets served with the site

scripts/               — Hexo generator scripts (run at build time)
  home-intro.js        — injects intro strip on home, hides post list & paginator
  tagcloud-3d.js       — 3D rotating tag cloud on /tags/ (custom canvas, no CDN)

tools/
  check-layouts.js     — scans _posts/ for layout: page (bug detector)

tests/
  ui.spec.js           — Playwright UI tests (37 tests)
```

### Post organisation — `source/_posts/`

Posts are filed by topic. URL = `/hexo-blog/<folder>/<slug>/`, e.g.
`_posts/qa/rest_api_testing_improvements.md` → `/hexo-blog/qa/rest_api_testing_improvements/`

| Folder | Content |
|--------|---------|
| `ai/` | AI/ML umbrella — LLMs, NLP, NNs, prompt eng, GANs |
| `ai/llm/` | LLM-specific: parameters, GPT2, BERT, BART, context |
| `ai/nlp/` | NLP tasks, sentiment analysis, text classification |
| `ai/ml/` | Machine learning techniques, fine-tuning, frameworks |
| `ai/nn/` | Neural network architectures and glossary |
| `ai/prompt/engineering/` | Prompt engineering guides and tasks |
| `qa/` | QA engineering: API testing, test design, checklists |
| `dev/side/` | Dev tools: Git, Python, Kafka, Postman, Unix |
| `devops/` | SSH, remote access, server config |
| `data/` | Data mining, visualization (Bokeh, Plotly) |
| `databases/` | SQL tutorials |
| `notes/` | Personal notes, tools, books, movies |
| `tutorials/` | Hexo setup guides, Markdown tips |
| `my_contribution/` | Portfolio: examples, tools, GitHub projects |
| `linguistic/` | Linguistics basics, text coherence |
| `psy/` | Psychology, emotions, CFA |
| `algorithms/` | Top 100 AI algorithms |
| `ml/` | Standalone ML posts |
| `resources/` | Global platforms, reference links |
| `other/` | Mixed: Excel, magnetic fields |
| `fun/` | ASCII art |

**Rules when adding a post:**
- Place the file in the matching topic folder (create new folder if needed)
- Front matter must include `layout: post` and `permalink: /<folder>/<slug>/`
- Run `node tools/check-layouts.js` to verify no `layout: page` sneaked in
- Run tests before deploy: `npx playwright test --config playwright.config.js`
