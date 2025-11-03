import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Balale.id",
  description:
    "Balale.id adalah platform kolaboratif untuk edukasi budaya, inovasi, dan pengembangan produk lokal berdaya saing global. Kenali visi, misi, dan ekosistem kami.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#EEECE4] text-[#1C2C4B] min-h-screen overflow-hidden">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-28 md:pt-36 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Tentang Balale.id
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-[#1C2C4B]/80 leading-relaxed">
          <strong>Balale.id</strong> menghadirkan ekosistem digital untuk
          pelestarian budaya dan pemberdayaan ekonomi kreatif. Kami berfokus
          pada edukasi budaya, inovasi teknologi, dan kolaborasi berkelanjutan
          yang berakar pada nilai-nilai Nusantara.
        </p>
        <div className="mt-5 flex justify-center">
          <span className="h-1 w-20 rounded-full bg-[#C0974D]" />
        </div>
      </section>

      {/* Section 1 — Profil Singkat */}
      <section className="container mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Profil Balale.id</h2>
          <p className="text-[#1C2C4B]/80 leading-relaxed">
            Didirikan pada tahun <strong>2024</strong> di{" "}
            <strong>Yogyakarta</strong>, Balale.id adalah platform kolaboratif
            yang menghubungkan <em>pelaku budaya</em>, <em>pendidik</em>, dan{" "}
            <em>kreator lokal</em> dalam satu ekosistem digital berkelanjutan.
            Kami mempertemukan <strong>tradisi</strong> dan{" "}
            <strong>inovasi</strong> untuk menjaga warisan budaya sambil
            mendorong kemajuan ekonomi kreatif Indonesia.
          </p>

          <h3 className="mt-8 text-xl md:text-2xl font-semibold text-[#C0974D]">
            Fokus Kami
          </h3>
          <ul className="mt-3 list-disc list-inside text-[#1C2C4B]/80 space-y-1">
            <li>Permainan Tradisional</li>
            <li>Kriya Lokal & Produk Budaya</li>
            <li>Edukasi & Literasi Budaya</li>
            <li>Digitalisasi UMKM</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/images/logo/balale_white.png"
            alt="Logo Balale.id"
            width={400}
            height={400}
            className="rounded-2xl bg-[#1C2C4B] p-8 shadow-[0_8px_30px_rgba(28,44,75,0.18)] ring-1 ring-black/5"
          />
        </div>
      </section>

      {/* Section 2 — Visi & Misi */}
      <section className="bg-[#1C2C4B] text-[#EEECE4] py-20">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#C0974D]">Visi</h2>
            <p className="text-[#EEECE4]/90 leading-relaxed">
              Menjadi platform digital budaya yang menghubungkan nilai-nilai
              tradisi Nusantara dengan inovasi modern demi menciptakan ekosistem
              kreatif yang berdaya saing global dan berkelanjutan.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#C0974D]">Misi</h2>
            <ul className="text-[#EEECE4]/90 space-y-2 list-disc list-inside">
              <li>
                Mendorong pelestarian budaya melalui inovasi dan digitalisasi.
              </li>
              <li>
                Memberdayakan komunitas lokal & UMKM agar mandiri secara
                kreatif dan ekonomi.
              </li>
              <li>
                Membangun ruang edukasi budaya yang interaktif dan inklusif.
              </li>
              <li>
                Menjadi jembatan kolaborasi antara generasi muda, pelaku budaya,
                dan industri kreatif.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — Pilar Ekosistem */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Pilar Ekosistem Balale
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              t: "Education",
              d: "Modul pembelajaran budaya interaktif dan workshop kreatif berbasis teknologi.",
            },
            {
              t: "Product",
              d: "Katalog kriya dan permainan tradisional berkualitas dengan cerita lokal.",
            },
            {
              t: "Community",
              d: "Jaringan komunitas budaya dan kreator lokal yang berkolaborasi dalam proyek nyata.",
            },
            {
              t: "Innovation",
              d: "Inkubasi ide, digitalisasi UMKM, dan transformasi nilai budaya ke era modern.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-2xl bg-white/90 ring-1 ring-black/5 p-5 text-center shadow-[0_8px_30px_rgba(28,44,75,0.10)]"
            >
              <h4 className="font-semibold text-[#1C2C4B]">{item.t}</h4>
              <p className="mt-2 text-sm text-[#1C2C4B]/80">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Program Unggulan */}
      <section className="bg-[#F9F8F4] py-24">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Program & Acara</h2>
            <p className="text-[#1C2C4B]/80 leading-relaxed mb-4">
              Balale.id menginisiasi beragam kegiatan budaya dan inovasi, mulai
              dari festival, bootcamp, hingga pameran interaktif. Semua dirancang
              untuk menghubungkan kreativitas generasi muda dengan nilai-nilai
              luhur Nusantara.
            </p>
            <ul className="list-disc list-inside text-[#1C2C4B]/80 space-y-1">
              <li>Festival Dolanan Nusantara</li>
              <li>Balale Innovation Camp</li>
              <li>Program Digitalisasi UMKM & Workshop Kriya</li>
              <li>Balale EduSeries & Creative Talks</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-black/5 p-4 shadow-[0_8px_30px_rgba(28,44,75,0.10)]">
            <Image
              src="/assets/images/about/ecosystem-showcase.jpg"
              alt="Ekosistem Balale"
              width={960}
              height={540}
              className="rounded-xl object-cover"
            />
            <p className="text-xs text-[#1C2C4B]/60 mt-3 text-center">
              *Ilustrasi kegiatan & ekosistem Balale.id (gantikan dengan foto
              resmi).
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Data Singkat */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "Didirikan", value: "2024" },
            { label: "Markas", value: "Yogyakarta" },
            { label: "Fokus", value: "Budaya, Kriya, UMKM" },
            { label: "Nilai", value: "Keberlanjutan & Kolaborasi" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white ring-1 ring-black/5 p-4"
            >
              <div className="text-sm text-[#1C2C4B]/60">{item.label}</div>
              <div className="text-base font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
