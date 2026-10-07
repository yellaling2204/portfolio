import React, { useState, useEffect } from 'react';
import { personalDetails, stats, marqueeTechnologies } from '../data/portfolioData';
import { 
  ArrowRight, 
  FlaskConical, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Layers,
  Code2,
  User,
  Terminal
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import HolographicTerminal from './HolographicTerminal';
import InteractiveAvatar3D from './InteractiveAvatar3D';

export default function Hero({ onOpenResume }) {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [rightView, setRightView] = useState('avatar'); // 'avatar' | 'terminal'

  const taglines = personalDetails.taglines;

  // Typewriter effect loop
  useEffect(() => {
    const currentTag = taglines[currentTagIndex];
    const typingSpeed = isDeleting ? 30 : 65;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 400;

    let timer;

    if (!isDeleting && charIndex < currentTag.length) {
      timer = setTimeout(() => {
        setDisplayText(currentTag.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentTag.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentTag.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTagIndex((prev) => (prev + 1) % taglines.length);
      timer = setTimeout(() => {}, pauseBeforeNext);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTagIndex, taglines]);

  return (
    <section 
      id="hero" 
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-sm shadow-emerald-500/10 mb-5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300">
                {personalDetails.availability} • {personalDetails.relocation}
              </span>
              <span className="text-xs text-slate-500">|</span>
              <span className="text-xs font-mono text-cyan-400">
                IIIT Dharwad '26
              </span>
            </div>

            {/* Greeting & Main Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 leading-none">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                {personalDetails.name}
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="h-9 sm:h-11 flex items-center mb-4">
              <span className="text-lg sm:text-2xl font-mono font-semibold text-slate-200 flex items-center">
                <span className="text-cyan-400 mr-2">&gt;</span>
                <span className="text-slate-100">{displayText}</span>
                <span className="w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse inline-block"></span>
              </span>
            </div>

            {/* Systematic Bio Pitch */}
            <p className="max-w-2xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
              Full-Stack Software Engineer graduating from <strong className="text-white">IIIT Dharwad</strong> specializing in <span className="text-cyan-300 font-semibold">modern web applications</span> (React, Next.js 14, Node.js, TypeScript, MongoDB) paired with <span className="text-emerald-300 font-semibold">Quality Engineering & automated test architecture</span>. Engineered real-time chat platforms, applicant tracking pipelines, and LLM-assisted testing harnesses.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>View Full-Stack Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#test-lab"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-200 shadow-glow-emerald transition-all duration-300 transform hover:-translate-y-1"
              >
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>Live Test Framework</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Quick Contacts & Socials */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-6">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/{personalDetails.githubUsername}</span>
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:text-cyan-300 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/{personalDetails.linkedinUsername}</span>
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalDetails.email}</span>
              </a>
            </div>

            {/* Executive Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {stats.map((s, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md"
                >
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-cyan-400">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200">
                    {s.label}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    {s.subtext}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Holographic Portrait + Code Terminal Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Mode Switcher Tabs */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-900/90 border border-slate-800 mb-2 shadow-lg backdrop-blur-xl">
              <button
                onClick={() => setRightView('avatar')}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  rightView === 'avatar'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>3D Portrait</span>
              </button>
              <button
                onClick={() => setRightView('terminal')}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  rightView === 'terminal'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Live Terminal</span>
              </button>
            </div>

            {/* Display Active 3D Component */}
            {rightView === 'avatar' ? (
              <InteractiveAvatar3D onOpenResume={onOpenResume} />
            ) : (
              <HolographicTerminal />
            )}

          </div>

        </div>
      </div>

      {/* Infinite Animated Marquee Ribbon */}
      <div className="w-full max-w-7xl mx-auto overflow-hidden py-3 border-y border-slate-800/80 bg-slate-950/80 backdrop-blur-md mt-10">
        <div className="flex animate-marquee space-x-8">
          {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-xs font-mono text-slate-300 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="hover:text-cyan-300 transition-colors cursor-default">{tech}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
