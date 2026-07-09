import { useEffect, useRef } from 'react';

export default function DragonParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 100 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const image = new Image();
    image.src = '/dragon_mask.png';

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      amplitudeX: number;
      amplitudeY: number;
      speed: number;

      constructor(x: number, y: number, color: string) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 1;
        this.color = color;
        // Unique oscillation amplitude and speed per particle for constant fluid motion
        this.amplitudeX = Math.random() * 10 + 2;
        this.amplitudeY = Math.random() * 15 + 5;
        this.speed = Math.random() * 0.002 + 0.001;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(globalOffsetX: number, globalOffsetY: number) {
        // Continuous fluid motion (sine wave based on time and unique particle properties)
        const time = Date.now() * this.speed;
        const breatheX = Math.sin(time + this.density) * this.amplitudeX;
        const breatheY = Math.cos(time + this.density) * this.amplitudeY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to base position + breathing offset + global wandering offset
          let targetX = this.baseX + breatheX + globalOffsetX;
          let targetY = this.baseY + breatheY + globalOffsetY;
          
          if (this.x !== targetX) {
            let dx = this.x - targetX;
            this.x -= dx / 20; // Slower return for smoother flow
          }
          if (this.y !== targetY) {
            let dy = this.y - targetY;
            this.y -= dy / 20;
          }
        }
      }
    }

    const init = () => {
      particlesArray = [];
      if (!ctx) return;
      
      // Calculate scaled image dimensions to fit well
      const maxSize = Math.min(canvas.width, canvas.height) * 0.8;
      const scale = Math.min(maxSize / image.width, maxSize / image.height);
      const scaledW = image.width * scale;
      const scaledH = image.height * scale;
      
      const offsetX = (canvas.width - scaledW) / 2;
      const offsetY = (canvas.height - scaledH) / 2;

      // Draw image to an offscreen canvas to get pixel data
      const offCanvas = document.createElement('canvas');
      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      offCtx.drawImage(image, offsetX, offsetY, scaledW, scaledH);
      const data = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;

      // Colors: Gold (for dragon) + Neon Cyan, Purple, Pink (for mountain / theme)
      const colors = ['#FFD700', '#B8860B', '#06b6d4', '#8b5cf6', '#ec4899', '#cbd5e1'];

      // Scan pixels with a step (determines density)
      const step = 4;
      for (let y = 0; y < offCanvas.height; y += step) {
        for (let x = 0; x < offCanvas.width; x += step) {
          const idx = (y * offCanvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const alpha = data[idx + 3];

          // If dark pixel (mask is black dragon on white bg, but generate_image might have off-white)
          // Wait, generate_image made a black silhouette on white bg.
          // Black = low r,g,b. Let's say if average is < 128
          if (alpha > 128 && (r + g + b) / 3 < 128) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            // Add some noise to position
            const noiseX = x + (Math.random() - 0.5) * step;
            const noiseY = y + (Math.random() - 0.5) * step;
            particlesArray.push(new Particle(noiseX, noiseY, color));
          }
        }
      }
    };

    image.onload = () => {
      init();
    };

    let animationFrameId: number;
    let timeAcc = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate global wandering offsets
      timeAcc += 0.003; // speed of wandering
      // Dragon drifts significantly horizontally and vertically in a smooth path
      const globalOffsetX = Math.sin(timeAcc) * (canvas.width * 0.15);
      const globalOffsetY = Math.cos(timeAcc * 0.8) * (canvas.height * 0.1);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update(globalOffsetX, globalOffsetY);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8
      }}
    />
  );
}
