import React from 'react'

interface CardProps {
    title: string;
    description: string;
    icon: string;
    stack?: string[];
}

export const Card = ({ title, description, icon, stack }: CardProps) => {
    return (
        <div className="group p-8 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-orange-50 dark:bg-orange-500/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {description}
            </p>
            <ul className="space-y-2 mb-8 text-sm text-gray-500 dark:text-gray-500">
                {stack && stack.map((item, index) => (
                    <li key={index} className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> {item}</li>
                ))}
            </ul>
            <a className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all" href="#">
                Saber más <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </a>
        </div>
    )
}
