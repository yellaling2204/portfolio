import React, { useState } from 'react';
import { technicalPillars } from '../data/portfolioData';
import { 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Code2,
  Layers,
  ArrowRight
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getPillarIcon = (id) => {
    switch (id) {
      case 'frontend': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'backend': return <Server className="w-5 h-5 text-blue-400" />;
      case 'databases': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'qa-automation': return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case 'devops-systems': return <Cpu className="w-5 h-5 text-amber-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredPillars = technicalPillars.map((pillar) => {
    const matchingSkills = pillar.skills.filter((skill) => {
      const q = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.focus.toLowerCase().includes(q) ||
        skill.role.toLowerCase().includes(q)
      );
    });
    return { ...pillar, skills: matchingSkills };
  }).filter((pillar) => {
    const matchesTab = activeTab === 'all' || pillar.id === activeTab;
    const hasSkills = pillar.skills.length > 0;
    return matchesTab && (searchQuery === '' ? true : hasSkills);
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3 backdrop-blur-md">
            <Code2 className="w-3.5 h-3.5" />
            <span>02 // ARCHITECTURAL MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack & <span className="gradient-text-cyan">Engineering Pillars</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A systematic overview of my development stack—categorized by core engineering responsibilities from full-stack frontend rendering to automated test suites.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Functional Pillar Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              All Pillars
            </button>
            {technicalPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center space-x-1.5 ${
                  activeTab === pillar.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{pillar.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technology (e.g. TypeScript, BDD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
            />
          </div>

        </div>

        {/* Systematic Pillars Presentation */}
        <div className="space-y-8">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
            >
              {/* Subtle Ambient Glow inside card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Pillar Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center shadow-md">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center space-x-2">
                      <span>{pillar.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400 font-normal mt-0.5 max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-300">
                    {pillar.skills.length} Core Capabilities
                  </span>
                </div>
              </div>

              {/* Skills Grid for this Pillar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pillar.skills.map((skill, sIdx) => (
                  <TiltCard
                    key={sIdx}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-cyan-400/90">
                          {skill.role}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                        {skill.tag}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans mt-2 pt-2 border-t border-slate-900">
                      {skill.focus}
                    </p>
                  </TiltCard>
                ))}
              </div>

            </div>
          ))}

          {filteredPillars.length === 0 && (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 font-mono text-xs text-slate-500">
              No skills found matching "{searchQuery}".
            </div>
          )}
        </div>

        {/* Engineering Philosophy Summary Matrix */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 border border-cyan-500/20 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Modern Web Architecture</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proficient with Next.js 14 App Router, server/client components, responsive styling with Tailwind, and strict TypeScript types.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full-Stack Data Persistence</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Skilled in designing RESTful APIs with Node/Express, WebSockets with Socket.IO, and databases using MongoDB and Prisma ORM.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center space-x-2 text-purple-400 font-mono text-xs font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Quality & Automation Rigor</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineered custom Python BDD frameworks to convert natural-language user stories into executable functional test assertions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
