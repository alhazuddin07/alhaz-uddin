import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy active section detection
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const found = navItems.find(
              (item) => item.href.substring(1) === section
            );
            if (found) setActive(found.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled || menuOpen
            ? "border-b border-white/10 bg-[#030617]/95 backdrop-blur-xl shadow-lg shadow-black/40"
            : "border-b border-white/5 bg-[#030617]/85 backdrop-blur-md"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-3.5">
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={() => {
              setActive("Home");
              setMenuOpen(false);
            }}
            className="group flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-500 via-indigo-500 to-cyan-400 text-sm sm:text-base font-bold text-white shadow-md shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all">
              AU
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">
              Alhaz Uddin
            </span>
          </a>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden items-center gap-4 md:gap-6 lg:gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`relative py-2 text-xs sm:text-sm font-medium transition-colors ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-purple-500 to-blue-500 transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Download CV Button (Desktop & Tablet) */}
          <div className="hidden md:flex items-center">
            <a
              href="/Alhaz-Uddin-CV.pdf"
              download
              className="group flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-medium text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white shadow-sm"
            >
              <Download className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-300 transition-transform group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-slate-300 hover:text-white md:hidden transition-colors cursor-pointer"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Directly inside Header) */}
        {menuOpen && (
          <div className="border-t border-slate-800/80 bg-[#030617] px-5 py-5 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = active === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive
                        ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                  </a>
                );
              })}

              {/* Mobile Download CV Button */}
              <div className="pt-3 border-t border-slate-800/80 mt-2">
                <a
                  href="/Alhaz-Uddin-CV.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 active:scale-98 transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay when menu is open on mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden"
        />
      )}
    </>
  );
}
