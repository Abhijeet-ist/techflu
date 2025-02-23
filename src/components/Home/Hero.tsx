'use client';

import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
// import { GoogleGeminiEffectDemo } from "./Geffect";

interface HeroProps {
    // Add any props here if you plan to pass them
}

interface ImageData {
    id: number;
    src: string;
    alt: string;
}

const Hero: React.FC<HeroProps> = () => {
    const images: ImageData[] = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        src: `/image${i + 1}.png`,
        alt: `Tech ${i + 1}`
    }));

    const onSplineLoad = (): void => {
        console.log('Spline scene loaded');
    };

    return (
        <div>
            <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
                <div className="absolute top-8 left-0 right-0 z-20 text-center">
                    <motion.h1
                        className="text-9xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-orange-500 to-yellow-300 animate-[color-animation]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        TECHFLUENCE
                    </motion.h1>

                </div>
                <style jsx>{`
                     @layer utilities {
                        @keyframes color-animation {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        .animate-[color-animation] {
                            background-size: 300%;
                            animation: color-animation 1s infinite ease-in-out;
                        }
                    }

                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-marquee {
                        animation: marquee 10s linear infinite;
                    }

                    .paused {
                        animation-play-state: paused !important;
                    }
                `}</style>

                {/* Top decorative curve */}
                <div className="absolute top-0 w-full">
                    <div className="h-24 bg-gradient-to-b from-orange-500/20 to-transparent" />
                    <div className="relative h-32">
                        <div className="absolute inset-0 bg-orange-500/40 blur-2xl" />
                        <svg viewBox="0 0 1440 320" className="relative w-full">
                            <path
                                fill="rgb(249, 115, 22)"
                                fillOpacity="0.8"
                                d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,202.7C672,213,768,171,864,144C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Modified marquee section - keeping original position */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden py-10">
                    <div className="relative flex space-x-8">
                        <div className="animate-marquee flex space-x-8">
                            {images.map((image) => (
                                <motion.img
                                    key={image.id}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-80 h-80 rounded-xl object-cover shadow-2xl shadow-orange-500/20 transition-transform"
                                    whileHover={{
                                        scale: 1.15,
                                        zIndex: 20,
                                        rotate: image.id % 2 === 0 ? -5 : 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    onHoverStart={(e) => {
                                        e.currentTarget.parentElement?.classList.add('paused');
                                    }}
                                    onHoverEnd={(e) => {
                                        e.currentTarget.parentElement?.classList.remove('paused');
                                    }}
                                />
                            ))}
                        </div>
                        <div className="animate-marquee flex space-x-8" aria-hidden="true">
                            {images.map((image) => (
                                <motion.img
                                    key={`dup-${image.id}`}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-80 h-80 rounded-xl object-cover shadow-2xl shadow-orange-500/20 transition-transform"
                                    whileHover={{
                                        scale: 1.15,
                                        zIndex: 20,
                                        rotate: image.id % 2 === 0 ? -5 : 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    onHoverStart={(e) => {
                                        e.currentTarget.parentElement?.classList.add('paused');
                                    }}
                                    onHoverEnd={(e) => {
                                        e.currentTarget.parentElement?.classList.remove('paused');
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom decorative curve */}
                <div className="absolute bottom-0 w-full">
                    <div className="relative h-32">
                        <div className="absolute inset-0 bg-orange-500/40 blur-2xl" />
                        <svg viewBox="0 0 1440 320" className="relative w-full">
                            <path
                                fill="rgb(249, 115, 22)"
                                fillOpacity="0.8"
                                d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,202.7C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </svg>
                    </div>
                    <div className="h-24 bg-gradient-to-t from-orange-500/20 to-transparent" />
                </div>
                <div className="absolute bottom-10 left-10 p-7 border border-orange-400 bg-transparent text-white rounded-lg shadow-lg w-64">
                    <p className="text-xl font-bold">North India’s biggest tech event, bringing innovation, insights, and industry leaders together</p>
                </div>

                <div className="absolute bottom-10 right-10 border  border-orange-400 p-7 bg-transparent text-white rounded-lg shadow-lg w-64">
                    <p className="text-xl font-bold">Enhance your event experience with seamless guest check-ins and real-time tech-driven insights.</p>
                </div>

                {/* 3D Robot Model */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-4xl mx-auto">
                        <Spline
                            scene="https://prod.spline.design/d2Zi4YYLrfy6VAKW/scene.splinecode"
                            onLoad={onSplineLoad}
                        />
                    </div>
                </div>

                {/* Optional overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 pointer-events-none" />
            </div>
            {/* <GoogleGeminiEffectDemo /> */}
        </div>
    );
};

export default Hero;
