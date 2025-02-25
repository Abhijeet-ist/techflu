"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-orange-500 tracking-wide">
                    Tech-Fluence 4.0
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="https://forms.gle/example-speaker" external>
                        Inspire as a Speaker
                    </NavLink>
                    <NavLink href="https://forms.gle/example-participant" external>
                        Join as a Participant
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-orange-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg z-50 flex flex-col items-center space-y-6 py-16 px-6"
                    >
                        <button
                            className="absolute top-5 right-5 text-orange-500 focus:outline-none"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X size={28} />
                        </button>
                        <NavLink href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink href="https://forms.gle/example-speaker" external onClick={() => setIsOpen(false)}>
                            Inspire as a Speaker
                        </NavLink>
                        <NavLink href="https://forms.gle/example-participant" external onClick={() => setIsOpen(false)}>
                            Join as a Participant
                        </NavLink>

                        
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

/* Utility Component for Links */
const NavLink = ({ href, children, external = false, onClick }) => (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {external ? (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                className="text-white text-lg font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500"
            >
                {children}
            </a>
        ) : (
            <Link href={href} onClick={onClick} className="text-white text-lg font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500">
                {children}
            </Link>
        )}
    </motion.div>
);
