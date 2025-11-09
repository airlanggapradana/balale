"use client";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 text-[#EEECE4]"
    >
      {/* Latar belakang gradasi & aksen
      <div className="absolute inset-0 bg-linear-to-b from-[#111E34] via-[#1C2C4B] to-[#223A5C] opacity-95" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#C0974D]/25 blur-3xl rounded-full mix-blend-overlay animate-pulse" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#077377]/25 blur-3xl rounded-full mix-blend-overlay animate-pulse" /> */}

      {/* Konten utama */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
            Education & Cultural Learning
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            Balale.id menghadirkan ruang pembelajaran interaktif yang memadukan{" "}
            <strong>edukasi budaya, kreativitas,</strong> dan{" "}
            <strong>teknologi berkelanjutan.</strong>
            Jelajahi, pelajari, dan berinovasi melalui modul digital kami yang
            penuh makna dan nilai kehidupan Nusantara.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-[#C0974D]" />
          </div>
        </motion.div>

        {/* Flipbook Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Modul 1 */}
          {/*<motion.div*/}
          {/*  initial={{ opacity: 0, x: -30 }}*/}
          {/*  whileInView={{ opacity: 1, x: 0 }}*/}
          {/*  transition={{ duration: 0.8 }}*/}
          {/*  viewport={{ once: true }}*/}
          {/*  className="text-center"*/}
          {/*>*/}
          {/*  <h2 className="text-2xl md:text-3xl font-semibold text-[#C0974D] mb-5">*/}
          {/*    Modul 1 — Kearifan Budaya Nusantara*/}
          {/*  </h2>*/}
          {/*  <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#EEECE4]/20 shadow-[0_8px_30px_rgba(28,44,75,0.25)] hover:shadow-[0_20px_60px_rgba(192,151,77,0.25)] transition-all duration-500">*/}
          {/*    <iframe*/}
          {/*      className="w-full h-[420px] md:h-[520px]"*/}
          {/*      src="https://heyzine.com/flip-book/a05c3e5f10.html"*/}
          {/*      allowFullScreen*/}
          {/*      title="Modul 1: Kearifan Budaya Nusantara"*/}
          {/*    ></iframe>*/}
          {/*  </div>*/}
          {/*</motion.div>*/}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-2xl bg-[#F7F6F3]/60 p-8 shadow-[0_8px_30px_rgba(28,44,75,0.12)] ring-1 ring-[#EEECE4]/20"
            aria-live="polite"
          >
            <div className="text-center">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#C0974D]/10 text-[#C0974D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-[#C0974D] md:text-3xl">
                Modul 1 — Sedang Dalam Pengembangan
              </h3>
              <p className="mx-auto max-w-md text-black/80">
                Konten untuk modul ini masih dalam proses pembuatan. Mohon cek
                kembali nanti untuk materi interaktif dan panduan.
              </p>
            </div>
          </motion.div>

          {/* Modul 2 */}
          {/*<motion.div*/}
          {/*  initial={{ opacity: 0, x: 30 }}*/}
          {/*  whileInView={{ opacity: 1, x: 0 }}*/}
          {/*  transition={{ duration: 0.8 }}*/}
          {/*  viewport={{ once: true }}*/}
          {/*  className="text-center"*/}
          {/*>*/}
          {/*  <h2 className="mb-5 text-2xl font-semibold text-[#C0974D] md:text-3xl">*/}
          {/*    Modul 2 — Inovasi & Kreativitas Generasi Baru*/}
          {/*  </h2>*/}
          {/*  <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(28,44,75,0.25)] ring-1 ring-[#EEECE4]/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(192,151,77,0.25)]">*/}
          {/*    <iframe*/}
          {/*      className="h-[420px] w-full md:h-[520px]"*/}
          {/*      src="https://heyzine.com/flip-book/60417061c7.html"*/}
          {/*      allowFullScreen*/}
          {/*      title="Modul 2: Inovasi & Kreativitas Generasi Baru"*/}
          {/*    ></iframe>*/}
          {/*  </div>*/}
          {/*</motion.div>*/}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-2xl bg-[#F7F6F3]/60 p-8 shadow-[0_8px_30px_rgba(28,44,75,0.12)] ring-1 ring-[#EEECE4]/20"
            aria-live="polite"
          >
            <div className="text-center">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#C0974D]/10 text-[#C0974D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-[#C0974D] md:text-3xl">
                Modul 2 — Sedang Dalam Pengembangan
              </h3>
              <p className="mx-auto max-w-md text-black/80">
                Konten untuk modul ini masih dalam proses pembuatan. Mohon cek
                kembali nanti untuk materi interaktif dan panduan.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="mx-auto mb-6 max-w-xl leading-relaxed text-black">
            Kami percaya bahwa pengetahuan budaya adalah akar dari setiap
            kemajuan. Mari membangun masa depan dengan kebijaksanaan tradisi dan
            kekuatan inovasi.
          </p>
          <a
            href="/education/modules"
            className="inline-block rounded-full bg-[#C0974D] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E9D2A0]"
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
