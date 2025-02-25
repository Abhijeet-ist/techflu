"use client"

import { useState } from "react"
import Image from "next/image"
import { Youtube, Linkedin } from "lucide-react"

interface TechYoutuberCardProps {
  name: string
  role: string
  youtubeSubscribers: string
  linkedinFollowers: string
  achievements: string[]
  techLogos: string[]
  imageUrl: string
  youtubeUrl: string
  linkedinUrl: string
}

export default function TechYoutuberCard({
  name,
  role,
  youtubeSubscribers,
  linkedinFollowers,
  achievements,
  techLogos,
  imageUrl,
  youtubeUrl,
  linkedinUrl,
}: TechYoutuberCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = -(x - centerX) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      className="card-container relative w-full max-w-lg mx-auto transition-transform duration-200 ease-out perspective-1000 p-4"
      style={{
      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-gradient-to-br from-orange-950 via-black to-orange-900 rounded-2xl p-6 shadow-2xl overflow-hidden border border-orange-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4 sm:mb-6">
        {name}
        </h3>

          <div className="flex flex-wrap gap-4 items-center mb-4 sm:mb-6">
            {techLogos.map((logo, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white to-orange-50 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
              >
                <span className="text-xs sm:text-sm font-bold text-orange-950">{logo}</span>
              </div>
            ))}
          </div>

          <p className="text-white/90 text-base sm:text-lg mb-6 font-light">{role}</p>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <button
              onClick={() => window.open(youtubeUrl, "_blank")}
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-shadow duration-300">
                <Youtube className="text-red-500 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {youtubeSubscribers}<span className="text-red-500">+</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Subscribers on YouTube</div>
              </div>
            </button>

            <button
              onClick={() => window.open(linkedinUrl, "_blank")}
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 group-hover:shadow-[0_0_20px_rgba(0,119,255,0.3)] transition-shadow duration-300">
                <Linkedin className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {linkedinFollowers}<span className="text-blue-500">+</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Followers on LinkedIn</div>
              </div>
            </button>
          </div>

          <div className="absolute right-4 top-5 w-20 h-20 sm:w-28 sm:h-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-orange-500 overflow-hidden shadow-[0_0_15px_rgba(255,106,0,0.5)]">
              <Image
                src={imageUrl}
                alt={`${name}'s profile picture`}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-light">
            {achievements.map((achievement, i) => (
              <p
                key={i}
                className="text-gray-300 hover:text-orange-300 transition-colors duration-200 hover:translate-x-1 transform"
              >
                {achievement}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
