import { GraduationCap, Code2, Heart, User, Mail, MapPin, Languages } from "lucide-react";
import { Card } from "./ui/card";

export default function AboutMe() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Self Learner",
      description: "Always exploring new technologies",
    },
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Turn ideas into real solutions",
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Work well with others",
    },
  ];

  const infoItems = [
    {
      icon: User,
      label: "Name",
      value: "Alhaz Uddin",
    },
    {
      icon: Mail,
      label: "Email",
      value: "alhazuddin365@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangladesh",
    },
    {
      icon: Languages,
      label: "Languages",
      value: "Bangla, English",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -z-10 h-72 sm:h-80 w-72 sm:w-80 rounded-full bg-blue-600/10 blur-[110px] sm:blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="h-0.5 w-5 sm:w-6 bg-blue-400 rounded-full" />
          <span>About Me</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-10 md:gap-8 lg:gap-10">

          {/* Left Column: Heading, Bio, and 3 Feature Items */}
          <div className="md:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4.5xl font-extrabold tracking-tight text-white leading-tight">
              Passionate Full-Stack Developer <br />
              <span className="text-slate-100">with a Creative Mind</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              I'm a full-stack developer with a strong passion for modern
              web technologies. I enjoy building beautiful, scalable, and functional
              web applications from front to back. I'm always eager to learn new things and
              improve my skills to create impactful digital solutions.
            </p>

            {/* 3 Highlights - responsive across mobile, tablet & desktop */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-start gap-2.5 sm:gap-3">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 text-blue-400 shadow-md">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Info Card and Hand-written "Code Create Improve" */}
          <div className="md:col-span-5 relative flex flex-col items-center justify-center md:items-end w-full">

            {/* Hand-drawn Floating Motto */}
            <div className="hidden sm:block select-none pointer-events-none rotate-6 absolute -top-10 sm:-top-12 right-2 sm:right-6 md:-right-2 lg:-right-6 z-20">
              <div className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-300 drop-shadow-[0_2px_12px_rgba(168,85,247,0.3)]">
                Code <br />
                Create <br />
                Improve
              </div>
            </div>

            {/* Dark Information Card */}
            <Card className="w-full max-w-md rounded-2xl border border-slate-800/80 bg-[#070c24]/85 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col divide-y divide-slate-800/70">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3.5 sm:gap-4 py-3 sm:py-3.5 first:pt-0 last:pb-0"
                    >
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-slate-850/80 border border-slate-800 text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[11px] sm:text-xs font-medium text-slate-400">
                          {item.label}
                        </span>
                        <span className="block truncate text-xs sm:text-sm font-semibold text-slate-100">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
}