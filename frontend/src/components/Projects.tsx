import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Badge } from "./ui/badge";
import bazardorImg from "../assets/project-bazardor.jpg";
import banglanewsImg from "../assets/project-banglanews.jpg";
import fitlogImg from "../assets/project-fitlog.svg";

type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "BazarDor (বাজার দর)",
    tag: "Next.js",
    description:
      "A price comparison website for daily essentials like rice, dal, oil, vegetables, fish, meat, eggs and spices.",
    image: bazardorImg,
    liveUrl: "https://bazar-dor-teal-tau.vercel.app/",
    githubUrl: "https://github.com/alhazuddin07/BazarDor",
  },
  {
    title: "Bangla News 24 (বাংলা নিউজ ২৪)",
    tag: "Next.js",
    description:
      "A modern Bengali online news portal featuring breaking news ticker, categorized news sections, and real-time news reading experience.",
    image: banglanewsImg,
    liveUrl: "https://bangla-news-24-henna.vercel.app/",
    githubUrl: "https://github.com/alhazuddin07/bangla-news-24",
  },
  {
    title: "FitLog",
    tag: "Next.js",
    description:
      "A dark-themed gym companion and workout library web app with exercise routines, muscle targeting, set logging, and custom plan tracking.",
    image: fitlogImg,
    liveUrl: "https://assignment-number-6-seven.vercel.app/",
    githubUrl: "https://github.com/alhazuddin07/assignment-number-6",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 -z-10 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-blue-600/10 blur-[130px] sm:blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Header with Title and "View All Projects" link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
              <span className="h-0.5 w-5 sm:w-6 bg-blue-400 rounded-full" />
              <span>My Projects</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Some of My Recent Work
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg text-slate-400 max-w-2xl font-normal">
              Here are a few projects I've built. You can check out more on my GitHub.
            </p>
          </div>

          <a
            href="https://github.com/alhazuddin07"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Project Cards Grid - optimized for mobile, tablet (md), and desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isThird = index === 2;
            return (
              <div
                key={project.title}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-[#070c24]/85 hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  isThird
                    ? "md:col-span-2 lg:col-span-1 md:flex-row lg:flex-col"
                    : ""
                }`}
              >
                {/* Preview Image with tag */}
                <div
                  className={`relative overflow-hidden bg-slate-950 ${
                    isThird
                      ? "h-48 sm:h-52 md:h-auto lg:h-52 w-full md:w-1/2 lg:w-full shrink-0"
                      : "h-48 sm:h-52 w-full shrink-0"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Framework Tag Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-slate-950/80 border border-slate-700/80 px-2.5 py-0.5 text-xs font-medium text-slate-200 backdrop-blur-md"
                    >
                      {project.tag}
                    </Badge>
                  </div>
                </div>

                {/* Content Body */}
                <div
                  className={`flex flex-1 flex-col justify-between p-5 sm:p-6 ${
                    isThird ? "md:w-1/2 lg:w-full" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-slate-800/60 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
