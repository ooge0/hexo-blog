'use strict';

// Hide post list and pagination on home page — intro-only landing.
hexo.extend.injector.register('head_end', `
<style>
.index-card, .paginator, .pagination, nav.pagination { display: none !important; }
</style>
`, 'home');

// Server-side HTML injection: insert home intro before the first post card.
hexo.extend.filter.register('after_render:html', function(str, data) {
  if (!data || (data.path !== 'index.html' && data.path !== '')) {
    return str;
  }

  const root = hexo.config.root || '/';

  const introHtml = `
<div class="row mx-auto" style="margin-bottom:20px;">
  <div class="col-12 col-md-10 mx-auto">
    <div class="home-intro">
      <p class="home-intro__lead">
        I&#8217;m Roman &#8212; Senior QA Engineer with 10&#43; years in testing, automation, and AI evaluation.
        This blog is my personal lab: notes from ETRM systems testing, Python automation experiments, LLM research,
        and tools I built along the way. Written from practice, not theory.
      </p>
      <div class="home-intro__links">
        <a href="${root}start-here/">&rarr; Start Here</a>
        <a href="${root}projects/">&rarr; Projects</a>
        <a href="${root}about-me/">&rarr; About</a>
      </div>
    </div>
  </div>
</div>
`;

  const marker = '<div class="row mx-auto index-card">';
  const idx = str.indexOf(marker);
  if (idx !== -1) {
    return str.slice(0, idx) + introHtml + str.slice(idx);
  }
  return str;
}, 10);
