import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles, CheckCircle2, Code2, Award } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -z-10 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-purple-600/10 blur-[130px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <span className="h-0.5 w-5 sm:w-6 bg-blue-400 rounded-full" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Education & Learning
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg text-slate-400 max-w-2xl font-normal">
            My formal academic journey and continuous technical self-development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Main Card: National University Honours 2nd Year (lg:col-span-7) */}
          <div className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0a1033]/90 via-[#070c24]/85 to-[#030617]/90 p-6 sm:p-8 md:p-9 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-80" />

            <div>
              {/* Header row with Icon and Status Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 transition-transform group-hover:scale-105">
                    <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                      Honours (Bachelor's Degree)
                    </h3>
                  </div>
                </div>

                {/* Running Student Status Pill */}
                <Badge
                  variant="secondary"
                  className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 text-xs font-medium flex items-center gap-1.5 shrink-0"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>2nd Year Running</span>
                </Badge>
              </div>

              {/* Institution Name */}
              <div className="mb-4">
                <div className="text-base sm:text-lg font-semibold text-slate-100 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>National University of Bangladesh</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  জাতীয় বিশ্ববিদ্যালয় (Bangladesh)
                </p>
              </div>

              {/* Meta Info Pills */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 py-3 border-y border-slate-800/80 mb-5">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="h-3.5 w-3.5 text-blue-400" />
                  <span>Current: 2nd Year Student</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <MapPin className="h-3.5 w-3.5 text-purple-400" />
                  <span>Bangladesh</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                  <span>Active Enrollment</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                I am currently an active <strong>Honours 2nd year student</strong> under the <strong>National University of Bangladesh</strong>. While maintaining my academic curriculum, I dedicate significant time and passion toward mastering modern full-stack web technologies, software architecture, and real-world project development.
              </p>
            </div>

            {/* Academic & Skill Focus Pills */}
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Key Focus & Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Web Development",
                  "JavaScript / TypeScript",
                  "Modern Frameworks (React, Next.js)",
                  "Problem Solving",
                  "Academic Studies",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md"
                  >
                    <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Secondary Card: Continuous Tech Learning & Engineering Track (lg:col-span-5) */}
          <div className="lg:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0c1236]/80 via-[#070c24]/85 to-[#030617]/90 p-6 sm:p-8 md:p-9 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-80" />

            <div>
              {/* Header row */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
                  <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Self-Driven Growth
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Full-Stack Engineering
                  </h3>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-slate-100 flex items-center gap-2">
                  <Award className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Hands-on Practical Mastery</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  Combining university education with rigorous self-directed development. Daily practice building end-to-end full-stack web applications, exploring new tools, and collaborating on open-source code.
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 my-5 py-3 border-y border-slate-800/80">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Coding:</strong> Constant learning through real-world projects and modern coding practices.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Production Deployment:</strong> Deploying web apps live on Vercel with responsive design and clean code.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Open Source & GitHub:</strong> Active Git version control workflow and repository management.</span>
                </div>
              </div>
            </div>

            {/* Bottom Quote / Badge */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs text-slate-400 italic">
                "Learning never stops. Balancing academic commitments while continuously leveling up as a full-stack engineer."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
