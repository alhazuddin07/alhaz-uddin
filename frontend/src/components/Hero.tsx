import { useState, useEffect } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import portraitImg from "../assets/alhaz-portrait.jpg";

export default function Hero() {
  const fullName = "Alhaz Uddin";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === fullName) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? fullName.substring(0, prev.length - 1)
              : fullName.substring(0, prev.length + 1)
          );
        },
        isDeleting ? 60 : 130
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-5 -z-10 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-purple-700/15 blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 sm:right-10 -z-10 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-blue-600/15 blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-6 lg:gap-10">
          
          {/* Left Column: Text & CTAs */}
          <div className="md:col-span-7 flex flex-col items-start z-10 text-left">
            {/* Status Badge */}
            <Badge
              variant="success"
              className="mb-4 sm:mb-6 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium border-emerald-500/25 bg-emerald-500/10 text-emerald-400 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for new opportunities</span>
            </Badge>

            {/* Greetings & Titles */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              Hi, I'm
            </h2>

            {/* Typewriter Name */}
            <h1 className="mt-1 min-h-[1.25em] flex items-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400">
                {displayText || "\u00A0"}
              </span>
              <span className="ml-1.5 sm:ml-2 inline-block w-1 sm:w-1.5 h-[0.85em] rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </h1>

            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100">
              Full-Stack Developer
            </h3>

            {/* Bio Description */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-base lg:text-lg text-slate-400 leading-relaxed font-normal">
              I build modern, scalable and user-friendly full-stack web applications
              using React, Next.js, Node.js and modern web technologies. I love turning
              ideas into real, interactive digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group rounded-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium px-6 sm:px-7 shadow-lg shadow-purple-500/25 transition-all text-xs sm:text-sm"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-6 sm:px-7 transition-all text-xs sm:text-sm"
                >
                  <span>Get In Touch</span>
                  <Mail className="h-4 w-4 text-slate-300" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-10 flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://github.com/alhazuddin07"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-800 bg-[#070d24]/80 text-slate-400 transition-all hover:border-purple-500/50 hover:bg-purple-600/10 hover:text-white hover:scale-110 shadow-sm"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-800 bg-[#070d24]/80 text-slate-400 transition-all hover:border-purple-500/50 hover:bg-purple-600/10 hover:text-white hover:scale-110 shadow-sm"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-800 bg-[#070d24]/80 text-slate-400 transition-all hover:border-purple-500/50 hover:bg-purple-600/10 hover:text-white hover:scale-110 shadow-sm"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>

              <a
                href="mailto:alhazuddin365@gmail.com"
                aria-label="Email Address"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-800 bg-[#070d24]/80 text-slate-400 transition-all hover:border-purple-500/50 hover:bg-purple-600/10 hover:text-white hover:scale-110 shadow-sm"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait with Fluid Glowing Blob & Annotation */}
          <div className="md:col-span-5 relative flex justify-center items-center mt-8 md:mt-0">
            
            {/* Hand-drawn Annotation & Arrow (optimized for tablet & mobile) */}
            <div className="absolute -top-10 sm:-top-12 -right-1 sm:-right-4 md:-right-2 lg:-right-6 z-20 hidden xs:flex sm:flex flex-col items-end select-none pointer-events-none scale-90 sm:scale-95 lg:scale-100 origin-bottom-right">
              <div className="text-right leading-tight font-handwriting text-slate-200 text-lg sm:text-xl lg:text-2xl rotate-3">
                <span className="relative">
                  Let's build
                  <span className="absolute -top-2 -left-3 text-purple-400 text-xs sm:text-sm">✦</span>
                </span>
                <br />
                <span>something great</span>
                <br />
                <span>together.</span>
              </div>
              <svg
                className="w-12 h-10 sm:w-16 sm:h-14 -mr-1 sm:-mr-2 mt-1 text-purple-400/80 stroke-current -rotate-6"
                viewBox="0 0 60 50"
                fill="none"
              >
                <path
                  d="M45,5 C35,25 25,35 12,42 M12,42 L22,40 M12,42 L16,32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Glowing Backdrop Blob - scaled for phones, tablets & desktops */}
            <div className="relative w-[260px] h-[300px] sm:w-[320px] sm:h-[360px] md:w-[320px] md:h-[360px] lg:w-[420px] lg:h-[460px] flex items-center justify-center">
              
              {/* Organic fluid gradient background blob */}
              <div
                className="absolute inset-0 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-linear-to-tr from-cyan-400 via-blue-600 to-fuchsia-600 opacity-90 blur-sm animate-pulse-glow"
                style={{
                  boxShadow: "0 0 70px rgba(168, 85, 247, 0.35), 0 0 35px rgba(59, 130, 246, 0.35)",
                }}
              />

              {/* Portrait image container */}
              <div
                className="relative z-10 w-[94%] h-[94%] overflow-hidden rounded-[43%_57%_63%_37%/48%_47%_53%_52%] border-2 border-white/20 bg-slate-950 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={portraitImg}
                  alt="Alhaz Uddin — Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
