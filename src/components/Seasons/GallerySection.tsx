"use client"

import Image from "next/image"

interface MarqueeProps {
    items: string[]
}

function Marquee({ items }: MarqueeProps) {
    return (
        <div className="relative flex overflow-x-hidden bg-gradient-to-r from-[#ff4500] to-[#ff6934]">
            <div className="animate-marquee whitespace-nowrap py-3">
                {items.map((item, index) => (
                    <span key={index} className="mx-4 text-lg font-semibold text-white">
                        {item}
                    </span>
                ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-3">
                {items.map((item, index) => (
                    <span key={index} className="mx-4 text-lg font-semibold text-white">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default function GallerySection() {
    const galleryImages = [
        "/IMG_9976.JPG",
        "/IMG_9972.JPG",
        "/img5c.jpeg",
        "/Tech3.jpeg",
    ]

    const countries = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Japan",
        "Singapore",
        "South Korea",
    ]

    return (
        <section className="bg-black px-4 py-12 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                            <Image
                                src={image || "/placeholder.svg"}
                                alt={`Event photo ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-[200px] object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Featured Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="relative h-[400px]">
                        <Image
                            src="/Img3.jpeg"
                            alt="Vivek Sridhar speaking at TechFluence"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex items-center">
                        <blockquote className="text-white text-xl md:text-2xl leading-relaxed">
                            &quot;Vivek Sridhar, CTO at Microsoft for Startups, is a technophile, startup advisor, and AI expert. As
                            the esteemed Chief Guest at Techfluence 2.0, he shared invaluable insights, inspiring the next generation
                            of innovators.&quot;
                        </blockquote>
                    </div>
                </div>

                {/* Marquee */}
                <Marquee items={countries} />
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes marquee2 {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }

                .animate-marquee2 {
                    animation: marquee2 25s linear infinite;
                }
            `}</style>
        </section>
    )
}
