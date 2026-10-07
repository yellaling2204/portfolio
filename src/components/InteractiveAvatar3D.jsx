import React, { useRef, useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  ExternalLink,
  Layers,
  Award,
  RotateCw,
  Scan,
  Cpu,
  CheckCircle,
  MapPin,
  Mail,
  Zap,
  Activity
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalDetails, educationData } from '../data/portfolioData';

export default function InteractiveAvatar3D({ onOpenResume }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [hologramTheme, setHologramTheme] = useState('cyan'); // 'cyan' | 'emerald' | 'violet'

  const handleMouseMove = (e) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt angles
    const rotX = ((y - centerY) / centerY) * -14;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isFlipped) {
      setRotateX(0);
      setRotateY(0);
      setGlare((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  const triggerScan = (e) => {
    e.stopPropagation();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2500);
  };

  const toggleFlip = (e) => {
    e?.stopPropagation();
    setIsFlipped(!isFlipped);
    setRotateX(0);
    setRotateY(0);
  };

  // Holographic themes styling
  const themeGlows = {
    cyan: {
      border: 'linear-gradient(135deg, rgba(6, 182, 212, 0.85), rgba(59, 130, 246, 0.5), rgba(16, 185, 129, 0.85))',
      shadow: '0 0 35px -5px rgba(6, 182, 212, 0.5), 0 0 25px -5px rgba(16, 185, 129, 0.35)',
      accent: 'text-cyan-400',
      bgPulse: 'from-cyan-500/25 via-blue-600/20 to-emerald-500/25',
      scanLine: 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]',
    },
    emerald: {
      border: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.6), rgba(6, 182, 212, 0.7))',
      shadow: '0 0 35px -5px rgba(16, 185, 129, 0.5), 0 0 25px -5px rgba(6, 182, 212, 0.35)',
      accent: 'text-emerald-400',
      bgPulse: 'from-emerald-500/25 via-teal-600/20 to-cyan-500/25',
      scanLine: 'bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399]',
    },
    violet: {
      border: 'linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(59, 130, 246, 0.6), rgba(236, 72, 153, 0.7))',
      shadow: '0 0 35px -5px rgba(168, 85, 247, 0.5), 0 0 25px -5px rgba(236, 72, 153, 0.35)',
      accent: 'text-purple-400',
      bgPulse: 'from-purple-500/25 via-indigo-600/20 to-pink-500/25',
      scanLine: 'bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_#c084fc]',
    }
  };

  const currentTheme = themeGlows[hologramTheme];
  const edu = educationData[0];

  return (
    <div className="relative w-full max-w-[370px] sm:max-w-[410px] mx-auto py-2">
      {/* Top Interactive Controls Toolbar */}
      <div className="flex items-center justify-between px-2 mb-2.5">
        <div className="flex items-center space-x-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 backdrop-blur-md">
          <button
            onClick={() => setHologramTheme('cyan')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-all ${hologramTheme === 'cyan' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
            title="Cyan Cyber Aura"
          >
            Cyan
          </button>
          <button
            onClick={() => setHologramTheme('emerald')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-all ${hologramTheme === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'}`}
            title="Matrix Emerald Aura"
          >
            Matrix
          </button>
          <button
            onClick={() => setHologramTheme('violet')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-all ${hologramTheme === 'violet' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-white'}`}
            title="Synthwave Violet Aura"
          >
            Neon
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* Laser Scan Trigger */}
          <button
            onClick={triggerScan}
            disabled={isScanning || isFlipped}
            className={`px-2.5 py-1 rounded-xl text-[10px] font-mono flex items-center space-x-1.5 transition-all bg-slate-900/80 border border-slate-800 ${isScanning ? 'text-cyan-300 border-cyan-500/50 bg-cyan-950/40' : 'text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300'}`}
          >
            <Scan className={`w-3 h-3 ${isScanning ? 'animate-spin text-cyan-400' : ''}`} />
            <span>{isScanning ? 'Scanning...' : 'Laser Scan'}</span>
          </button>

          {/* 3D Flip Trigger */}
          <button
            onClick={toggleFlip}
            className="px-2.5 py-1 rounded-xl text-[10px] font-mono flex items-center space-x-1.5 transition-all bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300"
            title="Flip 3D Card"
          >
            <RotateCw className="w-3 h-3 text-cyan-400" />
            <span>{isFlipped ? 'Show Photo' : '3D Flip'}</span>
          </button>
        </div>
      </div>

      {/* Ambient Pulsing Backlight */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${currentTheme.bgPulse} rounded-3xl blur-2xl -z-10 animate-pulse-slow transition-colors duration-700`} 
      />

      {/* 3D Perspective Flip Container */}
      <div 
        className="w-full relative" 
        style={{ perspective: '1400px' }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-3xl p-1.5 transition-transform duration-500 ease-out will-change-transform cursor-pointer select-none"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped 
              ? 'rotateY(180deg)' 
              : `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          }}
        >
          {/* Animated Conic Border Glow */}
          <div 
            className="absolute inset-0 rounded-3xl -z-10 p-[2px] overflow-hidden transition-all duration-500"
            style={{
              background: currentTheme.border,
              boxShadow: isHovered ? currentTheme.shadow : '0 0 20px -5px rgba(6, 182, 212, 0.25)',
            }}
          />

          {/* ======================================================== */}
          {/* FRONT FACE: 3D Holographic Portrait                      */}
          {/* ======================================================== */}
          <div 
            className={`relative rounded-[22px] bg-slate-950/95 border border-slate-800/90 overflow-hidden backdrop-blur-xl shadow-2xl transition-opacity duration-300 ${isFlipped ? 'pointer-events-none' : ''}`}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            {/* Cyber Top Reticle Bar */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-slate-200 font-bold">SYSTEM // ENGINEER</span>
              </div>
              <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>IIIT DHARWAD '26</span>
              </div>
            </div>

            {/* Photo Frame with 3D Depth */}
            <div className="relative overflow-hidden aspect-[4/5] bg-slate-900">
              <img
                src="/profile.jpg"
                alt="Yellaling Kalyane - IIIT Dharwad B.Tech CSE"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out hover:scale-105"
                loading="eager"
              />

              {/* Laser Scanner Animation Beam */}
              {isScanning && (
                <div className="absolute inset-x-0 h-1 z-30 pointer-events-none animate-scan-beam">
                  <div className={`w-full h-1 ${currentTheme.scanLine}`} />
                </div>
              )}

              {/* Specular Glare Optical Illusion */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.24), transparent 55%)`,
                  opacity: glare.opacity,
                }}
              />

              {/* Bottom Cyber Gradient Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating 3D Parallax Badge 1: Top Right */}
              <div
                className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/85 border border-cyan-400/50 text-cyan-300 font-mono text-[11px] font-semibold backdrop-blur-md shadow-lg flex items-center space-x-1.5 transition-transform duration-200"
                style={{
                  transform: `translateZ(45px) translateX(${rotateY * 0.9}px) translateY(${rotateX * -0.9}px)`,
                }}
              >
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>IIIT Dharwad</span>
              </div>

              {/* Floating 3D Parallax Badge 2: Top Left Status */}
              <div
                className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-slate-950/85 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-medium backdrop-blur-md shadow-lg flex items-center space-x-1.5 transition-transform duration-200"
                style={{
                  transform: `translateZ(35px) translateX(${rotateY * 0.7}px) translateY(${rotateX * -0.7}px)`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Roles</span>
              </div>

              {/* Floating 3D Parallax Badge 3: Bottom Identity HUD */}
              <div
                className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/90 border border-slate-700/80 backdrop-blur-md shadow-2xl transition-transform duration-200"
                style={{
                  transform: `translateZ(55px) translateX(${rotateY * 1.2}px) translateY(${rotateX * -1.2}px)`,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>Yellaling Kalyane</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    CSE '26
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-300">
                  Full-Stack Developer & Quality Engineer
                </p>

                <div className="flex items-center space-x-2 mt-2 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>QA Automation</span>
                  </span>
                  <span>•</span>
                  <span className="text-cyan-400 flex items-center space-x-1">
                    <Code2 className="w-3 h-3" />
                    <span>MERN & Next.js</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Card Footer Quick Interactive Action Bar */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
              <button
                onClick={toggleFlip}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1.5 transition-colors"
              >
                <RotateCw className="w-3 h-3 text-cyan-400" />
                <span>Flip for Credentials</span>
              </button>

              <button
                onClick={onOpenResume}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1 transition-colors"
              >
                <span>View CV</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BACK FACE: 3D Credentials & Identity Matrix             */}
          {/* ======================================================== */}
          <div 
            className={`absolute inset-1.5 rounded-[22px] bg-slate-950/95 border border-cyan-500/40 p-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl overflow-y-auto ${!isFlipped ? 'pointer-events-none' : ''}`}
            style={{ 
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            {/* Back Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-white">ENGINEER CREDENTIALS</span>
                </div>
                <button
                  onClick={toggleFlip}
                  className="p-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
                  title="Flip back to portrait"
                >
                  <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

              {/* Education Block */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-3">
                <div className="flex items-center justify-between text-xs font-bold text-cyan-300 mb-1">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-[10px] text-emerald-400">{edu.duration}</span>
                </div>
                <div className="text-xs text-slate-200 font-semibold mb-1">
                  {edu.institution}
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">{edu.status}</span>
                </div>
              </div>

              {/* Core Skill Matrix Pills */}
              <div className="mb-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center space-x-1">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span>Primary Specializations</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[10px]">
                    Next.js 14 / React 19
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-[10px]">
                    Node.js & Express
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-[10px]">
                    TypeScript & ES6+
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[10px]">
                    Python BDD Testing
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[10px]">
                    MongoDB & Prisma
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[10px]">
                    Docker & Jenkins
                  </span>
                </div>
              </div>

              {/* Key Verification Metrics */}
              <div className="space-y-1.5 font-mono text-[10px] text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-1.5 text-slate-200">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>6+ Production GitHub Repositories</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-200">
                  <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>Internship: Web Dev @ SystemTron</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-200">
                  <CheckCircle className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>Relocation: Immediate / Open to Pan-India</span>
                </div>
              </div>
            </div>

            {/* Back Quick Action Shortcuts */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 px-2 rounded-xl bg-blue-950/50 border border-blue-500/30 text-cyan-300 font-mono text-[11px] font-semibold text-center hover:bg-blue-900/50 transition-colors flex items-center justify-center space-x-1"
              >
                <Linkedin className="w-3 h-3 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 px-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono text-[11px] font-semibold text-center hover:bg-slate-800 transition-colors flex items-center justify-center space-x-1"
              >
                <Github className="w-3 h-3 text-white" />
                <span>GitHub</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 py-1.5 px-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-mono text-[11px] font-bold text-center hover:opacity-95 transition-opacity"
              >
                Resume
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

