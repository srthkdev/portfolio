import Photo from "@/components/photo";
import LinkPrimitive from "@/components/link-primitive";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import Link from "next/link";
import { Metadata } from "next/types";
import Section from "@/components/section";
import Gallery from "@/components/gallery";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "https://1λ.com/about",
  },
};

export default function About() {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Link
          href="/"
          className="flex gap-x-1 bg-accent text-gray-12 w-fit rounded-sm pl-0.5 pr-1 py-0.5 leading-none items-center hover:bg-accent/50 transition duration-100 mx-1 md:mx-4"
          aria-label="Back"
        >
          <ArrowLeft size={16} className="shrink-0" />
          <span className="text-sm font-medium">Index</span>
        </Link>
        <div className="my-1 md:my-4 lg:hidden">
          <Gallery
            photos={[
              {
                src: "/images/image.jpg",
                alt: "Portrait",
              },
              {
                src: "/images/light.gif",
                alt: "Animated light",
              }
            ]}
          />
        </div>
        <Section heading="About Me">
          <div className="space-y-4">
            <p>
              20-year-old developer focused on building{" "}
              <LinkPrimitive href="https://fluxai-agents.vercel.app/" external>
                agents
              </LinkPrimitive>{" "}
              and web software to solve complex problems. Data science undergrad, hackathon enthusiast — secured runner-up in the{" "}
              <LinkPrimitive href="/blogs/mindmap" external={false}>
                Hypermode x Hashnode
              </LinkPrimitive>{" "}
              Hackathon with{" "}
              <LinkPrimitive href="https://mindmapai-modus.vercel.app/" external>
                Mindmap AI
              </LinkPrimitive>{" "}
              , winning $2k. Into fitness and music, always exploring new technologies.
            </p>
          </div>
        </Section>
      </div>
      <div className="hidden px-1 my-4 mt-10 lg:flex flex-col gap-4 md:px-4">
        <div className="relative aspect-square w-[250px] overflow-hidden rounded-sm border border-gray-12">
          <Image 
            src="/images/image.jpg" 
            alt="Portrait" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-video w-[250px] overflow-hidden rounded-sm border border-gray-12">
          <Image 
            src="/images/light.gif" 
            alt="Animated light" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
