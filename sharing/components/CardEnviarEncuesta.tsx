import Link from "next/link"

interface CardEnviarEncuestaProps {
    title1?: string
    title2?: string
    title3?: string
    description?: string
    primaryActionText?: string
    secondaryActionText?: string
}

export const CardEnviarEncuesta = ({
    title1,
    title2,
    title3,
    description,
    primaryActionText
}: CardEnviarEncuestaProps) => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="brand-wave-bottom"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-corporate-heading rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">{title1} <span className="text-primary">{title2}</span> {title3}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
                            {description}
                        </p>
                        <Link className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/40" href="/contacto" >
                            {primaryActionText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
