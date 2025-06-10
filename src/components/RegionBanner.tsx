'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RegionBanner() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full relative h-[200px] sm:h-[600px] overflow-hidden bg-primary" 
            id="region"
        >
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/bg-image-section-2.jpg"
                    alt="Costa Sierra Selva"
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain sm:object-cover object-center w-full h-full"
                    quality={100}
                />
            </motion.div>
        </motion.section>
    );
}