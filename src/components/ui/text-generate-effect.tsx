"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
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
        <div className="bg-gradient-to-b from-black via-orange-950 to-black px-4 sm:px-8 py-16">
            <section className="relative flex items-center justify-center px-4 sm:px-8 py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
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
                            <video
                                src="https://scontent.cdninstagram.com/o1/v/t16/f2/m82/AQPl7boBHAFwQTSWC6wLGjUzIWhpJ0AhZQcS55VavvqRo3AQ9sJHbHmllbWidTawNhnUalmuBEw_MxmFcrvQmb3tsvXfY3_SEHt8WOY.mp4?efg=eyJ4cHZfYXNzZXRfaWQiOjEwNjA0NzcxOTg1NDEyMDUsInZlbmNvZGVfdGFnIjoieHB2X3Byb2dyZXNzaXZlLklOU1RBR1JBTS5DTElQUy5DMy43MjAuZGFzaF9iYXNlbGluZV8xX3YxIn0&_nc_ht=instagram.fixc2-1.fna.fbcdn.net&_nc_cat=106&vs=de354a73381bf1f4&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84NDQ3M0ZFMDlFODBENjJFNkZGQjQ5NzJBQkE3NzhBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMdnJXeG5fdXRSelBOZ0RBUEpLSXY5aVc4TmZicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJqqGsevyn-IDFQIoAkMzLBdATjMzMzMzMxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gcA&ccb=9-4&oh=00_AYDoRw3twrQtJMvMJ4_6dUxJbalBiVda43OQM9upa1uttg&oe=67C09012&_nc_sid=1d576d"
                                className="rounded-xl shadow-lg border-2 border-transparent w-full max-w-xs sm:max-w-sm md:max-w-2xl"
                                autoPlay
                                loop
                                muted
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
