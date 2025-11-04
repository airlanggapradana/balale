"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BalaleLogo from "../../assets/images/logo/about-logo.svg";
import { usePathname, useRouter } from "next/navigation";
import {
  LogIn,
  LogOut,
  Menu,
  ShoppingCart,
  X,
  ChevronDown,
  Home,
} from "lucide-react";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<Record<string, boolean>>({});

  const updateAuthState = useCallback(() => {
    try {
      setIsLoggedIn(Boolean(localStorage.getItem("currentUser")));
    } catch {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    updateAuthState();
    const onStorage = () => updateAuthState();
    const onAuthChange = () => updateAuthState();
    window.addEventListener("storage", onStorage);
    window.addEventListener("authChange", onAuthChange);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("authChange", onAuthChange);
    };
  }, [updateAuthState]);

  useEffect(() => {
    updateAuthState();
    setMobileOpen(false);
    setOpenSub({});
  }, [pathname, updateAuthState]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const toggleSub = (k: string) => setOpenSub((s) => ({ ...s, [k]: !s[k] }));

  return (
    // Mobile: gelap; Desktop: putih
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-[#0F223B] text-white backdrop-blur md:bg-white md:text-[#1C2C4B]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Brand */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white md:bg-transparent">
            <Image
              src={BalaleLogo as string}
              alt="Balale Logo"
              className="object-contain"
              priority
              width={36}
              height={36}
            />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white md:text-[#1C2C4B]">Balale</span>
            <span className="text-[#C0974D]">.</span>
            <span className="text-[#C0974D]">id</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D] flex items-center gap-2`}
          >
            <Home className="h-4 w-4" /> Home
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/about") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            About
          </Link>

          <Link
            href="/education"
            aria-current={isActive("/education") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/education") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Education
          </Link>

          <Link
            href="/products"
            aria-current={isActive("/products") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/products") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Product
          </Link>

          {/* Our Team */}
          <div className="group relative">
            <button className="flex items-center gap-1 font-bold text-gray-700 transition-colors hover:text-[#C0974D]">
              Our Team <ChevronDown className="h-4 w-4" />
            </button>

            <ul className="invisible absolute left-0 mt-2 min-w-56 rounded-lg border bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <li>
                <Link
                  href="/team"
                  className="block rounded-md px-3 py-2 text-center font-semibold text-gray-900 transition-all duration-300 hover:bg-[#EEECE4] hover:text-[#C0974D]"
                >
                  Balale Expert Team
                </Link>
              </li>
              <li>
                <Link
                  href="/team/staff"
                  className="block rounded-md px-3 py-2 text-center font-semibold text-gray-900 transition-all duration-300 hover:bg-[#EEECE4] hover:text-[#C0974D]"
                >
                  Balale Staff
                </Link>
              </li>
            </ul>
          </div>

          {/* <Link
            href="/newsletter"
            aria-current={isActive("/newsletter") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/newsletter") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Newsletter
          </Link> */}

          {/* Gallery */}
          <div className="group relative">
            <button className="flex items-center gap-1 font-semibold text-gray-700 transition-colors hover:text-[#C0974D]">
              Gallery <ChevronDown className="h-4 w-4" />
            </button>
            <ul className="invisible absolute left-0 mt-2 min-w-56 rounded-lg border bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <li>
                <Link
                  href="/galleryphoto"
                  className="block rounded-md px-3 py-2 text-gray-700 hover:text-[#C0974D]"
                >
                  Photo Events
                </Link>
              </li>
              <li>
                <Link
                  href="/galleryvideo"
                  className="block rounded-md px-3 py-2 text-gray-700 hover:text-[#C0974D]"
                >
                  Video Events
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/faqpage"
            aria-current={isActive("/faqpage") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/faqpage") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            FAQ
          </Link>

          <Link
            href="/contactpage"
            aria-current={isActive("/contactpage") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/contactpage") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => router.push("/carts")}
                className="rounded-md px-3 py-2 hover:bg-orange-50"
              >
                <ShoppingCart className="h-5 w-5 text-[#1C2C4B]" />
              </button>
              <button
                className="rounded-md bg-[#C0974D] px-3 py-2 text-white hover:bg-[#bc9c61]"
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  window.dispatchEvent(new Event("authChange"));
                }}
              >
                <LogOut />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/auth")}
                className="flex items-center gap-2 rounded-md border border-[#EEECE4] bg-white px-3 py-2 text-[#1C2C4B] transition hover:bg-[#EEECE4]/70"
              >
                <LogIn className="h-4 w-4" />
                Masuk
              </button>
              <button
                onClick={() => router.push("/auth")}
                className="rounded-md bg-[#C0974D] px-3 py-2 text-white hover:bg-[#826122]"
              >
                Daftar
              </button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-xl p-2.5 text-white ring-1 ring-white/20 transition hover:bg-white/10 active:scale-95 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-60 md:hidden ${
          mobileOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay gelap */}
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel: SOLID biru tua, bukan transparan */}
        <aside
          className={`absolute left-0 top-0 h-full w-[84%] max-w-sm
          bg-[#0F223B] text-[#F3F5F9]
          ring-1 ring-white/10
          shadow-[0_24px_80px_rgba(0,0,0,0.65)]
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Image
                  src={BalaleLogo as string}
                  alt="Balale Logo"
                  width={22}
                  height={22}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Balale</span>
                <span className="text-[#C0974D]">.</span>
                <span className="text-[#C0974D]">id</span>
              </span>
            </div>

            <button
              className="rounded-xl bg-white/10 p-2.5 text-white ring-1 ring-white/15 transition hover:bg-white/20 active:scale-95"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav list */}
          <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto p-3">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <Home className="h-4 w-4 text-white" /> Home
                </Link>
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li>

              <li>
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li>

              {/* Accordion: Our Team */}
              <li>
                <button
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => toggleSub("team")}
                  aria-expanded={!!openSub.team}
                >
                  <span>Our Team</span>
                  <ChevronDown
                    className={`h-4 w-4 text-white transition-transform ${
                      openSub.team ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSub.team && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                    <li>
                      <Link
                        href="/team"
                        className="block rounded-md px-3 py-2 text-center text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        Balale Expert Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team/staff"
                        className="block rounded-md px-3 py-2 text-center text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        Balale Staff
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li>

              {/*<li>
                 <Link
                  href="/newsletter"
                  className="block rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Newsletter
                </Link>
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li> */}

              {/* Accordion: Gallery */}
              <li>
                <button
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => toggleSub("gallery")}
                  aria-expanded={!!openSub.gallery}
                >
                  <span>Gallery</span>
                  <ChevronDown
                    className={`h-4 w-4 text-white transition-transform ${
                      openSub.gallery ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSub.gallery && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                    <li>
                      <Link
                        href="/gallery/photos"
                        className="block rounded-md px-3 py-2 text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        Photo Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery/videos"
                        className="block rounded-md px-3 py-2 text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        Video Events
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li>

              <li>
                <Link
                  href="/faqpage"
                  className="block rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  FAQ
                </Link>
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li>

              <li>
                <Link
                  href="/contactpage"
                  className="block rounded-md px-3 py-3 font-semibold text-white/90 hover:bg-[#C0974D]/15 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="mx-3 mt-2 border-b border-white/10" />
              </li>

              {/* Actions */}
              <li className="mt-3 flex gap-2 border-t border-white/10 pt-3">
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => {
                        router.push("/carts");
                        setMobileOpen(false);
                      }}
                      className="flex-1 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 font-semibold text-white transition hover:bg-white/10"
                    >
                      <span className="inline-flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5 text-white" />
                        Carts
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        localStorage.removeItem("currentUser");
                        window.dispatchEvent(new Event("authChange"));
                        setMobileOpen(false);
                      }}
                      className="flex-1 rounded-md bg-[#C0974D] px-3 py-2 font-semibold text-white transition hover:bg-[#a7813b]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <LogOut className="h-5 w-5" /> Logout
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        router.push("/auth");
                        setMobileOpen(false);
                      }}
                      className="flex-1 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 font-semibold text-white transition hover:bg-white/10"
                    >
                      <span className="inline-flex items-center gap-2">
                        <LogIn className="h-5 w-5 text-white" /> Masuk
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        router.push("/auth");
                        setMobileOpen(false);
                      }}
                      className="flex-1 rounded-md bg-[#C0974D] px-3 py-2 font-semibold text-white transition hover:bg-[#a7813b]"
                    >
                      Daftar
                    </button>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
