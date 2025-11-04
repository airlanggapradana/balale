export default function Hero() {
  return (
    <section id="hero" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Selamat Datang di Balale.id
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Platform kolaboratif untuk edukasi, inovasi, dan pengembangan produk lokal berdaya saing global.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/products" className="rounded-xl bg-orange-500 px-5 py-2.5 text-white hover:opacity-90">
            Jelajahi Produk
          </a>
          <a href="/education" className="rounded-xl border px-5 py-2.5 hover:bg-gray-50">
            Program Edukasi
          </a>
        </div>
      </div>
    </section>
  );
}
