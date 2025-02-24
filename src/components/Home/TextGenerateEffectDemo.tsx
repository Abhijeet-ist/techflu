"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `TechFluence is a dynamic platform where tech founders, influencers, and speakers engage with students, sharing experiences, insights, and advice on entrepreneurship and innovation. This event bridges the gap between industry leaders and aspiring tech enthusiasts, offering networking opportunities and exposure to the latest industry trends and technologies.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
