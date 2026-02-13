import CardEmpresas from "@/components/home/CardEmpresas";
import Slider from "@/components/home/Slider";
import { CardEnviarEncuesta } from "@/sharing/components/CardEnviarEncuesta";
import { title } from "process";

const itemsEmpresas = [
  {
    src: "/img/home/empresas/bdl.png",
    alt: "Banco de Loja",
    width: 200,
    height: 50,
  },
  {
    src: "/img/home/empresas/cacpe.png",
    alt: "Cacpe Loja",
    width: 200,
    height: 50,
  }
]

const infoCard = {
    title1: "¿Tu visión merece el mejor ",
    title2: "código",
    title3: "?",
    description: "No arriesgues tu inversión con soluciones a medias. Construye sobre bases sólidas con el equipo experto de CheckTI.",
    primaryActionText: "Agendar Consultoría",
    secondaryActionText: "Nuestra Metodología"
};

export default function Home() {
  return (
    <main className="relative">
      <div className="brand-wave-top"></div>
      <section className="relative pt-0 pb-4 md:pt-0 md:pb-4 overflow-hidden">
        <Slider />
      </section>
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-corporate-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-brand-gray/60 uppercase tracking-[0.3em] mb-10">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {
              itemsEmpresas.map((item, index) => (
                <CardEmpresas
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Nuestro Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-corporate-heading tracking-tight">
                Soluciones de Software a Medida
              </h3>
            </div>
            <p className="text-corporate-accent max-w-sm text-lg border-l-4 border-primary pl-6">
              Desde el diseño arquitectónico hasta el despliegue en la nube, acompañamos cada paso de tu transformación.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 rounded-2xl bg-background-light border border-corporate-accent/10 hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-4xl">web</span>
              </div>
              <h4 className="text-2xl font-bold text-corporate-heading mb-4 tracking-tight">Desarrollo Web</h4>
              <p className="text-corporate-accent leading-relaxed mb-8">
                Aplicaciones web escalables y de alto rendimiento utilizando las últimas tecnologías del mercado.
              </p>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link" href="#">
                Saber más <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="group p-10 rounded-2xl bg-background-light border border-corporate-accent/10 hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-4xl">integration_instructions</span>
              </div>
              <h4 className="text-2xl font-bold text-corporate-heading mb-4 tracking-tight">Software Core</h4>
              <p className="text-corporate-accent leading-relaxed mb-8">
                Sistemas backend robustos y APIs seguras diseñadas para manejar procesos de negocio complejos.
              </p>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link" href="#">
                Saber más <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="group p-10 rounded-2xl bg-background-light border border-corporate-accent/10 hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-4xl">security</span>
              </div>
              <h4 className="text-2xl font-bold text-corporate-heading mb-4 tracking-tight">Seguridad Digital</h4>
              <p className="text-corporate-accent leading-relaxed mb-8">
                Implementamos estándares de seguridad de nivel bancario para proteger tus activos digitales más valiosos.
              </p>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link" href="#">
                Saber más <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CardEnviarEncuesta 
        title1={infoCard.title1}
        title2={infoCard.title2}
        title3={infoCard.title3}
        description={infoCard.description}
        primaryActionText={infoCard.primaryActionText}
        secondaryActionText={infoCard.secondaryActionText}
      />


    </main>
  );
}
