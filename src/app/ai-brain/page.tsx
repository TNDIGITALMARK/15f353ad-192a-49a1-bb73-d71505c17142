"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AIBrainPage() {
  const [learningProgress] = useState([
    { name: 'Database Processing', progress: 78, status: 'active' },
    { name: 'Pattern Recognition', progress: 91, status: 'active' },
    { name: 'Threat Classification', progress: 65, status: 'active' },
    { name: 'Neural Network Training', progress: 84, status: 'processing' },
    { name: 'Behavioral Analysis', progress: 73, status: 'active' },
  ]);

  const [processingStats] = useState({
    patternsProcessed: '15,847',
    threatsDetected: '342',
    databasesLoaded: '7',
    uptime: '142h 37m',
  });

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar Navigation */}
      <aside className="w-48 bg-black border-r border-[#00FF41] flex flex-col p-6">
        <div className="mb-8">
          <h1 className="text-[#00FF41] text-xl font-bold tracking-wider cyber-glow">
            AAAYAFUJ OS
          </h1>
        </div>

        <nav className="flex-1 space-y-1">
          <h3 className="text-[#00FF41] text-xs font-bold mb-3 tracking-wider opacity-70">
            CONTENT+HY
          </h3>

          <Link
            href="/"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Dashboard
          </Link>

          <Link
            href="/ai-brain"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all border-l-2 border-[#00FF41] cyber-glow"
          >
            &gt; AI Brain
          </Link>

          <Link
            href="/network-tools"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Network Tools
          </Link>

          <Link
            href="/settings"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#00FF41] mb-2 cyber-glow-strong">
            AI BRAIN LEARNING CENTER
          </h2>
          <p className="text-[#00FF41] text-sm opacity-80">
            Neural Network Training & Knowledge Processing
          </p>
        </div>

        {/* Processing Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="terminal-window rounded p-4">
            <div className="text-[#00FF41] text-xs mb-1 opacity-70">PATTERNS PROCESSED</div>
            <div className="text-[#00FF41] text-2xl font-bold cyber-glow">
              {processingStats.patternsProcessed}
            </div>
          </div>
          <div className="terminal-window rounded p-4">
            <div className="text-[#00FF41] text-xs mb-1 opacity-70">THREATS DETECTED</div>
            <div className="text-[#00FF41] text-2xl font-bold cyber-glow">
              {processingStats.threatsDetected}
            </div>
          </div>
          <div className="terminal-window rounded p-4">
            <div className="text-[#00FF41] text-xs mb-1 opacity-70">DATABASES LOADED</div>
            <div className="text-[#00FF41] text-2xl font-bold cyber-glow">
              {processingStats.databasesLoaded}
            </div>
          </div>
          <div className="terminal-window rounded p-4">
            <div className="text-[#00FF41] text-xs mb-1 opacity-70">SYSTEM UPTIME</div>
            <div className="text-[#00FF41] text-2xl font-bold cyber-glow">
              {processingStats.uptime}
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="terminal-window rounded p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#00FF41] pulse-glow"></div>
            <h3 className="text-[#00FF41] font-bold tracking-wider">
              &gt; LEARNING PROGRESS
            </h3>
          </div>

          <div className="space-y-6">
            {learningProgress.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-[#00FF41] text-sm mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{item.name}</span>
                    {item.status === 'processing' && (
                      <span className="text-xs pulse-glow">[PROCESSING]</span>
                    )}
                  </div>
                  <span className="font-bold">{item.progress}%</span>
                </div>
                <div className="h-3 bg-[#00FF4120] rounded overflow-hidden">
                  <div
                    className={`h-full bg-[#00FF41] rounded transition-all duration-500 ${
                      item.status === 'processing' ? 'animate-pulse' : ''
                    }`}
                    style={{
                      width: `${item.progress}%`,
                      boxShadow: '0 0 10px #00FF41'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Network Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Training Data */}
          <div className="terminal-window rounded p-6">
            <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
              &gt; TRAINING DATA
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between text-[#00FF41]">
                <span>&gt; aaayafuj_text_database1.txt</span>
                <span className="text-[#66FF66]">LOADED</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>&gt; aaayafuj_text_database2.txt</span>
                <span className="text-[#66FF66]">LOADED</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>&gt; security_protocols_v3.txt</span>
                <span className="text-[#66FF66]">LOADED</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>&gt; threat_vectors_2024.txt</span>
                <span className="text-[#66FF66]">LOADED</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>&gt; vulnerability_db.txt</span>
                <span className="pulse-glow">PROCESSING</span>
              </div>
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="terminal-window rounded p-6">
            <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
              &gt; AI CAPABILITIES
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="text-[#00FF41]">
                <div className="flex items-center gap-2">
                  <span className="text-[#66FF66]">✓</span>
                  <span>Malware Detection</span>
                </div>
              </div>
              <div className="text-[#00FF41]">
                <div className="flex items-center gap-2">
                  <span className="text-[#66FF66]">✓</span>
                  <span>Threat Analysis</span>
                </div>
              </div>
              <div className="text-[#00FF41]">
                <div className="flex items-center gap-2">
                  <span className="text-[#66FF66]">✓</span>
                  <span>Network Scanning</span>
                </div>
              </div>
              <div className="text-[#00FF41]">
                <div className="flex items-center gap-2">
                  <span className="text-[#66FF66]">✓</span>
                  <span>Vulnerability Assessment</span>
                </div>
              </div>
              <div className="text-[#00FF41]">
                <div className="flex items-center gap-2">
                  <span className="pulse-glow">▸</span>
                  <span>Behavioral Prediction</span>
                  <span className="text-xs">[TRAINING]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Activity Log */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; REAL-TIME ACTIVITY LOG
          </h3>
          <div className="bg-black rounded border border-[#00FF41] p-4 h-64 overflow-y-auto font-mono text-xs">
            <div className="text-[#66FF66] mb-1">[12:45:32] Neural layer 7 updated - accuracy improved to 94.3%</div>
            <div className="text-[#66FF66] mb-1">[12:45:28] Processing batch 847 of 1200...</div>
            <div className="text-[#66FF66] mb-1">[12:45:24] Pattern recognized: SQL injection variant #42</div>
            <div className="text-[#00FF41] mb-1">[12:45:19] Database synchronization complete</div>
            <div className="text-[#66FF66] mb-1">[12:45:15] Training epoch 15 complete - loss: 0.0234</div>
            <div className="text-[#00FF41] mb-1">[12:45:10] Threat vector analysis initiated</div>
            <div className="text-[#66FF66] mb-1">[12:45:05] Knowledge base expanded: +342 security patterns</div>
            <div className="text-[#66FF66] mb-1">[12:45:01] Neural network weights optimized</div>
            <div className="text-[#00FF41] mb-1">[12:44:58] Memory checkpoint saved</div>
            <div className="text-[#66FF66] mb-1 typing-cursor">[12:44:52] Analyzing behavioral patterns...</div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; CONTROL PANEL
          </h3>
          <div className="flex gap-4">
            <button className="cyber-button">
              PAUSE TRAINING
            </button>
            <button className="cyber-button">
              EXPORT MODEL
            </button>
            <button className="cyber-button">
              LOAD DATABASE
            </button>
            <button className="cyber-button">
              RESET NEURAL NET
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
