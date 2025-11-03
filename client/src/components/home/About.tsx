"use client";

import Image from "next/image";
import Link from "next/link";
import BalaleLogo from "../../assets/images/logo/about-logo.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white pt-32 pb-20" // lebih banyak space dari atas
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#C0974D] leading-snug">
              <span className="text-3xl md:text-4xl font-bold text-[#C0974D] leading-snug">
                <span style={{ color: '#1C2C4B' }}>Balale</span>
                <span style={{ color: '#C0974D' }}>.</span>
                <span style={{ color: '#C0974D' }}>id</span>
                </span>
            </h1>
            <h5 className="text-xl md:text-xl font-bold text-[#C0974D] leading-snug">Platform kolaboratif untuk edukasi, inovasi, dan pengembangan produk lokal berdaya saing global.</h5>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">Balale.id</span> adalah platform digital yang berfokus
              pada digitalisasi permainan tradisional Indonesia serta pemberdayaan pengrajin kriya
              lokal melalui pemasaran daring dan pembelajaran interaktif berbasis budaya.

              Kami menjembatani warisan budaya masa lalu dengan generasi muda masa kini melalui
              pendekatan teknologi yang kreatif, edukatif, dan berkelanjutan — menggabungkan
              pemasaran produk kriya, pembelajaran sejarah permainan tradisional, dan mini games
              interaktif sebagai media pengenalan budaya.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Sejak dikembangkan, Balale.id berkomitmen mendukung pelestarian budaya Indonesia
              sesuai amanat{" "}
              <span className="font-bold">
                Undang-Undang Nomor 5 Tahun 2017 tentang Pemajuan Kebudayaan
              </span>
              , dengan fokus pada penguatan identitas nasional dan pengembangan ekonomi kreatif
              berbasis kearifan lokal. Kami percaya permainan tradisional bukan hanya hiburan, melainkan juga sarana
              pendidikan karakter dan refleksi nilai gotong royong bangsa Indonesia.
            </p>

            <Link
              href="/about"
              className="inline-block mt-4 px-6 py-3 bg-[#1C2C4B] text-white font-medium rounded-xl shadow-md hover:bg-[#243B6B] transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              <Image
                src={BalaleLogo}
                alt="Logo About Balale.id"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
