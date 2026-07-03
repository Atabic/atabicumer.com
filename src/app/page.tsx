import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ProjectCard } from "@/components/project-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="relative">
        <div className="absolute inset-x-0 -top-12 sm:-top-24 h-[100px] overflow-hidden -z-10">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} \u{1F44B}\u{FE0F}`}
                as="h1"
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                  <span className="text-background text-sm font-medium">
                    Projects
                  </span>
                </div>
                <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I&apos;ve built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Most of this is internal to the companies I work for, so I
                  can&apos;t link to a live demo. Here&apos;s what each one
                  actually does and why I built it that way.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="space-y-6 max-w-[800px] mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h3 className="text-lg font-semibold">
                AI &amp; agentic tooling
              </h3>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
              {DATA.aiProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 7 + id * 0.05}
                  className="h-full"
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="space-y-6 max-w-[800px] mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h3 className="text-lg font-semibold">
                Product &amp; platform engineering
              </h3>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
              {DATA.otherProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                  className="h-full"
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <Accordion type="single" collapsible className="w-full grid gap-1">
              {DATA.work.map((work) => (
                <AccordionItem
                  key={work.company + work.title}
                  value={work.company + work.title}
                  className="border-b-0"
                >
                  <AccordionTrigger className="hover:no-underline py-2">
                    <div className="flex items-center gap-x-3 justify-between w-full text-left">
                      <div className="flex items-center gap-x-3 flex-1 min-w-0">
                        <Avatar className="size-10 border shadow ring-2 ring-border rounded-full flex-none bg-background dark:bg-foreground">
                          <AvatarImage
                            src={work.logoUrl}
                            alt={work.company}
                            className="object-contain"
                          />
                          <AvatarFallback>{work.company[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                          <div className="font-semibold leading-none text-sm">
                            {work.company}
                          </div>
                          <div className="font-sans text-xs text-muted-foreground">
                            {work.title}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="ml-[3.25rem] text-xs sm:text-sm text-muted-foreground">
                    {work.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 13 + id * 0.05}
            >
              <Link
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 justify-between group py-2"
              >
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <Avatar className="size-10 border shadow ring-2 ring-border rounded-full flex-none bg-background dark:bg-foreground">
                    <AvatarImage
                      src={education.logoUrl}
                      alt={education.school}
                      className="object-contain"
                    />
                    <AvatarFallback>{education.school[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold leading-none text-sm flex items-center gap-2">
                      {education.school}
                      <ArrowUpRight
                        className="size-3.5 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-hidden
                      />
                    </div>
                    <div className="font-sans text-xs text-muted-foreground">
                      {education.degree}
                    </div>
                  </div>
                </div>
                <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                  {education.start} - {education.end}
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 px-3 flex items-center gap-2">
                  <skill.icon
                    aria-hidden="true"
                    className="size-4 shrink-0 rounded-xs overflow-hidden object-contain"
                  />
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="border rounded-xl p-10 relative">
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
              <span className="text-background text-sm font-medium">
                Open to work
              </span>
            </div>
            <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s talk
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Open to senior or staff full-stack and AI-engineering roles,
                remote. I&apos;m based in Lahore, Pakistan, with solid overlap
                into US and EU working hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href={DATA.contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Book a call
                </Link>
                <Link
                  href={DATA.contact.social.email.url}
                  className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Email me instead
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
