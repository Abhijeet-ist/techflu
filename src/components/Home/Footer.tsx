'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FooterProps {
    setPopUp: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setPopUp }) => {
    const handleRegister = () => {
        setPopUp(true);
    };

    return (
        <motion.div
            initial={{ y: 200, opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: 'circInOut' }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 w-full"
            id="footer"
        >
            <motion.div
                initial={{ borderRadius: 200 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                whileInView={{ borderRadius: 30 }}
                className="bg-gradient-to-br from-orange-500 to-gray-500 w-full sm:h-[37vw] h-[100vw] rounded-t-[4vw] flex sm:flex-row flex-col gap-[1.5vw] p-[4vw] border-t border-zinc-400 overflow-hidden"
            >
                {/* Left Section */}
                <div className="bg-gradient-to-br from-orange-300 to-orange-500 rounded-[1.5vw] sm:w-[24vw] w-full flex flex-col justify-between p-[2vw]">
                    <h1 className="sm:text-[3vw] text-[6vw] w-[300px] text-white">
                        Unleash Your Potential, Code Your Future
                    </h1>
                    <button
                        onClick={handleRegister}
                        className="bg-gradient-to-br from-orange-400 to-orange-600 w-fit px-[3vw] py-[1vw] rounded-[1.5vw] sm:text-[1.5vw] text-[3vw] text-zinc-100 font-medium hover:bg-orange-500 transition duration-300"
                    >
                        Join for <span className="text-white">Free</span>
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex gap-[1.5vw]">
                    {/* Middle Column */}
                    <div className="flex-1 flex flex-col gap-[1.5vw]">
                        <a
                            href="mailto:learnersarc@gmail.com?subject=Inquiry&body=Hello, I have a query regarding..."
                            className="bg-gradient-to-br from-orange-400 to-black w-fit px-[3vw] py-[1vw] rounded-[1.5vw] sm:text-[1.5vw] text-[3vw] text-zinc-100 font-medium"
                        >
                            <h2 className="sm:text-[1.1vw] text-[3vw]">Have more queries?..Drop a Mail</h2>
                        </a>
                        <div className="flex-1 bg-zinc-800 rounded-[1.5vw] p-[1vw]">
                            <h2 className="sm:text-[2.3vw] text-[4vw] audiowide-regular text-nowrap">Techfluence</h2>
                            <p className="text-zinc-100 sm:text-[1vw] text-[2.5vw]">
                                Techfluence is an annual event organized by the School of Computer Science at Lovely Professional University to foster academic excellence, innovation, and career guidance among aspiring technocrats.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Social Links */}
                    <div className="bg-gradient-to-br from-orange-400 to-black p-[2vw] rounded-[1.5vw] sm:w-[20vw]">
                        <h1 className="sm:text-[2.5vw] text-[5vw] tinos-bold text-white mb-[2vw]">Connect Us.</h1>
                        <div className="flex flex-col gap-[1.5vw]">
                            {socialLinks.map(({ href, imgSrc, alt, name, username }) => (
                                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="flex gap-[1.5vw] items-center">
                                    <div className="sm:w-[4vw] sm:h-[4vw] h-[7vw] w-[7vw] rounded-lg overflow-hidden">
                                        <Image className="w-full h-full object-cover" src={imgSrc} alt={alt} width={50} height={50} />
                                    </div>
                                    <div>
                                        <h1 className="sm:text-[1.2vw] text-[3vw] font-semibold text-white">{name}</h1>
                                        <p className="sm:text-[1vw] text-[2vw] text-zinc-300">{username}</p>
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

const socialLinks = [
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

export default Footer;
