'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaVolumeMute, FaVolumeUp, FaRedo } from 'react-icons/fa';

const regions = [
    {
        name: 'COSTA',
        color: 'bg-[#FFE6C2]',
        textColor: 'text-[#0052B4]',
        buttonColor: 'bg-[#0052B4]',
        image: '/card-foca-costa.jpg',
        popupImage: '/popup-costa.jpg',
        audio: '/audios/popup-costa-foca-audio.mp3',
    },
    {
        name: 'SIERRA',
        color: 'bg-[#FFC48E]',
        textColor: 'text-white',
        buttonColor: 'bg-[#E25C1C]',
        image: '/card-llama-sierra.jpg',
        popupImage: '/popup-sierra.jpg',
        audio: '/audios/popup-sierra-llama-audio.mp3',
    },
    {
        name: 'SELVA',
        color: 'bg-[#D3E9C8]',
        textColor: 'text-[#0E5A24]',
        buttonColor: 'bg-[#0E5A24]',
        image: '/card-capibara-selva.jpg',
        popupImage: '/popup-selva.jpg',
        audio: '/audios/popup-selva-capibara-audio.mp3',
    },
];

export default function PeruRegionsShowcase() {
    const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const closePopup = () => setSelectedRegion(null);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const replayAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full overflow-hidden"
            id="conocenos"
        >
            {/* Fondo */}
            <Image
                src="/bg-image-section-3.png"
                fill
                style={{ objectFit: 'cover' }}
                alt="Background image"
                quality={100}
                priority
            />

            {/* Contenido superpuesto */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative z-10 mx-auto py-12 container"
            >
                {/* Encabezado */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-between items-center mb-5 text-[#A9BFC9] font-bold text-lg"
                >
                    {/*<div className="flex space-x-8 mb-4 sm:mb-0">
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
                    </div>*/}
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
                            src="/logo.png"
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
                                    width={180}
                                    height={180}
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-full"
                                />
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-white font-bold py-2 px-6 rounded-full ${region.buttonColor} hover:opacity-90 transition-all cursor-pointer`}
                                onClick={() => setSelectedRegion(idx)}
                            >
                                Ver más
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedRegion !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center"
                    >
                        {/* Fondo con blur */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={closePopup}
                        />

                        {/* Contenido del popup */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4"
                        >
                            {/* Botón de cerrar */}
                            <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 text-white hover:text-orange-500 text-2xl font-bold z-10 cursor-pointer bg-black rounded-full p-2 transition-all"
                            >
                                <IoClose size={32} />
                            </button>

                            {/* Imagen del popup */}
                            <div className="relative w-full h-[30vh] sm:h-[50vh]">
                                <Image
                                    src={regions[selectedRegion].popupImage}
                                    alt={regions[selectedRegion].name}
                                    fill
                                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                                    className="rounded-lg shadow-xl"
                                />

                                {/* Controles de audio - Ahora en la esquina inferior derecha */}
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        onClick={toggleMute}
                                        className="bg-black text-white hover:text-orange-500 rounded-full p-2 transition-all"
                                        title={isMuted ? "Activar audio" : "Silenciar audio"}
                                    >
                                        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                                    </button>
                                    <button
                                        onClick={replayAudio}
                                        className="bg-black text-white hover:text-orange-500 rounded-full p-2 transition-all"
                                        title="Repetir audio"
                                    >
                                        <FaRedo size={24} />
                                    </button>
                                </div>
                            </div>

                            <audio
                                ref={audioRef}
                                id={`audio-${regions[selectedRegion].name}`}
                                autoPlay
                            >
                                <source src={regions[selectedRegion].audio} type="audio/mpeg" />
                            </audio>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}