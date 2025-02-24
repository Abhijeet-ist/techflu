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
      name: "Abhishek Ranjan",
      title: "Director of Engineering, @ apna| AI,Machine Learning, Distributed Systems",
      quote: "This experience truly exceeded my expectations—every detail was thoughtfully curated!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "6225",
          url: "https://linkedin.com/in/abhishek-ranjan-engg",
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
      name: "Shivani Gera",
      title: "Personal Finance Contant Creator",
      quote: "The hospitality here made me feel like I was at home, but with a touch of luxury!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "133k",
          url: "https://linkedin.com/in/shivanigera30/",
        },
        instagram: {
          followers: "74k",
          url: "https://instagram.com/hine.arora",
        },
      },
      hasBorder: false,
    },
    {
      name: "Shivangi Narula",
      title: "Founder of Skilldify",
      quote: "A perfect blend of comfort and elegance—this stay will be unforgettable!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "219k",
          url: "https://linkedin.com/in/shivanginarula/",
        },
        instagram: {
          followers: "296k",
          url: "https://instagram.com/shivanginarula.in",
        },
        youtube: {
          followers: "3.22k",
          url: "https://youtube.com/@shivanginarula495",
        },
      },
      hasBorder: true,
    },
    {
      name: "Rocky Bhatia",
    title: "Top 1% on LinkedIn | Architect @ Adobe| 350k+Followers Across Social Media",
      quote: "A perfect blend of comfort and elegance—this stay will be unforgettable!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "170k",
          url: "https://linkedin.com/in/rocky-bhatia-a4801010/",
        },
        instagram: {
          followers: "150k",
          url: "https://instagram.com/learnwithrockyubhatia/",
        },
        youtube: {
          followers: "6.29k",
          url: "https://youtube.com/@learnwithrockyubhatia",
        },
      },
      hasBorder: true,
    },
    {
      name: "Rajya Vardhan Mishra",
      title: "Engineering Leader @ Google | Mentored 300+ Software Engineers|Cornell University",
      quote: "A perfect blend of comfort and elegance—this stay will be unforgettable!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "25k",
          url: "https://linkedin.com/in/rajya-vardhan/",
        },
        // instagram: {
        //   followers: "296k",
        //   url: "https://instagram.com/shivanginarula.in",
        // },
        // youtube: {
        //   followers: "3.22k",
        //   url: "https://youtube.com/@shivanginarula495",
        // },
      },
      hasBorder: true,
    },
    {
      name: "Ajay Suneja",
      title: "Frontend Developer at @adidas | Ex-ITC infotech | Ex-Coforge (NIIT)|GDSC'23&Postman'23Speaker",
      quote: "A perfect blend of comfort and elegance—this stay will be unforgettable!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-24%2021-52-26-pkxB75BJpgfyY9voyr8vgBb8XFSxV7.png",
      stats: {
        linkedin: {
          followers: "73k",
          url: "https://linkedin.com/in/ajaysuneja/",
        },
        instagram: {
          followers: "141k",
          url: "https://instagram.com/sunejaajay",
        },
        youtube: {
          followers: "528k",
          url: "https://youtube.com/@TechnicalSuneja",
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

