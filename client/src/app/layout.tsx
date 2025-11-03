import "@/styles/globals.css";
import { type Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/landing-page/Header";
import Footer  from "@/components/landing-page/Footer";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

// Metadata global website
export const metadata: Metadata = {
  title: "Balale.id",
  description: "Platform ekosistem berkelanjutan",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Balale.id",
    description: "Ekosistem digital berkelanjutan.",
    url: "https://balale.id",
    siteName: "Balale.id",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Balale.id Logo" }],
    locale: "id_ID",
    type: "website",
  },
};

// Font Google Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// Root Layout (Global Wrapper)
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body className="bg-[#EEECE4] text-[#1C2C4B] antialiased">
        {/* Parallax global */}
        <ParallaxBackground
          disabledOnMobile={false}
          layers={[
            
            {
              src: "/assets/backgrounds/batik.png",   
              speed: 0.06,
              opacity: 0.18,
              className:
                "inset-0 w-full h-full md:w-full md:h-full",
            },
          ]}
        />

        <div className="min-h-screen relative z-10 flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
