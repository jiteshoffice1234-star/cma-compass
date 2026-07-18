export default function confetti() {
  if (typeof document === 'undefined') return;
  const colors = ['#3B82F6', '#8B5CF6', '#FBBF24', '#22C55E', '#EF4444'];
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);
  const count = 120;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = 6 + Math.random() * 8;
    p.style.position = 'absolute';
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = '50%';
    p.style.top = '40%';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    const angle = Math.random() * Math.PI * 2;
    const velocity = 120 + Math.random() * 260;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity - 120;
    const dur = 900 + Math.random() * 700;
    p.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy + 600}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ],
      { duration: dur, easing: 'cubic-bezier(.2,.7,.3,1)' }
    );
    container.appendChild(p);
  }
  setTimeout(() => container.remove(), 1800);
}
