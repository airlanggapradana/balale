// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import Link from "next/link";

// export const Footer = () => {
//   return (
//     <footer className="bg-card border-border border-t py-12">
//       <div className="container mx-auto px-4">
//         <div className="mb-8 grid gap-8 md:grid-cols-4">
//           <div>
//             <div className="mb-4 flex items-center gap-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-orange-300">
//                 <span className="text-primary-foreground text-lg font-bold">
//                   B
//                 </span>
//               </div>
//               <span className="text-foreground text-xl font-bold">
//                 Balale.id
//               </span>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Melestarikan budaya Indonesia melalui teknologi dan kreativitas
//             </p>
//           </div>

//           <div>
//             <h3 className="text-foreground mb-4 font-semibold">Fitur</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="/products"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   E-Commerce
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#pembelajaran"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   Pembelajaran
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#permainan"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   Mini Games
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-foreground mb-4 font-semibold">Perusahaan</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   Tentang Kami
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   Tim
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   Kontak
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-foreground mb-4 font-semibold">Ikuti Kami</h3>
//             <div className="flex gap-3">
//               <a
//                 href="#"
//                 className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
//               >
//                 <Facebook className="h-4 w-4 text-white" />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
//               >
//                 <Instagram className="h-4 w-4 text-white" />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
//               >
//                 <Twitter className="h-4 w-4 text-white" />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
//               >
//                 <Youtube className="h-4 w-4 text-white" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-border text-muted-foreground border-t pt-8 text-center text-sm">
//           <p>© {new Date().getFullYear()} Balale.id. Semua hak dilindungi.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import BalaleLogo from "../../assets/images/logo/about-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3472ee] pt-16 pb-8 text-[#EEECE4]">
      {/* Aksen visual */}
      <div className="absolute inset-0 bg-linear-to-t from-[#060e30] via-[#060e30] to-[#060e30] opacity-95" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#C0974D]/20 mix-blend-overlay blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#077377]/20 mix-blend-overlay blur-3xl" />

      {/* Konten utama */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-4 md:px-12">
        {/* Kolom 1 - Logo & deskripsi */}
        <div>
          <Image
            src={BalaleLogo}
            alt="Balale.id Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="text-justify leading-relaxed text-[#EEECE4]/85">
            <strong>Balale.id</strong> adalah platform kolaboratif untuk
            edukasi, inovasi, dan pengembangan produk lokal berdaya saing
            global. Kami menjembatani budaya, teknologi, dan kreativitas
            generasi muda Indonesia untuk pelestarian dan kemajuan bersama.
          </p>
        </div>

        {/* Kolom 2 - Kantor */}
        <div>
          <h3 className="relative mb-4 text-lg font-semibold text-[#C0974D]">
            Kantor
            <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-[#C0974D]" />
          </h3>
          <a
            href="https://goo.gl/maps/9x18coXGCmSscKec6"
            target="_blank"
            rel="noreferrer"
            className="block text-justify text-[#EEECE4]/85 transition-colors duration-300 hover:text-[#C0974D]"
          >
            Jl. Wijilan No. 45, Panembahan, Kraton,
            <br /> Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131
          </a>

          <div className="mt-5 space-y-2">
            <a
              href="mailto:contact@balale.id"
              className="block text-[#EEECE4]/85 hover:text-[#C0974D]"
            >
              contact@balale.id
            </a>
            <a
              href="https://wa.me/+6282134567890"
              target="_blank"
              rel="noreferrer"
              className="block text-[#EEECE4]/85 hover:text-[#C0974D]"
            >
              +62 821 3456 7890
            </a>
          </div>
        </div>

        {/* Kolom 3 - Tautan */}
        <div>
          <h3 className="relative mb-4 text-lg font-semibold text-[#C0974D]">
            Tautan
            <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-[#C0974D]" />
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-[#C0974D]"
              >
                Beranda
              </Link>
            </li>
            <li>
              <a
                href="/about"
                className="transition-colors duration-300 hover:text-[#C0974D]"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="/ourteam"
                className="transition-colors duration-300 hover:text-[#C0974D]"
              >
                Tim
              </a>
            </li>
            <li>
              <Link
                href="/newsletter"
                className="transition-colors duration-300 hover:text-[#C0974D]"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <a
                href="/gallery"
                className="transition-colors duration-300 hover:text-[#C0974D]"
              >
                Galeri
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 4 - Newsletter */}
        <div>
          <h3 className="relative mb-4 text-lg font-semibold text-[#C0974D]">
            Newsletter
            <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-[#C0974D]" />
          </h3>

          <form
            action="https://formspree.io/f/xdoqokwb"
            method="POST"
            className="relative flex items-center"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-4 text-[#C0974D]"
            />
            <input
              type="email"
              name="email"
              placeholder="Masukkan Email"
              required
              className="w-full rounded-full border border-[#EEECE4]/20 bg-[#EEECE4]/10 py-3 pr-12 pl-10 text-[#EEECE4] placeholder-[#EEECE4]/60 focus:ring-2 focus:ring-[#C0974D] focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 rounded-full bg-[#C0974D] p-2.5 text-[#1C2C4B] transition-all duration-300 hover:bg-[#E9D2A0]"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          {/* Social Media */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/balale.id"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EEECE4]/10 p-2 transition-all duration-300 hover:bg-[#C0974D]"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[#EEECE4]" />
            </a>
            <a
              href="https://www.youtube.com/@balaleid"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EEECE4]/10 p-2 transition-all duration-300 hover:bg-[#C0974D]"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-[#EEECE4]" />
            </a>
            <a
              href="https://www.tiktok.com/@balale.id"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EEECE4]/10 p-2 transition-all duration-300 hover:bg-[#C0974D]"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-[#EEECE4]" />
            </a>
            <a
              href="https://www.linkedin.com/company/balaleid"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EEECE4]/10 p-2 transition-all duration-300 hover:bg-[#C0974D]"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-[#EEECE4]" />
            </a>
            <a
              href="https://www.facebook.com/balale.id"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EEECE4]/10 p-2 transition-all duration-300 hover:bg-[#C0974D]"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-[#EEECE4]" />
            </a>
          </div>
        </div>
      </div>

      <hr className="container mx-auto my-8 border-[#EEECE4]/20" />

      {/* Footer bawah */}
      <div className="text-center text-sm text-[#ffffff]">
        © {new Date().getFullYear()} <strong>Balale.id</strong> — Platform
        Inovasi & Kebudayaan. Dikembangkan oleh{" "}
        <span className="font-semibold text-[#ffffff]">Balale IT Division</span>
        .
      </div>
    </footer>
  );
}
