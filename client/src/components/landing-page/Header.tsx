"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push("/")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-300">
            <span className="text-primary-foreground text-lg font-bold">B</span>
          </div>
          <span className="text-xl font-bold text-gray-100">Balale.id</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href={"/"}
            className="font-semibold text-gray-100 transition-colors hover:text-orange-500"
          >
            Beranda
          </a>
          <a
            href={"/produk"}
            className="font-semibold text-gray-100 transition-colors hover:text-orange-500"
          >
            Produk
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              onClick={() => router.push("/auth/login")}
            >
              Masuk
            </Button>
            <Button size="sm" onClick={() => router.push("/auth/register")}>
              Daftar
            </Button>
          </>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
