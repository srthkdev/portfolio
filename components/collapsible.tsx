"use client";
import { CaretDown } from "@phosphor-icons/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

//@ts-ignore
import useSound from "use-sound";

const AccordionItem = ({
  role,
  company,
  description,
  range,
  skills,
}: {
  role: string;
  company: string;
  description: string;
  range: string;
  skills?: string[];
}) => {
  // Short range for mobile view - not enough space
  const shortRange = range.includes(" - ")
    ? range.split(" - ")[1].trim()
    : range?.trim() || "";

  const [play] = useSound("/sounds/trigger.mp3");

  const isSkillSection = company === "" && range === "" && description === "";

  return (
    <AccordionPrimitive.Item value={role}>
      <AccordionPrimitive.Trigger
        className="py-1 grid px-2 focus-visible:bg-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-transparent focus-visible:ring-accent/20 focus-visible:text-gray-12 hover:bg-accent hover:text-gray-12 rounded-sm w-full justify-items-start items-center group data-[state=open]:bg-accent/10 data-[state=open]:text-accent data-[state=open]:border data-[state=open]:border-accent whitespace-nowrap"
        style={{ 
          gridTemplateColumns: isSkillSection ? "min-content 1fr" : "min-content 125px 1fr min-content" 
        }}
        onClick={play}
      >
        <CaretDown
          size={11}
          className="text-gray-10 group-data-[state=open]:-rotate-90 transition-transform duration-150 mr-2 group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-accent -translate-y-px"
          aria-hidden={true}
        />

        <span className={isSkillSection ? "font-medium" : ""}>{role}</span>
        {!isSkillSection && <span className="mx-2">{company}</span>}
        {!isSkillSection && (
          <>
            <span className="hidden sm:block ml-auto text-gray-10 text-sm group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-accent">
              {range}
            </span>
            <span className="sm:hidden ml-auto text-gray-10 text-sm group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-accent">
              {shortRange}
            </span>
          </>
        )}
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="flex flex-col px-2 py-3 gap-y-2">
          {description && <p>{description}</p>}
          <div className={isSkillSection ? "flex flex-wrap gap-2" : "flex gap-x-1.5"}>
            {skills?.map((skill) => {
              return (
                <div
                  className={isSkillSection 
                    ? "px-2 py-1 rounded-sm text-accent text-sm border border-gray-12 hover:border-accent hover:bg-accent/10 transition-colors"
                    : "rounded-sm text-gray-10 text-sm py-0.5"}
                  key={skill}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

const Accordion = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <AccordionPrimitive.Root className={className} type="multiple">
      {children}
    </AccordionPrimitive.Root>
  );
};

export { Accordion, AccordionItem };
