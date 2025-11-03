"use client";

export default function Curation() {
  return (
    <section
      className="relative py-20 bg-[#1C2C4B] text-[#EEECE4] overflow-hidden"
      id="company-profile"
    >
      {/* Aksen latar belakang (gradasi & dekorasi halus) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111E34] via-[#1C2C4B] to-[#223A5C] opacity-95" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#C0974D]/20 blur-3xl rounded-full mix-blend-overlay" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#077377]/20 blur-3xl rounded-full mix-blend-overlay" />

      {/* Konten utama */}
      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Kolom kiri: Video */}
          <div className="relative w-full h-[360px] md:h-[435px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#C0974D]/30">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Gek0F0vQb24?si=EXAMPLE"
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

            <p className="text-[#EEECE4]/90 leading-relaxed text-justify">
              <strong>Balale.id</strong> adalah platform kolaboratif untuk edukasi, inovasi,
              dan pengembangan produk lokal berdaya saing global. Kami hadir untuk
              mempertemukan pengrajin, kreator, pelaku budaya, dan generasi muda
              dalam satu ekosistem digital yang berkelanjutan.
            </p>

            <p className="text-[#EEECE4]/90 leading-relaxed text-justify">
              Berdiri pada tahun <strong>2024</strong> di Yogyakarta, Balale.id lahir dari semangat
              untuk mengangkat nilai-nilai kearifan lokal ke panggung dunia melalui
              pendekatan teknologi, edukasi, dan ekonomi kreatif. Kami percaya bahwa
              warisan budaya tidak hanya perlu dilestarikan, tetapi juga dikembangkan
              agar tetap relevan dengan zaman.
            </p>

            <p className="text-[#EEECE4]/90 leading-relaxed text-justify">
              Melalui berbagai program kurasi budaya, pameran digital, dan
              kegiatan edukatif seperti <em>Festival Dolanan Nusantara</em> serta
              <em> Balale Innovation Camp</em>, kami membangun ruang kolaborasi
              bagi siapa pun yang ingin berkontribusi pada keberlanjutan budaya
              Indonesia. Balale menjadi jembatan antara tradisi dan inovasi,
              antara lokal dan global.
            </p>

            <p className="text-[#EEECE4]/90 leading-relaxed text-justify">
              Mari bergabung bersama kami di <strong>Balale.id</strong> — menjadi bagian dari gerakan
              kebudayaan baru yang menghormati akar tradisi, memelihara keseimbangan
              alam, dan menciptakan masa depan berdaya saing global yang harmonis.
            </p>

            {/* Tombol CTA */}
            <div className="pt-4">
              <a
                href="https://balale.id/about"
                className="inline-block bg-[#C0974D] text-[#1C2C4B] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#E9D2A0] transition-all duration-300"
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
