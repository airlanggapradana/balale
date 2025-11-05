"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import expert1 from "@/assets/Tim Expert/cahyaningtyas-sekar-wahyuni - TI.webp";
import expert2 from "@/assets/Tim Expert/Pak Arief.webp";
import expert3 from "@/assets/Tim Expert/Ibu Laili - PBSI.webp";
import expert4 from "@/assets/Tim Expert/Pak Diaz-PTI.webp";
import expert5 from "@/assets/Tim Expert/Pak Dipa - PBSI.webp";
import expert6 from "@/assets/Tim Expert/Pak Hardika-PTI.webp";
import expert7 from "@/assets/Tim Expert/Pak Yunus Sulistyono - PBSI.webp";

interface Expert {
  image: StaticImageData;
  name: string;
  occupation: string;
}

const experts: Expert[] = [
  {
    image: expert1,
    name: "Cahyaningtyas Sekar Wahyuni",
    occupation: "Dosen Teknik Informatika",
  },
  {
    image: expert2,
    name: "Arief",
    occupation: "Sekprodi Program Studi Pendidikan Teknik Informatika",
  },
  {
    image: expert3,
    name: "Laili",
    occupation:
      "Lektor Kepala Program Studi Pendidikan Bahasa dan Sastra Indonesia, Fakultas Keguruan dan Ilmu Pendidikan",
  },
  {
    image: expert4,
    name: "Diaz",
    occupation: "Dosen Pendidikan Teknik Informatika",
  },
  {
    image: expert5,
    name: "Dipa",
    occupation: "Sekprodi Program Studi Magister Pendidikan Bahasa Indonesia",
  },
  {
    image: expert6,
    name: "Hardika",
    occupation:
      "Kabid Pengelolaan dan Layanan Digital UPT Perpustakaan dan Layanan Digital",
  },
  {
    image: expert7,
    name: "Yunus Sulistyono",
    occupation: "Kaprodi Program Studi Pendidikan Bahasa dan Sastra Indonesia",
  },
];

export default function ExpertTeamClient() {
  return (
    <div className="relative min-h-screen w-full bg-[#fafafa] text-gray-900">
      {/* Diagonal Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
                repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
                repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
              `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 py-16 md:py-24 lg:py-28">
        {/* Header Section */}
        <section className="container mx-auto mb-12 px-4 text-center sm:px-6 md:mb-16">
          <h1 className="text-3xl font-extrabold text-[#1C2C4B] sm:text-4xl md:text-5xl lg:text-6xl">
            Balale Expert Team
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#1C2C4B]/80 sm:mt-4 sm:text-base md:max-w-3xl">
            Kami adalah kumpulan kurator budaya, peneliti, desainer, dan
            pengembang teknologi yang berkomitmen menjaga warisan Nusantara
            sambil menginovasi masa depan.
          </p>
          <div className="mt-4 flex justify-center md:mt-5">
            <span className="h-1 w-20 rounded-full bg-[#C0974D] sm:w-24" />
          </div>
        </section>

        {/* Expert Cards Grid */}
        <section className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-3 lg:gap-10">
          {experts.map((expert, i) => (
            <div key={i} className="group relative cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C0974D]/20 via-white to-[#1C2C4B]/10 p-[2px] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl sm:rounded-3xl">
                <div className="relative overflow-hidden rounded-[calc(1rem-2px)] bg-white sm:rounded-[22px]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C4B] via-[#1C2C4B]/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    <div className="absolute right-0 bottom-0 left-0 p-4 text-white sm:p-6">
                      <h3 className="text-lg font-bold drop-shadow-lg sm:text-xl">
                        {expert.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/90 drop-shadow-md sm:text-sm">
                        {expert.occupation}
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-[#C0974D] via-[#C0974D]/60 to-transparent" />
                </div>
              </div>

              <div className="absolute -top-2 -right-2 h-6 w-6 border-t-4 border-r-4 border-[#C0974D] opacity-0 transition-all duration-500 group-hover:opacity-100 sm:h-8 sm:w-8" />
              <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-4 border-l-4 border-[#C0974D] opacity-0 transition-all duration-500 group-hover:opacity-100 sm:h-8 sm:w-8" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
