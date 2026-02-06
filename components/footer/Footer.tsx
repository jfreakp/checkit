export const Footer = () => {
    return (
        <footer className="bg-white border-t border-corporate-accent/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col mb-6">
                            <div className="flex items-center gap-2">
                                <div className="bg-primary p-1 rounded text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xl font-bold">check_box</span>
                                </div>
                                <h2 className="text-xl font-extrabold tracking-tighter text-corporate-heading uppercase">Check<span className="text-primary">TI</span></h2>
                            </div>
                            <span className="text-[9px] font-bold text-brand-gray tracking-widest uppercase mt-1">Generando confianza digital</span>
                        </div>
                        <p className="text-corporate-accent text-sm leading-relaxed mb-8">
                            Expertos en ingeniería de software y arquitecturas digitales seguras. Construyendo confianza a través del código.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-lg border border-corporate-accent/20 flex items-center justify-center text-brand-gray hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
                                <span className="material-symbols-outlined text-lg">code</span>
                            </a>
                            <a className="w-10 h-10 rounded-lg border border-corporate-accent/20 flex items-center justify-center text-brand-gray hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
                                <span className="material-symbols-outlined text-lg">terminal</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-corporate-heading mb-6 uppercase tracking-widest text-xs">Servicios</h3>
                        <ul className="space-y-4">
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Desarrollo Web</a></li>
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Sistemas Core</a></li>
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Cloud &amp; DevOps</a></li>
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Consultoría</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-corporate-heading mb-6 uppercase tracking-widest text-xs">Compañía</h3>
                        <ul className="space-y-4">
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Nuestro Proceso</a></li>
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Cultura</a></li>
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Proyectos</a></li>
                            <li><a className="text-corporate-accent text-sm hover:text-primary transition-colors" href="#">Privacidad</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-corporate-heading mb-6 uppercase tracking-widest text-xs">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-corporate-accent text-sm leading-relaxed">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                                Av. Tecnología 450, Piso 12<br />Santiago, Chile
                            </li>
                            <li className="flex items-center gap-3 text-corporate-accent text-sm">
                                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                contacto@checkti.tech
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-corporate-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-corporate-accent text-xs font-medium">
                        © 2025 CheckTI - Generando Confianza Digital. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a className="text-xs font-medium text-corporate-accent hover:text-primary" href="#">Términos</a>
                        <a className="text-xs font-medium text-corporate-accent hover:text-primary" href="#">Seguridad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}