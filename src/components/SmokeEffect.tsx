import { useEffect, useRef } from "react";

const SmokeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; life: number; maxLife: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = () => {
      const maxLife = 120 + Math.random() * 80;
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(0.4 + Math.random() * 0.8),
        radius: 30 + Math.random() * 60,
        opacity: 0,
        life: 0,
        maxLife,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (particles.length < 40 && Math.random() < 0.3) spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.05;
        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.3 ? progress / 0.3 * 0.25 : 0.25 * (1 - (progress - 0.3) / 0.7);
        p.radius += 0.3;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(120, 50, 180, ${p.opacity})`);
        grad.addColorStop(0.5, `rgba(80, 20, 140, ${p.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(40, 0, 80, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10"
    />
  );
};

export default SmokeEffect;
