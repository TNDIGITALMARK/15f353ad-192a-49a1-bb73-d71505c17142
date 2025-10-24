"use client";

import Link from 'next/link';

export default function SettingsPage() {
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
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
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
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all border-l-2 border-[#00FF41] cyber-glow"
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
            SYSTEM SETTINGS
          </h2>
          <p className="text-[#00FF41] text-sm opacity-80">
            Configure AAAYAFUJ OS Parameters
          </p>
        </div>

        {/* General Settings */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; GENERAL
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#00FF4120]">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">System Name</div>
                <div className="text-[#66FF66] text-xs">AAAYAFUJ-OS-MAIN</div>
              </div>
              <button className="text-[#00FF41] hover:text-[#66FF66] transition-all text-xs border border-[#00FF41] px-3 py-1 rounded hover:bg-[#00FF4120]">
                EDIT
              </button>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-[#00FF4120]">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Auto-Save Enabled</div>
                <div className="text-[#66FF66] text-xs">Automatically save AI learning progress</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00FF41] text-xs">ON</span>
                <div className="w-10 h-5 bg-[#00FF41] rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Scan Interval</div>
                <div className="text-[#66FF66] text-xs">Network scanning frequency</div>
              </div>
              <select className="bg-black border border-[#00FF41] rounded px-3 py-1 text-[#00FF41] text-sm focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                <option>5 minutes</option>
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; SECURITY
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#00FF4120]">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Two-Factor Authentication</div>
                <div className="text-[#66FF66] text-xs">Enhanced login security</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00FF41] text-xs">OFF</span>
                <div className="w-10 h-5 bg-[#00FF4130] rounded-full relative cursor-pointer">
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#00FF41] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-[#00FF4120]">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Encryption Level</div>
                <div className="text-[#66FF66] text-xs">Data encryption strength</div>
              </div>
              <select className="bg-black border border-[#00FF41] rounded px-3 py-1 text-[#00FF41] text-sm focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                <option>AES-256</option>
                <option>AES-192</option>
                <option>AES-128</option>
              </select>
            </div>

            <div className="flex justify-between items-center py-3">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Alert Notifications</div>
                <div className="text-[#66FF66] text-xs">Security threat alerts</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00FF41] text-xs">ON</span>
                <div className="w-10 h-5 bg-[#00FF41] rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Configuration */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; AI CONFIGURATION
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#00FF4120]">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Learning Rate</div>
                <div className="text-[#66FF66] text-xs">Neural network training speed</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00FF41] text-xs">0.001</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="25"
                  className="w-32"
                />
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-[#00FF4120]">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Training Mode</div>
                <div className="text-[#66FF66] text-xs">AI learning approach</div>
              </div>
              <select className="bg-black border border-[#00FF41] rounded px-3 py-1 text-[#00FF41] text-sm focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                <option>Continuous</option>
                <option>Batch</option>
                <option>Scheduled</option>
              </select>
            </div>

            <div className="flex justify-between items-center py-3">
              <div>
                <div className="text-[#00FF41] font-bold text-sm">Data Retention</div>
                <div className="text-[#66FF66] text-xs">How long to keep training data</div>
              </div>
              <select className="bg-black border border-[#00FF41] rounded px-3 py-1 text-[#00FF41] text-sm focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>Indefinite</option>
              </select>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; SYSTEM INFORMATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
            <div className="flex justify-between text-[#00FF41]">
              <span>Version:</span>
              <span className="text-[#66FF66]">v1.0.0</span>
            </div>
            <div className="flex justify-between text-[#00FF41]">
              <span>Build:</span>
              <span className="text-[#66FF66]">2024.10.24</span>
            </div>
            <div className="flex justify-between text-[#00FF41]">
              <span>Uptime:</span>
              <span className="text-[#66FF66]">142h 37m</span>
            </div>
            <div className="flex justify-between text-[#00FF41]">
              <span>License:</span>
              <span className="text-[#66FF66]">ENTERPRISE</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="cyber-button">
            SAVE CHANGES
          </button>
          <button className="cyber-button">
            RESET TO DEFAULTS
          </button>
          <button className="cyber-button">
            EXPORT CONFIG
          </button>
        </div>
      </main>
    </div>
  );
}
