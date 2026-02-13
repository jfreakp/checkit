import { CardEnviarEncuesta } from "@/sharing/components/CardEnviarEncuesta";

const infoCard = {
    title1: "Tienes un reto ",
    title2: "Técnico",
    title3: "?",
    description: "Estamos listos para analizar tu proyecto y ofrecerte la mejor solución de ingeniería.",
    primaryActionText: "Agendar Consultoría",
    secondaryActionText: "Nuestra Metodología"
};

export default function AboutPage() {
    return (

        <main className="flex-1">
            <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-16 text-center">
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Ingeniería de Software</span>
                <h1 className="text-dark-accent text-5xl md:text-7xl font-black leading-tight mb-8">
                    Construimos soluciones <br /> <span className="text-primary">escalables y robustas.</span>
                </h1>
                <p className="max-w-3xl mx-auto text-xl leading-relaxed text-secondary-text">
                    Somos un equipo de ingenieros apasionados por el código limpio, la arquitectura de sistemas y el impacto tecnológico real. En CheckTI, transformamos desafíos complejos en productos digitales eficientes.
                </p>
            </section>
            <section className="bg-white py-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-primary text-4xl font-black mb-4 uppercase tracking-tighter">Nuestra Tecnología</h2>
                            <p className="text-lg text-secondary-text">Utilizamos las tecnologías más vanguardistas para garantizar rendimiento, seguridad y mantenibilidad a largo plazo.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-12 h-1 bg-primary rounded-full"></div>
                            <div className="w-4 h-1 bg-primary/30 rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="tech-card p-8 border border-[#f3eae7] rounded-2xl bg-background-light/50 transition-all hover:shadow-xl hover:-translate-y-1">
                            <span className="material-symbols-outlined text-primary text-4xl mb-4">terminal</span>
                            <h4 className="font-bold text-dark-accent text-lg mb-2">Backend</h4>
                            <p className="text-sm">Node.js, Python, Go, PostgreSQL</p>
                        </div>
                        <div className="tech-card p-8 border border-[#f3eae7] rounded-2xl bg-background-light/50 transition-all hover:shadow-xl hover:-translate-y-1">
                            <span className="material-symbols-outlined text-primary text-4xl mb-4">layers</span>
                            <h4 className="font-bold text-dark-accent text-lg mb-2">Frontend</h4>
                            <p className="text-sm">React, Next.js, Tailwind CSS, TypeScript</p>
                        </div>
                        <div className="tech-card p-8 border border-[#f3eae7] rounded-2xl bg-background-light/50 transition-all hover:shadow-xl hover:-translate-y-1">
                            <span className="material-symbols-outlined text-primary text-4xl mb-4">cloud</span>
                            <h4 className="font-bold text-dark-accent text-lg mb-2">Cloud &amp; DevOps</h4>
                            <p className="text-sm">AWS, Docker, Kubernetes, CI/CD</p>
                        </div>
                        <div className="tech-card p-8 border border-[#f3eae7] rounded-2xl bg-background-light/50 transition-all hover:shadow-xl hover:-translate-y-1">
                            <span className="material-symbols-outlined text-primary text-4xl mb-4">smartphone</span>
                            <h4 className="font-bold text-dark-accent text-lg mb-2">Mobile</h4>
                            <p className="text-sm">React Native, Flutter, Swift, Kotlin</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 bg-background-light">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-primary text-4xl font-black mb-4 uppercase tracking-tighter">Proceso de Desarrollo</h2>
                        <p className="text-secondary-text max-w-2xl mx-auto text-lg">Nuestra metodología Agile asegura transparencia total y entregas continuas de valor.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-primary font-black text-2xl mb-6 border-2 border-primary/10">01</div>
                            <h3 className="text-xl font-bold text-dark-accent mb-3">Descubrimiento y Diseño</h3>
                            <p className="text-secondary-text">Analizamos los requerimientos técnicos y definimos la arquitectura del sistema antes de escribir la primera línea de código.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center text-white font-black text-2xl mb-6">02</div>
                            <h3 className="text-xl font-bold text-dark-accent mb-3">Sprints Iterativos</h3>
                            <p className="text-secondary-text">Desarrollo modular con revisiones periódicas. Implementamos pruebas automatizadas para garantizar la calidad del código.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-primary font-black text-2xl mb-6 border-2 border-primary/10">03</div>
                            <h3 className="text-xl font-bold text-dark-accent mb-3">Lanzamiento y Escalamiento</h3>
                            <p className="text-secondary-text">Despliegue en producción con monitoreo activo. Optimizamos y escalamos según el crecimiento de los usuarios.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-primary text-4xl font-black mb-4 uppercase tracking-tighter">El Equipo</h2>
                            <p className="text-lg text-secondary-text">Un grupo de ingenieros senior comprometidos con la excelencia técnica y la innovación.</p>
                        </div>
                        <div className="bg-primary/5 px-6 py-3 rounded-full border border-primary/20">
                            <p className="text-primary font-bold text-sm">Somos 25+ Especialistas remotos</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[1/1.2] shadow-sm">
                                <img alt="Carlos Méndez, Arquitecto Lead" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX1Z-Vx_F66A1XXuBk5MBZAtaEZyo83M3cBsyEXTYHA7OD4liuSWSnjB4pqREHWTAiwYfD8IH9ePjbg_LbIqY_orhYBiTFzYsLa0ocjuHgIw-HqhBBxJPT3MDacPXGzizjzVCVgNWy0VYbz0qv3JNjAnkljHVeCr9t58rToMXpdIwT9id1GwAa7GNl1L6ifZ2006K6B3gKoQZJTQHVWYpvPVGMCopXf2-pv7wyiB0dOJ4DYN8i5UIjUDzYMeuVMqLRrzsTVo3lcFU" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                                            <span className="material-symbols-outlined text-sm">code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-dark-accent font-bold text-xl">Carlos Méndez</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mt-1">Lead Architect</p>
                        </div>
                        <div className="group">
                            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[1/1.2] shadow-sm">
                                <img alt="Ana Silva, Ingeniera Fullstack" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdxkD2RulBPVWy09oOTKKXGuLQ29vo4d0aSo7H7NwJZRW8oY3qppUnn8KoBCTktBto4Y3v3gQRTPTlrcyu41c3lu850zo98nZeb1y5WQZqmCJtDx8EOpnys9zuudMr2G-OrLq6tbbe1wEqvIX-0saF9IeEBSkOSn9tyeIJeIdf5ZCnKT3gO3Eh61K14zm8c_IWegePsBxAe7EU2KG1_Gats3Z-pLdZ_mzcHPdoUZcGBE2E1N97TJmEz_yoT4zYQEJVvGvgN-UPB0Y" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                                            <span className="material-symbols-outlined text-sm">terminal</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-dark-accent font-bold text-xl">Ana Silva</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mt-1">Fullstack Engineer</p>
                        </div>
                        <div className="group">
                            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[1/1.2] shadow-sm">
                                <img alt="Luis Ortiz, Especialista DevOps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV57iL0U4ld2qgBd5P0GswriIjMgzRl5pD94p0nxTXMAp2L4y3mnYV6eNZsMacfBMH4CT-Yopn2rUaylHF1X0dfPD4NTqMB7IgT5dIT4qZSZ2vVZp-yx4qSxBf8pg8cXufv48vzb5m1mYdSqIdxj6lb1U59bInKArkZLltyVi406PImcsmblBdePheqJwmF3HFxw-3uuapnAS8Jcetj4exqOycHZG8_efI1YRsvnRGQBdtG84WH1LnC4bFOkqXkY-8c028QMMpQhU" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                                            <span className="material-symbols-outlined text-sm">cloud_done</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-dark-accent font-bold text-xl">Luis Ortiz</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mt-1">DevOps Specialist</p>
                        </div>
                        <div className="group">
                            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[1/1.2] shadow-sm">
                                <img alt="Marta Jímenez, Ingeniera QA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo7CIh0jeY_KsLrnMuz1YJR9Z5VrZj9CMlTN05OB1w_M-BuVPklmNCfn1PRrccYzk9cRNsdLpMjMm3_1yrVo4KeqKozc7HdT77lrTUqEDz2D7h60LeTuP1bNQ5EhDb4ZtIQF5I8-yIktJStVyRLb9nDAb23io5BTf103jVovMd6b208xEl2Ns_eybFCBosCmg-byTGyp9eZc1m1FkWW8pesHztnMTyMUwM5MgpXHvGGvma9BTOQDQbFO5TBTf_ictYbDAaF_jfVRc" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                                            <span className="material-symbols-outlined text-sm">bug_report</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-dark-accent font-bold text-xl">Marta Jímenez</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mt-1">QA Engineer</p>
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