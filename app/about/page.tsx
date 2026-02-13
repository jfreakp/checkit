import { CardEnviarEncuesta } from "@/sharing/components/CardEnviarEncuesta";
import { TeamCard } from '../../components/about/TeamCard';

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



                    <TeamCard />
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