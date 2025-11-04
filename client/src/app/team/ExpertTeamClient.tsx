"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const expertImages = [
  "/assets/images/team/balale/1.png",
  "/assets/images/team/balale/2.png",
  "/assets/images/team/balale/3.png",
  "/assets/images/team/balale/4.png",
  "/assets/images/team/balale/5.png",
  "/assets/images/team/balale/6.png",
  "/assets/images/team/balale/7.png",
  "/assets/images/team/balale/8.png",
  "/assets/images/team/balale/9.png",
];

export default function ExpertTeamClient() {
  const [selected, setSelected] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    selected ? dialog.showModal() : dialog.close();
  }, [selected]);

  return (
    <main className="min-h-screen text-[#1C2C4B] pt-28 md:pt-36 pb-24 relative overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] bg-[url('/assets/backgrounds/batik.png')] bg-top bg-repeat"
      />

      {/* Title */}
      <section className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C2C4B]">
          Balale Expert Team
        </h1>
        <p className="mt-4 text-[#1C2C4B]/80 max-w-3xl mx-auto leading-relaxed">
          Kami adalah kumpulan kurator budaya, peneliti, desainer, dan
          pengembang teknologi yang berkomitmen menjaga warisan Nusantara
          sambil menginovasi masa depan.
        </p>
        <div className="mt-5 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-[#C0974D]" />
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertImages.map((src, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm 
            ring-1 ring-[#D9DFEA]/70 shadow-[0_10px_40px_rgba(28,44,75,0.10)]
            transition-all duration-500 hover:-translate-y-2 
            hover:shadow-[0_24px_80px_rgba(28,44,75,0.25)] cursor-pointer"
          >
            <Image
              src={src}
              alt={`Balale Expert ${i + 1}`}
              width={600}
              height={700}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              onClick={() => setSelected(src)}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1C2C4B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute -inset-20 rotate-12 bg-linear-to-r from-transparent via-[#C0974D]/30 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1200 ease-out mix-blend-overlay" />
          </div>
        ))}
      </section>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/70 rounded-2xl p-0 w-[min(92vw,900px)]"
      >
        <div className="relative">
          <button
            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
            onClick={() => setSelected(null)}
          >
            <X className="h-5 w-5" />
          </button>

          {selected && (
            <Image
              src={selected}
              alt="Full view"
              width={900}
              height={1000}
              className="w-full h-auto rounded-2xl object-contain bg-[#0b0e13]"
            />
          )}
        </div>
      </dialog>
    </main>
  );
}
