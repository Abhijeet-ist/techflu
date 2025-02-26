"use client"

import TechYoutuberCard from "../ui/TechYoutuberCard"

const youtubers = [
  {
    name: "MOHAMMAD FARAZ",
    role: "Software Engineer, YouTuber",
    youtubeSubscribers: "496K",
    linkedinFollowers: "254K",
    achievements: [
      "Founder LearnYard",
      "Worked at Google, SAP Labs, and Cure.fit, contributing to scalable software solutions.",
      "Delivered TEDx talks on coding, career growth, and tech innovations."
    ],
    techLogos: ["SAP", "G", "CF"],

    imageUrl: "/mhd_f.jpg",

    linkedinUrl: "https://www.linkedin.com/in/mohammadfraz/",

  },

  {
    name: "Abhishek Kumar",
    role: "Engineer Manager at Google",
    youtubeSubscribers: "",
    linkedinFollowers: "140K",
    achievements: [
      "Specializes in scalable distributed systems.",
      "Actively mentors students and professionals.",
    ],
    techLogos: ["G"],

    imageUrl: "/abhishek_kumar.jpg",

    linkedinUrl: "https://www.linkedin.com/in/abhishek0647/",
  },
  {
    name: "Sashank Mishra",
    role: "Data Engineer, YouTuber, Public Speaker",
    youtubeSubscribers: "178K",
    linkedinFollowers: "177K",
    achievements: [
      "Developed scalable data solutions for enterprise clients.",
      "Actively contributes to the data engineering community through blogs and webinars.",
      "Mentors aspiring data professionals."
    ],
    techLogos: ["MS"],
    imageUrl: "/sashank_mishra.jpg",

    linkedinUrl: "https://linkedin.com/in/emmaw",
  },
  {
    name: "Rocky Bhatia",
    role: "Architect/SCS at Adobe",
    youtubeSubscribers: "6.32K",
    linkedinFollowers: "171K",
    achievements: [
      "AI Research Scientist @DeepMind",
      "520K+ ML YouTube Community",
      "Published ML Researcher",
      "Stanford CS Guest Lecturer",
    ],
    techLogos: ["CS"],

    imageUrl: "/rocky_b.jpg",

    linkedinUrl: "https://www.linkedin.com/in/rocky-bhatia-a4801010/",
  },
  {
    name: "Rahul Maheshwari",
    role: "Founder-LinuxSocials",
    youtubeSubscribers: "25K",
    linkedinFollowers: "93K",
    achievements: [
      "Founded LinuxSocials, promoting Linux and open-source technologies.",
      "Conducts workshops and seminars to educate students and professionals on Linux.",
      "Develops tutorials and guides to help beginners navigate Linux systems."
    ],
    techLogos: ["LS"],

    imageUrl: "/rahul_m.jpg",

    linkedinUrl: "https://www.linkedin.com/in/rahul-cse/",
  },
  {
    name: "Deepak Goyal",
    role: "Founder- Crewsphere",
    youtubeSubscribers: "",
    linkedinFollowers: "",
    achievements: [
      "Founded Crewsphere, a collaboration and project management platform.",
      "Developed innovative remote work solutions for efficient team coordination.",
      "Leads a tech-driven startup, focusing on improving workplace productivity."
    ],
    techLogos: ["CS"],

    imageUrl: "/deepak_g.jpg",

    linkedinUrl: "https://www.linkedin.com/in/deepak-goyal-1511ab7/",
  },
  {
    name: "Vivek Sridhar",
    role: "CTO - Microsoft Startup",
    achievements: [
      "Promotes cloud adoption among developers and IT professionals.",
      "Conducts workshops and seminars on cloud technologies",
      "Contributes to open-source cloud projects."
    ],
    techLogos: ["MS"],

    imageUrl: "/sirdhar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vivsridh/",
  },
  {
    name: "Saumya Singh",
    role: " Software Engineer, Public Speaker",
    youtubeSubscribers: "27K",
    linkedinFollowers: "235K",
    achievements: [
      "Helps individuals monetize their online presence.",
      "Supports entrepreneurs in scaling their businesses.",
      "Won the International Women in Open Source Academic Award (2020)",
    ],
    techLogos: ["OS"],

    imageUrl: "/saumya_singh.jpg",

    linkedinUrl: "https://www.linkedin.com/in/saumya1singh/",

  },

  {
    name: "Sandeep Jain",
    role: "Founder, CEO of GFG, Public Speaker",
    youtubeSubscribers: "936K",
    linkedinFollowers: "329K",
    achievements: [
      "Created one of the largest coding platforms.",
      "Provides educational content for programmers.",
      "Helps students and professionals with DSA & interview prep."
    ],
    techLogos: ["GFG"],

    imageUrl: "/sandeep_j.jpg",

    linkedinUrl: "http://linkedin.com/in/sandeep-jain-/",

  },

  {
    name: "Darika Jain",
    role: "LinkedIn Conntent Creator",
    linkedinFollowers: "800K",
    achievements: [
      "Content creator with 800K+ followers.",
      "Inspires and guides students in tech and career growth."
    ],
    techLogos: ["PSM"],

    imageUrl: "/darika_j.jpg",


    linkedinUrl: "https://www.linkedin.com/in/darikajain/",
  },
  {
    name: "Hina Arora",
    role: "Public Speaker",
    linkedinFollowers: "254K",
    achievements: [
      "Guides students in career planning.",
      "Offers job preparation tips and mentorship."
    ],
    techLogos: ["CC"],

    imageUrl: "/hina_a.jpg",
    linkedinUrl: "https://www.linkedin.com/in/careerwithhina?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Deeksha Sharma",
    role: "Founder Enso Life- NeuroArt",
    achievements: [
      "Raises awareness about mental well-being in tech.",
      "Provides resources and support for stress management."
    ],
    techLogos: ["MHA"],

    imageUrl: "/deeksha_sm.jpg",
    linkedinUrl: "https://www.linkedin.com/in/deeksha26/",
  },
  {
    name: "Nishant Chahar",
    role: "Founder of Tayyari , Ex- Microsoft",
    youtubeSubscribers: "476K",
    linkedinFollowers: "496K",
    achievements: [
      "Creates coding and interview prep content.",
      "Influences thousands through YouTube tutorials."
    ],
    techLogos: ["YT"],

    imageUrl: "/nishant_c.jpg",


    linkedinUrl: "https://www.linkedin.com/in/chaharnishant11/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "M.V. Karan",
    role: "Head, Director DevRel next",
    linkedinFollowers: "",
    achievements: [
      "Promotes open-source development.",
      "Encourages developer collaboration.",
      "Supports tech communities through GitHub initiatives."
    ],
    techLogos: ["GH"],

    imageUrl: "/karan_mv.jpg",
    
    linkedinUrl: "https://www.linkedin.com/in/mvkaran/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

  },
]

export default function Youtuber() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-orange-950 to-black p-8">
      {/* Title with Glow */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold font-script mb-2 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,106,0,0.3)]">
          Inspiring Voices
        </h1>
        <h2 className="text-2xl tracking-[0.2em] text-white font-bold">OF TECHFLUENCE</h2>
      </div>
      {/* Grid Container */}
      <div className="max-w-[2100px] mx-auto">
        {/* First Row */}
        <h1 className="font-extrabold text-5xl ml-10">Season 01</h1>
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
        <h1 className="font-extrabold text-5xl ml-10">Season 02</h1>
        <div className="flex">
          <div className="w-full md:w-1/3">
            <TechYoutuberCard {...youtubers[6]} />
          </div>
        </div>
        <h1 className="font-extrabold text-5xl mt-12 ml-10">Season 03</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(7, 10).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {youtubers.slice(10, 13).map((youtuber, index) => (
            <TechYoutuberCard key={index} {...youtuber} />
          ))}
        </div>
        <div className="flex">
          <div className="w-full md:w-1/3">
            <TechYoutuberCard {...youtubers[13]} />
          </div>
        </div>

      </div>
    </div>
  )
}
