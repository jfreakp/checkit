export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="brand-wave-top" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-extrabold leading-tight">
            Inicia tu <span className="text-primary">Viaje Digital</span> con Seguridad.
          </h1>

          <p className="text-xl max-w-xl">
            Transformamos ideas en soluciones tecnológicas robustas.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl">
              Get a Quote
            </button>

            <button className="border-2 border-brand-gray px-8 py-4 rounded-lg font-bold hover:bg-brand-gray hover:text-white">
              Ver Soluciones
            </button>
          </div>
        </div>

        <div className="rounded-2xl shadow-2xl bg-slate-900 h-[420px]" />
      </div>
    </section>
  );
}
