"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R499",
    features: ["1 Dedicated Node", "5 API Routes", "1GB Redis Cache", "Standard Support"],
    label: "FOR INDIVIDUALS",
  },
  {
    name: "Growth",
    price: "R1899",
    features: ["4 Dedicated Nodes", "Unlimited APIs", "10GB Managed SQL", "Priority Support", "Global CDN"],
    label: "BEST FOR TEAMS",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Isolated VPC", "SLA Guarantee", "24/7 SRE Support", "Audit Logs", "Custom Scaling"],
    label: "LARGE SYSTEMS",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter uppercase">/ Deployment_Plans</h2>
          <p className="text-gray-500 text-sm font-mono tracking-widest">SELECT CONFIGURATION FOR DEPLOYMENT</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 border border-white/5 bg-white/2 relative flex flex-col",
                plan.featured && "border-primary/50 ring-1 ring-primary/20 bg-primary/5"
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 py-1 px-4 bg-primary text-black text-[10px] font-bold uppercase tracking-widest translate-y-[-50%]">
                  Recommended
                </div>
              )}
              <div className="text-[10px] text-gray-500 mb-4 tracking-widest">{plan.label}</div>
              <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
              <div className="text-4xl font-black mb-8">{plan.price}<span className="text-xs text-gray-500 font-normal"> / mo</span></div>
              
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs text-gray-400">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-3 text-xs font-bold uppercase tracking-widest transition-all",
                plan.featured ? "bg-primary text-black hover:bg-green-400" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              )}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
