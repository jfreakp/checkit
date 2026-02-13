"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderItem from "./SliderItem";

export type SliderItem = {
    title: string;
    highlight: string;
    description: string;
    image: string;
    alt: string;
    buttonText: string;
};

export const sliderItems: SliderItem[] = [
    {
        title: "Expertos en",
        highlight: "Desarrollo de Software",
        description:
            "Soluciones a medida para transformar tu visión en realidad digital.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAiHvimSsLRAusGEThiadnpKoVLgsb4heSuDzON_TM0g39uSGTQQaqxEGFC1FhxhKX-RS-A3NKtEYELugKsqDchaO4Ue_DjcakZC-xcRqfFEpsVbk4n2j-zs3wCp2VX7tGLoClvSwG2ss2JvOR3ndXhVA8zWnR2efXqQK5tqt2eHfAbYnYgsNi_fIpaioSuJ1WRFf0NEzLW0KeEJ1c1CLNhfATcQcXqWOzDwL2QxZpKME6Bgpq2b_GUAPlNZl55iqK0vtzUdF4pCRc",
        alt: "Expertos en Desarrollo de Software",
        buttonText: "Empezar Ahora",
    },
    {
        title: "",
        highlight: "Apps Móviles",
        description:
            "Creamos experiencias nativas e híbridas que conectan con tus usuarios.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD9lmQmZyhpb3A36eHOFHSF9_5MNjKkGkAw7ZmDjLTeDgx0QEXsmqanvrsqkKQnz56tKMw2kaS-dQ1CSGDHfKvTNyIRG4Jtg9TyXTiiJISdFPiK2kzEYdlYVKnKc80sd9Yy42gAbumdJKU7lVgN4Jx8d6AwFpsBtDetTbZv7AgrDJOmvBlRzum90x7iKRDl8-mEaGsb2YciP7xLPga7kbbSR-zNf5GTDgHFTwz9GRY_JIeHqQvdcbnLb6j5HVrJFBncvcby_H_awZo",
        alt: "Apps Móviles de Alto Impacto",
        buttonText: "Descubrir Más",
    },
    {
        title: "Plataformas Web",
        highlight: "Escalables",
        description:
            "Arquitecturas robustas diseñadas para crecer junto a tu negocio.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3wsEg8nfQ0Y28egOz0nYugLuFatIv7QcsAGhP2y31oM8nxpj_0wlfs-bgOiteWMPX8S-C-nsF_-zP65Gy2NDdBh4BCm27CuU7S0fF7NIEf2b6ZFLXZT2yJqb6ffkGWMh7GzXMRuhEO5Q79rYqmMQSdx1_CpnxczPV8NkcPZTGrGQ6NCROYC0YYmJHs8XrdWsmR9hJnNIxnrUYlQZbpvXeenivHoNxXJlpiE6ALHltxnCBNWjLxZ4NCat-pjJ06RFgWy7eJifEzk",
        alt: "Plataformas Web Escalables",
        buttonText: "Ver Soluciones",
    },
    {
        title: "",
        highlight: "UI/UX Design",
        description:
            "Interfaces intuitivas que maximizan la retención y satisfacción.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBzy8BDue1Wttl6yJQNN_n_72skzIv4L4smNrfONKU2CcNAm7R-b3l1pQECDM8wqQV6JM76ROPaLG0clq58j2fwsctU7VoEPAhFQP0t5QqPYw4hJcWX8YBX89zyUEHIYsFi5gCJBNmTcfpng_6L3Try7O6-De9fFQYc62Pdp5jIBhIy_JiSlTruk4QLK4ilChtOOHNL8bUEhaiTEbQjCu8YXChznkKpCV0YTrp6QZkQ0O3FXS5Z_FEaSdp9aZEPYXABngVdt_C0kvw",
        alt: "UI/UX Design",
        buttonText: "Ver Proyectos",
    },
    {
        title: "Transformación",
        highlight: "Digital Real",
        description:
            "Modernizamos tus procesos con tecnología de vanguardia y eficiencia.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAHqGPcpPpBsFoujFEzUOT8l0NO94wc3Oc6lWxETVdmf4Avc0jVtfbcqGmeOU5HYXjk3WrrTN00P8mv627UqwLxeqJn-6znlUkfmYwr-uKAgQgMz1K6eeAb9sJC22zg4oAjq9701tQE8U3jUyYI-O6PxzW66jF1G6QcjSpi1v8so3ATxH40VFTpakiA7cctXtls1ukR7rjjmG8X-sSTsepBRs4OZNuaJZXwtNySvkk8v-3OMXFNZIzRbMZDVvYh8VQu65y-c5kb5KM",
        alt: "Transformación Digital",
        buttonText: "Modernízate",
    },
    {
        title: "Seguridad y",
        highlight: "Confianza Digital",
        description:
            "Protegemos tu activo más valioso con estándares de seguridad de nivel empresarial.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCHLP5aKdM9smgD6PS-ZRW4GKQyQgchNldPiFl16B4Ao9nSNiJ36cFEQQzU1I3TA6mooI8GRWTmPkoU6yHzYeGNm2aN_5MwsqU0S5EGZ6bayQisO4cRlzuMhD2stbF6Nq7eZXwll7u1QlgvNn7wyqyhio7ox8Vsqjo5XkJxxeH3C6xyDrOVKhuU-H0DNLl0Uo_NKmPDSqlzX6wBzAnglRAjM56sK77jlgyjCeHtuvKfnprMFl2KlE1ypi5cr_lxXxMp7HjTPAVk6zE",
        alt: "Seguridad Digital",
        buttonText: "Seguridad Total",
    },
    {
        title: "Soporte y",
        highlight: "Evolución Continua",
        description:
            "Acompañamos el crecimiento de tu software con mantenimiento experto.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC2JvVJ7UCLwL--Mesfq13HuJHw5kTNVmepgFiemnlGzqlADAyNIIedXx35y-UnwdC5VYrV8uK_F1gNhZoeHXSj5A2EhrawwdjWvZlx6aGc9-cCCiJ97GwF7tB5nBn_OmSVZvqVJIsUAm4lrKwpRkTI9Pw8GVbZW5jZk_oLp9TEcV417s_-nYeb101JCTiLwTGCCidoNoBL6EtTCe07Ae9VjJbbNdCrH6OvAC6enDu6D3yG8bBs0qHEYCjfBNAfapPBhuR465jDZOQ",
        alt: "Soporte Técnico",
        buttonText: "Hablar con un Experto",
    },
];

export default function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
        >
            {sliderItems.map((item, index) => (
                <SwiperSlide key={item.alt} >
                    <SliderItem key={index} item={item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
