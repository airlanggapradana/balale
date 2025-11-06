"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Transition } from "framer-motion";
import { FaTv } from "react-icons/fa";
import aura from "@/assets/Tim Inti (core)/Aura.webp";
import logo from "@/assets/logo_square.webp";

// ===== Hover Founder Card =====
type FounderProps = { name: string; role: string; img: StaticImageData };

function FounderCard({ name, role, img }: FounderProps) {
  // motion values untuk tilt mengikuti kursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // mapping -> sudut rotasi + parallax
  const rotateX = useTransform(my, [-50, 50], [8, -8]);
  const rotateY = useTransform(mx, [-50, 50], [-8, 8]);
  const translateAvatar = useTransform(my, [-50, 50], [-6, 6]);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(Math.max(-50, Math.min(50, x / 4)));
    my.set(Math.max(-50, Math.min(50, y / 4)));
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(28,44,75,0.12)] ring-1 ring-black/5 transform-3d"
    >
      {/* animated glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: [0, 0, 1, 1] }}
        style={{
          background:
            "linear-gradient(120deg, rgba(192,151,77,.28), rgba(28,44,75,.18), rgba(192,151,77,.28))",
          backgroundSize: "200% 200%",
          filter: "blur(26px)",
        }}
      />
      <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#C0974D]/20 blur-2xl" />

      <div className="flex items-center gap-5">
        {/* Avatar parallax */}
        <motion.div
          style={{ translateY: translateAvatar, translateZ: 30 }}
          className="relative h-16 w-16 shrink-0 transform-[translateZ(30px)]"
        >
          <Image
            src={img}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-transparent transition group-hover:ring-[#C0974D]/60" />
        </motion.div>

        <div className="transform-[translateZ(20px)]">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-[#1C2C4B]/60">{role}</div>
        </div>
      </div>

      <p className="mt-4 transform-[translateZ(10px)] text-sm leading-relaxed text-[#1C2C4B]/80">
        Menginisiasi arah strategis Balale, mengembangkan kemitraan, dan
        memastikan setiap program membawa dampak nyata bagi komunitas.
      </p>

      <span
        className="mt-5 block h-1 w-14 origin-left scale-x-0 rounded-full bg-[#C0974D]/70 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
    </motion.div>
  );
}

// ===== Anim helpers =====
const fadeUpTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};
const fadeTransition: Transition = { duration: 0.8 };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: fadeUpTransition,
  viewport: { once: true, margin: "-120px" },
};

const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: fadeTransition,
  viewport: { once: true },
};

