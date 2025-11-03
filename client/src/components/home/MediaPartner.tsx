"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Logo = {
  src: string;
  alt: string;
};

const LOGOS: Logo[] = [
  { src: "/assets/images/logo/Media Partner/THE PATENT_page-0002.jpg", alt: "The Patent" },
  { src: "/assets/images/logo/Media Partner/THE PATENT_page-0002.jpg", alt: "The Patent" },
  { src: "/assets/images/logo/Media Partner/THE PATENT_page-0002.jpg", alt: "The Patent" },
  { src: "/assets/images/logo/Media Partner/THE PATENT_page-0002.jpg", alt: "The Patent" },
  { src: "/assets/images/logo/Media Partner/THE PATENT_page-0002.jpg", alt: "The Patent" },
  { src: "/assets/images/logo/Media Partner/THE PATENT_page-0002.jpg", alt: "The Patent" },
  // Tambahkan lagi logo bila perlu
];

function TrackItem({ logo }: { logo: Logo }) {
  return (
    <div className="mp-item">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={220}
        height={120}
        className="mp-img"
        sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
        priority
      />
    </div>
  );
}

export default function MediaPartner() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(28);
  const items = useMemo(() => [...LOGOS, ...LOGOS], []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const calc = () => {
      if (prefersReduced) {
        setDuration(0);
        return;
      }
      const totalWidth = el.scrollWidth / 2;
      const SPEED = 80; // px per detik
      const d = Math.max(10, totalWidth / SPEED);
      setDuration(d);
      el.style.setProperty("--marquee-dur", `${d}s`);
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);

    const t = setTimeout(calc, 300);
    const t2 = setTimeout(calc, 1000);

    return () => {
      ro.disconnect();
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative py-20 bg-[#1C2C4B] overflow-hidden">
      {/* Latar belakang gradasi & aksen blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111E34] via-[#1C2C4B] to-[#223A5C] opacity-95" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#C0974D]/20 blur-3xl rounded-full mix-blend-overlay" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#077377]/25 blur-3xl rounded-full mix-blend-overlay" />

      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#EEECE4]">
          Media Partner
        </h2>
        <p className="text-center text-[#EEECE4]/80 mt-2 max-w-2xl mx-auto">
          Kami berterima kasih kepada berbagai media yang turut mendukung misi Balale.id
          dalam menyebarkan semangat pelestarian budaya dan inovasi kreatif Indonesia.
        </p>

        <div className="mt-10 mp-wrapper group">
          <div ref={trackRef} className="mp-track" aria-hidden={duration === 0}>
            {items.map((logo, i) => (
              <TrackItem key={`${logo.src}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Wrapper: pusatkan track & beri efek fade */
        .mp-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          display: grid;
          place-items: center;
          height: 160px;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 1) 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 1) 90%,
            transparent 100%
          );
        }

        /* Track animasi logo */
        .mp-track {
          --gap: 48px;
          --marquee-dur: ${duration}s;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          animation: mp-scroll var(--marquee-dur) linear infinite;
        }

        .mp-wrapper:hover .mp-track {
          animation-play-state: paused;
        }

        /* Item logo */
        .mp-item {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          width: 220px;
          height: 120px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15) inset,
            0 8px 24px rgba(0, 0, 0, 0.25);
          transition: transform 300ms ease, box-shadow 300ms ease, background 300ms ease;
        }

        .mp-img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
          filter: grayscale(1) contrast(1) saturate(0.6);
          transition: transform 400ms ease, filter 400ms ease, opacity 300ms ease;
          opacity: 0.9;
        }

        .mp-item:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.3);
          box-shadow:
            0 0 0 1px rgba(233, 210, 160, 0.8) inset,
            0 20px 60px rgba(192, 151, 77, 0.25),
            0 0 40px rgba(192, 151, 77, 0.15);
        }

        .mp-item:hover .mp-img {
          filter: grayscale(0)
            drop-shadow(0 4px 14px rgba(192, 151, 77, 0.35));
          transform: scale(1.06);
          opacity: 1;
        }

        /* Animasi berjalan */
        @keyframes mp-scroll {
          0% {
            transform: translateX(0) translateX(-50%);
          }
          100% {
            transform: translateX(-50%) translateX(-50%);
          }
        }

        /* Responsif */
        @media (max-width: 1024px) {
          .mp-track {
            --gap: 36px;
          }
          .mp-item {
            width: 180px;
            height: 100px;
          }
        }

        @media (max-width: 640px) {
          .mp-track {
            --gap: 28px;
          }
          .mp-item {
            width: 140px;
            height: 84px;
            border-radius: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mp-track {
            animation: none;
          }
          .mp-item,
          .mp-img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
