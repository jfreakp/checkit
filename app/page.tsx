export default function Home() {
  return (
    <main className="relative">
      <div className="brand-wave-top"></div>
      <section className="relative pt-12 pb-20 md:pt-28 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Tu Socio Tecnológico de Confianza
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-corporate-heading leading-tight tracking-tight">
                Inicia tu <span className="text-primary">Viaje Digital</span> con Seguridad.
              </h1>
              <p className="text-xl md:text-2xl text-corporate-accent leading-relaxed max-w-xl">
                En CheckTI, transformamos ideas en soluciones tecnológicas robustas. Construimos el software que tu empresa necesita para crecer con confianza.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center justify-center min-w-[200px] h-14 bg-primary text-white rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Get a Quote
                </button>
                <button className="flex items-center justify-center min-w-[180px] h-14 border-2 border-brand-gray text-brand-gray rounded-lg font-bold text-lg hover:bg-brand-gray hover:text-white transition-all">
                  Ver Soluciones
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F172A] border border-white/10 p-1">
                <div className="bg-[#1E293B] rounded-t-xl px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 code-snippet ml-4">checkti_engine.py</span>
                </div>
                <div className="p-8 code-snippet text-sm md:text-base leading-relaxed overflow-x-auto">
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">1</span>
                    <span className="text-sky-400">className</span> <span className="text-yellow-200">DigitalTrust:</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">2</span>
                    <span className="text-white ml-4">def <span className="text-sky-400">__init__</span>(self, client):</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">3</span>
                    <span className="text-white ml-8">self.security = <span className="text-emerald-400">'high_priority'</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">4</span>
                    <span className="text-white ml-8">self.transparency = <span className="text-amber-400">True</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">5</span>
                    <span className="text-gray-500 ml-4"># Generando confianza digital</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">6</span>
                    <span className="text-white ml-4">def <span className="text-sky-400">build_future</span>(self):</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 select-none">7</span>
                    <span className="text-white ml-8">return <span className="text-primary">"Success &amp; Confidence"</span></span>
                  </div>
                </div>
                <img alt="Modern developer workflow" className="w-full aspect-video object-cover opacity-60 mix-blend-overlay absolute inset-0 pointer-events-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiHvimSsLRAusGEThiadnpKoVLgsb4heSuDzON_TM0g39uSGTQQaqxEGFC1FhxhKX-RS-A3NKtEYELugKsqDchaO4Ue_DjcakZC-xcRqfFEpsVbk4n2j-zs3wCp2VX7tGLoClvSwG2ss2JvOR3ndXhVA8zWnR2efXqQK5tqt2eHfAbYnYgsNi_fIpaioSuJ1WRFf0NEzLW0KeEJ1c1CLNhfATcQcXqWOzDwL2QxZpKME6Bgpq2b_GUAPlNZl55iqK0vtzUdF4pCRc" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-corporate-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-brand-gray/60 uppercase tracking-[0.3em] mb-10">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">corporate_fare</span>
              <span className="font-bold text-xl tracking-tighter">CLIENTE ALFA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">business</span>
              <span className="font-bold text-xl tracking-tighter">TECH SOLUTIONS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">account_balance</span>
              <span className="font-bold text-xl tracking-tighter">GLOBAL BANK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              <span className="font-bold text-xl tracking-tighter">NEXUS IND</span>
            </div>
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
      <section className="py-24 relative overflow-hidden">
        <div className="brand-wave-bottom"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-corporate-heading rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">¿Listo para construir el <span className="text-primary">futuro</span> de tu empresa?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
                Agenda una consultoría técnica con nuestros expertos para discutir los requerimientos de tu proyecto y recibir una propuesta detallada.
              </p>
              <button className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/40">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
