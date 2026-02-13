'use client';
import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string;
    onClick?: () => void;
}

export const ActiveLink = ({ path, text, onClick }: Props) => {
    return (
        <Link
            key={path}
            href={path}
            className={`${usePathname() === path ? style['active-link'] : style.link}`}
            onClick={onClick}>
            {text}
        </Link>
        
    )
}
