"use client";
import { useEffect, useRef, useState } from "react";

export default function GasingGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState("Tap 5× untuk mengikat tali 🧵");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isTied = false;
    let isSpinning = false;
    let spinSpeed = 0;
    let angle = 0;
    let elapsed = 0;
    const spinDuration = 15000;
    const frameTime = 16;

    const bg = new Image();
    bg.src = "/gasing/background.jpg";
    const gasing = new Image();
    gasing.src = "/gasing/gasing.png";

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (bg.complete) ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      else {
        ctx.fillStyle = "#f8e0c0";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2 + 40);

      if (isSpinning) {
        elapsed += frameTime;
        angle += spinSpeed;
        const p = elapsed / spinDuration;
        if (p >= 1) {
          isSpinning = false;
          spinSpeed = 0;
          elapsed = 0;
          setStatus("🪀 Gasing berhenti 🎯");
          setProgress(0);
        } else {
          spinSpeed = 0.3 * (1 - p);
        }
      }

      ctx.rotate(angle);
      ctx.drawImage(gasing, -60, -60, 120, 120);
      ctx.restore();
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    // tap untuk mengikat
    canvas.addEventListener("click", () => {
      if (isSpinning) return;
      if (!isTied) {
        const newP = Math.min(progress + 20, 100);
        setProgress(newP);
        setStatus(`Mengikat tali... ${newP}%`);
        if (newP >= 100) {
          isTied = true;
          setStatus("Tali sudah diikat! Geser untuk melempar 🎯");
        }
      }
    });

    // swipe untuk melempar
    let startX: number | null = null;
    canvas.addEventListener("touchstart", e => (startX = e.touches[0].clientX));
    canvas.addEventListener("touchend", e => {
      if (!isTied) return;
      const endX = e.changedTouches[0].clientX;
      if (Math.abs(endX - (startX ?? endX)) > 40) {
        spinSpeed = 0.3;
        isSpinning = true;
        isTied = false;
        elapsed = 0;
        setStatus("🌀 Gasing berputar selama 15 detik!");
      }
    });
  }, [progress]);

  return (
    <div className="text-center mt-4">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="rounded-xl shadow-lg border bg-white"
      />
      <div className="w-48 mx-auto mt-3 h-3 bg-gray-200 rounded-lg overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 font-semibold text-gray-700">{status}</p>
      <p className="text-sm text-gray-500">
      </p>
    </div>
  );
}
