'use client'

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

export default function PeruRegionsDecorated() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full min-h-[500px] overflow-hidden" 
            id="peru-regions"
        >
            {/* Fondo con patrón de triángulos */}
            <Image
                src="/bg-image-section-4.png"
                alt="Fondo decorativo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />

            {/* Contenido central */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
                {/* Caja blanca con sombra */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/90 rounded-3xl shadow-xl px-4 sm:px-6 py-8 sm:py-10"
                >
                    {/* Encabezado decorativo */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex items-center justify-center gap-3 sm:gap-6 mb-8"
                    >
                        <div className="text-xl sm:text-3xl text-black font-bold tracking-widest hidden sm:block">
                            {'X'.repeat(10)}
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-wider">PERÚ</h1>
                        <div className="text-xl sm:text-3xl text-black font-bold tracking-widest hidden sm:block">
                            {'X'.repeat(10)}
                        </div>
                    </motion.div>

                    {/* Tarjetas de regiones */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                        {regions.map((region, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + idx * 0.2, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center ${region.color}`}
                            >
                                <motion.h2 
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    className={`text-xl sm:text-2xl font-extrabold mb-4 ${region.textColor}`}
                                >
                                    {region.name}
                                </motion.h2>
                                <motion.div 
                                    className="mb-6"
                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.5 }}
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
            </div>
        </motion.section>
    );
}