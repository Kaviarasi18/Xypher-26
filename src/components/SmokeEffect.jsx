import { useEffect, useRef } from "react";






const SmokeEffect = ({ density = 60, heightClass = "h-80" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    const particles = [];

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * pixelRatio;
      canvas.height = canvas.offsetHeight * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const spawn = (x, y) => {
      const maxLife = 220 + Math.random() * 140;
      particles.push({
        x: x ?? Math.random() * w(),
        y: y ?? h() + 20,
        vx: (Math.random() - 0.5) * 0.75,
        vy: -(0.65 + Math.random() * 1.1),
        radius: 56 + Math.random() * 104,
        opacity: 0,
        life: 0,
        maxLife
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      ctx.globalCompositeOperation = "lighter";
      if (particles.length < density && Math.random() < 0.35) spawn();
      if (particles.length < density && Math.random() < 0.2) spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.04;
        const progress = p.life / p.maxLife;
        const maxOpacity = 0.18;
        p.opacity = progress < 0.25 ? (progress / 0.25) * maxOpacity : maxOpacity * (1 - (progress - 0.25) / 0.75);
        p.radius += 0.45;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(220, 190, 255, ${p.opacity})`);
        grad.addColorStop(0.2, `rgba(170, 130, 225, ${p.opacity * 0.75})`);
        grad.addColorStop(0.5, `rgba(110, 90, 180, ${p.opacity * 0.35})`);
        grad.addColorStop(1, `rgba(50, 40, 120, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
      ctx.globalCompositeOperation = "source-over";
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute bottom-0 left-0 w-full ${heightClass} pointer-events-none z-10`} />);


};

export default SmokeEffect;