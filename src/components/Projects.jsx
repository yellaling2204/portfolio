import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Info, 
  X,
  Globe,
  Radio
} from 'lucide-react';
import { Github } from './Icons';
import TiltCard from './TiltCard';
import ProjectLiveDemoModal from './ProjectLiveDemoModal';

export default function Projects() {
  const [filter, setFilter] = useState('fullstack'); // Default to full-stack!
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDemoProject, setActiveDemoProject] = useState(null);

  const handleLaunchDemo = (project) => {
    if (project.id === 'llm-test-automation') {
      const el = document.getElementById('test-lab');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveDemoProject(project);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full-Stack & <span className="gradient-text-cyan">Software Engineering</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Production-style applications spanning Next.js, MERN stack, real-time WebSockets, ATS candidate pipelines, and automated test frameworks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-300 ${
              filter === 'fullstack'
                ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            🔥 Full-Stack Web Apps ({projectsData.filter(p => p.category === 'fullstack').length})
          </button>
          <button
            onClick={() => setFilter('qa-ai')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'qa-ai'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-glow-emerald scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            QA Automation & AI ({projectsData.filter(p => p.category === 'qa-ai').length})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} className="h-full">
              <div
                className="rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl h-full relative"
              >
                {/* Top Accent Strip with Hover Gradient */}
                <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 group-hover:h-1.5 transition-all"></div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill and Metrics */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-medium">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center space-x-1">
                      {project.liveUrl && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>}
                      <span>{project.stats.metric1}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.keyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Box */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-5 font-mono text-[11px] text-slate-400">
                    <span className="text-cyan-400 font-semibold block mb-0.5">// Architecture Flow:</span>
                    <span className="text-slate-300 break-words">{project.architecture}</span>
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Architecture Specs</span>
                    </button>

                    <div className="flex items-center space-x-2.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-mono text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-slate-500 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      <button
                        onClick={() => handleLaunchDemo(project)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 px-3 py-1.5 rounded-lg shadow-glow-cyan transition-all transform hover:scale-105"
                        title="Launch Live Demo Simulator"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
        </div>

        {/* Modal for Project Technical Deep-Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="max-w-2xl w-full bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300 mb-6">
                <p>{selectedProject.description}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                    Engineering Strategy & Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyPoints.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1.5 font-mono text-xs uppercase tracking-wider text-cyan-400">
                    System Architecture:
                  </h4>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    {selectedProject.architecture}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                    Key Performance Metrics:
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-center">
                      <div className="text-cyan-400 font-mono font-bold text-base">{selectedProject.stats.metric1}</div>
                      <div className="text-[10px] text-slate-400">{selectedProject.stats.metric1Label}</div>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-center">
                      <div className="text-emerald-400 font-mono font-bold text-base">{selectedProject.stats.metric2}</div>
                      <div className="text-[10px] text-slate-400">{selectedProject.stats.metric2Label}</div>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-center">
                      <div className="text-blue-400 font-mono font-bold text-base">{selectedProject.stats.metric3}</div>
                      <div className="text-[10px] text-slate-400">{selectedProject.stats.metric3Label}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white font-mono text-xs flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => {
                    const p = selectedProject;
                    setSelectedProject(null);
                    handleLaunchDemo(p);
                  }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-glow-cyan"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Launch Live Simulator</span>
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-slate-700 text-slate-300 font-semibold text-xs"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Live Interactive In-Browser Demo Simulator Modal */}
        <ProjectLiveDemoModal
          project={activeDemoProject}
          isOpen={!!activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />

      </div>
    </section>
  );
}
