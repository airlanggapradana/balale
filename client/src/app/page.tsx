import {
  // Hero,
  About,
  VisionMission,
  Curation,
  Event,
  NationalAffiliation,
  InternationalAffiliation,
  MediaPartner,
  Newsletter,
} from "@/components/home";

export const metadata = {
  title: "Balale.id – Edukasi, Inovasi, Kolaborasi",
  description:
    "Platform kolaboratif untuk edukasi, inovasi, dan pengembangan produk lokal berdaya saing global.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 overflow-hidden">
      {/* <Hero /> */}
      <About />
      <VisionMission />
      <Curation />
      <Event />
      <NationalAffiliation />
      {/*<InternationalAffiliation />*/}
      <MediaPartner />
      <Newsletter />
    </main>
  );
}
