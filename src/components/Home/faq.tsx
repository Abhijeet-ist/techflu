"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
    id: number
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "What is the dress code for the conference?",
        answer:
            "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
    },
    {
        id: 2,
        question: "What is the dress code for the conference?",
        answer: "Business casual attire is recommended for all conference sessions and events.",
    },
    {
        id: 3,
        question: "What is the dress code for the conference?",
        answer: "Business casual attire is recommended for all conference sessions and events.",
    },
    {
        id: 4,
        question: "What is the dress code for the conference?",
        answer: "Business casual attire is recommended for all conference sessions and events.",
    },
]

export default function FAQ() {
    const [openItem, setOpenItem] = useState<number | null>(1)

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-600 to-yellow-500 relative overflow-hidden">
            {/* Hexagonal background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">Frequently asked questions</h1>
                    <p className="text-lg text-white/80 text-center mb-12">
                        Welcome to the AI Conference 2023 FAQ section. We&apos;re here to address your most common queries and
                        provide you with the information you need to make the most of your conference experience.
                    </p>

                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
                            >
                                <button
                                    onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-white hover:bg-white/10 transition-colors"
                                >
                                    <span className="text-lg font-medium text-left">{item.question}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openItem === item.id ? "rotate-180" : ""}`} />
                                </button>
                                {openItem === item.id && (
                                    <div className="px-6 py-4 text-white/80">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

