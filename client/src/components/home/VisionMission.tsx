import Image from "next/image";

type CardProps = {
  title: string;
  img: string;
  children: React.ReactNode;
};

function GlassCard({ title, img, children }: CardProps) {
  return (
    <article
      className={[
        "group relative rounded-3xl p-8 md:p-10",
        // glass base
        "bg-white/10 backdrop-blur-md border border-transparent ring-1 ring-[#D9DFEA]",
        // subtle glow ring awal (selalu aktif)
        "shadow-[0_0_25px_rgba(192,151,77,0.15)]",
        // transition + motion
        "transition-all duration-500 ease-in-out motion-safe:will-change-transform",
        // hover: lebih tinggi & glow lebih kuat
        "hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(192,151,77,0.35)]",
        // hover: gradient & ring glow lembut
        "hover:bg-linear-to-br hover:from-[#1C2C4B]/95 hover:to-[#3E6398]/90 hover:ring-[#E9D2A0]/50",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-[#C0974D]/60",
      ].join(" ")}
      role="region"
      aria-label={title}
      tabIndex={-1}
    >
      {/* Glow ring card */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl 
        ring-2 ring-[#E9D2A0]/30 blur-[2px] 
        group-hover:ring-4 group-hover:ring-[#E9D2A0]/60
        transition-all duration-700"
      />

      {/* Accent bar atas */}
      <div className="absolute left-6 right-6 top-4 h-[3px] rounded-full bg-linear-to-r from-[#C0974D]/80 to-[#E9D2A0]/80 group-hover:from-[#E9D2A0] group-hover:to-white transition-all" />

      {/* Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/70 group-hover:bg-white/10 transition">
        <Image
          src={img}
          alt={title}
          width={72}
          height={72}
          className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-110"
          priority
        />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3
          className="text-center text-2xl md:text-[28px] font-extrabold tracking-tight text-[#1C2C4B] group-hover:text-white transition-colors"
        >
          {title}
        </h3>

        <span className="mx-auto mt-3 mb-6 block h-1 w-14 rounded-full bg-[#C0974D] group-hover:bg-white transition-colors" />

        <div className="leading-relaxed text-center text-gray-700 group-hover:text-white/90 transition-colors">
          {children}
        </div>
      </div>
    </article>
  );
}

export default function VisionMission() {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="container relative mx-auto px-4">
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Vision */}
          <GlassCard title="Vision" img="/assets/images/icon/vision.png">
            <p>
              Menjadi platform digital pelestarian budaya yang menghubungkan
              warisan permainan tradisional Indonesia dengan teknologi modern
              untuk memperkuat identitas bangsa.
            </p>
          </GlassCard>

          {/* Mission */}
          <GlassCard title="Mission" img="/assets/images/icon/mission.png">
            <ol className="list-decimal list-inside space-y-3 text-left md:text-center">
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
          <GlassCard title="Goals" img="/assets/images/icon/goals.png">
            <ol className="list-decimal list-inside space-y-3 text-left md:text-center">
              <li>
                Meningkatkan kesadaran masyarakat terhadap pentingnya pelestarian
                permainan tradisional.
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
