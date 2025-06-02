'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const regions = [
    {
        name: 'COSTA',
        color: 'bg-[#FFE6C2]',
        textColor: 'text-[#0052B4]',
        buttonColor: 'bg-[#0052B4]',
        image: '/images/costa-seal.png',
    },
    {
        name: 'SIERRA',
        color: 'bg-[#FFC48E]',
        textColor: 'text-white',
        buttonColor: 'bg-[#E25C1C]',
        image: '/images/sierra-llama.png',
    },
    {
        name: 'SELVA',
        color: 'bg-[#D3E9C8]',
        textColor: 'text-[#0E5A24]',
        buttonColor: 'bg-[#0E5A24]',
        image: '/images/selva-capibara.png',
    },
];

export default function PeruRegionsShowcase() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] sm:h-[500px] overflow-hidden" 
            id="peru"
        >
            {/* Fondo */}
            <Image
                src="/bg-image-section-3.png"
                alt="Fondo Perú"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />

            {/* Contenido superpuesto */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative z-10 max-w-6xl mx-auto px-4 py-12"
            >
                {/* Encabezado */}
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-between items-center mb-10 text-[#A9BFC9] font-bold text-lg"
                >
                    <div className="flex space-x-8 mb-4 sm:mb-0">
                        <motion.span 
                            whileHover={{ scale: 1.1, opacity: 0.7 }}
                            className="cursor-pointer"
                        >
                            Nosotros
                        </motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.1, opacity: 0.7 }}
                            className="cursor-pointer"
                        >
                            Más
                        </motion.span>
                    </div>
                    <motion.h1 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-wider mb-4 sm:mb-0"
                    >
                        PERÚ
                    </motion.h1>
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Image
                            src="/images/kidsgram-logo.png"
                            alt="Kidsgram"
                            width={120}
                            height={40}
                        />
                    </motion.div>
                </motion.div>

                {/* Tarjetas de regiones */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {regions.map((region, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + idx * 0.2, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-xl shadow-md p-6 flex flex-col items-center ${region.color}`}
                        >
                            <motion.h2 
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                className={`text-2xl font-extrabold mb-4 ${region.textColor}`}
                            >
                                {region.name}
                            </motion.h2>
                            <motion.div 
                                className="mb-6"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={region.image}
                                    alt={region.name}
                                    width={120}
                                    height={120}
                                    objectFit="contain"
                                />
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-white font-bold py-2 px-6 rounded-full ${region.buttonColor} hover:opacity-90 transition`}
                            >
                                Ver más
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}