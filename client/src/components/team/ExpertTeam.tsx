"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

type Member = {
  src: string;   // path dari /public
  name?: string;
  role?: string;
};

const MEMBERS: Member[] = [
  { src: "/assets/images/team/balale/1.png" },
  { src: "/assets/images/team/balale/2.png" },
  { src: "/assets/images/team/balale/3.png" },
  { src: "/assets/images/team/balale/4.png" },
  { src: "/assets/images/team/balale/5.png" },
  { src: "/assets/images/team/balale/6.png" },
  { src: "/assets/images/team/balale/8.png" },
  { src: "/assets/images/team/balale/9.png" },
  { src: "/assets/images/team/balale/10.png" },
  { src: "/assets/images/team/balale/11.png" },
  { src: "/assets/images/team/balale/12.png" },
  { src: "/assets/images/team/balale/13.png" },
  { src: "/assets/images/team/balale/14.png" },
  { src: "/assets/images/team/balale/15.png" },
  { src: "/assets/images/team/balale/17.png" },
  { src: "/assets/images/team/balale/18.png" },
  { src: "/assets/images/team/balale/19.png" },
  { src: "/assets/images/team/balale/20.png" },
  { src: "/assets/images/team/balale/21.png" },
  { src: "/assets/images/team/balale/24.png" },
];

export default function ExpertTeamClient() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // buka/tutup lightbox <dialog>
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (openSrc) {
      if (!el.open) el.showModal();
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenSrc(null);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    } else {
      el.open && el.close();
    }
  }, [openSrc]);

  const items = useMemo(() => MEMBERS, []);

  return (
    <main className="min-h-screen bg-[#EEECE4] pt-28 md:pt-36 pb-20">
      {/* motif lembut */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] bg-[url('/assets/backgrounds/batik.png')] bg-top bg-repeat"
      />

      <section className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1C2C4B]">
            Balale Expert Team
          </h1>
          <p className="mt-4 text-[#1C2C4B]/80 leading-relaxed">
            Tim lintas-disiplin yang menggabungkan <strong>kurasi budaya</strong>,{" "}
            <strong>desain</strong>, <strong>teknologi</strong>, dan{" "}
            <strong>riset</strong> untuk menghadirkan ekosistem budaya berkelanjutan.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#C0974D]" />
          </div>
        </div>

        {/* Grid kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((m, idx) => (
            <button
              key={m.src + idx}
              onClick={() => setOpenSrc(m.src)}
              className="
                group relative overflow-hidden rounded-2xl 
                bg-white/60 backdrop-blur-sm
                ring-1 ring-[#D9DFEA]
                transition-all duration-500
                shadow-[0_10px_30px_rgba(28,44,75,0.10)]
                hover:shadow-[0_24px_70px_rgba(28,44,75,0.22)]
                hover:-translate-y-1.5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0974D]
              "
              aria-label="Perbesar gambar tim"
            >
              {/* border glow gradient */}
              <div className="
                pointer-events-none absolute inset-0 rounded-2xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                [background:linear-gradient(120deg,rgba(201,174,105,.35),transparent_40%,rgba(28,44,75,.25))]
              " />

              {/* gambar */}
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={m.src}
                  alt={m.name ?? `Expert ${idx + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.06]
                    group-active:scale-[1.03]
                  "
                  priority={idx < 6}
                />
                {/* overlay */}
                <div className="
                  pointer-events-none absolute inset-0 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500
                  bg-linear-to-t from-black/15 via-transparent to-white/0
                " />
                {/* shimmer glare */}
                <div className="
                  pointer-events-none absolute -inset-20 rotate-12 
                  bg-linear-to-r from-transparent via-white/30 to-transparent
                  translate-x-[-120%] group-hover:translate-x-[120%]
                  transition-transform duration-1200 ease-out
                  mix-blend-overlay
                " />
              </div>

              {(m.name || m.role) && (
                <div className="p-4">
                  <p className="text-[#1C2C4B] font-semibold">{m.name}</p>
                  <p className="text-[#1C2C4B]/70 text-sm">{m.role}</p>
                </div>
              )}

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-[#C0974D]/60 transition-all duration-500" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox dialog */}
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/60 rounded-2xl p-0 w-[min(92vw,950px)]"
        onClose={() => setOpenSrc(null)}
      >
        <div className="relative">
          <button
            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
            onClick={() => setOpenSrc(null)}
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative w-full h-[72vh] max-h-[820px] overflow-hidden rounded-2xl">
            {openSrc && (
              <Image
                src={openSrc}
                alt="Expert full view"
                fill
                className="object-contain bg-[#0b0e13]"
              />
            )}
          </div>
        </div>
      </dialog>
    </main>
  );
}
