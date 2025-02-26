"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `TechFluence is an exciting opportunity for students passionate about innovation and entrepreneurship. It’s a space where we connect with tech founders, influencers, and industry experts who share real-world insights, experiences, and advice. This event isn’t just about listening—it’s about engaging, networking, and gaining exposure to the latest trends and technologies. TechFluence empowers us to think bigger, push boundaries, and turn our ideas into reality.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
