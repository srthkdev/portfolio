import React, { Suspense } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
} from "@phosphor-icons/react/dist/ssr/index";
import { Accordion, AccordionItem } from "@/components/collapsible";
import { MusicCard, ReadingCard } from "@/components/hover-card";
import Contact, {
  ContactCopyItem,
  ContactItem,
} from "@/components/contact-link";
import { experiences, photos, skills } from "@/content";
import LinkPrimitive from "@/components/link-primitive";
import getLastPlayed from "@/lib/spotify";
import Filter from "bad-words";
import Gallery from "@/components/gallery";
import Section from "@/components/section";
import Skeleton from "@/components/skeleton";

export const dynamic = "force-dynamic";

const Blogs = () => {
  return (
    <>
      <Section heading="Blogs" className="shrink-0">
        <div className="flex flex-col gap-y-1.5">
          <p>
          I write blogs about my projects, coding journey, and tech insights.
          </p>
        </div>
      </Section>
      <Gallery photos={photos} />
    </>
  );
};

const Items = () => {
  return (
    <Section>
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
        Sarthak Jain
      </h1>
      <p className="mt-1 text-gray-9">
        Software Engineer, Web Development, AI.
      </p>
      <div className="flex flex-col mt-4 gap-y-2">
        <p>
        I like building simple software to solve complex problems — from modern, responsive websites to feature-packed AI agents. My <LinkPrimitive
            href="https://twitter.com/messages/compose?recipient_id=1398882176242884608"
            external
          >DM's</LinkPrimitive> are open.
        </p>
        <div className="flex gap-x-6 mt-2 items-center">
          <LinkPrimitive href="/about" variant="route">
            Learn a bit more
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>
          <ContactItem icon={<Copy />} className="text-sm">
            <ContactCopyItem title="Email me" copy="sarthakj.study.cs@gmail.com" />
          </ContactItem>
        </div>
      </div>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section heading="Experience">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {experiences.map((role) => (
          <React.Fragment key={role.company}>
            <AccordionItem
              role={role.role}
              company={role.company}
              range={role.range}
              description={role.description}
              skills={role.skills}
            />
            <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Section>
  );
};

const Projects = () => {
  return (
    <Section heading="Projects">
      <ul className="flex flex-col gap-y-6">
      <li>
          <p>
            <LinkPrimitive
              href="https://mindmapai-modus.vercel.app/"
              external
            >
              Mindmap AI
            </LinkPrimitive>{" "}
            is a platform to visualize complex problems into simple mindmaps using AI.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://mindmapai-modus.vercel.app/"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/srthkdev/mindmap-frontend"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>

        <li>
          <p>
            <LinkPrimitive
              href="https://fluxai-agents.vercel.app/"
              external
            >
              Flux:
            </LinkPrimitive>{" "}
            Superintelligent Form Builder with Agents and Memory
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://fluxai-agents.vercel.app/"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/srthkdev/flux"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>

        <li>
          <p>
            <LinkPrimitive
              href="https://vibely-rooms.vercel.app/"
              external
            >
              Vibely
            </LinkPrimitive>{" "}
            offers real-time video chat rooms in a bold neo-brutalist design, powered by Socket.io, WebRTC, and Next.js.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://vibely-rooms.vercel.app/"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/srthkdev/vibely"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>

        <li>
          <p>
            <LinkPrimitive
              href="https://sarthak-wiz.vercel.app/"
              external
            >
              Portfolio
            </LinkPrimitive>{" "}
            - website showcasing my projects, skills, and achievements, built with Next.js, TypeScript, and Tailwind CSS for a modern, responsive, and accessible experience.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://sarthak-wiz.vercel.app/"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/srthkdev/portfolio"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>

        <li>
          <p>
            <LinkPrimitive href="https://nav-durga-quiz.vercel.app/" external>
              Nav-Durga Quiz
            </LinkPrimitive>{" "}
            is simple quiz app made with vite-react.js and tailwind.css
          </p>
          <div className="flex items-center mt-2 gap-x-4">
          <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://nav-durga-quiz.vercel.app/"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://github.com/srthkdev/nav-durga-quiz"
              target="_blank"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
      </ul>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section heading="Skills">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {skills.map((skill) => (
          <React.Fragment key={skill.category}>
            <AccordionItem
              role={skill.category}
              company=""
              range=""
              description=""
              skills={skill.items}
            />
            <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Section>
  );
};

const Currently = async () => {
  const { data: song } = await getLastPlayed();
  const filter = new Filter();

  const recent = song.is_playing ? song.item : song.items[0].track;

  if (!recent) return (
    <>
      <p>
        Listening to a podcast or something else.
      </p>
    </>
  )

  const isLatin = (text: string) => /^[\u0000-\u007F]*$/.test(text);

  const track = {
    title: isLatin(recent.name) ? filter.clean(recent.name || '') : recent.name || '',
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <>
      <p>
        Listening to{" "}
        <MusicCard {...track}>
          <LinkPrimitive href={track.songUrl} external popover>
            {track.title}
          </LinkPrimitive>
        </MusicCard>{" "}
        by {track.artist}.
      </p>
    </>
  );
};

const Footer = () => {
  return (
    <Section>
      <div className="max-w-xs mt-12 text-sm text-gray-11 md:mt-0">
        You can view the code {" "} <LinkPrimitive href="https://github.com/srthkdev/portfolio" external>here</LinkPrimitive>.
      </div>
    </Section>
  );
};

export default function Home() {
  return (
    <div className="justify-center md:flex animate-in fade-in duration-500">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Items />
        <Section heading="Recently">
          <Suspense
            fallback={
              <div className="flex flex-wrap items-center gap-x-1">
                Listening to <Skeleton className="inline-flex w-24 h-4" /> by{" "}
                <Skeleton className="inline-flex w-24 h-4" />.
              </div>
            }
          >
            <Currently />
          </Suspense>
        </Section>
        <Contact />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}
