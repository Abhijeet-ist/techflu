"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { HeroStats } from "../Home/hero-stats";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const { scroll } = useLocomotiveScroll();
    const wordsArray = words.split(" ");
    const imgRef = useRef(null);

    useEffect(() => {
        animate(
            "span",
            { opacity: 1, filter: filter ? "blur(0px)" : "none" },
            { duration: duration || 1, delay: stagger(0.1) }
        );

        if (imgRef.current) {
            scroll && scroll.on("scroll", () => {
                const yOffset = window.scrollY;
                (imgRef.current as HTMLElement).style.transform = `translateY(${yOffset * 0.3}px)`;
            });
        }
    }, [scope.current]);

    return (
        <div className="bg-gradient-to-b from-black via-orange-500 to-black px-4 sm:px-8 py-16">
            <section className="relative flex items-center justify-center px-4 sm:px-8 py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* LEFT SIDE - Animated Text */}
                    <motion.div ref={scope} className="text-left">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-extrabold text-white mb-6 relative overflow-hidden">
                            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-orange-400 animate-shine">
                                About TechFluence
                            </span>
                        </h1>
                        <motion.div className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                            {wordsArray.map((word, idx) => (
                                <motion.span
                                    key={word + idx}
                                    className="inline-block opacity-0 text-[20px] sm:text-[25px] blur-md mx-1"
                                    initial={{ opacity: 0, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: duration, delay: idx * 0.1 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Locomotive Scroll Image */}
                    <motion.div
                        ref={imgRef}
                        className="relative flex justify-center md:justify-end"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative rounded-xl p-2 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 animate-borderPulse">
                            <img
                                src="/banner.jpeg"
                                alt="TechFluence Event"
                                className="rounded-xl shadow-lg border-2 border-transparent w-full max-w-xs sm:max-w-sm md:max-w-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            <HeroStats />

            <style jsx>{`
                @keyframes shine {
                    0% { background-position: -200%; }
                    100% { background-position: 200%; }
                }
                .animate-shine {
                    background-size: 200% auto;
                    animation: shine 3s linear infinite;
                }
                @keyframes borderPulse {
                    0%, 100% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.8); }
                    50% { box-shadow: 0 0 20px rgba(255, 215, 0, 1); }
                }
                .animate-borderPulse {
                    animation: borderPulse 2s infinite alternate;
                }
            `}</style>
        </div>
    );
};
