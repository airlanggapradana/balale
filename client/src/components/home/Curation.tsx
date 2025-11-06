"use client";

export default function Curation() {
  return (
    <section
      className="relative overflow-hidden bg-[#1C2C4B] py-20 text-[#EEECE4]"
      id="company-profile"
    >
      {/* Aksen latar belakang (gradasi & dekorasi halus) */}
      <div className="absolute inset-0 bg-linear-to-br from-[#111E34] via-[#1C2C4B] to-[#223A5C] opacity-95" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#C0974D]/20 mix-blend-overlay blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#077377]/20 mix-blend-overlay blur-3xl" />

      {/* Konten utama */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Kolom kiri: Video */}
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[#C0974D]/30 md:h-[435px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-GQGIQMAuJw"
              title="Balale Company Profile"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>

          {/* Kolom kanan: Deskripsi */}
          <div className="space-y-5 md:pl-8">
            <h1 className="text-4xl font-bold text-[#C0974D]">
              Company Profile
            </h1>

            <p className="text-justify leading-relaxed text-[#EEECE4]/90">
              <strong>Balale.id</strong> adalah platform kolaboratif untuk
              edukasi, inovasi, dan pengembangan produk lokal berdaya saing
              global. Kami hadir untuk mempertemukan pengrajin, kreator, pelaku
              budaya, dan generasi muda dalam satu ekosistem digital yang
              berkelanjutan.
            </p>

            <p className="text-justify leading-relaxed text-[#EEECE4]/90">
              Berdiri pada tahun <strong>2024</strong> di Yogyakarta, Balale.id
              lahir dari semangat untuk mengangkat nilai-nilai kearifan lokal ke
              panggung dunia melalui pendekatan teknologi, edukasi, dan ekonomi
              kreatif. Kami percaya bahwa warisan budaya tidak hanya perlu
              dilestarikan, tetapi juga dikembangkan agar tetap relevan dengan
              zaman.
            </p>

            <p className="text-justify leading-relaxed text-[#EEECE4]/90">
              Melalui berbagai program kurasi budaya, pameran digital, dan
              kegiatan edukatif seperti <em>Festival Dolanan Nusantara</em>{" "}
              serta
              <em> Balale Innovation Camp</em>, kami membangun ruang kolaborasi
              bagi siapa pun yang ingin berkontribusi pada keberlanjutan budaya
              Indonesia. Balale menjadi jembatan antara tradisi dan inovasi,
              antara lokal dan global.
            </p>

            <p className="text-justify leading-relaxed text-[#EEECE4]/90">
              Mari bergabung bersama kami di <strong>Balale.id</strong> —
              menjadi bagian dari gerakan kebudayaan baru yang menghormati akar
              tradisi, memelihara keseimbangan alam, dan menciptakan masa depan
              berdaya saing global yang harmonis.
            </p>

            {/* Tombol CTA */}
            <div className="pt-4">
              <a
                href="https://balale.id/about"
                className="inline-block rounded-full bg-[#C0974D] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E9D2A0]"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
