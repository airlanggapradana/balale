"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const staffList = [
    {
    name: "Rangga",
    role: "Founder & Vision Director",
    img: "/assets/images/team/balale/staff1.png",
    },
    { name: "Rafli", 
    role: "Creative Engineer", 
    img: "/assets/images/team/balale/staff2.png" },
    { name: "Dindaa", 
    role: "Culture Research Analyst", 
    img: "/assets/images/team/balale/staff3.png" },
    { name: "Zahra", 
    role: "Communication Strategist", 
    img: "/assets/images/team/balale/staff4.png" },
    // { name: "Chandra", 
    // role: "UI/UX Designer", 
    // img: "/assets/images/team/balale/staff5.png" },
];

export default function StaffClient() {
  return (
    <main className="min-h-screen  text-[#1C2C4B] pt-28 md:pt-36 pb-24 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.05] bg-[url('/assets/backgrounds/batik.png')] bg-top bg-repeat" />

      <section className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">Balale Staff & Core Team</h1>
        <p className="mt-4 text-[#1C2C4B]/80 max-w-3xl mx-auto">
          Penggerak utama di balik layar Balale.id — mengelola riset, desain, komunikasi, dan implementasi inovasi.
        </p>
        <div className="mt-5 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-[#C0974D]" />
        </div>
      </section>

      <section className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {staffList.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden shadow-[0_10px_40px_rgba(28,44,75,0.1)] ring-1 ring-[#D9DFEA]/70 hover:ring-[#C0974D]/50 transition"
          >
            <Image src={s.img} alt={s.name} width={500} height={600} className="w-full h-72 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-[#C0974D] font-medium mt-1">{s.role}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
