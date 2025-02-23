import Hero from "@/components/Home/Hero";
import { HeroParallaxDemo } from "@/components/Home/HeroParallaxDemo";
import { TimelineDemo } from "@/components/Home/TimelineDemo";
import { div } from "framer-motion/client";


export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <TimelineDemo />
      </div>
      <div>
        <HeroParallaxDemo />
      </div>
    </div>
  );
}
