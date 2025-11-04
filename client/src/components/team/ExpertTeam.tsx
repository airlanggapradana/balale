"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

type Member = {
  src: string; // path dari /public
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
      const onKey = (e: KeyboardEvent) =>
        e.key === "Escape" && setOpenSrc(null);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.open && el.close();
    }
  }, [openSrc]);

  const items = useMemo(() => MEMBERS, []);

  return (
    <main className="min-h-screen bg-[#EEECE4] pt-28 pb-20 md:pt-36">
      {/* motif lembut */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/assets/backgrounds/batik.png')] bg-top bg-repeat opacity-[0.06]"
      />

      <section className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1C2C4B] md:text-5xl">
            Balale Expert Team
          </h1>
          <p className="mt-4 leading-relaxed text-[#1C2C4B]/80">
            Tim lintas-disiplin yang menggabungkan{" "}
            <strong>kurasi budaya</strong>, <strong>desain</strong>,{" "}
            <strong>teknologi</strong>, dan <strong>riset</strong> untuk
            menghadirkan ekosistem budaya berkelanjutan.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#C0974D]" />
          </div>
        </div>

        {/* Grid kartu */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {items.map((m, idx) => (
            <button
              key={m.src + idx}
              onClick={() => setOpenSrc(m.src)}
              className="group relative overflow-hidden rounded-2xl bg-white/60 shadow-[0_10px_30px_rgba(28,44,75,0.10)] ring-1 ring-[#D9DFEA] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(28,44,75,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0974D]"
              aria-label="Perbesar gambar tim"
            >
              {/* border glow gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 [background:linear-gradient(120deg,rgba(201,174,105,.35),transparent_40%,rgba(28,44,75,.25))] group-hover:opacity-100" />

              {/* gambar */}
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={m.src}
                  alt={m.name ?? `Expert ${idx + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-active:scale-[1.03]"
                  priority={idx < 6}
                />
                {/* overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* shimmer glare */}
                <div className="pointer-events-none absolute -inset-20 translate-x-[-120%] rotate-12 bg-linear-to-r from-transparent via-white/30 to-transparent mix-blend-overlay transition-transform duration-1200 ease-out group-hover:translate-x-[120%]" />
              </div>

              {(m.name ?? m.role) && (
                <div className="p-4">
                  <p className="font-semibold text-[#1C2C4B]">{m.name}</p>
                  <p className="text-sm text-[#1C2C4B]/70">{m.role}</p>
                </div>
              )}

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-all duration-500 group-hover:ring-2 group-hover:ring-[#C0974D]/60" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox dialog */}
      <dialog
        ref={dialogRef}
        className="w-[min(92vw,950px)] rounded-2xl p-0 backdrop:bg-black/60"
        onClose={() => setOpenSrc(null)}
      >
        <div className="relative">
          <button
            className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            onClick={() => setOpenSrc(null)}
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative h-[72vh] max-h-[820px] w-full overflow-hidden rounded-2xl">
            {openSrc && (
              <Image
                src={openSrc}
                alt="Expert full view"
                fill
                className="bg-[#0b0e13] object-contain"
              />
            )}
          </div>
        </div>
      </dialog>
    </main>
  );
}
