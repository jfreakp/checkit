export default function AplicacionesPage() {
    return (
        <>
            <header className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-800 text-text-main dark:text-white mb-6">
                        Nuestras <span className="text-primary">Aplicaciones</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-text-muted dark:text-white/70 leading-relaxed">
                        Desarrollamos soluciones tecnológicas de alto impacto que transforman negocios. Desde plataformas SaaS robustas hasta aplicaciones móviles intuitivas, nuestra ingeniería está diseñada para escalar.
                    </p>
                </div>
            </header>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-2 rounded-full bg-primary text-white font-semibold shadow-md">Todas</button>
                    <button className="px-6 py-2 rounded-full bg-white dark:bg-white/10 text-text-main dark:text-white font-semibold border border-neutral-border dark:border-primary/20 hover:border-primary transition-colors">SaaS</button>
                    <button className="px-6 py-2 rounded-full bg-white dark:bg-white/10 text-text-main dark:text-white font-semibold border border-neutral-border dark:border-primary/20 hover:border-primary transition-colors">Mobile Apps</button>
                    <button className="px-6 py-2 rounded-full bg-white dark:bg-white/10 text-text-main dark:text-white font-semibold border border-neutral-border dark:border-primary/20 hover:border-primary transition-colors">Web Apps</button>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-neutral-border dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img alt="Dashboard de CheckFlow" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Modern business dashboard with colorful charts and data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBhZ_qd84VfrahKCD3HUIOm_W7-rsI13X3J_zxQfA4wlR3qX9POadjdbfiAL4ts4Xdv5ULxuUoFhbkrx34YvSQpyV4rNBkUM1-KF9IMRp5GR7vhlYPNr5SC9RPvkL_E3r3XyHh2NBT5cg3XdGmWwzupuLSnUt2RrJVdreSFw6LTy3CkpJ2J1GZWqEsmQ8KPsooMF1ABY3pFEpVAthJ1F6K3LIakY0eYDKrzI47HTcp8_bNr996PgdaL5EUPs_tIjQ0o5gqFdOe_os" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="material-icons text-primary">assessment</span>
                                </div>
                                <span className="text-white font-bold tracking-wide">SaaS Solution</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">CheckFlow</h3>
                            <p className="text-text-muted dark:text-white/60 text-sm mb-6 flex-grow">
                                Optimización inteligente de procesos internos. Automatiza flujos de trabajo complejos y mejora la productividad del equipo con análisis en tiempo real.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-border dark:border-white/10">
                                <span className="text-primary font-bold text-sm">ERP / BPM</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-neutral-border dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img alt="App de telemedicina" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Healthcare professional using a mobile application tablet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHWLDtznsJD0PDA9ZToL_UhruN68bx8It-RVdtAxVdrYKTinyW09gP54EfKTS9xokghqTQBwslLGGZ2RZ5SsjwkKvSFlx4Bd11PCZ2FRiyMxVCr7dfUxIy4WQOuLjB51cJfYgeV_Vdq8JfIkmi0felL0E61IFxTNM3f6OCiawOcdmyAOB6tNRTTEKyh56XJnWU-ddsTVDDfAncsdsdls0hctDZAjN0TvS9QjMO7Id8MxENdXjHXxlN1RdK23PKmz2S4hDw-JsM3Jc" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="material-icons text-primary">health_and_safety</span>
                                </div>
                                <span className="text-white font-bold tracking-wide">Mobile App</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">HealthConnect</h3>
                            <p className="text-text-muted dark:text-white/60 text-sm mb-6 flex-grow">
                                Plataforma de telemedicina integral. Conectamos pacientes con especialistas a través de videollamadas seguras y gestión de recetas digitales.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-border dark:border-white/10">
                                <span className="text-primary font-bold text-sm">HealthTech</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">Ir a la App</button>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-neutral-border dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img alt="Plataforma de educación" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Student learning online using a modern laptop interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC917i5LeAzK1Hw_X1J3J2eKfJa8_ZKdrUs8W4rOwAP6FkZVqdj1YdMjLmi_bjnajkRuig6fpQ9z59pQIME0HrsnzTHPQe0uA1zYq5GDTyJWYPywtk1Sor3zYZpl8JqHRmbz_MK4R9A0B7wPMqU4QQS3pzGvhyC6K5KF8AgF650Z9MvOG8nSL44qqbodhstbOQ8qUpUDvwrnFiFEJ_orc5fRGu323dhT9yMh1gPvAt4VFhfWW7XB7dMAjT5939T15XJ7v7Y-B-nLCY" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="material-icons text-primary">school</span>
                                </div>
                                <span className="text-white font-bold tracking-wide">Web App</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">EduPortal</h3>
                            <p className="text-text-muted dark:text-white/60 text-sm mb-6 flex-grow">
                                Sistema de gestión académica escalable. Facilitamos la administración de cursos, calificaciones y comunicación entre docentes y alumnos.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-border dark:border-white/10">
                                <span className="text-primary font-bold text-sm">EdTech</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-neutral-border dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img alt="App de finanzas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Digital wallet and payment transaction interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9jB1ogUjDFcJq7YzjFJ3obQ5Kapw011FDvlFwoNvJ5tYZwyEkvi-vGoAcdCerrPxZGzpGvrjw4mJ4khJP5X40iEpGj2KA-0BXNX974ySta6E6BMlLDsOl49ZU-w79kTYTcDFTMJ-Bq-o8KNIn2xpxFEKBHIdpYP1zeUZuhHfWVJXZYAOSQWkNPYD031vIOdkplQI9ByB_aBJXnacOQAwocxMVqXD7GpQODg-biRiI_Chjv2e0pMbuITw8gPdJEY_vXruUkTkhkUA" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="material-icons text-primary">account_balance_wallet</span>
                                </div>
                                <span className="text-white font-bold tracking-wide">FinTech App</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">PaySwift</h3>
                            <p className="text-text-muted dark:text-white/60 text-sm mb-6 flex-grow">
                                Billetera digital para transacciones internacionales rápidas y seguras con soporte multi-moneda y comisiones competitivas.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-border dark:border-white/10">
                                <span className="text-primary font-bold text-sm">Finanzas</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">Ir a la App</button>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-neutral-border dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img alt="Logística inteligente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Warehouse logistics management software on a tablet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRCrQCwBleI2AuZBhhRrv92tlamzJIDOmfJwQ4VaGnD74G35tmR3E13-mokJ50PKDDO3XvvcQAGZeSSzxZXiECttxxDS4k00J4d22EgHZ5Df7-zuK_LmzSgWn1mUMtS19OksURZQgV9BOETqZOi3T4eUNWyLR54OaX-u1SmThKQdd1TNxKWRRYF3OnZaCIB1voCOyNiVt1Qw-mMDV-rIHfJDOSz3lzRzhMr_EPJeLZGROGJJGvV9jRxj_v3aiBfBaosH2vNWI3jOg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="material-icons text-primary">local_shipping</span>
                                </div>
                                <span className="text-white font-bold tracking-wide">Enterprise SaaS</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">LogiTrack Pro</h3>
                            <p className="text-text-muted dark:text-white/60 text-sm mb-6 flex-grow">
                                Control total de inventarios y flotas en tiempo real. Optimización de rutas mediante IA para reducir costos logísticos operativos.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-border dark:border-white/10">
                                <span className="text-primary font-bold text-sm">Logística</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-neutral-border dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img alt="Colaboración en equipo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Creative team collaborating in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIGJfp0lQl9HU9LB_8To-4wiYInQScdADsBb8pgSIgjMWoQcOUk6f1QcuvgYLEvNKwqcmLQ2wfjjxUA-0bTZrjfY29LuAyHOeQ_oGXC5yALyHVDaPP8QO_p1th7LoX_gpjbrGYZMsE_FtH0Y-Uw6zROWzI8CbokVdVg-BGaX0K06_6S7p2A6g4-2l17GLTtdzav8Ffiv7tV3Fh7X0t6V9yqgSdbOWb1UXMcDPs6Gt3WAlKqt-FT9-rdlNzrEIaXRlezaHstHp0xRc" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="material-icons text-primary">groups</span>
                                </div>
                                <span className="text-white font-bold tracking-wide">Colab App</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">CheckTeam</h3>
                            <p className="text-text-muted dark:text-white/60 text-sm mb-6 flex-grow">
                                Hub centralizado para el trabajo colaborativo. Chat corporativo, gestión de tareas y almacenamiento seguro en una sola interfaz.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-border dark:border-white/10">
                                <span className="text-primary font-bold text-sm">Productividad</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">Ir a la App</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
