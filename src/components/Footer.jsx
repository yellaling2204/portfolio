import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, Heart, ArrowUp, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-200 text-sm">{personalDetails.fullName}</span>
            <span className="text-cyan-400">|</span>
            <span className="text-emerald-400 font-semibold">IIIT Dharwad '26</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Associate Analyst • Automation Testing • Full-Stack Development
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#test-lab" className="hover:text-emerald-400 transition-colors">QA Lab</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors">Resume</button>
        </div>

        {/* Right: Socials & Back to top */}
        <div className="flex items-center space-x-4">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalDetails.email}`}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/50 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900/80 text-center text-[11px] text-slate-600">
        © {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved. Designed & built with React, Vite, and Tailwind CSS.
      </div>
    </footer>
  );
}
