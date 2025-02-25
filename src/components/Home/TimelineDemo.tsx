import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
    const data = [
        {

            title: "SEASON 1",
            content: (
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold mb-8 tracking-wide text-center bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-lg hover:glow">
                        Speakers of Season 1
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/sp1_1c.JPG"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-60 md:h-74 lg:h-90 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/sp1_2c.JPG"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/sp1_3.JPG"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/sp1_4.JPG"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/sp1_5.JPG"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/sp1_6.JPG"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        {/* <Image
                            src="/sp1_7c.JPG"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        /> */}
                    </div>
                </div>
            ),
        },
        {
            title: "SEASON 2",
            content: (
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold mb-8 tracking-wide text-center bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-lg hover:glow">
                        Speakers of Season 2
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/IMG_2128.JPG"
                            alt="hero template"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "SEASON 3",
            content: (
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold mb-8 tracking-wide text-center bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-lg hover:glow">
                        Speakers of Season 3
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/2T8A3007.JPG"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/s3_6c.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/tech3.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/Tech3 (3).jpeg"
                            alt="bento template"
                            width={500}
                            height={100}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/TEC3.jpeg"
                            alt="cards template"
                            width={500}
                            height={200}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/TEch3 (2).jpeg"
                            alt="cards template"
                            width={500}
                            height={200}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                        <Image
                            src="/s3_3c.jpeg"
                            alt="cards template"
                            width={600}
                            height={600}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "SEASON 4 - Upcoming",
            content: (
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold mb-8 tracking-wide text-center bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-lg hover:glow">
                        Speakers of Upcoming Season
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { src: "/sp_1.jpg", alt: "Speaker 1", description: "Abhishek Ranjan" },
                            { src: "/sp_2.jpg", alt: "Speaker 2", description: "Shivani Gera" },
                            { src: "/sp_3.jpg", alt: "Speaker 3", description: "Shivangi Narula" },
                            { src: "/sp_4.jpg", alt: "Speaker 4", description: "Rocky Bhatia" },
                            { src: "/sp_5.jpg", alt: "Speaker 5", description: "Rajya Vardhan Mishra" },
                            { src: "/sp_6.jpg", alt: "Speaker 6", description: "Ajay Suneja" },
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={600}
                                    height={600}
                                    className="rounded-lg object-cover h-50 md:h-74 lg:h-90 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] group-hover:opacity-75 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-center">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full bg-black">
            <Timeline data={data} />
        </div>
    );
}
