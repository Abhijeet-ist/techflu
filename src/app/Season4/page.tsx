import Image from "next/image"
import { Linkedin, Instagram, Youtube } from "lucide-react"

interface SpeakerProps {
  name: string
  title: string
  quote: string
  image: string
  stats: {
    linkedin?: {
      followers: string
      url: string
    }
    instagram?: {
      followers: string
      url: string
    }
    youtube?: {
      followers: string
      url: string
    }
  }
  hasBorder?: boolean
}

function SpeakerCard({ name, title, quote, image, stats, hasBorder }: SpeakerProps) {
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className={`relative w-48 h-48 ${hasBorder ? "border-4 border-[#ff4500]" : ""}`}>
          <Image src={image || "/placeholder.svg"} alt={name} width={192} height={192} className="object-cover" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
          <p className="text-gray-400 mb-4">{title}</p>
          <p className="text-[#ff6934] italic mb-6">&quot;{quote}&quot;</p>
          <div className="flex justify-center md:justify-start gap-8">
            {stats.linkedin && (
              <a
                href={stats.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label={`Visit ${name}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                <span className="text-white">{stats.linkedin.followers}</span>
              </a>
            )}
            {stats.instagram && (
              <a
                href={stats.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label={`Visit ${name}'s Instagram profile`}
              >
                <Instagram className="w-5 h-5 text-[#e4405f]" />
                <span className="text-white">{stats.instagram.followers}</span>
              </a>
            )}
            {stats.youtube && (
              <a
                href={stats.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label={`Visit ${name}'s YouTube channel`}
              >
                <Youtube className="w-5 h-5 text-[#ff0000]" />
                <span className="text-white">{stats.youtube.followers}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Saumya Singh",
      title: "Software Engineer, YouTuber, Public Speaker",
      quote: "This experience truly exceeded my expectations—every detail was thoughtfully curated!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "235k",
          url: "https://linkedin.com/in/saumya-singh",
        },
        instagram: {
          followers: "413k",
          url: "https://instagram.com/saumya.singh",
        },
        youtube: {
          followers: "27k",
          url: "https://youtube.com/@saumya-singh",
        },
      },
      hasBorder: true,
    },
    {
      name: "Hine Arora",
      title: "Career Development Coach , Public Speaker",
      quote: "The hospitality here made me feel like I was at home, but with a touch of luxury!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "252k",
          url: "https://linkedin.com/in/hine-arora",
        },
        instagram: {
          followers: "74k",
          url: "https://instagram.com/hine.arora",
        },
      },
      hasBorder: false,
    },
    {
      name: "Nishant Chahar",
      title: "Founder of Tayyari | Ex. Microsoft",
      quote: "A perfect blend of comfort and elegance—this stay will be unforgettable!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "496k",
          url: "https://linkedin.com/in/nishant-chahar",
        },
        instagram: {
          followers: "181k",
          url: "https://instagram.com/nishant.chahar",
        },
        youtube: {
          followers: "476k",
          url: "https://youtube.com/@nishant-chahar",
        },
      },
      hasBorder: true,
    },
  ]

  return (
    <div className="min-h-screen bg-black px-4 py-8 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#ff4500] mb-12 max-w-4xl mx-auto leading-tight">
        Meet the inspiring speakers of TechFluence 3—visionaries, innovators, and tech leaders shaping the future!
      </h1>
      <div className="max-w-5xl mx-auto">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  )
}

