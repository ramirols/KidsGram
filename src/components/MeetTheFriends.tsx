'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MeetTheFriends() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-primary py-20 md:px-20 relative"
            id="friends"
        >
            <div className="container flex flex-col md:flex-row items-center gap-10">
                {/* Texto */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <motion.h2
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-sm"
                    >
                        ¡CONÓCELOS!
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-black font-medium leading-relaxed"
                    >
                        En los hermosos paisajes de Perú, viven tres amigos muy especiales: la <strong>foca</strong>, un animal curioso que juega en las aguas frías del océano; la <strong>llama</strong>, una viajera de las altas montañas, conocida por su elegante lana y su espíritu amigable; y el <strong>capibara</strong>, un animal tranquilo y relajado que disfruta de los ríos y siempre está rodeado de amigos. Aunque cada uno vive en un lugar diferente, juntos comparten la misma tierra llena de aventuras y magia.
                    </motion.p>
                </motion.div>

                {/* Imágenes */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="md:w-1/2 flex flex-col items-center gap-6"
                >
                    <div className="flex justify-center gap-6 flex-wrap">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Image src="/llama.png" alt="Imagen de una llama" width={120} height={120} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Image src="/capibara.png" alt="Imagen de un capibara" width={120} height={120} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Image src="/tucan.png" alt="Imagen de un tucán" width={120} height={120} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}