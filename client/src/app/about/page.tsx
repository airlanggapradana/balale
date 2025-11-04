import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Balale.id",
  description:
    "Balale.id adalah platform kolaboratif untuk edukasi budaya, inovasi, dan pengembangan produk lokal berdaya saing global. Kenali visi, misi, dan ekosistem kami.",
};

export default function AboutPage() {
  return <AboutContent />;
}
