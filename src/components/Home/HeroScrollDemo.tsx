"use client";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              28-Feb & 03-March <br />
              <span className="text-4xl md:text-[6rem] bg-gradient-to-r from-orange-700 to-orange-300 text-transparent bg-clip-text font-bold mt-1 leading-none">
                Upcoming Event
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/banner.jpeg`}
          alt="hero"
          layout="fill"
          objectFit="full"
          className="rounded-2x"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
