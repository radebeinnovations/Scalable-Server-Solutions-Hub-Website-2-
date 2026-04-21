"use client";

import { motion } from "framer-motion";
import { Terminal, Activity, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-primary font-mono text-xs mb-6 tracking-widest uppercase"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Systems: Operational
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter"
        >
          RELIABLE BACKEND <br />
          INFRASTRUCTURE <br />
          <span className="text-gray-500 italic font-light">THAT SCALES WITH YOU</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <p className="flex-1 text-gray-400 leading-relaxed text-sm max-w-md">
            Deploy your database, API, or full-stack application on a global network designed for extreme low-latency and high availability. No more complex configuration — just code.
          </p>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-black font-bold text-xs uppercase tracking-widest hover:bg-green-400 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2">
              <Terminal size={14} /> Documentation
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 terminal-box p-4 rounded-lg relative group"
        >
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Activity size={10} className="text-primary" /> Metrics_Console v1.0.2
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "LATENCY", value: "14ms", status: "Nominal" },
              { label: "UPTIME", value: "99.99%", status: "Active" },
              { label: "TRAFFIC", value: "2.4 GB/s", status: "Steady" },
              { label: "ERROR_RATE", value: "0.001%", status: "Good" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[10px] text-gray-500 mb-1">{stat.label}</div>
                <div className="text-xl font-bold font-mono text-white">{stat.value}</div>
                <div className="text-[9px] text-primary mt-1 opacity-70">_STATUS: {stat.status}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
