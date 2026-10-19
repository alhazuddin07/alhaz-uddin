import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#030617] py-6 sm:py-8 relative">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:px-8 sm:flex-row">
        
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 via-indigo-500 to-cyan-400 text-xs font-bold text-white shadow-sm">
            AU
          </div>
          <span className="text-sm font-bold text-white">Alhaz Uddin</span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-slate-500 text-center">
          © 2025 Alhaz Uddin. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/alhazuddin07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:alhazuddin365@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
