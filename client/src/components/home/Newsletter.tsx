"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import BalaleLogo from "../../assets/images/logo/about-logo.png";

export default function Newsletter() {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Glass Card Wrapper */}
        <div
          className="
            mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 
            rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md 
            shadow-[0_10px_40px_rgba(28,44,75,0.12)]
            px-8 py-12 transition-all duration-500
            hover:shadow-[0_20px_60px_rgba(28,44,75,0.25)]
            hover:border-[#C0974D]/50 hover:bg-linear-to-br hover:from-[#FFFFFF]/20 hover:to-[#F9F5EE]/30
          "
        >
          {/* Left Logo */}
          <div className="flex flex-col items-center justify-center lg:w-1/3 text-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src={BalaleLogo}
                alt="Balale Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#1C2C4B]">Balale.id</h2>
            <p className="text-[#C0974D] font-medium">Sustainable Ecosystem Platform</p>
          </div>

          {/* Right Newsletter Form */}
          <div className="flex flex-col lg:w-2/3 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C2C4B] mb-3">
              Subscribe Newsletter
            </h1>
            <p className="text-gray-700 max-w-2xl mb-6">
              Join thousands of people who are already benefiting from our updates.
              Subscribe to receive the latest news, insights, and cultural stories from Balale.
            </p>

            {/* Form */}
            <form
              action="https://formspree.io/f/xoqoddrr"
              method="POST"
              className="
                flex w-full max-w-lg mx-auto lg:mx-0 items-center
                rounded-full overflow-hidden bg-white/90 shadow-inner
                ring-1 ring-[#E7E7EC]/50 focus-within:ring-[#C0974D] 
                transition-all duration-300
              "
            >
              <span className="px-4 text-[#1C2C4B]">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
              </span>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="
                  flex-1 px-2 py-3 text-gray-800 placeholder-gray-400 
                  bg-transparent border-none outline-none 
                "
              />

              <button
                type="submit"
                className="
                  px-6 py-3 bg-[#C0974D] text-white font-semibold 
                  flex items-center justify-center gap-2 
                  transition-all duration-300 hover:bg-[#1C2C4B]
                "
              >
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </button>
            </form>

            {/* Subtext */}
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy — unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Background subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-[#EAF0FF]/50 via-white to-[#F7F4EE]/60"
      />
    </section>
  );
}
