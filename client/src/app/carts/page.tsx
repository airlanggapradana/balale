"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url?: string;
  quantity: number;
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value,
  );

const STORAGE_KEY = "cart";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parsed: CartItem[] = raw ? JSON.parse(raw) : [];
      setCart(parsed);
    } catch (err) {
      console.error("Failed to read cart from localStorage", err);
      setCart([]);
    }
  }, []);

  const saveCart = useCallback((next: CartItem[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.error("Failed to write cart to localStorage", err);
    }
    setCart(next);
  }, []);

  const increment = useCallback(
    (id: string) => {
      const next = cart.map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it,
      );
      saveCart(next);
    },
    [cart, saveCart],
  );

  const decrement = useCallback(
    (id: string) => {
      const next = cart
        .map((it) => (it.id === id ? { ...it, quantity: it.quantity - 1 } : it))
        .filter((it) => it.quantity > 0);
      saveCart(next);
    },
    [cart, saveCart],
  );

  const removeItem = useCallback(
    (id: string) => {
      const next = cart.filter((it) => it.id !== id);
      saveCart(next);
    },
    [cart, saveCart],
  );

  const total = useMemo(
    () => cart.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [cart],
  );

  if (cart.length === 0) {
    return (
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-foreground mb-6 text-3xl font-bold">Keranjang</h1>
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">Keranjang Anda kosong</p>
        </Card>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-foreground mb-6 text-3xl font-bold">Keranjang</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="flex items-center gap-4 p-4">
              {item.image_url && (
                <div className="relative h-32 w-40 shrink-0">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={160}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-foreground font-semibold">
                      {item.name}
                    </h3>
                    <div className="text-muted-foreground text-sm">
                      {formatPrice(item.price)} each
                    </div>
                  </div>

                  <Button variant="ghost" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <Button size="sm" onClick={() => decrement(item.id)}>
                    <Minus className="h-4 w-4" />
                  </Button>

                  <div className="min-w-8 text-center">
                    {item.quantity}
                  </div>

                  <Button size="sm" onClick={() => increment(item.id)}>
                    <Plus className="h-4 w-4" />
                  </Button>

                  <div className="ml-auto font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <aside>
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-lg font-bold">{formatPrice(total)}</span>
            </div>

            <Button className="w-full">Checkout</Button>
          </Card>
        </aside>
      </div>
    </main>
  );
};

export default CartPage;
