import { Servicios } from "@/components/servicios/Servicios";

export default function ServiciosPage() {
    return (
        <>
            <header className="relative pt-16 pb-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-secondary dark:text-white mb-6 tracking-tight">
                        Nuestros <span className="text-primary">Servicios</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Potenciamos tu negocio con soluciones tecnológicas a medida, <br className="hidden md:block" /> generando confianza digital en cada etapa del desarrollo.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Servicios />
                </div>
            </main>
            <section className="bg-secondary dark:bg-zinc-900 py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">¿Tienes un proyecto en mente?</h2>
                    <p className="text-gray-300 mb-10 text-lg">
                        Hablemos sobre cómo nuestras soluciones pueden llevar tu negocio al siguiente nivel digital.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-500/10 flex items-center justify-center gap-2" href="mailto:hola@checkti.com">
                            <span className="material-symbols-outlined">mail</span>
                            Contactar ahora
                        </a>
                        <a className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2" href="#">
                            <span className="material-symbols-outlined">calendar_month</span>
                            Agendar reunión
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
}
