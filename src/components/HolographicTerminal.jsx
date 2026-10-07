import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, FileCode, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

export default function HolographicTerminal() {
  const [activeTab, setActiveTab] = useState('ts'); // 'ts' | 'json' | 'py'
  const [terminalOutput, setTerminalOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const codeSnippets = {
    ts: `// Developer Profile: Yellaling Kalyane
import { FullStackEngineer, QualityAutomation } from '@iiit-dharwad/cse';

export const engineer: FullStackEngineer = {
  name: "Yellaling Kalyane",
  education: "IIIT Dharwad (B.Tech CSE '26)",
  primaryFocus: "Full-Stack Web Development & QA Automation",
  coreStack: ["React.js", "Next.js 14", "Node.js", "TypeScript", "MongoDB"],
  superpowers: ["Automated BDD Testing", "REST & WebSocket APIs", "Docker/CI-CD"],
  availability: "Immediate Joiner",
  openToRelocate: true
};`,
    json: `{
  "services": {
    "frontend": "Next.js 14 App Router + Tailwind CSS",
    "realtimeGateway": "Socket.IO WebSockets (< 50ms latency)",
    "apiLayer": "Node.js + Express.js REST Endpoints",
    "persistence": "MongoDB Indexed Cluster + Prisma ORM",
    "security": "JWT with httpOnly Cookies & RBAC",
    "qaAutomation": "LLM-Assisted Python BDD Test Harness"
  }
}`,
    py: `# LLM-Assisted Automated BDD Generator
from framework import BDDRequirementCompiler, TestSuite

def verify_system_resilience():
    req = "User signs in and streams encrypted chat messages"
    bdd_spec = BDDRequirementCompiler.parse(req)
    
    suite = TestSuite(bdd_spec)
    assert suite.run_assertions().success is True
    print("✓ All 4 validation gates PASSED without regression")`
  };

  const handleRunCode = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTerminalOutput('Compiling and executing runtime...');

    setTimeout(() => {
      setTerminalOutput('✓ Full-Stack System Verified: React/Node/Mongo active • 0 Regressions • Ready for hire!');
      setIsRunning(false);
    }, 600);
  };

  return (
    <TiltCard className="w-full max-w-lg mx-auto">
      <div className="rounded-2xl bg-slate-950/90 border border-cyan-500/30 shadow-2xl overflow-hidden backdrop-blur-2xl">
        
        {/* Terminal Header Tabs */}
        <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="flex items-center space-x-1 pl-2">
              <button
                onClick={() => setActiveTab('ts')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                  activeTab === 'ts'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Engineer.ts
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                  activeTab === 'json'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Architecture.json
              </button>
              <button
                onClick={() => setActiveTab('py')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                  activeTab === 'py'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pipeline.py
              </button>
            </div>
          </div>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-sm transition-all"
            title="Execute Code in Terminal"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Run</span>
          </button>
        </div>

        {/* Code Body */}
        <div className="p-4 sm:p-5 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto bg-slate-950/70 max-h-72 select-text">
          <pre className="whitespace-pre">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Output Console Strip */}
        {terminalOutput && (
          <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 text-[11px] font-mono text-emerald-300 flex items-center space-x-2 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{terminalOutput}</span>
          </div>
        )}

      </div>
    </TiltCard>
  );
}

