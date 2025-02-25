"use client"

import { useState, useEffect } from "react"
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
}

export default function TechYoutuberCard({
  name,
  role,
  youtubeSubscribers,
  linkedinFollowers,
  achievements,
  techLogos,
  imageUrl,
}: TechYoutuberCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = document.querySelector(".card-container")
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = -(x - centerX) / 20

      setRotation({ x: rotateX, y: rotateY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="card-container relative w-full transition-transform duration-200 ease-out perspective-1000"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: "preserve-3d",
      }}>
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-orange-950 via-black to-orange-900 rounded-[2rem] p-8 shadow-2xl overflow-hidden border border-orange-500/20">
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.1),transparent_50%)]" />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Profile Section */}
          <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-orange-500/20 shadow-[0_0_15px_rgba(255,106,0,0.1)]">
            {/* Name and Role */}
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-6">
              {name}
            </h3>

            {/* Tech Logos with Hover Effect */}
            <div className="flex gap-4 items-center mb-6">
              {techLogos.map((logo, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-white to-orange-50 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
                >
                  <span className="text-sm font-bold text-orange-950">{logo}</span>
                </div>
              ))}
            </div>

            <p className="text-white/90 text-lg mb-8 font-light">{role}</p>

            {/* Stats with Enhanced Design */}
            <div className="flex gap-8 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-shadow duration-300">
                  <Youtube className="text-red-500 w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {youtubeSubscribers}<span className="text-red-500">+</span>
                  </div>
                  <div className="text-sm text-gray-400">Subscribers on Youtube</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 group-hover:shadow-[0_0_20px_rgba(0,119,255,0.3)] transition-shadow duration-300">
                  <Linkedin className="text-blue-500 w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {linkedinFollowers}<span className="text-blue-500">+</span>
                  </div>
                  <div className="text-sm text-gray-400">Followers on LinkedIn</div>
                </div>
              </div>
            </div>

            {/* Profile Picture with Glow */}
            <div className="absolute -right-4 top-20 w-28 h-28">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full border-4 border-orange-500 overflow-hidden shadow-[0_0_15px_rgba(255,106,0,0.5)]">
                <Image
                  src={imageUrl}
                  alt={`${name}'s profile picture`}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Achievements with Hover Effect */}
            <div className="space-y-2 text-sm font-light">
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
    </div>
  )
}