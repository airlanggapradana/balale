import React from "react";
import { Eye, Target, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    icon: <Eye className="h-8 w-8 text-blue-600" />,
    title: "Vision",
    description: "Visi Kami",
    content:
      "Menjadi platform digital pelestarian budaya yang menghubungkan warisan permainan tradisional Indonesia dengan teknologi modern untuk memperkuat identitas bangsa.",
  },
  {
    icon: <Target className="h-8 w-8 text-green-600" />,
    title: "Mission",
    description: "Misi Kami",
    content: [
      "Mendigitalisasi permainan tradisional Indonesia agar mudah diakses oleh masyarakat luas.",
      "Memberdayakan pengrajin kriya lokal melalui pemasaran produk berbasis web.",
      "Menyediakan media pembelajaran budaya yang interaktif dan menyenangkan.",
      "Menumbuhkan kebanggaan generasi muda terhadap nilai-nilai budaya Indonesia.",
    ],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    title: "Goals",
    description: "Tujuan Kami",
    content: [
      "Meningkatkan kesadaran masyarakat terhadap pentingnya pelestarian permainan tradisional.",
      "Membuka akses pasar baru bagi pengrajin kriya permainan tradisional.",
      "Mengintegrasikan pembelajaran budaya ke dalam ekosistem digital pendidikan.",
      "Membangun komunitas budaya yang kolaboratif, kreatif, dan berkelanjutan.",
    ],
  },
];

const About = () => {
  return (
    <div
      id={"about"}
      className="to-bg-card min-h-screen bg-linear-to-b from-gray-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* About Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-100">About Us</h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
            Balale.id menghidupkan kembali permainan tradisional Indonesia lewat
            teknologi. Kami memberdayakan pengrajin lokal, mengenalkan budaya
            lewat mini games dan pembelajaran interaktif, serta menjaga agar
            warisan Indonesia tetap hidup di era digital.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="border-t-4 border-t-transparent transition-shadow duration-300 hover:border-t-orange-500 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4">{card.icon}</div>
                <CardTitle className="text-2xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {Array.isArray(card.content) ? (
                  <ol className="list-inside list-decimal space-y-2">
                    {card.content.map((item, i) => (
                      <li key={i} className="leading-relaxed text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="leading-relaxed text-gray-600">
                    {card.content}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
