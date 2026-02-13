
'use client';
import { useState } from "react";
import { ActiveLink } from "./active-link.tsx/ActiveLink"

const navItems = [
    { path: "/", text: "Inicio" },
    { path: "/about", text: "Quienes Somos" },
    { path: "/servicios", text: "Servicios" },    
    { path: "/contacto", text: "Contacto" },
]

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="md:hidden w-full">
                <button
                    className="p-2 focus:outline-none w-full bg-white border-b border-gray-200 justify-end flex shadow-sm"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <div className="flex flex-col items-center">
                        <span className="block w-6 h-0.5 bg-black mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>
                </button>
                {open && (
                    <nav className="absolute left-0 top-[56px] w-full flex flex-col gap-4 bg-white shadow z-50 p-4">
                        {navItems.map((item) => (
                            <ActiveLink
                                key={item.path}
                                path={item.path}
                                text={item.text}
                                onClick={() => setOpen(false)}
                            />
                        ))}
                    </nav>
                )}
            </div>
            <div>
                {/* ✅ DESKTOP */}
                <nav className="bg-transparent hidden md:flex gap-6 items-center justify-center color-background-light h-14">
                    {navItems.map((item) => (
                        <ActiveLink
                            key={item.path}
                            path={item.path}
                            text={item.text}
                        />
                    ))}
                </nav>
            </div>
        </div>
    )
}
