"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push("/")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-300">
            <span className="text-primary-foreground text-lg font-bold">B</span>
          </div>
          <span className="text-xl font-bold text-gray-700">Balale.id</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href={"/"}
            className={`font-semibold transition-colors ${pathname === "/" ? "text-orange-500" : "text-gray-500"} hover:text-orange-500`}
          >
            Beranda
          </Link>
          <Link
            href={"/products"}
            className={`font-semibold transition-colors ${pathname === "/products" ? "text-orange-500" : "text-gray-500"} hover:text-orange-500`}
          >
            Produk
          </Link>
          <Link
            href={"/about"}
            className={`font-semibold transition-colors ${pathname === "/about" ? "text-orange-500" : "text-gray-500"} hover:text-orange-500`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <>
            <Button
              variant="outline"
              className="hidden md:flex"
              onClick={() => router.push("/auth")}
            >
              Masuk
              <LogIn />
            </Button>
            <Button onClick={() => router.push("/auth")}>Daftar</Button>
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
