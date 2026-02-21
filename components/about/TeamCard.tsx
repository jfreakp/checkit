import React from 'react'

const itemsCard = [

    {
        name: "Fernando Elías Cueva Calderón",
        role: "Gerente",
        icon: "business_center",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX1Z-Vx_F66A1XXuBk5MBZAtaEZyo83M3cBsyEXTYHA7OD4liuSWSnjB4pqREHWTAiwYfD8IH9ePjbg_LbIqY_orhYBiTFzYsLa0ocjuHgIw-HqhBBxJPT3MDacPXGzizjzVCVgNWy0VYbz0qv3JNjAnkljHVeCr9t58rToMXpdIwT9id1GwAa7GNl1L6ifZ2006K6B3gKoQZJTQHVWYpvPVGMCopXf2-pv7wyiB0dOJ4DYN8i5UIjUDzYMeuVMqLRrzsTVo3lcFU",
    },
    {
        name: "Jorge Luis Bravo Fernandez",
        role: "Socio 1",
        icon: "groups",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX1Z-Vx_F66A1XXuBk5MBZAtaEZyo83M3cBsyEXTYHA7OD4liuSWSnjB4pqREHWTAiwYfD8IH9ePjbg_LbIqY_orhYBiTFzYsLa0ocjuHgIw-HqhBBxJPT3MDacPXGzizjzVCVgNWy0VYbz0qv3JNjAnkljHVeCr9t58rToMXpdIwT9id1GwAa7GNl1L6ifZ2006K6B3gKoQZJTQHVWYpvPVGMCopXf2-pv7wyiB0dOJ4DYN8i5UIjUDzYMeuVMqLRrzsTVo3lcFU",
    },
    {
        name: "Edwin Geovanny Cuenca Armijos",
        role: "Socio 2",
        icon: "groups",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX1Z-Vx_F66A1XXuBk5MBZAtaEZyo83M3cBsyEXTYHA7OD4liuSWSnjB4pqREHWTAiwYfD8IH9ePjbg_LbIqY_orhYBiTFzYsLa0ocjuHgIw-HqhBBxJPT3MDacPXGzizjzVCVgNWy0VYbz0qv3JNjAnkljHVeCr9t58rToMXpdIwT9id1GwAa7GNl1L6ifZ2006K6B3gKoQZJTQHVWYpvPVGMCopXf2-pv7wyiB0dOJ4DYN8i5UIjUDzYMeuVMqLRrzsTVo3lcFU",
    },
]

export const TeamCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {itemsCard.map((item) => (
                <div className='group' key={item.name}>
                    <div key={item.name} className='group'>
                        <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[1/1.2] shadow-sm">
                            <img alt={`${item.name}, ${item.role}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <div className="flex gap-3">
                                    <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-dark-accent font-bold text-xl">{item.name}</h3>
                        <p className="text-primary text-sm font-bold uppercase tracking-widest mt-1">{item.role}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
