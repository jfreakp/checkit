import { NavBar } from '../navbar/NavBar';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-corporate-accent/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex flex-col">
                    <Image src="/img/logo.png" alt="CheckTI Logo" width={200} height={70} className='mb-1' />
                </div>
                <NavBar />
            </div>
        </header>
    );
}
