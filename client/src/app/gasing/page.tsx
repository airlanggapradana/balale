"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const GasingGame = dynamic(() => import("@/components/GasingGame"), { ssr: false });

export default function GasingPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Swipe kiri / kanan untuk flip
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => (touchStartX.current = e.touches[0].clientX);
    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStartX.current;
      const end = e.changedTouches[0].clientX;
      if (start === null) return;
      const diff = end - start;
      if (Math.abs(diff) > 80) setIsFlipped(diff < 0 ? true : false);
      touchStartX.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-orange-100 py-12 px-6 pt-28">
      {/* Judul Halaman */}
      <h1 className="fade-in text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 drop-shadow-sm">
        🪀 Gasing Tradisional Nusantara
      </h1>

      {/* Area Flip Card */}
      <div
        ref={sceneRef}
        className="relative mx-auto perspective-1000"
        style={{ maxWidth: "1000px" }}
      >
        <div
          className={`transition-transform duration-[900ms] transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          } relative w-full min-h-[620px]`}
        >
          {/* DEPAN - Materi Sejarah */}
          <section className="absolute inset-0 flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-8 md:p-12 backface-hidden">
            <div className="max-w-3xl text-center space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                📜 Sejarah Permainan Gasing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Gasing</strong> merupakan permainan tradisional yang telah dikenal
                sejak masa kerajaan di Nusantara. Gasing dimainkan dengan memutar benda
                berbentuk bulat berujung runcing menggunakan tali khusus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Umumnya terbuat dari kayu atau logam, permainan ini populer di berbagai
                daerah seperti Minangkabau, Bali, dan Sulawesi. Selain sebagai hiburan,
                gasing juga melambangkan ketangkasan dan kebersamaan masyarakat.
              </p>
            </div>

            <div className="my-6 fade-in">
              <Image
                src="/gasing/sejarah.jpg"
                alt="Gasing tradisional Indonesia"
                width={480}
                height={340}
                className="rounded-2xl shadow-lg border border-orange-200 object-cover"
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setIsFlipped(true)}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                🔄 Flip untuk Main
              </button>
              <p className="text-sm text-gray-500 italic">
                Geser <strong>kiri</strong> untuk main • Geser <strong>kanan</strong> untuk kembali
              </p>
              <Link
                href="/"
                className="text-orange-600 hover:text-orange-500 underline text-sm"
              >
                ⬅ Kembali ke Beranda
              </Link>
            </div>
          </section>

          {/* BELAKANG - Game */}
          <section className="absolute inset-0 flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-8 md:p-12 backface-hidden rotate-y-180">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">🎮 Mainkan Gasing</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Tap untuk ikat tali, lalu geser untuk melempar dan lihat gasing berputar!
              </p>
            </div>

            <GasingGame />

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => setIsFlipped(false)}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                ⬅ Kembali ke Materi
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg shadow-md transition-all text-center"
              >
                🏠 Beranda
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Style tambahan */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        /* Animasi Fade In */
        .fade-in {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
