import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Award,
  Layers,
  Building2
} from 'lucide-react';

export default function Experience() {
  const exp = experienceData[0];
  const edu = educationData[0];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 // CAREER & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-text-cyan">Academic Journey</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical development track record, team collaboration, and formal computer science education.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          
          {/* Item 1: SystemTron Internship */}
          <div className="relative pl-6 sm:pl-8 group">
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Date Badge on Desktop Left */}
            <div className="sm:absolute sm:-left-36 sm:top-2 sm:text-right mb-2 sm:mb-0">
              <span className="text-xs font-mono text-cyan-400 font-semibold bg-cyan-950/50 px-2 py-1 rounded border border-cyan-500/30 inline-block">
                {exp.duration}
              </span>
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {exp.type}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-sm font-medium text-cyan-400 mb-4">
                <Building2 className="w-4 h-4" />
                <span>{exp.company}</span>
              </div>

              {/* Bullet highlights */}
              <div className="space-y-2.5 mb-5">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Technologies used */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Applied Technologies & Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: IIIT Dharwad Education */}
          <div className="relative pl-6 sm:pl-8 group">
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-glow-emerald">
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* Date Badge on Desktop Left */}
            <div className="sm:absolute sm:-left-36 sm:top-2 sm:text-right mb-2 sm:mb-0">
              <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-1 rounded border border-emerald-500/30 inline-block">
                {edu.duration}
              </span>
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                  {edu.status}
                </span>
              </div>

              <div className="text-sm font-medium text-emerald-400 mb-1">
                {edu.institution}
              </div>
              <div className="text-xs font-mono text-slate-400 mb-4 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Rigorous computer science curriculum emphasizing foundational theory, algorithmic efficiency, distributed operating systems, and test-driven software engineering.
              </p>

              {/* Coursework Pills */}
              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Core Computer Science Subjects:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

