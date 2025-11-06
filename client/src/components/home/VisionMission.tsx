import { Eye, Target, Trophy } from "lucide-react";

type CardProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function GlassCard({ title, icon, children }: CardProps) {
  return (
    <article
      className={[
        "group relative rounded-3xl p-8 md:p-10",
        // glass base
        "border border-transparent bg-white/10 ring-1 ring-[#D9DFEA] backdrop-blur-md",
        // subtle glow ring awal (selalu aktif)
        "shadow-[0_0_25px_rgba(192,151,77,0.15)]",
        // transition + motion
        "transition-all duration-500 ease-in-out motion-safe:will-change-transform",
        // hover: lebih tinggi & glow lebih kuat
        "hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(192,151,77,0.35)]",
        // hover: gradient & ring glow lembut
        "hover:bg-linear-to-br hover:from-[#1C2C4B]/95 hover:to-[#3E6398]/90 hover:ring-[#E9D2A0]/50",
        "focus-within:ring-2 focus-within:ring-[#C0974D]/60 focus-within:outline-none",
      ].join(" ")}
      role="region"
      aria-label={title}
      tabIndex={-1}
    >
      {/* Glow ring card */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-[#E9D2A0]/30 blur-[2px] transition-all duration-700 group-hover:ring-4 group-hover:ring-[#E9D2A0]/60" />

      {/* Accent bar atas */}
      <div className="absolute top-4 right-6 left-6 h-[3px] rounded-full bg-linear-to-r from-[#C0974D]/80 to-[#E9D2A0]/80 transition-all group-hover:from-[#E9D2A0] group-hover:to-white" />

      {/* Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/70 text-[#1C2C4B] transition group-hover:bg-white/10 group-hover:text-white">
        <div className="transition-transform duration-500 motion-safe:group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-center text-2xl font-extrabold tracking-tight text-[#1C2C4B] transition-colors group-hover:text-white md:text-[28px]">
          {title}
        </h3>

        <span className="mx-auto mt-3 mb-6 block h-1 w-14 rounded-full bg-[#C0974D] transition-colors group-hover:bg-white" />

        <div className="text-center leading-relaxed text-gray-700 transition-colors group-hover:text-white/90">
          {children}
        </div>
      </div>
    </article>
  );
}

export default function VisionMission() {
  return (
    <section className="relative bg-transparent py-20">
      <div className="relative container mx-auto px-4">
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Vision */}
          <GlassCard title="Vision" icon={<Eye size={48} strokeWidth={2} />}>
            <p>
              Menjadi platform digital pelestarian budaya yang menghubungkan
              warisan permainan tradisional Indonesia dengan teknologi modern
              untuk memperkuat identitas bangsa.
            </p>
          </GlassCard>

          {/* Mission */}
          <GlassCard
            title="Mission"
            icon={<Target size={48} strokeWidth={2} />}
          >
            <ol className="list-inside list-decimal space-y-3 text-left md:text-center">
              <li>
                Mendigitalisasi permainan tradisional Indonesia agar mudah
                diakses oleh masyarakat luas.
              </li>
              <li>
                Memberdayakan pengrajin kriya lokal melalui pemasaran produk
                berbasis web.
              </li>
              <li>
                Menyediakan media pembelajaran budaya yang interaktif dan
                menyenangkan.
              </li>
              <li>
                Menumbuhkan kebanggaan generasi muda terhadap nilai-nilai budaya
                Indonesia.
              </li>
            </ol>
          </GlassCard>

          {/* Goals */}
          <GlassCard title="Goals" icon={<Trophy size={48} strokeWidth={2} />}>
            <ol className="list-inside list-decimal space-y-3 text-left md:text-center">
              <li>
                Meningkatkan kesadaran masyarakat terhadap pentingnya
                pelestarian permainan tradisional.
              </li>
              <li>
                Membuka akses pasar baru bagi pengrajin kriya permainan
                tradisional.
              </li>
              <li>
                Mengintegrasikan pembelajaran budaya ke dalam ekosistem digital
                pendidikan.
              </li>
              <li>
                Membangun komunitas budaya yang kolaboratif, kreatif, dan
                berkelanjutan.
              </li>
            </ol>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
