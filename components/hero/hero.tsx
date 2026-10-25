import Image from "next/image";
import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";

export function Hero(): ReactNode {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative w-full scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-275 px-6 pt-36 pb-12 sm:px-10 sm:pt-48 sm:pb-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-foreground text-[20px] leading-tight font-medium tracking-tight">
              Hey, I&rsquo;m Zyrel Gabriel Maningding
            </p>

            <h1
              id="hero-title"
              className="text-foreground text-[2.4rem] leading-[1.05] font-medium tracking-tight md:text-[2.5rem] lg:text-[3.65rem]"
            >
              <span className="block">UI/UX Designer &</span>
              <span className="text-accent block">Full Stack Developer</span>
            </h1>

            <p className="text-foreground/65 max-w-[34ch] text-[22px] leading-[1.4] tracking-tight">
              I bring interfaces and code together to create clean, intuitive
              digital experiences, from the first wireframe to the finished
              website.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="border-accent/25 bg-muted shadow-accent/10 relative aspect-square w-full overflow-hidden rounded-4xl border p-1.5 shadow-xl md:max-w-105">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/zyrel-portrait.jpg"
                  alt="Zyrel Gabriel Maningding wearing his graduation attire with a forest green stole and tie"
                  fill
                  priority
                  sizes="(min-width: 768px) 420px, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
