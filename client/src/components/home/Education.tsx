"use client";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 text-[#EEECE4] overflow-hidden"
    >
      {/* Latar belakang gradasi & aksen
      <div className="absolute inset-0 bg-linear-to-b from-[#111E34] via-[#1C2C4B] to-[#223A5C] opacity-95" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#C0974D]/25 blur-3xl rounded-full mix-blend-overlay animate-pulse" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#077377]/25 blur-3xl rounded-full mix-blend-overlay animate-pulse" /> */}

      {/* Konten utama */}
      <div className="relative container mx-auto px-6 md:px-12 z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Education & Cultural Learning
          </h1>
          <p className="mt-4 text-black text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Balale.id menghadirkan ruang pembelajaran interaktif yang
            memadukan <strong>edukasi budaya, kreativitas,</strong> dan{" "}
            <strong>teknologi berkelanjutan.</strong>  
            Jelajahi, pelajari, dan berinovasi melalui modul digital kami yang
            penuh makna dan nilai kehidupan Nusantara.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-[#C0974D]" />
          </div>
        </motion.div>

        {/* Flipbook Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Modul 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C0974D] mb-5">
              Modul 1 — Kearifan Budaya Nusantara
            </h2>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#EEECE4]/20 shadow-[0_8px_30px_rgba(28,44,75,0.25)] hover:shadow-[0_20px_60px_rgba(192,151,77,0.25)] transition-all duration-500">
              <iframe
                className="w-full h-[420px] md:h-[520px]"
                src="https://heyzine.com/flip-book/a05c3e5f10.html"
                allowFullScreen
                title="Modul 1: Kearifan Budaya Nusantara"
              ></iframe>
            </div>
          </motion.div>

          {/* Modul 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C0974D] mb-5">
              Modul 2 — Inovasi & Kreativitas Generasi Baru
            </h2>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#EEECE4]/20 shadow-[0_8px_30px_rgba(28,44,75,0.25)] hover:shadow-[0_20px_60px_rgba(192,151,77,0.25)] transition-all duration-500">
              <iframe
                className="w-full h-[420px] md:h-[520px]"
                src="https://heyzine.com/flip-book/60417061c7.html"
                allowFullScreen
                title="Modul 2: Inovasi & Kreativitas Generasi Baru"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-black mb-6 max-w-xl mx-auto leading-relaxed">
            Kami percaya bahwa pengetahuan budaya adalah akar dari setiap
            kemajuan. Mari membangun masa depan dengan kebijaksanaan tradisi dan
            kekuatan inovasi.
          </p>
          <a
            href="/education/modules"
            className="inline-block bg-[#C0974D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E9D2A0] transition-all duration-300 shadow-lg"
          >
            Pelajari Lebih Lanjut
          </a>
        </motion.div>
      </div>

      {/* Ornamen bawah */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#1C2C4B] to-transparent" />
    </section>
  );
};

export default Education;
