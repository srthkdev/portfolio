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
import { experiences, hackathons, openSource, photos, projects, skills, type Project } from "@/content";
import LinkPrimitive from "@/components/link-primitive";
import getLastPlayed from "@/lib/spotify";
import Filter from "bad-words";
import Gallery from "@/components/gallery";
import Section from "@/components/section";
import Skeleton from "@/components/skeleton";

export const dynamic = "force-dynamic";

const GallerySection = () => {
  return (
    <>
      <Section heading="Gallery" className="shrink-0">
        <p>Things I keep coming back to.</p>
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
        Founding AI Engineer at Sidecar.
      </p>
      <div className="flex flex-col mt-4 gap-y-2">
        <p>
        I build AI systems: harnesses, evals, and the reranking, classification and extraction work behind them. My <LinkPrimitive
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

const Tags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1.5 mt-2.5">
    {items.map((item) => (
      <span
        key={item}
        className="px-1.5 py-0.5 rounded-sm text-xs text-gray-10 border border-gray-12"
      >
        {item}
      </span>
    ))}
  </div>
);

const ProjectList = ({ items }: { items: Project[] }) => {
  return (
    <ul className="flex flex-col gap-y-7">
      {items.map((project) => (
        <li key={project.name}>
          <div className="flex items-center gap-x-2">
            <LinkPrimitive href={project.links[0].href} external>
              {project.name}
            </LinkPrimitive>
            {project.highlight && (
              <span className="px-1.5 rounded-sm text-xs text-accent bg-accent/10 border border-accent/30">
                {project.highlight}
              </span>
            )}
          </div>
          <p className="mt-1.5">{project.description}</p>
          {project.points.length > 0 && (
            <ul className="mt-2 flex flex-col gap-y-1 text-gray-10">
              {project.points.map((point) => (
                <li key={point} className="flex gap-x-2">
                  <span className="text-accent" aria-hidden={true}>
                    –
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <Tags items={project.tech} />
          <div className="flex items-center mt-3 gap-x-4">
            {project.links.map((link) => (
              <a
                key={link.label}
                className="flex gap-x-1.5 items-center text-gray-10 hover:text-gray-12 transition-colors cursor-pointer text-sm"
                href={link.href}
                target="_blank"
              >
                {link.label}{" "}
                <span
                  className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                  aria-hidden={true}
                >
                  <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
                </span>
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

const OpenSource = () => {
  return (
    <Section heading="Open Source">
      <ul className="flex flex-col gap-y-4">
        {openSource.map((item) => (
          <li key={item.repo}>
            <p>
              <LinkPrimitive href={item.href} external>
                {item.repo}
              </LinkPrimitive>{" "}
              · {item.note}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 text-sm">
              {item.prs.map((pr) => (
                <a
                  key={pr.href}
                  href={pr.href}
                  target="_blank"
                  className="text-gray-10 hover:text-accent transition-colors"
                >
                  {pr.label} ↗
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Projects = () => {
  return (
    <Section heading="Projects">
      <ProjectList items={projects} />
    </Section>
  );
};

const Hackathons = () => {
  return (
    <Section heading="Hackathons">
      <ProjectList items={hackathons} />
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
  const song = await getLastPlayed()
    .then((res) => res.data)
    .catch(() => undefined);
  const filter = new Filter();

  const recent = song?.is_playing ? song.item : song?.items?.[0]?.track;

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
        <OpenSource />
        <Hackathons />
        <Skills />
        <GallerySection />
        <Footer />
      </div>
    </div>
  );
}
