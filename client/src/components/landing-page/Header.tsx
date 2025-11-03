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
    <header className="fixed inset-x-0 top-0 z-50 bg-white backdrop-blur-md border-b text-[#1C2C4B]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Brand */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
            <Image
              src={BalaleLogo as string}
              alt="Balale Logo"
              className="object-contain"
              priority
              width={50}
              height={50}
            />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span style={{ color: "#1C2C4B" }}>Balale</span>
            <span style={{ color: "#C0974D" }}>.</span>
            <span style={{ color: "#C0974D" }}>id</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
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
              isActive("/calenderevent") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Education
          </Link>

          <Link
            href="/products"
            aria-current={isActive("/e-commerce") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/e-commerce") ? "text-[#C0974D]" : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Product
          </Link>

          {/* Our Team */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-bold text-gray-700 hover:text-[#C0974D] transition-colors">
              Our Team <ChevronDown className="h-4 w-4" />
            </button>
            <ul className="invisible absolute left-0 mt-2 min-w-56 rounded-lg border bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <li>
                <Link
                  href="/expertteam"
                  className="block rounded-md px-3 py-2 text-gray-950 hover:bg-orange-50 hover:text-[#C0974D] text-center"
                >
                  Balale Expert Team
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/newsletterpage"
            aria-current={isActive("/newsletterpage") ? "page" : undefined}
            className={`font-semibold transition-colors ${
              isActive("/newsletterpage")
                ? "text-[#C0974D]"
                : "text-gray-700"
            } hover:text-[#C0974D]`}
          >
            Newsletter
          </Link>

          {/* Gallery */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#C0974D] transition-colors">
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
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => router.push("/carts")}
                className="rounded-md px-3 py-2 hover:bg-orange-50"
              >
                <ShoppingCart className="h-5 w-5 text-[#1C2C4B]" />
              </button>
              <button
                className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
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
              {/* ✅ fix warna tombol Masuk */}
              <button
                onClick={() => router.push("/auth")}
                className="rounded-md border border-[#EEECE4] bg-white px-3 py-2 text-[#1C2C4B] hover:bg-[#EEECE4]/70 flex items-center gap-2 transition"
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
          className="md:hidden rounded-xl p-2.5 bg-[#1C2C4B]/90 text-white shadow-sm hover:shadow-md ring-1 ring-[#1C2C4B]/30 transition active:scale-95"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {/* Mobile drawer */}
        <div
          className={`fixed inset-0 z-60 md:hidden ${mobileOpen ? "visible" : "invisible"}`}
          aria-hidden={!mobileOpen}
        >
          {/* Overlay (lebih tebal) */}
          <div
            className={`absolute inset-0 transition-opacity ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <aside
            className={`absolute left-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-2xl
            transition-transform duration-300 ease-in-out
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
            role="dialog"
            aria-modal="true"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg p-0.5"
                  style={{ backgroundImage: "linear-gradient(135deg, #C0974D, #1C2C4B)" }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
                    <Image
                      src="/assets/images/logo/about-logo.png"
                      alt="Balale Logo"
                      width={22}
                      height={22}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  <span style={{ color: "#C0974D" }}>Balale</span>
                  <span style={{ color: "#C0974D" }}>.</span>
                  <span style={{ color: "#3E6398" }}>id</span>
                </span>
              </div>

              {/* Close (bg tebal) */}
              <button
                className="
                  rounded-xl p-2.5
                  bg-[#1C2C4B]/90 text-white
                  shadow-sm hover:shadow-md
                  transition active:scale-95
                "
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="p-3 overflow-y-auto max-h-[calc(100vh-4rem)]">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Home className="h-4 w-4 text-[#1C2C4B]" /> Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/About"
                    className="block rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>
                </li>

                {/* Accordion: Our Team */}
                <li>
                  <button
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                    onClick={() => toggleSub("team")}
                    aria-expanded={!!openSub.team}
                  >
                    <span>Our Team</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1C2C4B] transition-transform ${
                        openSub.team ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSub.team && (
                    <ul className="ml-3 mt-1 space-y-1 border-l pl-3 border-[#EEECE4]">
                      <li>
                        <Link
                          href="/ExpertTeam"
                          className="block rounded-md px-3 py-2 hover:bg-[#EEECE4] text-center"
                          onClick={() => setMobileOpen(false)}
                        >
                          Balale Expert Team
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/NewsletterPage"
                    className="block rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Newsletter
                  </Link>
                </li>

                {/* Accordion: Gallery */}
                <li>
                  <button
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                    onClick={() => toggleSub("gallery")}
                    aria-expanded={!!openSub.gallery}
                  >
                    <span>Gallery</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1C2C4B] transition-transform ${
                        openSub.gallery ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSub.gallery && (
                    <ul className="ml-3 mt-1 space-y-1 border-l pl-3 border-[#EEECE4]">
                      <li>
                        <Link
                          href="/GalleryPhoto"
                          className="block rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                          onClick={() => setMobileOpen(false)}
                        >
                          Photo Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/GalleryVideo"
                          className="block rounded-md px-3 py-2 hover:bg-[#EEECE4]"
                          onClick={() => setMobileOpen(false)}
                        >
                          Video Events
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li><Link href="/FaqPage" className="block rounded-md px-3 py-2 hover:bg-[#EEECE4]" onClick={() => setMobileOpen(false)}>FAQ</Link></li>
                <li><Link href="/ContactPage" className="block rounded-md px-3 py-2 hover:bg-[#EEECE4]" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>

                {/* Actions */}
                <li className="mt-3 border-t border-[#EEECE4] pt-3 flex gap-2">
                  {isLoggedIn ? (
                    <>
                      <button
                        onClick={() => { router.push("/carts"); setMobileOpen(false); }}
                        className="flex-1 rounded-md border border-[#EEECE4] px-3 py-2 hover:bg-[#EEECE4] flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="h-5 w-5 text-[#1C2C4B]" /> Carts
                      </button>
                      <button
                        onClick={() => { localStorage.removeItem("currentUser"); window.dispatchEvent(new Event("authChange")); setMobileOpen(false); }}
                        className="flex-1 rounded-md bg-[#C0974D] text-white px-3 py-2 hover:bg-[#1C2C4B] transition"
                      >
                        <LogOut className="mr-2 inline h-5 w-5" /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => { router.push("/auth"); setMobileOpen(false); }}
                        className="flex-1 rounded-md border border-[#EEECE4] px-3 py-2 hover:bg-[#EEECE4] flex items-center justify-center gap-2"
                      >
                        <LogIn className="h-5 w-5 text-[#1C2C4B]" /> Masuk
                      </button>
                      <button
                        onClick={() => { router.push("/auth"); setMobileOpen(false); }}
                        className="flex-1 rounded-md bg-[#1C2C4B] text-white px-3 py-2 hover:bg-[#C0974D] transition"
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


        
