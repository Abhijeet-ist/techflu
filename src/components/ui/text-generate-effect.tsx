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

                        {/* IMAGE BELOW THE TEXT */}
                        <div className="w-full mt-28 flex justify-center">
                            <img
                                src="/table.png"
                                alt="Descriptive Alt Text"
                                className="w-full max-w-md sm:max-w-lg md:max-w-6xl"
                            />
                        </div>
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
                                src="https://scontent.cdninstagram.com/o1/v/t2/f2/m82/AQPl7boBHAFwQTSWC6wLGjUzIWhpJ0AhZQcS55VavvqRo3AQ9sJHbHmllbWidTawNhnUalmuBEw_MxmFcrvQmb3tsvXfY3_SEHt8WOY.mp4?_nc_cat=106&_nc_oc=Adm7vlQhd-U0mG7jZhhUWKYMNBC6k6d6ddIKtX-3LSihM7uI2R4bbqceerJREK36QN4&_nc_sid=5e9851&_nc_ht=instagram.fluh1-2.fna.fbcdn.net&_nc_ohc=uzC9gIHHXngQ7kNvwFlOSyo&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA2MDQ3NzE5ODU0MTIwNSwiYXNzZXRfYWdlX2RheXMiOjQzNSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjYwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=de354a73381bf1f4&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84NDQ3M0ZFMDlFODBENjJFNkZGQjQ5NzJBQkE3NzhBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMdnJXeG5fdXRSelBOZ0RBUEpLSXY5aVc4TmZicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJqqGsevyn-IDFQIoAkMzLBdATjMzMzMzMxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gcA&_nc_zt=28&oh=00_AfHkpDMLPPiunh8e14-ZgAm6SkSQZyh7Xj30vrXUkYTzYQ&oe=6805B437"
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
        </div>
    );
};
