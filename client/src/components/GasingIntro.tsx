"use client";
import Image from "next/image";

export default function GasingIntro() {
  return (
    <section className="max-w-3xl text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-3">
        📜 Sejarah Gasing Nusantara
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Gasing adalah permainan tradisional yang sudah ada sejak masa kerajaan di
        Indonesia. Permainan ini melatih ketangkasan, keseimbangan, dan kekuatan
        tangan, serta menjadi bagian dari kebersamaan masyarakat di berbagai
        daerah — seperti Sumatera, Jawa, Bali, dan Kalimantan.
      </p>
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/gasing/sejarah-gasing.jpg"
          alt="Sejarah permainan gasing"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
