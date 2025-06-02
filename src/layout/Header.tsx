"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiMenu, FiX, FiHome, FiBook, FiUser } from "react-icons/fi";

const navItems = [
  { label: "Página 1", icon: <FiHome />, href: "#friends" },
  { label: "Página 2", icon: <FiBook />, href: "#region" },
  { label: "Página 3", icon: <FiUser />, href: "#peru" },
  { label: "Página 4", icon: <FiBook />, href: "#peru-regions" },
  { label: "Página 5", icon: <FiHome />, href: "#leafy" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.substring(1));
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-[rgba(0,0,0,0.07)]"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center gap-1 text-gray-700 hover:text-black ${
                  activeSection === item.href.substring(1) ? 'font-bold text-black' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-2xl"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute top-16 left-0 w-full bg-primary p-4 flex flex-col space-y-4 md:hidden z-50 shadow-md"
              >
                <div className="container">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center gap-2 text-gray-700 hover:text-black ${
                        activeSection === item.href.substring(1) ? 'font-bold text-black' : ''
                      }`}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.icon}
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;