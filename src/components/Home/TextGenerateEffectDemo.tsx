"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";

const words = `TechFluence is a dynamic platform where tech founders, influencers, and speakers engage with students, sharing experiences, insights, and advice on entrepreneurship and innovation. This event bridges the gap between industry leaders and aspiring tech enthusiasts, offering networking opportunities and exposure to the latest industry trends and technologies.`;

export default function TextGenerateEffectDemo() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-900 px-6 py-16 md:px-12">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-gray-900 via-black opacity-60 z-0"></div>

            {/* Glass Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-4xl bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-lg p-8 md:p-12 border border-gray-700"
            >
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-6"
                >
                    About TechFluence
                </motion.h1>

                {/* Animated Text */}
                <TextGenerateEffect words={words} className="text-gray-300 text-lg md:text-xl text-center leading-relaxed" />
            </motion.div>
        </section>
    );
}
