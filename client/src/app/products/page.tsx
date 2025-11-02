"use client";
import React, { useCallback } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/utils/product-mock";
import type { Product } from "@/types/product.type";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value,
  );

type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url?: string;
  quantity: number;
};

const Products = () => {
  const addToCart = useCallback((product: Product) => {
    try {
      const raw = localStorage.getItem("cart");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const cart: CartItem[] = raw ? JSON.parse(raw) : [];

      const existing = cart.find((c) => c.id === product.id);
      if (existing) {
        // increase quantity but don't exceed stock
        existing.quantity = Math.min(existing.quantity + 1, product.stock);
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image_url: product.image_url,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      // silent fail for localStorage errors
      // optionally handle/report error
      console.error("Failed to update cart", err);
    }
  }, []);

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

                  <Button
                    disabled={product.stock === 0}
                    className="gap-2"
                    onClick={() => addToCart(product)}
                  >
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
