'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-4 backdrop-blur-sm bg-primary shadow-[0_-1px_3px_rgba(0,0,0,0.1)] border-t border-[rgba(0,0,0,0.07)]"
    >
      <motion.div
        className="container"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
          <motion.span
            className="text-sm font-medium text-gray-800 text-center md:text-left"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Copyright {currentYear} - KidsGram
          </motion.span>
          <motion.div
            className="text-sm relative group perspective-1000 cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotateZ: [0, -2, 2, 0],
              transition: {
                duration: 0.3
              }
            }}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            onClick={() => window.open('https://wa.me/51957271213', '_blank')}
          >
            <motion.span
              className="relative inline-block font-medium"
              animate={{
                color: ["#4F46E5", "#7C3AED", "#DB2777", "#4F46E5"],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{
                  textShadow: "0 0 8px rgba(99,102,241,0.6)",
                  transition: { duration: 0.2 }
                }}
              >
                Desarrollado con 💙 por: RamiroLs
              </motion.span>
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer