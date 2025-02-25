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
    imageUrl: "/mhd_f.jpg",
  },
  {
    name: "Saumya Singh",
    role: " Software Engineer, YouTuber, Public Speaker",
    youtubeSubscribers: "450K",
    linkedinFollowers: "150K",
    achievements: [
      "Senior Developer @Microsoft",
      "Tech Lead @AWS | 450K+ YouTube Family",
      "Women in Tech Ambassador",
      "Top Rated Udemy Instructor",
    ],
    techLogos: ["MS", "AWS", "RE", "UD"],
    imageUrl: "/saumya_singh.jpg",
  },
  {
    name: "Sandeep Jain",
    role: "Founder, CEO of GFG, Public Speaker",
    youtubeSubscribers: "670K",
    linkedinFollowers: "300K",
    achievements: [
      "Principal Cloud Architect @AWS",
      "DevOps Evangelist | 280K+ Subscribers",
      "AWS Community Builder",
      "Conference Speaker",
    ],
    techLogos: ["AWS", "K8S", "DO", "GH"],
    imageUrl: "/sandeep_j.jpg",
  },
  {
    name: "Abhishek Kumar",
    role: "Engineer Manager at Google",
    youtubeSubscribers: "0",
    linkedinFollowers: "60K",
    achievements: [
      "Lead Mobile Developer @Spotify",
      "Flutter GDE | 320K+ YouTube Community",
      "Mobile UI/UX Consultant",
      "Tech Conference Organizer",
    ],
    techLogos: ["FL", "SP", "FG", "UI"],
    imageUrl: "/abhishek_kumar.jpg",
  },
  {
    name: "Raj Vikramaditya",
    role: "Software Engineer 3, Youtuber, Public Speaker",
    youtubeSubscribers: "700K",
    linkedinFollowers: "505K",
    achievements: [
      "Senior Game Dev @Unity",
      "Graphics Programming Expert",
      "Game Dev YouTuber | 410K+ Subs",
      "Unity Certified Instructor",
    ],
    techLogos: ["UN", "UE", "CG", "VR"],
    imageUrl: "/rad_adi.jpg",
  },
  {
    name: "Sashank Mishra",
    role: "Data Engineer, YouTuber, Public Speaker",
    youtubeSubscribers: "164K",
    linkedinFollowers: "150K",
    achievements: [
      "Principal Security Engineer @Mozilla",
      "Ethical Hacking Educator",
      "295K+ YouTube Cybersecurity Community",
      "DEFCON Speaker",
    ],
    techLogos: ["MZ", "SEC", "PEN", "CTF"],
    imageUrl: "/sashank_mishra.jpg",
  },
  {
    name: "Rocky Bhatia",
    role: "Architect/Seniour Computer Science at Adobe, Public Speaker",
    youtubeSubscribers: "125K",
    linkedinFollowers: "123K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["TF", "PT", "AI", "ML"],
    imageUrl: "/rocky_b.jpg",
  },
]

export default function Home() {
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