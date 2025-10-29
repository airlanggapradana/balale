import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-card border-border border-t py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-300">
                <span className="text-primary-foreground text-lg font-bold">
                  B
                </span>
              </div>
              <span className="text-foreground text-xl font-bold">
                Balale.id
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Melestarikan budaya Indonesia melalui teknologi dan kreativitas
            </p>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Fitur</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#pembelajaran"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pembelajaran
                </Link>
              </li>
              <li>
                <Link
                  href="#permainan"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mini Games
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 transition-all hover:bg-orange-500/80"
              >
                <Youtube className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-border text-muted-foreground border-t pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Balale.id. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
