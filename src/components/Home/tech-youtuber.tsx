import Image from "next/image"
import { Youtube, Linkedin } from "lucide-react"

export default function TechYoutuberCard() {
    return (
        <div className="max-w-2xl mx-auto bg-[#2D1810] min-h-[600px] relative p-6 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 text-orange-500 font-bold">
                    <div className="flex flex-col">
                        <span className="text-2xl">L</span>
                        <span className="text-2xl">P</span>
                        <span className="text-2xl">U</span>
                    </div>
                    <div className="text-xs max-w-[120px] leading-tight text-orange-400">
                        Transforming Education Transforming India
                    </div>import Image from "next/image";
                    import {Youtube, Linkedin} from "lucide-react";

                    export default function TechYoutuberCard() {
  return (
                    <div className="max-w-2xl mx-auto bg-[#2D1810] min-h-[600px] relative p-6 overflow-hidden">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2 text-orange-500 font-bold">
                                <div className="flex flex-col">
                                    <span className="text-2xl">L</span>
                                    <span className="text-2xl">P</span>
                                    <span className="text-2xl">U</span>
                                </div>
                                <div className="text-xs max-w-[120px] leading-tight text-orange-400">
                                    Transforming Education Transforming India
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-red-600 font-bold">NAAC</span>
                                <div className="text-red-500 font-bold text-2xl">GRADE A++</div>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mt-8 text-center">
                            <h1 className="text-white text-6xl font-script mb-2">Our</h1>
                            <h2 className="text-white text-2xl tracking-wide">TECH YOUTUBERS</h2>
                        </div>

                        {/* Profile Card */}
                        <div className="mt-8 relative">
                            <div className="border-2 border-white rounded-3xl p-6 relative">
                                {/* Name and Role */}
                                <h3 className="text-3xl font-bold text-white italic mb-4">MOHAMMAD F.</h3>

                                {/* Tech Logos */}
                                <div className="flex gap-4 items-center mb-4">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold text-blue-600">SAP</span>
                                    </div>
                                    <div className="w-8 h-8 bg-white rounded-full" />
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold text-[#4285F4]">G</span>
                                    </div>
                                    <div className="w-8 h-8 bg-white rounded-full" />
                                </div>

                                <p className="text-white text-lg mb-6">Software Engineer, YouTuber, Public Speaker</p>

                                {/* Stats */}
                                <div className="flex gap-8 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Youtube className="text-red-500 w-8 h-8" />
                                        <div>
                                            <div className="text-3xl font-bold text-white">
                                                390K<span className="text-orange-500">+</span>
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                Subscribers
                                                <br />
                                                On Youtube
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Linkedin className="text-blue-500 w-8 h-8" />
                                        <div>
                                            <div className="text-3xl font-bold text-white">
                                                205K<span className="text-orange-500">+</span>
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                Followers
                                                <br />
                                                On LinkedIn
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Picture */}
                                <div className="absolute -right-4 top-20 w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg?height=96&width=96`}
                                        alt="Profile picture"
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                </div>

                                {/* Achievements */}
                                <div className="space-y-1 text-sm text-gray-300">
                                    <p>Founder LearnYard</p>
                                    <p>Ex SWE2 @Google | 390K+ subscribers @YouTube |</p>
                                    <p>TedX Speaker | Ex Educator @Codechef |</p>
                                    <p>Ex Educator @Unacademy | Ex Educator @Coding Ninjas</p>
                                    <p>Ex Software Engineer @Cure.fit</p>
                                    <p>Ex Educator @Codechef</p>
                                    <p>Ex Educator @Unacademy</p>
                                    <p>Former SDE Intern @SAP Labs</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Pattern */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20">
                            <div className="relative h-full">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
                                        backgroundSize: "20px 20px",
                                    }}
                                />
                                {/* Glowing Dots */}
                                {[...Array(8)].map((_, i) => {
                                    const left = Math.random() * 100 + "%";
                                    const bottom = Math.random() * 100 + "%";
                                    const animationDelay = `${i * 0.2}s`;
                                    return (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                                            style={{
                                                left,
                                                bottom,
                                                animationDelay,
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    );
}

                </div>
                <div className="text-right">
                    <span className="text-red-600 font-bold">NAAC</span>
                    <div className="text-red-500 font-bold text-2xl">GRADE A++</div>
                </div>
            </div>

            {/* Title */}
            <div className="mt-8 text-center">
                <h1 className="text-white text-6xl font-script mb-2">Our</h1>
                <h2 className="text-white text-2xl tracking-wide">TECH YOUTUBERS</h2>
            </div>

            {/* Profile Card */}
            <div className="mt-8 relative">
                <div className="border-2 border-white rounded-3xl p-6 relative">
                    {/* Name and Role */}
                    <h3 className="text-3xl font-bold text-white italic mb-4">MOHAMMAD F.</h3>

                    {/* Tech Logos */}
                    <div className="flex gap-4 items-center mb-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-blue-600">SAP</span>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full" />
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-[#4285F4]">G</span>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full" />
                    </div>

                    <p className="text-white text-lg mb-6">Software Engineer, YouTuber, Public Speaker</p>

                    {/* Stats */}
                    <div className="flex gap-8 mb-6">
                        <div className="flex items-center gap-2">
                            <Youtube className="text-red-500 w-8 h-8" />
                            <div>
                                <div className="text-3xl font-bold text-white">
                                    390K<span className="text-orange-500">+</span>
                                </div>
                                <div className="text-sm text-gray-400">
                                    Subscribers
                                    <br />
                                    On Youtube
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin className="text-blue-500 w-8 h-8" />
                            <div>
                                <div className="text-3xl font-bold text-white">
                                    205K<span className="text-orange-500">+</span>
                                </div>
                                <div className="text-sm text-gray-400">
                                    Followers
                                    <br />
                                    On LinkedIn
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="absolute -right-4 top-20 w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden">
                        <Image
                            src={${process.env.NEXT_PUBLIC_BASE_URL} /placeholder.svg?height=96&width=96}
                        alt="Profile picture"
                        width={96}
                        height={96}
                        className="object-cover"
            />
                    </div>

                    {/* Achievements */}
                    <div className="space-y-1 text-sm text-gray-300">
                        <p>Founder LearnYard</p>
                        <p>Ex SWE2 @Google | 390K+ subscribers @YouTube |</p>
                        <p>TedX Speaker | Ex Educator @Codechef |</p>
                        <p>Ex Educator @Unacademy | Ex Educator @Coding Ninjas</p>
                        <p>Ex Software Engineer @Cure.fit</p>
                        <p>Ex Educator @Codechef</p>
                        <p>Ex Educator @Unacademy</p>
                        <p>Former SDE Intern @SAP Labs</p>
                    </div>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20">
                <div className="relative h-full">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
                            backgroundSize: "20px 20px",
                        }}
                    />
                    {/* Glowing Dots */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                            style={{
                                left: ${Math.random() * 100}%,
                        bottom: ${Math.random() * 100}%,
                    animationDelay: ${i * 0.2}s,
              }}
            />
          ))}
                </div>
            </div>
        </div>
    )
}
