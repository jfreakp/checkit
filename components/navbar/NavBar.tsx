
import Link from "next/link"
import { ActiveLink } from "./active-link.tsx/ActiveLink"

const navItems = [
    { path: "/", text: "Inicio" },
    { path: "/about", text: "Acerca de" },
    { path: "/contacto", text: "Contacto" },
]



export const NavBar = () => {
    return (
        <nav className="hidden md:flex items-center gap-10">
            {
                navItems.map((item) => (
                    <ActiveLink key={item.path} path={item.path} text={item.text} />
                ))
            }
        </nav>

    )
}
