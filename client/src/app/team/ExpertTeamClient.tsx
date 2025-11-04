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
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selected ? dialog.showModal() : dialog.close();
  }, [selected]);

  return (
    <main className="relative min-h-screen overflow-hidden pt-28 pb-24 text-[#1C2C4B] md:pt-36">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[url('/assets/backgrounds/batik.png')] bg-top bg-repeat opacity-[0.05]"
      />

      {/* Title */}
      <section className="container mx-auto mb-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-[#1C2C4B] md:text-5xl">
          Balale Expert Team
        </h1>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#1C2C4B]/80">
          Kami adalah kumpulan kurator budaya, peneliti, desainer, dan
          pengembang teknologi yang berkomitmen menjaga warisan Nusantara sambil
          menginovasi masa depan.
        </p>
        <div className="mt-5 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-[#C0974D]" />
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertImages.map((src, i) => (
          <div
            key={i}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/70 shadow-[0_10px_40px_rgba(28,44,75,0.10)] ring-1 ring-[#D9DFEA]/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(28,44,75,0.25)]"
          >
            <Image
              src={src}
              alt={`Balale Expert ${i + 1}`}
              width={600}
              height={700}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              onClick={() => setSelected(src)}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1C2C4B]/60 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -inset-20 translate-x-[-120%] rotate-12 bg-linear-to-r from-transparent via-[#C0974D]/30 to-transparent mix-blend-overlay transition-transform duration-1200 ease-out group-hover:translate-x-[120%]" />
          </div>
        ))}
      </section>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className="w-[min(92vw,900px)] rounded-2xl p-0 backdrop:bg-black/70"
      >
        <div className="relative">
          <button
            className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
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
              className="h-auto w-full rounded-2xl bg-[#0b0e13] object-contain"
            />
          )}
        </div>
      </dialog>
    </main>
  );
}
