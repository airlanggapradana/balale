"use client";

import { useEffect, useRef } from "react";

type Layer = {
  src: string;
  speed?: number;      // 0.02–0.40
  opacity?: number;    // 0..1
  className?: string;  // posisi & ukuran layer
  position?: React.CSSProperties["backgroundPosition"]; // optional
  blendMode?: React.CSSProperties["mixBlendMode"];      // optional
};

type Props = {
  layers: Layer[];
  disabledOnMobile?: boolean; // default true
  className?: string;         // wrapper class (optional)
};

export default function ParallaxBackground({
  layers,
  disabledOnMobile = true,
  className,
}: Props) {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    refs.current.length = layers.length;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile =
      typeof window !== "undefined" &&
      /Mobi|Android/i.test(window.navigator.userAgent);

    const disable = prefersReduced || (disabledOnMobile && isMobile);

    let raf = 0;
    const onScroll = () => {
      if (raf || document.hidden) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        refs.current.forEach((el, i) => {
          if (!el) return;
          const speed = layers[i]?.speed ?? 0.1;
          const t = disable ? 0 : Math.round(-y * speed);
          el.style.transform = `translate3d(0, ${t}px, 0)`;
          el.style.willChange = disable ? "auto" : "transform";
        });
        raf = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [layers, disabledOnMobile]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      {/* Base gradient (perbaiki kelas: bg-gradient-*) */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-[#FFFDF8] to-[#FFF7E8]" />

      {layers.map((layer, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          className={
            // KUNCI: paksa full viewport kalau user tidak override
            `absolute inset-0 w-screen h-screen select-none ${layer.className ?? ""}`
          }
          style={{
            backgroundImage: `url('${layer.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",                // <- was "contain"
            backgroundPosition: layer.position ?? "center",
            opacity: layer.opacity ?? 0.25,
            mixBlendMode: layer.blendMode,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      ))}

      {/* Mask halus atas/bawah (perbaiki kelas gradient) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/70 to-transparent" />
    </div>
  );
}
