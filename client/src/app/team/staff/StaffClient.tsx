"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import rangga from "@/assets/Tim Inti (core)/Rangga.webp";
import aura from "@/assets/Tim Inti (core)/Aura.webp";
import shafwan from "@/assets/Tim Inti (core)/Shafwan.webp";
import sulthon from "@/assets/Tim Inti (core)/Sulthon.webp";
import eldina from "@/assets/Tim Inti (core)/Eldina.webp";

const staffList = [
  { name: "Aura", role: "Founder", img: aura },
  { name: "Eldina", role: "Culture Research Analyst", img: eldina },
  { name: "Rangga", role: "Software Engineer", img: rangga },
  { name: "Sulthon", role: "Software Engineer", img: sulthon },
  { name: "Shafwan", role: "Software Engineer", img: shafwan },
];

export default function StaffClient() {
  return (
    <div className="relative min-h-screen w-full bg-white pt-28 pb-24">
      {/* Noise Texture Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-extrabold text-[#1C2C4B] md:text-5xl">
            Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#1C2C4B]/80">
            Meet the people behind Balale
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#C0974D]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {staffList.map((staff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Card container with border effect */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C0974D]/20 via-white to-[#1C2C4B]/10 p-1 transition-all duration-500 hover:shadow-2xl">
                {/* Inner card */}
                <div className="relative overflow-hidden rounded-[22px] bg-white">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={staff.img}
                      alt={staff.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C4B] via-[#1C2C4B]/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    {/* Text overlay */}
                    <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold drop-shadow-lg">
                        {staff.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/90 drop-shadow-md">
                        {staff.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-[#C0974D] via-[#C0974D]/60 to-transparent" />
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-2 -right-2 h-8 w-8 border-t-4 border-r-4 border-[#C0974D] opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-2 -left-2 h-8 w-8 border-b-4 border-l-4 border-[#C0974D] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
