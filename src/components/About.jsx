import React from 'react';
import { personalDetails, educationData, deliveryDevOpsData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Boxes, 
  GitBranch, 
  CheckCircle, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function About() {
  const edu = educationData[0];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Scalable <span className="gradient-text-cyan">Full-Stack Web Systems</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Architecting modern web applications with React, Next.js, Node.js, and TypeScript, backed by automated API validation and quality assurance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Full-Stack Engineering Philosophy</span>
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                I am a Full-Stack Software Engineer and 2026 B.Tech graduate from <strong className="text-white">IIIT Dharwad</strong>. I specialize in building complete web products—from intuitive, reactive interfaces in React/Next.js to resilient REST APIs, WebSockets, and database pipelines with MongoDB, Prisma, and MySQL.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                During my web development internship at <strong className="text-white">SystemTron</strong>, I translated functional requirements into production-ready MERN features, built secure JWT authentication endpoints, and performed end-to-end API verification. My unique superpower is combining fast full-stack feature velocity with an automated test engineering mindset.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="text-cyan-400 font-semibold">// Core Operating Principles</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Full-Stack MERN & Next.js 14 architecture with strict TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Requirement-Driven Test Automation (BDD, STLC & Postman APIs)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Continuous integration using Docker containers & Jenkins CI/CD</span>
                </div>
              </div>
            </div>

            {/* Delivery & DevOps Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliveryDevOpsData.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2.5">
                    {idx === 0 && <Boxes className="w-4 h-4" />}
                    {idx === 1 && <GitBranch className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 3 && <Terminal className="w-4 h-4" />}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Academic Foundation at IIIT Dharwad */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-emerald-500/25 relative backdrop-blur-md shadow-lg shadow-black/40">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  {edu.status}
                </span>
              </div>

              {/* Student Candidate Photo & Identity */}
              <div className="flex items-center space-x-3.5 mb-4 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-cyan-400/40 shadow-glow-cyan shrink-0">
                  <img src="/profile.jpg" alt="Yellaling Kalyane IIIT Dharwad" className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-0 inset-x-0 bg-slate-950/90 text-[8px] font-mono text-center text-cyan-300 py-0.2">CSE '26</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">Degree Candidate</div>
                  <div className="text-sm font-bold text-white truncate">Yellaling Kalyane</div>
                  <div className="text-[11px] font-mono text-slate-400 truncate">IIIT Dharwad (2022 - 2026)</div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-cyan-300 mb-1">
                {edu.institution}
              </p>
              <p className="text-xs font-mono text-slate-400 mb-4">
                {edu.duration} • {edu.location}
              </p>

              <div className="border-t border-slate-800/80 pt-4 mb-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Relevant Academic Coursework</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {edu.coursework.map((course, idx) => (
                    <div 
                      key={idx}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-300 font-mono flex items-center space-x-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></span>
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200/90 leading-relaxed">
                "Strong conceptual foundation in Data Structures, OOP, Operating Systems, DBMS, and scalable software design patterns."
              </div>
            </div>

            {/* Quick Readiness Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-white text-sm flex items-center space-x-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Immediate Employment Readiness</span>
              </div>
              <p className="text-slate-400">
                Prepared to integrate into development and quality engineering teams immediately. Experienced with Git code reviews, Postman API collections, and Agile sprints.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300">English (Proficient)</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Kannada (Native)</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Hindi (Conversational)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

