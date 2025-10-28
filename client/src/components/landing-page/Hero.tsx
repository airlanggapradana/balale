"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-balale.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Traditional Indonesian games"
          className="h-full w-full object-cover"
        />
        <div className="from-background/5 via-background/80 absolute inset-0 bg-gradient-to-b to-orange-200" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16">
        <div className="animate-fade-in mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-orange-100/70 px-4 py-2 shadow-sm ring-1 ring-orange-200 transition-shadow hover:shadow-md">
            <span className="font-semibold text-orange-700">
              Lestarikan Budaya Indonesia
            </span>
          </div>

          <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Jelajahi Kekayaan
            <span className="mt-2 block bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Permainan Tradisional
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Platform lengkap untuk membeli kerajinan lokal, belajar sejarah
            permainan tradisional, dan bermain mini games yang menyenangkan.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-orange-500"
              onClick={() => router.push("/produk")}
            >
              Mulai Jelajahi
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("e-commerce")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8">
            <div className="animate-slide-in">
              <div className="text-primary mb-2 text-3xl font-bold md:text-4xl">
                50+
              </div>
              <div className="text-muted-foreground text-sm">Produk UMKM</div>
            </div>
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-primary mb-2 text-3xl font-bold md:text-4xl">
                15+
              </div>
              <div className="text-muted-foreground text-sm">Permainan</div>
            </div>
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-primary mb-2 text-3xl font-bold md:text-4xl">
                100+
              </div>
              <div className="text-muted-foreground text-sm">
                Artikel Sejarah
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
