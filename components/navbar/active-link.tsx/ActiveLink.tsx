'use client';
import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    return (
        <Link
            key={path}
            href={path}
            className={`${usePathname() === path ? style['active-link'] : style.link}`} >
            {text}
        </Link>
    )
}
