"use client";

import { motion } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black/40 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-box rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-gray-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Onboarding_Request.sh</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
            </div>
          </div>
          
          <div className="p-8 md:p-12 space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-4 tracking-tighter">INITIALIZE_CONNECTION</h2>
              <p className="text-gray-500 text-sm font-mono tracking-widest max-w-lg">
                SUBMIT YOUR ARCHITECTURE REQUIREMENTS TO OUR SRE TEAM FOR REVIEW.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <div className="text-[10px] text-gray-600 uppercase font-bold tracking-widest group-focus-within:text-primary transition-colors">{" >> NODE_NAME"}</div>
                  <input
                    type="text"
                    placeholder="ENTER_COMPANY_NAME"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder:text-gray-800 focus:outline-none focus:border-primary transition-all font-mono"
                  />
                </div>
                <div className="space-y-2 group">
                  <div className="text-[10px] text-gray-600 uppercase font-bold tracking-widest group-focus-within:text-primary transition-colors">{" >> AUTH_KEY (EMAIL)"}</div>
                  <input
                    type="email"
                    placeholder="ENTER_CONTACT_EMAIL"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder:text-gray-800 focus:outline-none focus:border-primary transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <div className="text-[10px] text-gray-600 uppercase font-bold tracking-widest group-focus-within:text-primary transition-colors">{" >> SYSTEM_MANIFEST (PROJECT_DETAILS)"}</div>
                <textarea
                  rows={4}
                  placeholder="DESCRIBE_YOUR_INFRASTRUCTURE_REQUIREMENTS..."
                  className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder:text-gray-800 focus:outline-none focus:border-primary transition-all font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 bg-primary text-black px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all hover:bg-green-400"
              >
                Execute_Deployment
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
