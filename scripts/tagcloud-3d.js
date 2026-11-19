'use strict';

// 1. CSS — hide flat cloud, style the canvas wrap (tags page only)
hexo.extend.injector.register('head_end', `
<style>
.tagcloud                { display: none !important; }
#tagcloud-wrap           { margin: 20px 0 8px; display: flex; justify-content: center; }
#tagcloud-canvas         { cursor: grab; max-width: 100%; display: block; }
#tagcloud-canvas:active  { cursor: grabbing; }
</style>
`, 'tags');

// 2. Canvas HTML — inject INSIDE #board via HTML filter, before the flat .tagcloud
hexo.extend.filter.register('after_render:html', function (str, data) {
  if (!data || data.path !== 'tags/index.html') return str;

  const canvas = `
<div id="tagcloud-wrap">
  <canvas id="tagcloud-canvas" width="560" height="440"></canvas>
</div>`;

  const marker = '<div class="text-center tagcloud">';
  const idx = str.indexOf(marker);
  if (idx === -1) return str;
  return str.slice(0, idx) + canvas + str.slice(idx);
}, 10);

// 3. Custom 3D sphere tag cloud — zero dependencies
hexo.extend.injector.register('body_end', `
<script>
(function () {
  var canvas = document.getElementById('tagcloud-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  /* ── Collect tags from the flat cloud ── */
  var links = Array.from(document.querySelectorAll('.tagcloud a'));
  if (links.length === 0) return;

  var isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  var W = canvas.width, H = canvas.height, R = Math.min(W, H) * 0.38;

  /* ── Distribute tags on sphere (Fibonacci lattice) ── */
  var n = links.length;
  var tags = links.map(function (a, i) {
    var fs = parseFloat(a.style.fontSize) || 14;
    var weight = (fs - 10) / 20; // 0..1
    var phi = Math.acos(1 - 2 * (i + 0.5) / n);
    var theta = Math.PI * (1 + Math.sqrt(5)) * i;
    return {
      text: a.textContent.trim(),
      href: a.href,
      weight: weight,
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    };
  });

  /* ── Rotation state ── */
  var rotX = 0.0003, rotY = 0.0006;
  var mx = 0, my = 0, dragging = false, lastX, lastY;

  /* ── Mouse / touch drag ── */
  canvas.addEventListener('mousedown', function (e) {
    dragging = true; lastX = e.clientX; lastY = e.clientY;
  });
  window.addEventListener('mouseup',   function () { dragging = false; });
  window.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - lastX, dy = e.clientY - lastY;
    rotY = dx * 0.0012; rotX = dy * 0.0012;
    lastX = e.clientX; lastY = e.clientY;
  });
  canvas.addEventListener('touchstart', function (e) {
    dragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchend',   function () { dragging = false; });
  window.addEventListener('touchmove',  function (e) {
    if (!dragging) return;
    var dx = e.touches[0].clientX - lastX, dy = e.touches[0].clientY - lastY;
    rotY = dx * 0.0012; rotX = dy * 0.0012;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
  }, { passive: true });

  /* ── Click detection ── */
  canvas.addEventListener('click', function (e) {
    var rect = canvas.getBoundingClientRect();
    var cx = (e.clientX - rect.left) * (W / rect.width);
    var cy = (e.clientY - rect.top)  * (H / rect.height);
    var hit = null, bestZ = -Infinity;
    tags.forEach(function (t) {
      var dx = t.px - cx, dy = t.py - cy;
      if (Math.sqrt(dx*dx + dy*dy) < 36 && t.pz > bestZ) { hit = t; bestZ = t.pz; }
    });
    if (hit) window.open(hit.href, '_self');
  });

  /* ── Rotate a point around X and Y axes ── */
  function rotate(tag) {
    var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    var y1 = tag.y * cosX - tag.z * sinX;
    var z1 = tag.y * sinX + tag.z * cosX;
    var x2 = tag.x * cosY + z1 * sinY;
    var z2 = -tag.x * sinY + z1 * cosY;
    tag.x = x2; tag.y = y1; tag.z = z2;
  }

  /* ── Draw frame ── */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Always nudge, slow down on release
    if (!dragging) { rotX *= 0.95; rotY *= 0.95; }
    // Minimum auto-spin
    if (Math.abs(rotY) < 0.0004) rotY = 0.0004;
    if (Math.abs(rotX) < 0.00015) rotX = 0.00015;

    tags.forEach(rotate);

    // Sort back-to-front
    var sorted = tags.slice().sort(function (a, b) { return a.z - b.z; });

    sorted.forEach(function (t) {
      var depth = (t.z + 1) / 2;          // 0..1
      var scale = 0.55 + depth * 0.6;
      var alpha = 0.25 + depth * 0.75;
      var size  = Math.round((11 + t.weight * 10) * scale);

      // Project to 2D
      t.px = W / 2 + t.x * R;
      t.py = H / 2 + t.y * R;
      t.pz = t.z;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.font = 'bold ' + size + 'px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      var base = isDark ? [99, 179, 237] : [43, 108, 176];
      var r = base[0], g = base[1], b = base[2];
      ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      ctx.fillText(t.text, t.px, t.py);
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  draw();
  canvas.style.visibility = 'visible';
}());
</script>
`, 'tags');
