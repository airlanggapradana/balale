import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

// --- SEO ---
export const metadata: Metadata = {
  title: "Newsletter — Balale.id",
  description:
    "Kabar terbaru Balale: artikel budaya, kurasi event, rilis produk, dan highlight komunitas. Berlangganan gratis.",
};

// --- Data dummy edisi terbaru (boleh ganti dari CMS/JSON) ---
const ISSUES = [
  {
    year: 2025,
    slug: "edisi-01-event-calendar",
    title: "Edisi 01 — Event Calendar 2025",
    summary:
      "Rangkuman agenda Balale semester ini, highlight festival budaya, dan peluang kolaborasi.",
    cover: "/assets/images/newsletter/issue-01.jpg", // taruh file di /public/assets/images/newsletter
    date: "Jan 2025",
  },
  {
    year: 2025,
    slug: "edisi-02-kurasi-produk-lokal",
    title: "Edisi 02 — Kurasi Produk Lokal",
    summary:
      "Kurasi produk kriya pilihan, kisah perajin, dan update inisiatif keberlanjutan.",
    cover: "/assets/images/newsletter/issue-02.jpg",
    date: "Mar 2025",
  },
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-white to-[#F3EFE6]" />
        <div className="container relative mx-auto px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1C2C4B]">
              Newsletter Balale
            </h1>
            <p className="mt-4 text-[#1C2C4B]/70 text-lg leading-relaxed">
              Dapatkan kabar terbaru seputar edukasi budaya, kurasi, event,
              dan cerita komunitas. Ringkas, bermakna, gratis tiap periode.
            </p>
            <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-[#C0974D]" />
          </div>

          {/* Form subscribe */}
          <form
            action="https://formspree.io/f/xoqoddrr"
            method="POST"
            className="mx-auto mt-10 flex w-full max-w-xl items-center gap-2 rounded-full bg-white/90 p-2 ring-1 ring-[#E7E7EC] backdrop-blur"
          >
            <div className="pl-3 pr-1 text-[#1C2C4B]/80">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email kamu"
              required
              className="flex-1 rounded-full bg-transparent px-2 py-3 text-[#1C2C4B] placeholder-[#1C2C4B]/40 outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C0974D] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1C2C4B]"
            >
              Langganan
              <ArrowRight className="h-4 w-4 transition translate-x-0 group-hover:translate-x-0.5" />
            </button>
          </form>

          <p className="mt-3 text-center text-sm text-[#1C2C4B]/60">
            Kami menjaga privasi Anda. Bisa berhenti berlangganan kapan saja.
          </p>
        </div>
      </section>

      {/* Edisi terbaru */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2C4B]">
              Edisi Terbaru
            </h2>
            <p className="text-[#1C2C4B]/60">
              Arsip lengkap tersedia per tahun & per edisi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ISSUES.map((item) => (
            <Link
              key={`${item.year}-${item.slug}`}
              href={`/newsletter/${item.year}/${item.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-[#E7E7EC] overflow-hidden shadow-[0_8px_30px_rgba(28,44,75,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(28,44,75,0.15)]"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-[#C0974D]">
                  {item.date}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-[#1C2C4B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#1C2C4B]/70 line-clamp-2">
                  {item.summary}
                </p>
                <span className="mt-4 inline-block h-[3px] w-0 rounded-full bg-linear-to-r from-[#C0974D] to-[#E9D2A0] transition-all duration-500 group-hover:w-24" />
              </div>
            </Link>
          ))}
          {/* Kartu “lihat semua arsip” */}
          <Link
            href="/newsletter/2025/arsip"
            className="rounded-2xl grid place-content-center gap-2 bg-white ring-1 ring-[#E7E7EC] p-6 text-center text-[#1C2C4B] shadow-[0_8px_30px_rgba(28,44,75,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(28,44,75,0.15)]"
          >
            <span className="text-4xl">🗂️</span>
            <div className="font-semibold">Lihat Arsip 2025</div>
            <div className="text-sm text-[#1C2C4B]/70">
              Semua edisi dalam satu tempat
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
