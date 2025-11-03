"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import rawJson from "@/data/event/EventPoster.json" assert { type: "json" };

// ---------- Type ----------
type EventItem = {
  id: string | number;
  title: string;
  subtitle?: string;
  category?: string;
  level?: string;
  location?: string;
  date?: string;
  image: string;
  description?: string;
  link: string;
};

// ---------- Type Guards ----------
function hasIdTitle(x: unknown): x is { id: string | number; title: string } {
  if (typeof x !== "object" || x === null) return false;
  const o = x as Record<string, unknown>;
  const hasId = typeof o.id === "string" || typeof o.id === "number";
  const hasTitle = typeof o.title === "string";
  return hasId && hasTitle;
}

function toEventItem(x: unknown): EventItem | null {
  if (!hasIdTitle(x)) return null;
  const obj = x as Record<string, unknown>;

  const image =
    typeof obj.image === "string" && obj.image.length > 0
      ? obj.image
      : "/assets/images/fallback-event.jpg"; // sediakan fallback di /public

  const link =
    typeof obj.link === "string" && obj.link.length > 0 ? obj.link : "#";

  return {
    id: obj.id as string | number,
    title: obj.title as string,
    subtitle: typeof obj.subtitle === "string" ? (obj.subtitle as string) : undefined,
    category: typeof obj.category === "string" ? (obj.category as string) : undefined,
    level: typeof obj.level === "string" ? (obj.level as string) : undefined,
    location: typeof obj.location === "string" ? (obj.location as string) : undefined,
    date: typeof obj.date === "string" ? (obj.date as string) : undefined,
    image,
    description: typeof obj.description === "string" ? (obj.description as string) : undefined,
    link,
  };
}

// ---------- Main Parser ----------
function getEvents(raw: unknown): EventItem[] {
  if (Array.isArray(raw)) {
    return raw.map(toEventItem).filter(Boolean) as EventItem[];
  }

  if (typeof raw === "object" && raw !== null) {
    const obj = raw as Record<string, unknown>;

    // format A: { balale_events: [...] }
    if (Array.isArray(obj.balale_events)) {
      return (obj.balale_events as unknown[])
        .map(toEventItem)
        .filter(Boolean) as EventItem[];
    }

    // format B: { event: [...] }
    if (Array.isArray(obj.event)) {
      return (obj.event as unknown[])
        .map(toEventItem)
        .filter(Boolean) as EventItem[];
    }

    // format C: { collections: { events: [...] } }
    if (
      typeof obj.collections === "object" &&
      obj.collections !== null &&
      typeof (obj.collections as { events?: unknown[] }).events !== "undefined"
    ) {
      return ((obj.collections as { events: unknown[] }).events)
        .map(toEventItem)
        .filter(Boolean) as EventItem[];
    }
  }

  return [];
}

// ---------- React Component ----------
export default function Event() {
  const events = getEvents(rawJson); // ← semua data terbaca

  return (
    <section id="featured-events" className="py-16">
      {/* Heading */}
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1C2C4B]">
            Our Balale Events
          </h1>
          <div className="mt-3 flex items-center justify-center">
            <span className="h-1 w-16 rounded-full bg-[#C0974D]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        {events.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-[#E7E7EC] p-8 text-center text-gray-600">
            Belum ada event untuk ditampilkan.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((ev) => {
              const isExternal = /^https?:\/\//i.test(ev.link);

              const Card = (
                <article
                  className={[
                    "group relative overflow-hidden rounded-2xl",
                    "bg-white/10 backdrop-blur-md border border-transparent ring-1 ring-[#D9DFEA]",
                    "shadow-[0_8px_30px_rgba(28,44,75,0.08)]",
                    "transition-all duration-500 ease-in-out",
                    "hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,44,75,0.25)] hover:ring-white/30",
                  ].join(" ")}
                >
                  {/* Poster */}
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#1C2C4B]">
                      {ev.title}
                    </h3>
                    {(ev.subtitle ?? ev.level) && (
                      <p className="mt-1 text-sm font-medium text-[#C0974D]">
                        {ev.subtitle ?? ev.level}
                      </p>
                    )}

                    <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-[#1C2C4B]" />
                        <p className="truncate">{ev.location ?? "-"}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 shrink-0 text-[#1C2C4B]" />
                        <p className="truncate">{ev.date ?? "-"}</p>
                      </div>
                    </div>

                    <span className="mt-4 block h-[3px] w-0 rounded-full bg-linear-to-r from-[#C0974D] to-[#E9D2A0] transition-all duration-500 group-hover:w-24" />
                  </div>
                </article>
              );

              return isExternal ? (
                <a
                  key={ev.id}
                  href={ev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0974D]"
                  aria-label={ev.title}
                >
                  {Card}
                </a>
              ) : (
                <Link
                  key={ev.id}
                  href={ev.link}
                  className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0974D]"
                  aria-label={ev.title}
                >
                  {Card}
                </Link>
              );
            })}
          </div>
        )}

        {/* Load More */}
        <div className="mt-8 text-center">
          <Link
            href="/AllEventPage"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[#C0974D] text-white hover:bg-[#1C2C4B] transition-colors duration-300"
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
}
