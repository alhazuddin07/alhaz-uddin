import { Card } from "./ui/card";

type Skill = {
  name: string;
  category: string;
  icon: (props: { className?: string }) => React.JSX.Element;
};

const skills: Skill[] = [
  {
    name: "React",
    category: "UI Library",
    icon: ({ className }) => (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        className={className}
        fill="currentColor"
      >
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "React Framework",
    icon: ({ className }) => (
      <div className={`flex items-center justify-center rounded-full bg-black text-white font-black text-base sm:text-lg md:text-xl border border-slate-700 ${className}`}>
        <span>N</span>
      </div>
    ),
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: ({ className }) => (
      <div className={`flex items-center justify-center rounded-lg bg-[#f7df1e] text-black font-extrabold text-sm sm:text-base md:text-lg select-none ${className}`}>
        <span>JS</span>
      </div>
    ),
  },
  {
    name: "TypeScript",
    category: "Typed JavaScript",
    icon: ({ className }) => (
      <div className={`flex items-center justify-center rounded-lg bg-[#3178c6] text-white font-bold text-sm sm:text-base md:text-lg select-none ${className}`}>
        <span>TS</span>
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: ({ className }) => (
      <svg viewBox="0 0 54 33" className={className} fill="#38bdf8">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
      </svg>
    ),
  },
  {
    name: "Responsive Web Design",
    category: "Mobile First",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <rect x="15" y="9" width="5" height="7" rx="1" fill="#030617" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 -z-10 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-purple-700/10 blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="h-0.5 w-5 sm:w-6 bg-blue-400 rounded-full" />
          <span>My Skills</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Technologies I Work With
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg text-slate-400 max-w-2xl font-normal">
          Here are the tools and technologies I use to build modern web applications.
        </p>

        {/* 6 Skill Cards: 2 cols on mobile, 3 cols on tablet (md), 6 cols on desktop (lg) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5 md:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="group relative flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 text-center border-slate-800/80 bg-[#070c24]/80 hover:bg-[#0c143a]/90 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Icon box */}
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-slate-900/60 p-2 sm:p-2.5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 object-contain" />
                </div>

                {/* Title */}
                <h3 className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight">
                  {skill.name}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-[11px] sm:text-xs text-slate-400 font-normal leading-tight">
                  {skill.category}
                </p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