export default function AboutContent() {
  return (
    <main className="min-h-screen overflow-hidden text-[#1C2C4B]">
      {/* Header Section */}
      <section className="relative container mx-auto px-4 pt-28 pb-16 text-center md:pt-36">
        {/* Soft blob decor */}
        <motion.div
          {...fade}
          className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, #C0974D66 0%, transparent 70%)",
          }}
        />
        <motion.div
          {...fade}
          className="pointer-events-none absolute -right-12 -bottom-8 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, #1C2C4B66 0%, transparent 70%)",
          }}
        />

        <motion.h1
          {...fadeUp}
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Tentang Balale.id
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#1C2C4B]/80"
        >
          <strong>Balale.id</strong> menghadirkan ekosistem digital untuk
          pelestarian budaya dan pemberdayaan ekonomi kreatif. Kami berfokus
          pada edukasi budaya, inovasi teknologi, dan kolaborasi berkelanjutan
          yang berakar pada nilai-nilai Nusantara.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-5 flex justify-center"
        >
          <span className="h-1 w-20 rounded-full bg-[#C0974D]" />
        </motion.div>
      </section>

      {/* Section 1 — Profil Singkat */}
      <section className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 pb-20 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            Profil Balale.id
          </h2>
          <p className="leading-relaxed text-[#1C2C4B]/80">
            <strong>Balale.id</strong> adalah platform digital yang menghidupkan
            kembali permainan tradisional Indonesia melalui inovasi teknologi.
            Kami berfokus pada digitalisasi produk kriya permainan tradisional,
            pemberdayaan pengrajin lokal, serta pembelajaran budaya interaktif
            bagi generasi muda. Melalui Balale.id, masyarakat dapat menjelajahi
            nilai sejarah di balik setiap permainan rakyat, memainkan versi
            digitalnya dalam mini games edukatif, serta mendukung langsung para
            pengrajin kriya daerah.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-[#C0974D] md:text-2xl">
            Fokus Kami
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-[#1C2C4B]/80">
            <li>Permainan Tradisional</li>
            <li>Kriya Lokal & Produk Budaya</li>
            <li>Edukasi & Literasi Budaya</li>
            <li>Digitalisasi UMKM</li>
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="flex justify-center"
        >
          <Image
            src={logo}
            alt="Logo Balale.id"
            width={400}
            height={400}
            className="rounded-2xl bg-[#1C2C4B] p-4 shadow-[0_8px_30px_rgba(28,44,75,0.18)] ring-1 ring-black/5"
          />
        </motion.div>
      </section>

      {/* Section 2 — Visi & Misi */}
      <section className="relative overflow-hidden bg-[#1C2C4B] py-20 text-[#EEECE4]">
        <motion.div
          {...fade}
          className="pointer-events-none absolute -top-16 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, #C0974D88 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto grid items-start gap-12 px-6 md:grid-cols-2 md:px-12">
          <motion.div {...fadeUp}>
            <h2 className="mb-4 text-3xl font-bold text-[#C0974D]">Visi</h2>
            <p className="leading-relaxed text-[#EEECE4]/90">
              Menjadi platform digital pelestarian budaya yang mempertemukan
              tradisi dan teknologi untuk memperkuat identitas bangsa Indonesia.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-[#C0974D]">Misi</h2>
            <ul className="list-inside list-disc space-y-2 text-[#EEECE4]/90">
              <li>
                Mempromosikan dan mendigitalisasi kriya permainan tradisional
                lokal.
              </li>
              <li>
                Menyediakan media pembelajaran budaya yang interaktif dan
                inklusif.
              </li>
              <li>
                Memberdayakan pengrajin lokal melalui pemasaran berbasis
                teknologi.
              </li>
              <li>
                Mengedukasi generasi muda tentang nilai-nilai budaya Indonesia
                melalui permainan digital.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Pilar Ekosistem */}
      <section className="container mx-auto px-4 py-24">
        <motion.h2
          {...fadeUp}
          className="mx-auto flex max-w-3xl items-center justify-center gap-3 text-center text-3xl font-bold md:text-4xl"
        >
          <motion.span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C0974D]/10 text-[#C0974D]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-hidden="true"
            >
              <path d="M9 21h6v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 .993-.883L18 18v-1a6 6 0 1 0-12 0v1l-0.994.116A1 1 0 0 0 5 20h1a1 1 0 0 1 1 1v1zM12 3a4 4 0 0 1 4 4c0 1.657-1.006 3.066-2.4 3.678a1 1 0 0 0-.6.922V13a1 1 0 0 1-1 1h-1v2h-2v-2H9a1 1 0 0 1-1-1v-1.4a1 1 0 0 0-.6-.922C6.006 10.066 5 8.657 5 7a4 4 0 0 1 4-4h3z" />
            </svg>
          </motion.span>
          <span>Pilar Ekosistem Balale</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Education",
              d: "Modul pembelajaran budaya interaktif dan workshop kreatif berbasis teknologi.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6l8 4-8 4-8-4 8-4z"
                  />
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14v6"
                  />
                </svg>
              ),
            },
            {
              t: "Product",
              d: "Katalog kriya dan permainan tradisional berkualitas dengan cerita lokal.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="13"
                    rx="2"
                    ry="2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 3v4M8 3v4"
                  />
                </svg>
              ),
            },
            {
              t: "Community",
              d: "Jaringan komunitas budaya dan kreator lokal yang berkolaborasi dalam proyek nyata.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              t: "Innovation",
              d: "Inkubasi ide, digitalisasi UMKM, dan transformasi nilai budaya ke era modern.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v6"
                  />
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 11a7 7 0 0014 0c0-3.866-3.134-7-7-7"
                  />
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22v-4"
                  />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 * i }}
              className="rounded-2xl bg-white/90 p-5 text-center shadow-[0_8px_30px_rgba(28,44,75,0.10)] ring-1 ring-black/5"
            >
              <div className="flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C0974D]/10 text-[#C0974D]">
                  {item.icon}
                </span>
              </div>
              <h4 className="mt-4 font-semibold text-[#1C2C4B]">{item.t}</h4>
              <p className="mt-2 text-sm text-[#1C2C4B]/80">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4 — Program Unggulan */}
      <section className="relative overflow-hidden bg-[#1C2C4B] py-20 text-[#EEECE4]">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-5">
              <FaTv size={32} />
              <h2 className="mb-4 text-3xl font-bold">Program &amp; Acara</h2>
            </div>
            <p className="mb-4 leading-relaxed text-white">
              Balale.id menginisiasi beragam kegiatan budaya dan inovasi, mulai
              dari festival, bootcamp, hingga pameran interaktif. Semua
              dirancang untuk menghubungkan kreativitas generasi muda dengan
              nilai-nilai luhur Nusantara.
            </p>
            <ul className="list-inside list-disc space-y-1 text-white">
              <li>Festival Dolanan Nusantara</li>
              <li>Balale Innovation Camp</li>
              <li>Program Digitalisasi UMKM & Workshop Kriya</li>
              <li>Balale EduSeries & Creative Talks</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(28,44,75,0.10)] ring-1 ring-black/5"
          >
            <Image
              src="/assets/images/about/ecosystem-showcase.jpg"
              alt="Ekosistem Balale"
              width={960}
              height={540}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-center text-xs text-[#1C2C4B]/60">
              *Ilustrasi kegiatan & ekosistem Balale.id (gantikan dengan foto
              resmi).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Data Singkat */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          {[
            { label: "Didirikan", value: "2025" },
            { label: "Markas", value: "Surakarta" },
            { label: "Fokus", value: "Budaya, Kriya, UMKM" },
            { label: "Nilai", value: "Keberlanjutan & Kolaborasi" },
          ].map((item) => (
            <motion.div
              key={item.label}
              {...fadeUp}
              className="rounded-xl bg-white p-4 ring-1 ring-black/5"
            >
              <div className="text-sm text-[#1C2C4B]/60">{item.label}</div>
              <div className="text-base font-semibold">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 6 — Founder & Co-Founders (dengan hover animasi) */}
      <section className="relative overflow-hidden py-24 text-[#1C2C4B]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeUp}
            className="text-center text-3xl font-extrabold md:text-4xl"
          >
            Balale Founder & Co-Founders
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-3 max-w-3xl text-center text-[#1C2C4B]/80"
          >
            Balale dibangun oleh tim lintas disiplin dengan latar belakang
            budaya, pendidikan, dan teknologi. Kami percaya kolaborasi adalah
            kunci inovasi berkelanjutan.
          </motion.p>

          <div className="mx-auto mt-10 flex max-w-lg items-center justify-center">
            {[
              {
                name: "Aura Kalbu",
                role: "Founder",
                img: aura,
              },
            ].map((p) => (
              <FounderCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Tim Ahli & Staf */}
      <section className="bg-[#1C2C4B] py-24 text-[#EEECE4]">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 md:px-12">
          <motion.div {...fadeUp}>
            <h3 className="mb-3 text-3xl font-bold text-[#C0974D]">
              Tim Ahli & Staf
            </h3>
            <p className="text-[#EEECE4]/85">
              Sejak awal, Balale didukung oleh peneliti, pendidik, kurator,
              kreator, serta praktisi teknologi dari berbagai institusi. Tim ini
              mengkurasi konten, merancang pengalaman belajar, dan menjaga
              kualitas program.
            </p>
          </motion.div>
          <motion.ul
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="space-y-3"
          >
            {[
              "Kurator budaya & sejarawan lokal",
              "Pengembang produk & desainer pengalaman",
              "Engineer untuk platform digital & data",
              "Fasilitator workshop dan pelatihan UMKM",
            ].map((t) => (
              <li
                key={t}
                className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/10"
              >
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Section 8 — Komunitas Member & Research Teachers */}
      <section className="py-24">
        <div className="container mx-auto grid items-start gap-12 px-6 md:grid-cols-2 md:px-12">
          <motion.div {...fadeUp}>
            <h3 className="mb-3 text-3xl font-bold">
              Balale Member & Research Teachers Community
            </h3>
            <p className="text-[#1C2C4B]/80">
              Balale memiliki komunitas anggota dan pendidik-peneliti yang
              tersebar di Indonesia. Komunitas ini mewadahi riset budaya,
              eksperimen pembelajaran kreatif, serta kolaborasi proyek antar
              sekolah, kampus, dan komunitas.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(28,44,75,0.10)] ring-1 ring-black/5"
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { k: "Anggota Aktif", v: "1.200+" },
                { k: "Guru/Riset", v: "180+" },
                { k: "Kota/Komunitas", v: "40+" },
                { k: "Program/Riset", v: "65+" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl bg-[#F9F8F4] p-4">
                  <div className="text-xs text-[#1C2C4B]/60">{s.k}</div>
                  <div className="text-lg font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9 — Program/Events Detail ala katalog */}
      <section className="bg-[#F9F8F4] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h3 {...fadeUp} className="mb-8 text-3xl font-bold">
            Program / Event Balale
          </motion.h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Kolom 1: Regional & Nasional */}
            <div className="space-y-3">
              <div className="font-semibold text-[#C0974D]">
                Regional & Nasional
              </div>
              {[
                "Festival Dolanan Nusantara (FDN)",
                "Nusantara Creative Meet-Up (NCM)",
                "Indonesian Craft Expo (ICE)",
                "Balale Innovation Camp (BIC)",
                "Heritage Game Jam (HGJ)",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl bg-white px-4 py-3 ring-1 ring-black/5"
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Kolom 2: Internasional */}
            <div className="space-y-3">
              <div className="font-semibold text-[#C0974D]">Internasional</div>
              {[
                "Global Digital Heritage Week (GDHW)",
                "Craft & Code World Forum (CCWF)",
                "Youth Culture Innovation Awards (YCIA)",
                "ASEAN Cultural Hackfest (ACH)",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl bg-white px-4 py-3 ring-1 ring-black/5"
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Kolom 3: Olimpiade/Kompetisi & Non-Kompetisi */}
            <div className="space-y-3">
              <div className="font-semibold text-[#C0974D]">
                Olimpiade & Non-Kompetisi
              </div>
              {[
                "Balale Olympiad Tingkat Nasional (BOTN)",
                "Balale Young Innovators (BYI)",
                "Balale Research Portal & Open Course",
                "Balale Goes To School / Campus Corner",
                "Newsletter & Insight Budaya",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl bg-white px-4 py-3 ring-1 ring-black/5"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Kemitraan */}
      <section className="py-24">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:px-12">
          <motion.div {...fadeUp}>
            <h3 className="mb-3 text-3xl font-bold">National Partner</h3>
            <p className="mb-4 text-[#1C2C4B]/80">
              Dalam implementasi program, Balale berkolaborasi dengan
              kementerian/lembaga, pemerintah daerah, serta perguruan tinggi dan
              mitra industri di Indonesia.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Kemdikbudristek",
                "Kemenparekraf",
                "Pemda/Disbud",
                "Perguruan Tinggi",
                "BUMN/BUMD",
              ].map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-[#1C2C4B] px-4 py-2 text-sm text-white ring-1 ring-black/5"
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <h3 className="mb-3 text-3xl font-bold">International Partner</h3>
            <p className="mb-4 text-[#1C2C4B]/80">
              Balale juga bekerja sama dengan jaringan global di Asia, Eropa,
              Amerika, dan Afrika untuk membuka kesempatan kolaborasi lintas
              negara.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "UNESCO-aligned NGOs",
                "Museum/Archive",
                "Universitas Global",
                "Platform Edu Digital",
                "Cultural Labs",
              ].map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-[#1C2C4B] px-4 py-2 text-sm text-white ring-1 ring-black/5"
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#1C2C4B] py-16 text-[#EEECE4]">
        <div className="container mx-auto px-6 text-center md:px-12">
          <motion.h3 {...fadeUp} className="text-2xl font-bold md:text-3xl">
            Bergabung dengan Ekosistem Balale
          </motion.h3>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-2 text-[#EEECE4]/85"
          >
            Jadilah bagian dari gerakan pelestarian budaya dan inovasi kreatif.
            Mari ciptakan dampak yang berkelanjutan bersama-sama.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 flex justify-center gap-3"
          >
            <a
              href="/join"
              className="inline-flex items-center rounded-xl bg-[#C0974D] px-5 py-3 font-semibold text-white shadow transition hover:bg-[#a4813d]"
            >
              Gabung Komunitas
            </a>
            <a
              href="/partners"
              className="inline-flex items-center rounded-xl bg-transparent px-5 py-3 font-semibold ring-1 ring-white/40 transition hover:bg-white/10"
            >
              Kemitraan
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
