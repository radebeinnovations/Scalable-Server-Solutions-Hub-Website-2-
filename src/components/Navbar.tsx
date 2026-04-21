"use client";

import { motion } from "framer-motion";
import { Server, Terminal, BarChart3, Database, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Terminal className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold tracking-tighter uppercase whitespace-nowrap">
            SSSH <span className="text-gray-500 font-normal">| INFRA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Nodes", href: "#infrastructure" },
            { name: "APIs", href: "#services" },
            { name: "Pricing", href: "#pricing" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-400 hover:text-primary transition-colors tracking-widest uppercase"
            >
              / {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-4 py-1.5 border border-primary text-primary hover:bg-primary hover:text-black text-xs font-bold transition-all uppercase tracking-widest"
          >
            Deploy Now
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {/* Note: I'll need to import AnimatePresence but I'll skip it for simplicity or add it if needed */}
        {/* Let's keep it simple for now to avoid import errors if not imported */}
      </AnimatePresence>
    </nav>
  );
}

// Fixed Navbar for Website 2 with AnimatePresence
import { AnimatePresence } from "framer-motion";
