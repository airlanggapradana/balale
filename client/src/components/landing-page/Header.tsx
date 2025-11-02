"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateAuthState = useCallback(() => {
    try {
      setIsLoggedIn(Boolean(localStorage.getItem("currentUser")));
    } catch {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // initial check
    updateAuthState();

    // update on storage events (other tabs) and custom authChange events (same tab)
    const onStorage = () => updateAuthState();
    const onAuthChange = () => updateAuthState();

    window.addEventListener("storage", onStorage);
    window.addEventListener("authChange", onAuthChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("authChange", onAuthChange);
    };
  }, [updateAuthState]);

  // also re-check when route changes (optional)
  useEffect(() => {
    updateAuthState();
  }, [pathname, updateAuthState]);

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
            className={`font-semibold transition-colors ${pathname === "/" ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}
          >
            Beranda
          </Link>
          <Link
            href={"/products"}
            className={`font-semibold transition-colors ${pathname === "/products" ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}
          >
            Produk
          </Link>
          <Link
            href={"#about"}
            className={`font-semibold transition-colors ${pathname === "/about" ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                size="default"
                onClick={() => router.push("/carts")}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button
                size={"default"}
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  localStorage.removeItem("users");
                  window.location.reload();
                }}
              >
                <LogOut />
              </Button>
            </>
          ) : (
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
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
