"use client";

import React, { useState } from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

const Loop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      quote: "TechFluence was an incredible experience! The speakers were inspiring, and I gained valuable insights into the tech industry.",
      name: "Abhijeet Kumar",
      title: "Techfluence 1",
      photo: "/loop/abhi.jpeg",
    },
    {
      quote: "An amazing event that provided great networking opportunities! Meeting industry leaders was a game-changer for me.",
      name: "Rohit",
      title: "Techfluence 1",
      photo: "/loop/rohit.jpeg",
    },
    {
      quote: "Loved every session! The workshops were practical, and I walked away with new skills and motivation.",
      name: "Manisha Chaudhary",
      title: "Techfluence 1",
      photo: "/loop/manisha.jpeg",
    },
    {
      quote: "TechFluence brought innovation and entrepreneurship to life! Can’t wait for the next edition.",
      name: "Somesh Biswal",
      title: "Techfluence 1",
      photo: "/loop/sanu.jpeg",
    },
  ];

  const items2 = [
    {
      quote: "Attending TechFluence was one of the best decisions I made. The knowledge and connections I gained were priceless.",
      name: "Nisita Subramani",
      title: "Techfluence 2",
      photo: "/loop/nishita.jpeg",
    },
    {
      quote: "The event was well-organized, and the guest speakers shared valuable industry insights that helped shape my career path.",
      name: "Punit Kumar",
      title: "Techfluence 2",
      photo: "/loop/punit.jpeg",
    },
    {
      quote: "I left TechFluence feeling inspired and empowered! Highly recommend it to any tech enthusiast.",
      name: "Himant Yadav",
      title: "Techfluence 2",
      photo: "/loop/himant.jpeg",
    },
    {
      quote: "A fantastic event with a perfect blend of learning, networking, and innovation! Will definitely attend again.",
      name: "Kushagra Chaudhary",
      title: "Techfluence 2",
      photo: "/loop/kushagra.jpeg",
    },
    {
      quote: "The hands-on sessions and interactive talks made learning fun and engaging! Kudos to the organizers.",
      name: "Nainsi Sharma",
      title: "Techfluence 2",
      photo: "/loop/nainsi.jpeg",
    },
  ];

  const items3 = [
    {
      quote: "From AI to entrepreneurship, TechFluence covered it all! Truly an insightful experience.",
      name: "Subham Kumar",
      title: "Techfluence 3",
      photo: "/loop/subham.jpeg",
    },
    {
      quote: "TechFluence helped me connect with mentors who have guided me in my career journey. A must-attend event!",
      name: "Himant Yadav",
      title: "Techfluence 3",
      photo: "/loop/himant.jpeg",
    },
    {
      quote: "It was amazing to see so many like-minded individuals passionate about technology and innovation!",
      name: "Sriti Sareen",
      title: "Techfluence 3",
      photo: "/loop/sriti.jpeg",
    },
    {
      quote: "A great opportunity to meet tech influencers and industry leaders who provided invaluable guidance.",
      name: "Radha Raman",
      title: "Techfluence 3",
      photo: "/loop/radha.jpeg",
    },
  ];

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center mt-12 min-h-screen overflow-hidden ">
      {/* Animated Header */}
      <motion.div
        className="relative z-10 text-center mb-16 w-full max-w-4xl px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="mb-6"
        >
          <h2 className="text-7xl font-bold mb-2">
            {"Voice of Our Attendees".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.1,
                  color: index % 2 ? '#EAB308' : '#F97316',
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                className="inline-block transition-all duration-200 text-white cursor-pointer"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>

        <motion.p
          className="text-xl text-zinc-400 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Stories of Innovation and Impact
        </motion.p>
      </motion.div>

      {/* First Card Set */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={items}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mt-4"
        />
      </motion.div>

      {/* Second Card Set */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={items2}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="mt-10"
        />
      </motion.div>

      {/* Third Card Set */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={items3}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mt-10"
        />
      </motion.div>

      {/* Bottom Decorative Line */}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 mt-16"
        initial={{ width: 0 }}
        animate={{ width: '6rem' }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </main>
  );
};

export default Loop;
