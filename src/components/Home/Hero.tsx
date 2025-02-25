"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Cpu, Code, Zap, Trophy } from "lucide-react"

type HeroProps = {}

interface ImageData {
    id: number
    src: string
    alt: string
    icon: React.ReactNode
}

const Hero: React.FC<HeroProps> = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Enhanced image data with icons and compelling descriptions
    const images: ImageData[] = [
        { id: 1, src: "/image7.jpeg", alt: "AI Innovation", icon: <Cpu className="w-6 h-6 text-yellow-300" /> },
        { id: 2, src: "/image2.jpeg", alt: "Blockchain Solutions", icon: <Code className="w-6 h-6 text-yellow-300" /> },
        { id: 3, src: "/image3.jpeg", alt: "XR Experience", icon: <Globe className="w-6 h-6 text-yellow-300" /> },
        { id: 4, src: "/image4.jpeg", alt: "Quantum Computing", icon: <Zap className="w-6 h-6 text-yellow-300" /> },
        { id: 6, src: "/image8.jpeg", alt: "IoT Revolution", icon: <Trophy className="w-6 h-6 text-yellow-300" /> },
    ]

    const onSplineLoad = (): void => {
        console.log("Spline scene loaded")
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            <div className="absolute top-4 sm:top-6 md:top-8 left-0 right-0 z-20 text-center">
                <motion.h1
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-orange-500 to-yellow-300 animate-[color-animation] px-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                >
                    TECHFLUENCE 4.0
                </motion.h1>

                <motion.div
                    className="mt-2 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                </motion.div>
            </div>

            {windowWidth < 900 && (
                <div className="mt-24 px-4 text-center z-20 relative">
                    <motion.p
                        className="text-white text-lg mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Welcome to the TechFLUENCE 2025, where the future unfolds! Whether you're a professional, a curious newcomer, or a business leader looking to harness the power of Tech, this conference is designed to inspire, educate, and connect.
                    </motion.p>
                    <motion.a
                        href="https://forms.google.com/your-registration-form-url"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full transition-all hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Register Now
                        <ArrowRight className="ml-2" />
                    </motion.a>
                </div>
            )}

            {/* Optimized Continuous Marquee Section */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden py-20 z-10">
                {/* First Marquee Row - Left to Right */}
                <div className="w-[200%] flex mb-6 sm:mb-8 md:mb-10">
                    <div className="animate-marquee-ltr flex">
                        {[...images, ...images].map((image, index) => (
                            <motion.div
                                key={`top-${index}`}
                                className="relative group mx-2 sm:mx-3 md:mx-4"
                                whileHover={{
                                    scale: 1.1,
                                    zIndex: 30,
                                    rotate: index % 2 === 0 ? -3 : 3,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    className="absolute -inset-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-80 blur-xl transition duration-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.3 }}
                                    whileHover={{ opacity: 0.7 }}
                                />
                                <motion.img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-80 h-auto sm:w-64 sm:h-auto md:w-72 md:h-auto lg:w-96 lg:h-auto rounded-xl object-cover shadow-2xl shadow-orange-500/30 relative z-10"
                                />
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-20"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                >
                                    <div className="flex justify-center items-center mb-1">
                                        {image.icon}
                                    </div>
                                    <p className="text-white font-bold text-lg sm:text-xl">{image.alt}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Floating particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-${i % 3 + 2} h-${i % 3 + 2} rounded-full opacity-${i % 3 + 2}0`}
                        style={{
                            backgroundColor: i % 2 === 0 ? "#f97316" : "#eab308",
                            width: `${(i % 3 + 1) * 8}px`,
                            height: `${(i % 3 + 1) * 8}px`,
                            opacity: 0.1 + (i % 5) * 0.05
                        }}
                        initial={{
                            x: Math.random() * windowWidth,
                            y: Math.random() * 1000,
                        }}
                        animate={{
                            x: [
                                Math.random() * windowWidth,
                                Math.random() * windowWidth,
                                Math.random() * windowWidth,
                            ],
                            y: [
                                Math.random() * 1000,
                                Math.random() * 1000,
                                Math.random() * 1000,
                            ],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            {/* World map overlay to emphasize international aspect */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[url('/world-map.png')] bg-center bg-no-repeat bg-contain"></div>
            </div>

            {/* Info boxes */}
            <div className="absolute bottom-4 pb-10 sm:bottom-6 md:bottom-10 w-full px-4 sm:px-6 md:px-10 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 z-20">
                <motion.div
                    className="p-4 sm:p-5 md:p-7 border-2 border-orange-400 bg-orange-500/20 backdrop-blur-md text-white rounded-lg shadow-lg md:w-72 lg:w-80"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <Globe className="w-8 h-8 text-yellow-300 mb-2" />
                    <p className="text-base sm:text-lg md:text-xl font-bold">
                        North India’s biggest tech event, bringing innovation, insights, and industry leaders together
                    </p>
                </motion.div>



                <motion.div
                    className="p-4 sm:p-5 md:p-7 border-2 border-orange-400 bg-orange-500/20 backdrop-blur-md text-white rounded-lg shadow-lg md:w-72 lg:w-80"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <Cpu className="w-8 h-8 text-yellow-300 mb-2" />
                    <p className="text-base sm:text-lg md:text-xl font-bold">
                        Enhance your event experience with seamless guest check-ins and real-time tech-driven insights.
                    </p>
                </motion.div>
            </div>

            {/* 3D Robot Model - Only visible on larger screens */}
            {windowWidth >= 900 && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-3xl sm:max-w-4xl mx-auto">
                        <Spline scene="https://prod.spline.design/d2Zi4YYLrfy6VAKW/scene.splinecode" onLoad={onSplineLoad} />
                    </div>
                </div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-orange-500/30 to-transparent" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />

            <style jsx>{`
                @keyframes color-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-[color-animation] {
                    background-size: 300%;
                    animation: color-animation 10s infinite;
                }
                @keyframes marquee-ltr {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-ltr {
                    width: 100%;
                    animation: marquee-ltr 40s linear infinite;
                }
            `}</style>
            <style jsx global>{`
                @media (max-width: 768px) {
                    .absolute.top-1/2.-translate-y-1/2.w-full.overflow-hidden.py-20.z-10 .w-[200%]{
                        width: 300%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Hero
