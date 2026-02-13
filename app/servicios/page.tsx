import { Servicios } from "@/components/servicios/Servicios";
import { Card } from '../../components/servicios/Card';
import { CardEnviarEncuesta } from "@/sharing/components/CardEnviarEncuesta";

const infoCard = {
    title1: "Tienes un ",
    title2: "proyecto",
    title3: " en mente?",
    description: "Hablemos sobre cómo nuestras soluciones pueden llevar tu negocio al siguiente nivel digital.",
    primaryActionText: "Contactar ahora",
    secondaryActionText: "Agendar reunión"
};

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
            <CardEnviarEncuesta
                title1={infoCard.title1}
                title2={infoCard.title2}
                title3={infoCard.title3}
                description={infoCard.description}
                primaryActionText={infoCard.primaryActionText}
                secondaryActionText={infoCard.secondaryActionText}
            />
        </>

    );
}
