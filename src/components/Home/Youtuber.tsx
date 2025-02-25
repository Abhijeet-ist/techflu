"use client"

import TechYoutuberCard from "../ui/TechYoutuberCard"


const youtubers = [
  {
    name: "MOHAMMAD F.",
    role: "Software Engineer, YouTuber, Public Speaker",
    youtubeSubscribers: "390K",
    linkedinFollowers: "205K",
    achievements: [
      "Founder LearnYard",
      "Ex SWE2 @Google | 390K+ subscribers @YouTube |",
      "TedX Speaker | Ex Educator @Codechef |",
      "Ex Educator @Unacademy | Ex Educator @Coding Ninjas",
      "Ex Software Engineer @Cure.fit",
    ],
    techLogos: ["SAP", "G", "YT", "TED"],
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
  },
  {
    name: "SARAH T.",
    role: "Full Stack Developer, Tech Educator",
    youtubeSubscribers: "450K",
    linkedinFollowers: "180K",
    achievements: [
      "Senior Developer @Microsoft",
      "Tech Lead @AWS | 450K+ YouTube Family",
      "Women in Tech Ambassador",
      "Top Rated Udemy Instructor",
    ],
    techLogos: ["MS", "AWS", "RE", "UD"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
  },
  {
    name: "ALEX R.",
    role: "Cloud Architect, DevOps Expert",
    youtubeSubscribers: "280K",
    linkedinFollowers: "150K",
    achievements: [
      "Principal Cloud Architect @AWS",
      "DevOps Evangelist | 280K+ Subscribers",
      "AWS Community Builder",
      "Conference Speaker",
    ],
    techLogos: ["AWS", "K8S", "DO", "GH"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
  },
  {
    name: "PRIYA M.",
    role: "Mobile App Developer, UI/UX Specialist",
    youtubeSubscribers: "320K",
    linkedinFollowers: "175K",
    achievements: [
      "Lead Mobile Developer @Spotify",
      "Flutter GDE | 320K+ YouTube Community",
      "Mobile UI/UX Consultant",
      "Tech Conference Organizer",
    ],
    techLogos: ["FL", "SP", "FG", "UI"],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&q=80",
  },
  {
    name: "DAVID L.",
    role: "Game Developer, Graphics Engineer",
    youtubeSubscribers: "410K",
    linkedinFollowers: "190K",
    achievements: [
      "Senior Game Dev @Unity",
      "Graphics Programming Expert",
      "Game Dev YouTuber | 410K+ Subs",
      "Unity Certified Instructor",
    ],
    techLogos: ["UN", "UE", "CG", "VR"],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
  },
  {
    name: "EMMA W.",
    role: "Security Researcher, Ethical Hacker",
    youtubeSubscribers: "295K",
    linkedinFollowers: "160K",
    achievements: [
      "Principal Security Engineer @Mozilla",
      "Ethical Hacking Educator",
      "295K+ YouTube Cybersecurity Community",
      "DEFCON Speaker",
    ],
    techLogos: ["MZ", "SEC", "PEN", "CTF"],
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
  },
  {
    name: "JAMES K.",
    role: "AI/ML Specialist, Research Scientist",
    youtubeSubscribers: "520K",
    linkedinFollowers: "230K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["TF", "PT", "AI", "ML"],
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
  },
]

export default function Youtuber() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-orange-950 to-black p-8">
      {/* Title with Glow */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-script mb-2 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,106,0,0.3)]">
          Our
        </h1>
        <h2 className="text-2xl tracking-[0.2em] text-white font-bold">TECH YOUTUBERS</h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-[2100px] mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(0, 3).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(3, 6).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>

        {/* Third Row - Centered */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            <TechYoutuberCard {...youtubers[6]} />
          </div>
        </div>
      </div>
    </div>
  )
}