import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Candle {
      x: number;
      open: number;
      close: number;
      high: number;
      low: number;
      color: string;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.open = Math.random() * 100 + 50;
        this.close = this.open + (Math.random() - 0.5) * 40;
        this.high = Math.max(this.open, this.close) + Math.random() * 20;
        this.low = Math.min(this.open, this.close) - Math.random() * 20;
        this.color = this.close > this.open ? "#16a34a" : "#ef4444";
        this.speed = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x -= this.speed;
        if (this.x < -50) {
          this.x = canvas!.width + 50;
          this.open = Math.random() * 100 + 50;
          this.close = this.open + (Math.random() - 0.5) * 40;
          this.high = Math.max(this.open, this.close) + Math.random() * 20;
          this.low = Math.min(this.open, this.close) - Math.random() * 20;
          this.color = this.close > this.open ? "#16a34a" : "#ef4444";
        }
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;

        // Draw wick
        ctx.beginPath();
        ctx.moveTo(this.x, canvas!.height - this.high);
        ctx.lineTo(this.x, canvas!.height - this.low);
        ctx.stroke();

        // Draw body
        ctx.fillStyle = this.color;
        const bodyHeight = Math.abs(this.close - this.open);
        const bodyY = Math.min(this.open, this.close);
        ctx.fillRect(this.x - 5, canvas!.height - bodyY - bodyHeight, 10, bodyHeight);
      }
    }

    const candles: Candle[] = [];
    for (let i = 0; i < 30; i++) {
      candles.push(new Candle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      candles.forEach((candle) => {
        candle.update();
        candle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
};

export default AnimatedBackground;
