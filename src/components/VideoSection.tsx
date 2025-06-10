"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface VideoSectionProps {
    url: string;
    title: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ url, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        setIsModalOpen(true);
        if (videoRef.current) {
            setTimeout(() => {
                videoRef.current!.play();
                videoRef.current!.muted = false;
            }, 100);
        }
    };

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.section className="w-full py-12 bg-primary" id="tutoriales">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-4 text-orange-600">{title}</motion.h2>
                <motion.div
                    className="container aspect-video relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div
                        className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                        onClick={handlePlayClick}
                    >
                        <div className="bg-orange-600 rounded-full p-5 bg-opacity-90 hover:bg-opacity-100 transition-all">
                            <FaPlay className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <video
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        src={url}
                        muted
                        loop
                    />
                </motion.div>
            </motion.section>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video bg-white rounded-lg shadow-xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute -top-10 right-0 text-white hover:text-orange-500 transition-colors cursor-pointer bg-black rounded-full p-2"
                            >
                                <IoClose size={32} />
                            </button>
                            <video
                                ref={videoRef}
                                className="w-full h-full object-contain rounded-lg"
                                src={url}
                                controls
                                loop
                                autoPlay
                                muted={false}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default VideoSection;