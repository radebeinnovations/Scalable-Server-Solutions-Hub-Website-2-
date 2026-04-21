"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Globe, Cpu } from "lucide-react";

export default function Infrastructure() {
  const nodes = [
    { name: "Global Edge", icon: Globe, status: "Connected" },
    { name: "API Cluster", icon: Cpu, status: "Balancing" },
    { name: "DB Master", icon: Database, status: "Synced" },
    { name: "Storage Box", icon: Cloud, status: "Active" },
  ];

  return (
    <section id="infrastructure" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter uppercase">/ Technical_Architecture</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
              Our infrastructure is built on a distributed network of high-performance bare metal servers. We utilize Kubernetes for orchestration and custom-built BGP routing for global traffic management.
            </p>
            
            <div className="space-y-6">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 border border-white/5 bg-white/2 hover:border-primary/30 transition-all"
                >
                  <node.icon className="text-gray-500" size={20} />
                  <div className="flex-1 text-xs font-bold uppercase tracking-widest">{node.name}</div>
                  <div className="text-[10px] text-primary">{node.status}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative aspect-square max-h-[500px] w-full flex items-center justify-center">
            {/* Visual Diagram */}
            <div className="absolute inset-0 border border-white/5 rounded-full flex items-center justify-center">
              <div className="w-[70%] h-[70%] border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-[50%] h-[50%] border border-primary/20 rounded-full" />
              </div>
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  style={{ transform: `rotate(${deg}deg) translateY(-250px)` }}
                  className="absolute left-1/2 -ml-3 w-6 h-6 bg-black border border-primary flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                </div>
              ))}
            </motion.div>

            <Server size={64} className="text-primary glow-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
