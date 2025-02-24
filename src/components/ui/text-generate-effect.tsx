"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

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
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration || 1,
                delay: stagger(0.1),
            }
        );
    }, [scope.current]);

    return (
        <div ref={scope} className={cn("text-xl md:text-2xl text-gray-300", className)}>
            {wordsArray.map((word, idx) => (
                <motion.span
                    key={idx}
                    className="inline-block opacity-0 blur-md mx-1"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: duration, delay: idx * 0.1 }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};
