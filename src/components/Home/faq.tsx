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
        question: "What is Techfluence 4?",
        answer:
            "Techfluence 4 is LPU’s premier tech event featuring expert talks, workshops, and networking opportunities.",
    },
    {
        id: 2,
        question: "Who can attend this event?",
        answer:
            "Students, tech enthusiasts, and professionals from any background can attend.",
    },
    {
        id: 3,
        question: "What will I gain from attending?",
        answer:
            "You'll learn about cutting-edge technologies, network with industry leaders, and receive a participation certificate.",
    },
    // {
    //     id: 4,
    //     question: "Are there any special accommodations for differently-abled attendees?",
    //     answer:
    //         "Yes, the venue is wheelchair accessible, and assistance will be provided if needed. Please mention any special requirements during registration.",
    // },
    {
        id: 5,
        question: "Do I need to carry an ID card for entry?",
        answer:
            "Yes, all attendees must carry their LPU student ID. ",
    },
    {
        id: 6,
        question: "How can I register for the event?",
        answer:
            "Click the Register Now / Join as participant button on this website and fill out the form.",
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
                        Welcome to the AI Conference 2025 FAQ section. We&apos;re here to address your most common queries and
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
