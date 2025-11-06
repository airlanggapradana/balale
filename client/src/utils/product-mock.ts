import type { Product } from "@/types/product.type";
import product1 from "@/assets/products/Gemini_Generated_Image_2klt182klt182klt.webp";
import product2 from "@/assets/products/Gemini_Generated_Image_jp4bztjp4bztjp4b.webp";
import product3 from "@/assets/products/Gemini_Generated_Image_9ak5i9ak5i9ak5i9.webp";
import product4 from "@/assets/products/Gemini_Generated_Image_ndr2twndr2twndr2.webp";
import product5 from "@/assets/products/Gemini_Generated_Image_i0nafi0nafi0nafi.webp";
import product6 from "@/assets/products/Gemini_Generated_Image_pakfvepakfvepakf.webp";

export const products: Product[] = [
  {
    id: "p-001",
    image_url: product1,
    category: "Kerajinan Kayu",
    name: "Talenan Balok Kayu Jati",
    description:
      "Talenan solid dari kayu jati, tahan lama dan ramah lingkungan. Cocok untuk dapur modern.",
    craftsman_name: "Pak Budi",
    craftsman_location: "Sukabumi, Jawa Barat",
    price: 85000,
    stock: 12,
  },
  {
    id: "p-002",
    image_url: product2,
    category: "Tenun",
    name: "Syal Tenun Tradisional",
    description:
      "Syal tenun tangan dengan motif etnik, lembut dan hangat, dibuat oleh pengrajin lokal.",
    craftsman_name: "Ibu Sari",
    craftsman_location: "Bima, Nusa Tenggara Barat",
    price: 120000,
    stock: 5,
  },
  {
    id: "p-003",
    image_url: product3,
    category: "Keramik",
    name: "Cangkir Kopi Handmade",
    description:
      "Cangkir keramik bentuk ergonomis, glasir alami, setiap buah unik karena proses handmade.",
    craftsman_name: "Pak Agus",
    craftsman_location: "Sleman, Yogyakarta",
    price: 65000,
    stock: 0,
  },
  {
    id: "p-004",
    image_url: product4,
    category: "Aksesori",
    name: "Gantungan Kunci Batik",
    description:
      "Gantungan kunci motif batik, kecil dan ringan — cocok untuk suvenir atau oleh-oleh.",
    craftsman_name: "Ibu Wati",
    craftsman_location: "Solo, Jawa Tengah",
    price: 25000,
    stock: 40,
  },
  {
    id: "p-005",
    image_url: product5,
    category: "Kuliner",
    name: "Sambal Buatan Rumah",
    description:
      "Sambal pedas manis khas resep turun-temurun, dikemas higienis untuk oleh-oleh.",
    craftsman_name: "Pak Hadi",
    craftsman_location: "Padang, Sumatera Barat",
    price: 45000,
    stock: 20,
  },
  {
    id: "p-006",
    image_url: product6,
    category: "Kulit",
    name: "Dompet Kulit Minimalis",
    description:
      "Dompet kulit buatan tangan dengan jahitan rapi, desain tipis untuk kantong depan.",
    craftsman_name: "Pak Ahmad",
    craftsman_location: "Bandung, Jawa Barat",
    price: 175000,
    stock: 7,
  },
];
