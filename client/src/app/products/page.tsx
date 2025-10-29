import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product.type";

const products: Product[] = [
  {
    id: "p-001",
    image_url: "https://picsum.photos/seed/p1/800/600",
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
    image_url: "https://picsum.photos/seed/p2/800/600",
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
    image_url: "https://picsum.photos/seed/p3/800/600",
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
    image_url: "https://picsum.photos/seed/p4/800/600",
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
    image_url: "https://picsum.photos/seed/p5/800/600",
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
    image_url: "https://picsum.photos/seed/p6/800/600",
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

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value,
  );

const Products = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Produk UMKM
          </h1>
          <p className="text-muted-foreground text-lg">
            Dukung pengrajin lokal dengan berbelanja langsung dari mereka
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-hover overflow-hidden transition-all"
            >
              <div className="bg-muted relative h-64 overflow-hidden">
                {product.image_url && (
                  <Image
                    src={product.image_url}
                    width={800}
                    height={600}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <Badge className="absolute top-4 left-4">
                  {product.category}
                </Badge>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {product.description}
                  </p>
                </div>

                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {product.craftsman_name}, {product.craftsman_location}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <div className="text-primary text-2xl font-bold">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Stok: {product.stock}
                    </div>
                  </div>

                  <Button disabled={product.stock === 0} className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    {product.stock > 0 ? "Tambah" : "Habis"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">Belum ada produk tersedia</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
