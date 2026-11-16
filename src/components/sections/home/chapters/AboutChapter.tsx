import Image from "next/image";
import { profilePhoto } from "@/data/about";
import { aboutTeaser } from "@/data/home";
import { Chapter, type ChapterSlot } from "./Chapter";

/** Capítulo 5: quién está detrás del sitio, con foto y presentación. */
export function AboutChapter(slot: ChapterSlot) {
  return (
    <Chapter
      {...slot}
      heading={aboutTeaser.heading}
      tone="aurora"
      transition="blob"
      origin="72 55"
      hold={1.1}
    >
      <div className="flex items-start gap-4 sm:gap-6 lg:items-center lg:gap-8">
        <div
          data-stage-pop
          className="w-[30%] max-w-32 shrink-0 rounded-card bg-brand-gradient p-px shadow-glow sm:max-w-44 lg:w-[42%] lg:max-w-64"
        >
          <Image
            src={profilePhoto.src}
            alt={profilePhoto.alt}
            width={profilePhoto.width}
            height={profilePhoto.height}
            sizes="(min-width: 1024px) 256px, (min-width: 640px) 176px, 30vw"
            className="aspect-[4/5] w-full rounded-card object-cover object-[60%_85%]"
          />
        </div>
        <div className="min-w-0 flex-1 space-y-3 text-sm text-pretty text-ink-dim sm:text-base lg:space-y-4 lg:text-lg">
          {aboutTeaser.paragraphs.map((paragraph) => (
            <p key={paragraph} data-stage-fade>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
