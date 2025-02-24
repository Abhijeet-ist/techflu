'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

// Types
interface FooterProps {
  setPopUp: (value: boolean) => void;
}

interface SocialLink {
  href: string;
  imgSrc: string;
  alt: string;
  name: string;
  username: string;
}

// Constants
const socialLinks: SocialLink[] = [
  {
    href: 'https://x.com/Learners_arc',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/640px-X_logo.jpg',
    alt: 'Twitter',
    name: 'Twitter',
    username: '@Learners_arc',
  },
  {
    href: 'https://www.instagram.com/learnersarc/',
    imgSrc: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png',
    alt: 'Instagram',
    name: 'Instagram',
    username: '@learnersarc',
  },
  {
    href: 'https://www.linkedin.com/company/learners-arc/',
    imgSrc: 'https://www.svgrepo.com/download/16193/linkedin-logo.svg',
    alt: 'LinkedIn',
    name: 'LinkedIn',
    username: '@Learners-arc',
  },
  {
    href: 'https://www.youtube.com/@LearnersArc-l8i',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/YouTube_dark_icon_%282017%29.svg/2560px-YouTube_dark_icon_%282017%29.svg.png',
    alt: 'YouTube',
    name: 'YouTube',
    username: '@LearnersArc-l8i',
  },
];

const Footer: FC<FooterProps> = ({ setPopUp }) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, ease: 'circInOut' }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full bg-zinc-900"
      id="footer"
    >
      <motion.div
        initial={{ borderRadius: 200 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        whileInView={{ borderRadius: 30 }}
        className="flex flex-col w-full gap-6 p-16 overflow-hidden border-t sm:flex-row bg-zinc-950 sm:h-[37vw] h-[100vw] rounded-t-[4vw] border-zinc-400"
      >
        {/* Main Content Section */}
        <div className="flex w-full h-full overflow-hidden rounded-6 bg-zinc-800">
          <div className="flex flex-col justify-between h-full p-8 sm:w-[24vw] w-full">
            <h1 className="sm:text-[3vw] text-[6vw] sm:w-[30vw] audiowide-regular">
              Unleash Your Potential, Code Your Future
            </h1>
            <button
              onClick={() => setPopUp(true)}
              className="px-12 py-4 font-medium rounded-6 bg-gradient-to-br from-indigo-400 to-indigo-700 w-fit sm:text-[1.5vw] text-[3vw] text-zinc-100"
            >
              Join for <span className="text-white">Free</span>
            </button>
          </div>
          <div className="relative sm:w-[20vw] w-[40vw] h-full top-8">
            <Image
              src="/assets/footerbg.png"
              alt="Footer Background"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full h-full gap-6 rounded-6">
          {/* Contact Section */}
          <div className="flex flex-col w-full h-full gap-6 rounded-6">
            <a
              href="mailto:learnersarc@gmail.com?subject=Inquiry&body=Hello, I have a query regarding..."
              className="flex flex-col w-full h-full gap-6 p-4 rounded-6 bg-zinc-800"
            >
              <h2 className="sm:text-[1.1vw] text-[3vw]">Have more queries?..Drop a Mail</h2>
              <Image
                className="sm:h-[14vw] h-[18vw] bg-zinc-800 sm:object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
                alt="Gmail Icon"
                width={100}
                height={100}
              />
            </a>
            <a
              href="https://learnershakil.notion.site/winter-of-code"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full p-4 rounded-6 bg-zinc-800"
            >
              <span className="sm:text-[1.1vw] text-[3vw]">View</span>
              <h2 className="sm:text-[2.3vw] text-[4vw] audiowide-regular text-nowrap">WOC Syllabus</h2>
            </a>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col w-full h-full gap-8 p-8 rounded-6 bg-gradient-to-br from-indigo-300 to-indigo-700">
            <h1 className="sm:text-[2.5vw] text-[5vw] tinos-bold">Connect Us.</h1>
            <div className="flex flex-col w-full h-full gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6"
                >
                  <div className="overflow-hidden sm:w-[4vw] sm:h-[4vw] h-[7vw] w-[7vw] rounded-lg">
                    <Image
                      className="w-full h-full"
                      src={link.imgSrc}
                      alt={link.alt}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold sm:text-[1.2vw] text-[3vw]">{link.name}</h1>
                    <p className="sm:text-[1vw] text-[2vw]">{link.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
