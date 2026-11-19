---
title: "* * *"
layout: page
date: 2026-10-28
comments: false
---

<style>
#arc-wrap { display:flex; flex-direction:column; align-items:center; padding:20px 0 40px; font-family:monospace; }
#arc-hud  { width:480px; max-width:calc(100vw - 32px); display:flex; justify-content:space-between; font-size:.8rem; letter-spacing:.08em; color:var(--sec-font-color,#888); margin-bottom:8px; }
#arc-cv   { display:block; border:1px solid rgba(255,255,255,.12); border-radius:4px; max-width:calc(100vw - 32px); cursor:none; }
#arc-msg  { margin-top:12px; font-size:.75rem; color:var(--sec-font-color,#888); letter-spacing:.06em; text-align:center; }
</style>

<div id="arc-wrap">
  <div id="arc-hud">
    <span id="arc-score">SCORE 0</span>
    <span id="arc-lives">♥♥♥</span>
    <span id="arc-level">LVL 1</span>
  </div>
  <canvas id="arc-cv" width="480" height="500"></canvas>
  <div id="arc-msg">SPACE or click to start &nbsp;·&nbsp; ← → or mouse to move</div>
</div>

<script>
(function () {
  var cv   = document.getElementById('arc-cv');
  var cx   = cv.getContext('2d');
  var W    = cv.width;   // 480
  var H    = cv.height;  // 500

  var scoreEl = document.getElementById('arc-score');
  var livesEl = document.getElementById('arc-lives');
  var levelEl = document.getElementById('arc-level');
  var msgEl   = document.getElementById('arc-msg');

  // --- constants ---
  var PW = 80, PH = 10, PY = H - 28;   // paddle
  var BR = 6;                            // ball radius
  var COLS = 10, ROWS = 5;
  var BW = W / COLS, BH = 18, BTOP = 44;
  var COLORS = ['#e53e3e','#dd6b20','#d69e2e','#38a169','#3182ce'];

  // --- game state ---
  var score, lives, level, padX, ball, bricks, phase, raf;
  var leftKey = false, rightKey = false;

  function hud() {
    scoreEl.textContent = 'SCORE ' + score;
    livesEl.textContent = '♥'.repeat(lives);
    levelEl.textContent = 'LVL ' + level;
  }

  function mkBricks() {
    bricks = [];
    var rows = Math.min(ROWS + level - 1, 8);
    for (var r = 0; r < rows; r++)
      for (var c = 0; c < COLS; c++)
        bricks.push({ r:r, c:c, hp: r < 2 ? 2 : 1 });
  }

  function launch() {
    var spd = 2.2 + (level - 1) * 0.25;
    var ang = -Math.PI / 2 + (Math.random() - 0.5) * 0.8;
    ball.x  = padX + PW / 2;
    ball.y  = PY - BR - 2;
    ball.vx = spd * Math.cos(ang);
    ball.vy = spd * Math.sin(ang);   // negative = upward
  }

  function newGame() {
    score = 0; lives = 3; level = 1;
    padX = W / 2 - PW / 2;
    ball = { x: W/2, y: PY - BR - 2, vx: 0, vy: 0 };
    mkBricks();
    phase = 'idle';
    hud();
    render();
    msgEl.textContent = 'SPACE or click to start · ← → or mouse to move';
  }

  function startPlay() {
    phase = 'playing';
    launch();
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  function loop() {
    update();
    render();
    if (phase === 'playing') raf = requestAnimationFrame(loop);
  }

  function update() {
    // paddle movement
    if (leftKey)  padX = Math.max(0, padX - 6);
    if (rightKey) padX = Math.min(W - PW, padX + 6);

    // ball movement
    ball.x += ball.vx;
    ball.y += ball.vy;

    // wall bounces
    if (ball.x - BR < 0)    { ball.x = BR;     ball.vx =  Math.abs(ball.vx); }
    if (ball.x + BR > W)    { ball.x = W - BR;  ball.vx = -Math.abs(ball.vx); }
    if (ball.y - BR < 0)    { ball.y = BR;      ball.vy =  Math.abs(ball.vy); }

    // paddle hit (only when ball moving downward)
    if (ball.vy > 0
        && ball.y + BR >= PY
        && ball.y - BR <= PY + PH
        && ball.x + BR >= padX
        && ball.x - BR <= padX + PW) {
      var rel = (ball.x - (padX + PW / 2)) / (PW / 2);   // -1 … +1
      var ang = rel * (Math.PI / 3);                        // max 60°
      var spd = Math.hypot(ball.vx, ball.vy);
      ball.vx = spd * Math.sin(ang);
      ball.vy = -Math.abs(spd * Math.cos(ang));
      ball.y  = PY - BR - 1;
    }

    // brick hits
    for (var i = 0; i < bricks.length; i++) {
      var b = bricks[i];
      if (b.hp <= 0) continue;
      var bx = b.c * BW, by = BTOP + b.r * BH;
      if (ball.x + BR > bx && ball.x - BR < bx + BW &&
          ball.y + BR > by && ball.y - BR < by + BH) {
        b.hp--;
        score += b.hp === 0 ? 20 : 5;
        hud();
        var ox = Math.min(ball.x + BR - bx, bx + BW - (ball.x - BR));
        var oy = Math.min(ball.y + BR - by, by + BH - (ball.y - BR));
        if (ox < oy) ball.vx = -ball.vx; else ball.vy = -ball.vy;
        break;   // one brick per frame avoids tunneling
      }
    }

    // all bricks cleared → next level
    if (bricks.every(function(b){ return b.hp <= 0; })) {
      level++;
      mkBricks();
      hud();
      launch();
      return;
    }

    // ball lost
    if (ball.y - BR > H) {
      lives--;
      hud();
      if (lives <= 0) {
        phase = 'dead';
        msgEl.textContent = 'GAME OVER · SPACE or click to restart';
        return;
      }
      launch();
    }
  }

  function render() {
    // background
    cx.fillStyle = '#0d1117';
    cx.fillRect(0, 0, W, H);

    // bricks
    for (var i = 0; i < bricks.length; i++) {
      var b = bricks[i];
      if (b.hp <= 0) continue;
      cx.fillStyle = b.hp > 1 ? '#e2e8f0' : COLORS[b.r % COLORS.length];
      cx.fillRect(b.c * BW + 1, BTOP + b.r * BH + 1, BW - 2, BH - 2);
    }

    // paddle
    cx.fillStyle = '#4299e1';
    cx.fillRect(padX, PY, PW, PH);

    // ball
    cx.fillStyle = '#ffffff';
    cx.beginPath();
    cx.arc(ball.x, ball.y, BR, 0, Math.PI * 2);
    cx.fill();

    // overlay for idle / dead
    if (phase === 'idle') {
      overlay('BREAKOUT', 'SPACE or click to start');
    } else if (phase === 'dead') {
      overlay('GAME OVER', 'SPACE or click to restart');
    }
  }

  function overlay(title, sub) {
    cx.fillStyle = 'rgba(0,0,0,.65)';
    cx.fillRect(W/2 - 155, H/2 - 34, 310, 68);
    cx.textAlign = 'center';
    cx.fillStyle = '#ffffff';
    cx.font = 'bold 22px monospace';
    cx.fillText(title, W/2, H/2 + 2);
    cx.fillStyle = '#94a3b8';
    cx.font = '13px monospace';
    cx.fillText(sub, W/2, H/2 + 24);
    cx.textAlign = 'left';
  }

  // --- controls ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft'  || e.key === 'a') { leftKey  = true; e.preventDefault(); }
    if (e.key === 'ArrowRight' || e.key === 'd') { rightKey = true; e.preventDefault(); }
    if (e.key === ' ') {
      e.preventDefault();
      if (phase === 'idle') { startPlay(); }
      else if (phase === 'dead') { newGame(); startPlay(); }
    }
  });
  document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft'  || e.key === 'a') leftKey  = false;
    if (e.key === 'ArrowRight' || e.key === 'd') rightKey = false;
  });

  // mouse/touch: move paddle to follow pointer
  cv.addEventListener('mousemove', function(e) {
    var rect = cv.getBoundingClientRect();
    var scaleX = W / rect.width;
    var mx = (e.clientX - rect.left) * scaleX;
    padX = Math.max(0, Math.min(W - PW, mx - PW / 2));
  });

  cv.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var rect = cv.getBoundingClientRect();
    var scaleX = W / rect.width;
    var mx = (e.touches[0].clientX - rect.left) * scaleX;
    padX = Math.max(0, Math.min(W - PW, mx - PW / 2));
  }, { passive: false });

  cv.addEventListener('click', function() {
    if (phase === 'idle') { startPlay(); }
    else if (phase === 'dead') { newGame(); startPlay(); }
  });

  // --- init ---
  newGame();
}());
</script>
