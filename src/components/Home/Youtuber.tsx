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

    // imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@MohammadF",
    linkedinUrl: "https://www.linkedin.com/in/mohammadfraz/",

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

    // imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@SarahT",
    linkedinUrl: "https://www.linkedin.com/in/saumya1singh/",

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

    // imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@AlexR",
    linkedinUrl: "http://linkedin.com/in/sandeep-jain-/",

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

    // imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@PriyaM",
    linkedinUrl: "https://www.linkedin.com/in/abhishek0647/",
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

    // imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@DavidL",
    linkedinUrl: "https://www.linkedin.com/in/rajstriver/",
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
    youtubeUrl: "https://youtube.com/@EmmaW",
    linkedinUrl: "https://linkedin.com/in/emmaw",
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

    // imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@JamesK",
    linkedinUrl: "https://www.linkedin.com/in/rocky-bhatia-a4801010/",
  },
  {
    name: "Rahul Maheshwari",
    role: "Founder-LinuxSocials",
    linkedinFollowers: "90K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["Ad", "G","citi"],

    imageUrl: "/rahul_m.jpg",

    // imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    linkedinUrl: "https://www.linkedin.com/in/rahul-cse/",
  },
  {
    name: "Deepak Goyal",
    role: "Founder- Crewsphere",
    youtubeSubscribers: "125K",
    linkedinFollowers: "123K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["IN"],

    imageUrl: "/deepak_g.jpg",

    // imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@JamesK",
    linkedinUrl: "https://www.linkedin.com/in/deepak-goyal-1511ab7/",
  },
  {
    name: "Rahul Garg",
    role: "Software Engineer",

    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["AWS"],

    imageUrl: "/rahul_garg.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rahul-garg-cse/",

  },
  {
    name: "Vivek Sridhar",
    role: "CTO - Microsoft Startup",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["MS"],

    imageUrl: "/sirdhar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vivsridh/",
  },
  {
    name: "Darika Jain",
    role: "LinkedIn Conntent Creator",
    linkedinFollowers: "800K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["LI"],

    imageUrl: "/darika_j.jpg",


    linkedinUrl: "https://www.linkedin.com/in/darikajain/",
  },
  {
    name: "Hina Arora",
    role: "Public Speaker",
    linkedinFollowers: "252K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["JIO"],

    imageUrl: "/hina_a.jpg",

    // imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@JamesK",
    linkedinUrl: "https://www.linkedin.com/in/careerwithhina?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Deeksha Sharma",
    role: "Founder Enso Life- NeuroArt",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["TF"],

    imageUrl: "/deeksha_sm.jpg",
    youtubeUrl: "https://youtube.com/@JamesK",
    linkedinUrl: "https://www.linkedin.com/in/deeksha26/",
  },
  {
    name: "Nishant Chahar",
    role: "Founder of Tayyari , Ex- Microsoft",
    youtubeSubscribers: "476K",
    linkedinFollowers: "496K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["MS"],

    imageUrl: "/nishant_c.jpg",

    // imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    youtubeUrl: "https://youtube.com/@JamesK",
    linkedinUrl: "https://www.linkedin.com/in/chaharnishant11/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "M.V. Karan",
    role: "Head, Director DevRel next",
    linkedinFollowers: "10K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["TF"],

    imageUrl: "/karan_mv.jpg",
    youtubeUrl: "https://youtube.com/@JamesK",
    linkedinUrl: "https://www.linkedin.com/in/mvkaran/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

  },
]

export default function Youtuber() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-orange-950 to-black p-8">
      {/* Title with Glow */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-script mb-2 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,106,0,0.3)]">
          Inspiring Voices
        </h1>
        <h2 className="text-2xl tracking-[0.2em] text-white font-bold">OF TECHFLUENCE</h2>
      </div>
      {/* Grid Container */}
      <div className="max-w-[2100px] mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(0, 3).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(3, 6).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(6, 9).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(9, 12).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(12, 15).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            <TechYoutuberCard {...youtubers[15]} />
          </div>
        </div>
      </div>
    </div>
  )
}
