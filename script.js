/* ═══════════════════════════════════════════════
   WEDDING INVITATION — JAVASCRIPT
   Rushikesh & Prajakta · 19 July 2026
═══════════════════════════════════════════════ */

/* ───────────────────────────────────────────────
   1. ROSE PETAL PARTICLE ENGINE
─────────────────────────────────────────────── */
(function initPetals() {
    const container = document.getElementById('petals-container');
    if (!container) return;
    const types = ['petal-pink', 'petal-pink', 'petal-pink', 'petal-light', 'petal-light', 'petal-white', 'petal-leaf'];
    const total = 40;

    for (let i = 0; i < total; i++) {
        const p = document.createElement('div');
        const type = types[Math.floor(Math.random() * types.length)];
        p.className = `petal ${type}`;

        const left = Math.random() * 100;
        const delay = Math.random() * 16;
        const duration = 8 + Math.random() * 12;
        const w = 10 + Math.random() * 14;
        const h = w * (0.5 + Math.random() * 0.4);
        const useAlt = Math.random() > 0.5;

        p.style.cssText = `
      left: ${left}%;
      width: ${w}px;
      height: ${h}px;
      animation-name: ${useAlt ? 'petalFallAlt' : 'petalFall'};
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;
        container.appendChild(p);
    }
})();

/* ───────────────────────────────────────────────
   2. CHERRY BLOSSOM CORNER BRANCHES (inline SVG)
─────────────────────────────────────────────── */
(function injectBlossom() {
    const blossomSVG = `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" width="220" height="220">
    <path d="M10 210 Q 60 160 90 120 Q 110 95 130 70 Q 155 40 180 15"
          stroke="#8A7A6A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M90 120 Q 70 100 55 80" stroke="#8A7A6A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M130 70 Q 150 65 165 50" stroke="#8A7A6A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M60 155 Q 40 140 30 125" stroke="#8A7A6A" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <ellipse cx="62" cy="78" rx="9" ry="5" fill="#7BAA60" opacity="0.82" transform="rotate(-35,62,78)"/>
    <ellipse cx="50" cy="82" rx="7" ry="4" fill="#6A9850" opacity="0.68" transform="rotate(-55,50,82)"/>
    <ellipse cx="168" cy="48" rx="8" ry="4" fill="#7BAA60" opacity="0.78" transform="rotate(-20,168,48)"/>
    <g transform="translate(58,73)">
      <circle cx="0" cy="-8" r="5.5" fill="#F9C0CC" opacity="0.92"/>
      <circle cx="7.6" cy="-2.5" r="5.5" fill="#F5B0BE" opacity="0.88"/>
      <circle cx="4.7" cy="6.3" r="5.5" fill="#FAC8D4" opacity="0.9"/>
      <circle cx="-4.7" cy="6.3" r="5.5" fill="#F9BCC8" opacity="0.88"/>
      <circle cx="-7.6" cy="-2.5" r="5.5" fill="#F6B8C4" opacity="0.9"/>
      <circle cx="0" cy="0" r="3" fill="#FFE4A0" opacity="0.95"/>
    </g>
    <g transform="translate(165,45) scale(0.8)">
      <circle cx="0" cy="-8" r="5.5" fill="#FCE0E8" opacity="0.88"/>
      <circle cx="7.6" cy="-2.5" r="5.5" fill="#F9D0DC" opacity="0.84"/>
      <circle cx="4.7" cy="6.3" r="5.5" fill="#FCE4EC" opacity="0.86"/>
      <circle cx="-4.7" cy="6.3" r="5.5" fill="#FAD8E4" opacity="0.84"/>
      <circle cx="-7.6" cy="-2.5" r="5.5" fill="#FAD4E0" opacity="0.86"/>
      <circle cx="0" cy="0" r="3" fill="#FFE4A0" opacity="0.95"/>
    </g>
    <g transform="translate(130,65) scale(0.75)">
      <circle cx="0" cy="-8" r="5.5" fill="#F9C0CC" opacity="0.9"/>
      <circle cx="7.6" cy="-2.5" r="5.5" fill="#F5B0BE" opacity="0.86"/>
      <circle cx="4.7" cy="6.3" r="5.5" fill="#FAC8D4" opacity="0.88"/>
      <circle cx="-4.7" cy="6.3" r="5.5" fill="#F9BCC8" opacity="0.86"/>
      <circle cx="-7.6" cy="-2.5" r="5.5" fill="#F6B8C4" opacity="0.88"/>
      <circle cx="0" cy="0" r="3" fill="#FFE4A0" opacity="0.95"/>
    </g>
    <g transform="translate(53,78) scale(0.65)">
      <circle cx="0" cy="-8" r="5.5" fill="#FDE0EA" opacity="0.85"/>
      <circle cx="7.6" cy="-2.5" r="5.5" fill="#FAD4E2" opacity="0.82"/>
      <circle cx="4.7" cy="6.3" r="5.5" fill="#FDDFEA" opacity="0.84"/>
      <circle cx="-4.7" cy="6.3" r="5.5" fill="#FAD6E4" opacity="0.82"/>
      <circle cx="-7.6" cy="-2.5" r="5.5" fill="#FAD0E0" opacity="0.84"/>
      <circle cx="0" cy="0" r="2.5" fill="#FFE4A0" opacity="0.95"/>
    </g>
    <g transform="translate(96,115) scale(0.7)">
      <circle cx="0" cy="-8" r="5.5" fill="#F9C4CE" opacity="0.88"/>
      <circle cx="7.6" cy="-2.5" r="5.5" fill="#F5B4C0" opacity="0.84"/>
      <circle cx="4.7" cy="6.3" r="5.5" fill="#FAC8D4" opacity="0.86"/>
      <circle cx="-4.7" cy="6.3" r="5.5" fill="#F9BCC8" opacity="0.84"/>
      <circle cx="-7.6" cy="-2.5" r="5.5" fill="#F6B8C4" opacity="0.86"/>
      <circle cx="0" cy="0" r="2.5" fill="#FFE4A0" opacity="0.95"/>
    </g>
    <ellipse cx="110" cy="90" rx="5" ry="3" fill="#F9C4CC" opacity="0.65" transform="rotate(-40,110,90)"/>
    <ellipse cx="80" cy="130" rx="4" ry="2.5" fill="#F9BCC8" opacity="0.58" transform="rotate(20,80,130)"/>
    <ellipse cx="145" cy="55" rx="4" ry="2.5" fill="#FDE0EA" opacity="0.62" transform="rotate(-60,145,55)"/>
    <ellipse cx="35" cy="125" rx="4" ry="2" fill="#F9C4CC" opacity="0.52" transform="rotate(15,35,125)"/>
  </svg>`;

    document.querySelectorAll('.corner-blossom').forEach(el => {
        el.innerHTML = blossomSVG;
    });
})();

/* ───────────────────────────────────────────────
   3. ENVELOPE OPEN TRANSITION
─────────────────────────────────────────────── */
(function initEnvelope() {
    const screen = document.getElementById('envelope-screen');
    const envelope = document.getElementById('envelope');
    const waxSeal = document.getElementById('wax-seal');
    const invitation = document.getElementById('invitation');
    const audioBtn = document.getElementById('audio-btn');
    const audio = document.getElementById('bg-audio');
    let opened = false;

    // ── 3D PARALLAX HOVER EFFECT ──
    document.addEventListener('mousemove', (e) => {
        if (opened) return;
        const rect = envelope.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate tilt angles based on mouse position
        const maxRotate = 25; // max degrees of rotation
        const rotateX = -((e.clientY - centerY) / (window.innerHeight / 2)) * maxRotate;
        const rotateY = ((e.clientX - centerX) / (window.innerWidth / 2)) * maxRotate;

        envelope.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    document.addEventListener('mouseleave', () => {
        if (!opened) {
            envelope.style.transform = 'rotateX(15deg) rotateY(-5deg)';
        }
    });

    function openEnvelope() {
        if (opened) return;
        opened = true;
        screen.classList.add('opening');

        // Quick scale bounce
        envelope.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
        envelope.style.transform = 'scale(1.12)';

        setTimeout(() => {
            screen.classList.add('gone');
        }, 450);

        setTimeout(() => {
            screen.style.display = 'none';
            invitation.classList.remove('hidden');
            document.body.classList.add('invitation-open');
            audioBtn.classList.remove('hidden');
            triggerReveal();
            audio.volume = 0.35;
            audio.play().catch(() => { });
        }, 1100);
    }

    waxSeal.addEventListener('click', openEnvelope);
    envelope.addEventListener('click', openEnvelope);
    envelope.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') openEnvelope();
    });
})();

/* ───────────────────────────────────────────────
   4. AUDIO TOGGLE
─────────────────────────────────────────────── */
(function initAudio() {
    const btn = document.getElementById('audio-btn');
    const icon = document.getElementById('audio-icon');
    const audio = document.getElementById('bg-audio');
    let muted = false;

    btn.addEventListener('click', () => {
        muted = !muted;
        audio.muted = muted;
        icon.textContent = muted ? '🔇' : '🔊';
    });
})();

/* ───────────────────────────────────────────────
   5. SCROLL REVEAL
─────────────────────────────────────────────── */
function triggerReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ───────────────────────────────────────────────
   6. SCRATCH CARD
─────────────────────────────────────────────── */
(function initScratchCard() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let revealedPx = 0;
    let scratchDone = false;
    const totalPx = canvas.width * canvas.height;

    function drawGoldFoil() {
        const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        g.addColorStop(0.0, '#D4AE6E');
        g.addColorStop(0.2, '#C09B5A');
        g.addColorStop(0.4, '#E8C878');
        g.addColorStop(0.6, '#B8882E');
        g.addColorStop(0.8, '#D4AE6E');
        g.addColorStop(1.0, '#C09B5A');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = 'rgba(255,255,255,0.07)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < 80; i++) {
            const y = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y + (Math.random() - 0.5) * 8);
            ctx.stroke();
        }
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '600 12px "Cinzel",serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✦  SCRATCH TO REVEAL  ✦', canvas.width / 2, canvas.height / 2);
    }

    let lastX = null, lastY = null;

    function scratch(x, y) {
        if (scratchDone) return;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 60;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        if (lastX !== null && lastY !== null) {
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            const dist = Math.hypot(x - lastX, y - lastY);
            revealedPx += dist * 60; // rough area heuristic
        } else {
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
            revealedPx += Math.PI * 30 * 30;
        }
        lastX = x;
        lastY = y;

        if (revealedPx / totalPx > 0.55) {
            scratchDone = true;
            setTimeout(() => {
                canvas.style.transition = 'opacity 0.7s ease';
                canvas.style.opacity = '0';
                setTimeout(() => {
                    canvas.style.display = 'none';
                    fireConfettiPopper(); // 🎉 PARTY TIME!
                }, 700);
            }, 100);
        }
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const sx = canvas.width / rect.width;
        const sy = canvas.height / rect.height;
        if (e.touches) return { x: (e.touches[0].clientX - rect.left) * sx, y: (e.touches[0].clientY - rect.top) * sy };
        return { x: (e.clientX - rect.left) * sx, y: (e.clientY - rect.top) * sy };
    }

    // Reset stroke on input starts
    function startScratch(e) {
        if (e.type === 'touchstart') e.preventDefault();
        isDrawing = true;
        lastX = null;
        lastY = null;
        const p = getPos(e);
        scratch(p.x, p.y);
    }

    function moveScratch(e) {
        if (e.type === 'touchmove') e.preventDefault();
        if (!isDrawing) return;
        const p = getPos(e);
        scratch(p.x, p.y);
    }

    function endScratch() {
        isDrawing = false;
        lastX = null;
        lastY = null;
    }

    canvas.addEventListener('mousedown', startScratch);
    canvas.addEventListener('mousemove', moveScratch);
    canvas.addEventListener('mouseup', endScratch);
    canvas.addEventListener('mouseleave', endScratch);
    canvas.addEventListener('touchstart', startScratch, { passive: false });
    canvas.addEventListener('touchmove', moveScratch, { passive: false });
    canvas.addEventListener('touchend', endScratch);

    new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { drawGoldFoil(); } });
    }, { threshold: 0.3 }).observe(canvas);
})();

/* ───────────────────────────────────────────────
   7. PREMIUM FLOWER POPPER 🎉
─────────────────────────────────────────────── */
function fireConfettiPopper() {
    const cvs = document.createElement('canvas');
    cvs.style.cssText = `
        position: fixed; inset: 0; width: 100%; height: 100%;
        pointer-events: none; z-index: 9999;
    `;
    document.body.appendChild(cvs);
    const ctx = cvs.getContext('2d');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    // Load high quality flower images
    const imgLeft = new Image();
    imgLeft.src = 'assets/lily_left_transparent.png';
    const imgRight = new Image();
    imgRight.src = 'assets/lily_right_transparent.png';

    const scratchEl = document.getElementById('scratch-section');
    const rect = scratchEl ? scratchEl.getBoundingClientRect() : { left: cvs.width / 2, top: cvs.height / 2, width: 0, height: 0 };
    const ox = rect.left + rect.width / 2;
    const oy = rect.top + rect.height / 2;

    // Less particles but higher quality visuals for smoothness
    const particles = Array.from({ length: 60 }, () => {
        const angle = (Math.random() * 360 - 180) * Math.PI / 180;
        const speed = 12 + Math.random() * 20;
        return {
            x: ox + (Math.random() - 0.5) * 40,
            y: oy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - (8 + Math.random() * 12),
            gravity: 0.3 + Math.random() * 0.3,
            alpha: 1,
            fade: 0.005 + Math.random() * 0.008,
            size: 40 + Math.random() * 60, // large elegant flowers
            img: Math.random() > 0.5 ? imgLeft : imgRight,
            spin: (Math.random() - 0.5) * 0.15,
            rot: Math.random() * Math.PI * 2,
        };
    });

    let alive = true;
    function animate() {
        if (!alive) return;
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        let anyAlive = false;

        particles.forEach(p => {
            if (p.alpha <= 0) return;
            anyAlive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.98; // smooth horizontal drag
            p.rot += p.spin;
            p.alpha -= p.fade;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);

            // Draw quality flower graphic safely
            if (p.img.complete && p.img.naturalWidth > 0) {
                ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
            }
            ctx.restore();
        });

        if (anyAlive) {
            requestAnimationFrame(animate);
        } else {
            alive = false;
            document.body.removeChild(cvs);
        }
    }

    // Wait for images to load before popping (super fast natively since already cached)
    let imagesLoaded = 0;
    const launch = () => {
        imagesLoaded++;
        if (imagesLoaded === 2) {
            animate();
            // Second burst
            setTimeout(() => {
                particles.slice(0, 25).forEach(p => {
                    p.alpha = 1;
                    const a = (Math.random() * 360) * Math.PI / 180;
                    const s = 14 + Math.random() * 14;
                    p.x = ox; p.y = oy;
                    p.vx = Math.cos(a) * s; p.vy = Math.sin(a) * s - 10;
                });
            }, 400);
        }
    };

    imgLeft.onload = launch;
    imgRight.onload = launch;

    // Fallback if cached immediately
    if (imgLeft.complete && imgRight.complete) {
        imagesLoaded = 2;
        animate();
    }
}
