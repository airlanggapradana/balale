"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Logo = { src: string; alt: string };

// ⛳ Daftar logo (gunakan lowercase .webp agar aman di Linux)
const LOGOS: Logo[] = [
  { src: "/assets/images/logo/International Affiliation/africa.webp", alt: "Africa" },
  { src: "/assets/images/logo/International Affiliation/asia.webp", alt: "Asia" },
  // { src: "/assets/images/logo/International Affiliation/asti.webp", alt: "ASTI" },
  { src: "/assets/images/logo/International Affiliation/ayrid.webp", alt: "AYRID" },
  { src: "/assets/images/logo/International Affiliation/azs.webp", alt: "AZS" },
  { src: "/assets/images/logo/International Affiliation/barrc.webp", alt: "BARRC" },
  { src: "/assets/images/logo/International Affiliation/buca.webp", alt: "BUCA" },
  { src: "/assets/images/logo/International Affiliation/burung.webp", alt: "Burung" },
  { src: "/assets/images/logo/International Affiliation/cpc.webp", alt: "CPC" },
  { src: "/assets/images/logo/International Affiliation/diece.webp", alt: "DIECE" },
  { src: "/assets/images/logo/International Affiliation/esi.webp", alt: "ESI" },
  { src: "/assets/images/logo/International Affiliation/fdct.webp", alt: "FDCT" },
  // { src: "/assets/images/logo/International Affiliation/fna.webp", alt: "FNA" },
  { src: "/assets/images/logo/International Affiliation/gysc.webp", alt: "GYSC" },
  { src: "/assets/images/logo/International Affiliation/hkfi.webp", alt: "HKFI" },
  { src: "/assets/images/logo/International Affiliation/UMP.webp", alt: "UMP" },
  { src: "/assets/images/logo/International Affiliation/iarc.webp", alt: "IARC" },
  { src: "/assets/images/logo/International Affiliation/ibix.webp", alt: "IBIX" },
  { src: "/assets/images/logo/International Affiliation/idea.webp", alt: "IDEA" },
  { src: "/assets/images/logo/International Affiliation/ifest.webp", alt: "IFEST" },
  { src: "/assets/images/logo/International Affiliation/ifia.webp", alt: "IFIA" },
  { src: "/assets/images/logo/International Affiliation/img.webp", alt: "IMG" },
  // { src: "/assets/images/logo/International Affiliation/isb.webp", alt: "ISB" },
  // { src: "/assets/images/logo/International Affiliation/jgu.webp", alt: "JGU" },
  { src: "/assets/images/logo/International Affiliation/kiif.webp", alt: "KIIF" },
  { src: "/assets/images/logo/International Affiliation/klesf.webp", alt: "KLESF" },
  { src: "/assets/images/logo/International Affiliation/pmr.webp", alt: "PMR" },
  { src: "/assets/images/logo/International Affiliation/pohon.webp", alt: "Pohon" },
  { src: "/assets/images/logo/International Affiliation/poshs.webp", alt: "POSHS" },
  { src: "/assets/images/logo/International Affiliation/red g.webp", alt: "RED G" },
  { src: "/assets/images/logo/International Affiliation/red.webp", alt: "RED" },
  { src: "/assets/images/logo/International Affiliation/solacyt.webp", alt: "SOLACYT" },
  { src: "/assets/images/logo/International Affiliation/spartakus.webp", alt: "Spartakus" },
  { src: "/assets/images/logo/International Affiliation/usm.webp", alt: "USM" },
];

function TrackItem({ logo }: { logo: Logo }) {
  return (
    <div className="ia-item">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={220}
        height={120}
        className="ia-img"
        sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
      />
    </div>
  );
}

export default function InternationalAffiliation() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(28); // fallback durasi
  const items = useMemo(() => [...LOGOS, ...LOGOS], []); // duplikasi konten (seamless)

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Hitung panjang konten (setengah dari total karena kita gandakan)
    // Supaya animasi 0%→100% = geser -50% = panjang 1x konten asli
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const calc = () => {
      if (prefersReduced) {
        setDuration(0); // matikan animasi
        return;
      }
      // Lebar setengah track = total width / 2
      const totalWidth = el.scrollWidth / 2;
      // Kecepatan (px per detik). Sesuaikan agar “rasa” sama seperti JS lama
      const SPEED = 80; // px/s (ubah jika mau lebih cepat/lambat)
      const d = Math.max(10, totalWidth / SPEED); // detik
      setDuration(d);
      el.style.setProperty("--marquee-dur", `${d}s`);
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);

    // Recalc saat font/gambar mungkin mempengaruhi layout
    const t = setTimeout(calc, 300);
    const t2 = setTimeout(calc, 1000);

    return () => {
      ro.disconnect();
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1C2C4B]">
          International Affiliation
        </h2>

        <div className="mt-8 ia-wrapper group">
          <div ref={trackRef} className="ia-track" aria-hidden={duration === 0}>
            {items.map((logo, i) => (
              <TrackItem key={`${logo.src}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Wrapper dengan mask fade kiri–kanan + pause on hover */
        .ia-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
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
        .ia-wrapper:hover .ia-track {
          animation-play-state: paused;
        }

        /* Track: flex panjang + animasi geser 0 → -50% (1x panjang konten asli) */
        .ia-track {
          --gap: 48px;
          --marquee-dur: ${duration}s; /* fallback awal; akan dioverride JS */

          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          padding: 12px 0;
          animation: ia-scroll var(--marquee-dur) linear infinite;
        }

        /* Item logo */
        .ia-item {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          width: 200px;
          height: 120px;
          border-radius: 16px;
          box-shadow: 0 0 0 1px rgba(217, 223, 234, 0.9) inset,
            0 8px 24px rgba(28, 44, 75, 0.06);
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(4px);
          transition: transform 300ms ease, box-shadow 300ms ease, background 300ms ease;
        }

        /* Gambar logo: grayscale→color + zoom + glow */
        .ia-img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
          filter: grayscale(1) contrast(1) saturate(0.6);
          transition: transform 400ms ease, filter 400ms ease, opacity 300ms ease;
          opacity: 0.9;
        }

        .ia-item:hover {
          transform: translateY(-8px);
          box-shadow:
            0 0 0 1px rgba(233, 210, 160, 0.9) inset,
            0 20px 60px rgba(28, 44, 75, 0.25),
            0 0 40px rgba(192, 151, 77, 0.25);
          background: rgba(255, 255, 255, 0.35);
        }
        .ia-item:hover .ia-img {
          filter: grayscale(0) contrast(1.05) saturate(1.05) drop-shadow(0 4px 14px rgba(192, 151, 77, 0.35));
          transform: scale(1.06);
          opacity: 1;
        }

        /* Animasi marquee */
        @keyframes ia-scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsif */
        @media (max-width: 1024px) {
          .ia-track {
            --gap: 36px;
          }
          .ia-item {
            width: 170px;
            height: 100px;
          }
        }
        @media (max-width: 640px) {
          .ia-track {
            --gap: 28px;
          }
          .ia-item {
            width: 140px;
            height: 84px;
            border-radius: 12px;
          }
        }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .ia-track {
            animation: none;
          }
          .ia-item,
          .ia-img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
