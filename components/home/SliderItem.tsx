"use client";

import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderItemProps {
    item: {
        title: string;
        highlight: string;
        description: string;
        image: string;
        alt: string;
        buttonText: string;
    };
}

export default function SliderItem({ item }: SliderItemProps) {
    return (
        <div className="relative flex h-[380px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-lg overflow-hidden px-12 sm:px-8 lg:px-8">

            {/* Imagen */}
            <img
                alt={item.alt}
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-heading/90 via-corporate-heading/50 to-corporate-heading/20 lg:to-transparent"></div>

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">

                <h2 className="
                    text-sm 
                    sm:text-3xl 
                    md:text-5xl 
                    lg:text-6xl 
                    xl:text-7xl 
                    font-extrabold 
                    text-white 
                    mb-4 
                    md:mb-6 
                    max-w-3xl 
                    leading-tight
                ">
                    {item.title}{" "}
                    <span className="text-primary">{item.highlight}</span>
                </h2>

                <p className="
            text-sm 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            text-gray-200 
            mb-6 
            md:mb-10 
            max-w-xl
        ">
                    {item.description}
                </p>
            </div>
        </div>

    );
}
