export default function ContactoPage() {
    return (
        <main className="flex-1 mx-auto max-w-[1200px] w-full px-6 md:px-20 lg:px-10 py-12 md:py-20">
            <div className="mb-16 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-gray-900 leading-tight">Impulsa tu visión con software a medida</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    ¿Tienes un proyecto en mente? Cuéntanos tus necesidades técnicas. Nuestro equipo de ingenieros está listo para transformar tus requerimientos en una solución escalable.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 space-y-12">
                    <div>
                        <h3 className="text-xl font-bold mb-8 text-gray-900">Nuestros Canales</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Consultas Técnicas</p>
                                    <p className="text-lg font-semibold text-gray-800">proyectos@devcore.com</p>
                                    <p className="text-sm text-gray-500">Recibe una estimación inicial en 24h</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Soporte Técnico</p>
                                    <p className="text-lg font-semibold text-gray-800">+34 912 345 678</p>
                                    <p className="text-sm text-gray-500">Atención directa para partners</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Innovation Hub</p>
                                    <p className="text-lg font-semibold text-gray-800">Paseo de la Castellana 95</p>
                                    <p className="text-sm text-gray-500">Madrid, España</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-200 border border-gray-200">
                        <img alt="Sede DevCore" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6FiwEnah0RcCdAQNZfO6Dh5D0u5F6AHy7dq5EOO-sUHog65r9Rg9QvtXSEbvrpd8D2MRltBVLZxAI9tRyvS26o9ZoZnSzG_YoeM8q9NdG8KGnxf4qAaCjuuNP3SvFvmkIQF0P3BMQNEIFXrRBboD59iNhIJn--XpieTSDGXd_tPDh0C2XS7hYjqNDgeyobjK_GIYHZU6ttO9QN6_GOM6KIa48PxqgN8D9AH2RUU67DZB49jFwv8KoT-tU_Oc--EQJGY_bd12PKuI" />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-primary text-white p-3 rounded-full shadow-2xl">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4">Expertos en stack moderno</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">React / Next.js</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">Node.js</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">AWS Cloud</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">Python / AI</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">Iniciar Consulta de Proyecto</h2>
                    <p className="text-gray-500 mb-8">Danos los detalles básicos para asignar al arquitecto de software adecuado.</p>
                    <form action="#" className="space-y-6" method="POST">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700" htmlFor="name">Nombre / Empresa</label>
                                <input className="w-full px-4 py-3 rounded-xl border border-[#A6A6A6] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 form-input-custom" id="name" name="name" placeholder="Tu nombre o entidad" required={true} type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email Corporativo</label>
                                <input className="w-full px-4 py-3 rounded-xl border border-[#A6A6A6] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 form-input-custom" id="email" name="email" placeholder="nombre@empresa.com" required={true} type="email" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700" htmlFor="project_type">Tipo de Proyecto</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-[#A6A6A6] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 form-input-custom" id="project_type" name="project_type">
                                    <option value="">Seleccionar...</option>
                                    <option value="web">Desarrollo Web (SaaS)</option>
                                    <option value="mobile">App Móvil (iOS/Android)</option>
                                    <option value="e-commerce">E-commerce a Medida</option>
                                    <option value="ai-data">IA &amp; Data Science</option>
                                    <option value="legacy">Modernización de Sistemas</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700" htmlFor="budget">Presupuesto Estimado</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-[#A6A6A6] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 form-input-custom" id="budget" name="budget">
                                    <option value="">Rango de inversión...</option>
                                    <option value="5k-15k">5.000€ - 15.000€</option>
                                    <option value="15k-50k">15.000€ - 50.000€</option>
                                    <option value="50k-100k">50.000€ - 100.000€</option>
                                    <option value="100k+">+100.000€</option>
                                    <option value="not-defined">No definido aún</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700" htmlFor="message">Alcance del Proyecto</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border border-[#A6A6A6] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 form-input-custom resize-none" id="message" name="message" placeholder="Describe brevemente las funcionalidades clave que necesitas..." rows={4}></textarea>
                        </div>
                        <button className="w-full bg-[#EC5A29] hover:bg-[#d44d21] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group" type="submit">
                            Enviar Consulta
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">rocket_launch</span>
                        </button>
                    </form>
                    <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4 text-gray-500">
                        <span className="material-symbols-outlined text-green-500">verified_user</span>
                        <p className="text-xs">Confidencialidad garantizada. Firmamos NDA si lo requiere para discutir los detalles técnicos.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
