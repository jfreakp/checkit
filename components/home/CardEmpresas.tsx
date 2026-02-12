import Image from "next/image";

interface CardEmpresasProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}
const CardEmpresas = ({ src, alt, width, height }: CardEmpresasProps) => {
    return (
        <div className="flex items-center gap-2">
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export default CardEmpresas