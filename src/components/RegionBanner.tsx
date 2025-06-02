'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RegionBanner() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-primary py-10 sm:py-20 relative h-[300px] sm:h-[500px]" 
            id="region"
        >
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="container"
            >
                <Image
                    src="/bg-image-section-2.png"
                    alt="Costa Sierra Selva"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="object-cover object-center"
                />
            </motion.div>
        </motion.section>
    );
}