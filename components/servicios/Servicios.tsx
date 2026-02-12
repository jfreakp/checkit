import { Card } from "./Card"

const CardProps = [
    {
        title: 'Desarrollo Web',
        description: 'Creamos experiencias digitales robustas y escalables utilizando las últimas tecnologías. Desde landing pages hasta complejas plataformas e-commerce.',
        icon: 'web',
        stack: ['React', 'Vue', 'Next.js', 'SEO', 'Performance', 'UX/UI Moderno']
    },
    {
        title: 'Apps Móviles',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas de alto impacto que conectan a tu marca con tus usuarios en cualquier lugar.',
        icon: 'smartphone',
        stack: ['iOS', 'Android', 'Flutter', 'React Native', 'Multiplataforma']
    },
    {
        title: 'Consultoría TI',
        description: 'Asesoramiento experto para optimizar tus procesos digitales, infraestructura en la nube y transformación tecnológica.',
        icon: 'support_agent',
        stack: ['Arquitectura Cloud', 'Ciberseguridad', 'Transformación Digital']
    },
    {
        title: 'Cloud Computing',
        description: 'Migramos y gestionamos tu infraestructura en la nube, garantizando disponibilidad, seguridad y reducción de costos.',
        icon: 'cloud_done',
        stack: ['AWS', 'Azure', 'Microservicios', 'DevOps']
    },
    {
        title: 'Ciberseguridad',
        description: 'Protegemos tus activos más valiosos con auditorías de seguridad, pentesting y protocolos de defensa avanzada.',
        icon: 'shield_lock',
        stack: ['Auditoría Ética', 'Encriptación', 'Cumplimiento Legal']
    },
    {
        title: 'Data Analytics',
        description: 'Transformamos datos brutos en información accionable. Decisiones inteligentes basadas en analítica predictiva.',
        icon: 'insights',
        stack: ['Business Intelligence', 'Machine Learning', 'Dashboards']
    }
]


export const Servicios = () => {
    return (
        <>
            {CardProps.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    stack={card.stack}
                />
            ))}
        </>
    )
}
