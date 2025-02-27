import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { HeroStats } from "@/components/Home/hero-stats";
import { HeroParallaxDemo } from "@/components/Home/HeroParallaxDemo";
import { TimelineDemo } from "@/components/Home/TimelineDemo";
import { Spotlight } from "@/components/ui/spotlight";
import { HeroScrollDemo } from "@/components/Home/HeroScrollDemo";
import Loop from "@/components/Home/InfiniteMovingCardsDemo";
import { TextGenerateEffectDemo } from "@/components/Home/TextGenerateEffectDemo";

export default function Home() {
  return (
    <div>
      <Spotlight>
        <div>
          <Hero />
        </div>
        <div>
          <TextGenerateEffectDemo />
        </div>
        <div>
          <TimelineDemo />
        </div>
        <div>
          <HeroStats />
        </div>
        <div>
          <HeroParallaxDemo />
        </div>
        <div>
          <HeroScrollDemo />
        </div>
        <div>
          <Loop />
        </div>
        {/* <div>
        <Footer />
      </div> */}
      </Spotlight>
    </div>
  );
}
