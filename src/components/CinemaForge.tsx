'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, MonitorPlay, Zap, History } from 'lucide-react';

export default function CinemaForge() {
  const features = [
    {
      icon: <Clapperboard className="w-8 h-8 text-amber-500" />,
      title: "Digital Doubles",
      desc: "Re-target actor performances onto historical figures with 8K neural fidelity."
    },
    {
      icon: <MonitorPlay className="w-8 h-8 text-amber-500" />,
      title: "Movie Restoration",
      desc: "Upscale and de-age legendary performances for a new cinematic era."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Temporal Stability",
      desc: "Zero-flicker video swapping using the 2026 Aegis-v5 consistency engine."
    },
    {
      icon: <History className="w-8 h-8 text-amber-500" />,
      title: "Legacy Preservation",
      desc: "Sync original archival voices with hyper-realistic lip-syncing (Wav2Lip-X)."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500 mb-4">Wave 2.5: Neural Performance</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white leading-none uppercase italic">
              Cinema<span className="text-zinc-500">Forge</span>
            </h3>
            <p className="text-zinc-400 mt-6 text-xl leading-relaxed">
              We don't just swap faces; we map the soul. Using high-fidelity latent diffusion, we resurrect historical performances for the modern silver screen.
            </p>
          </div>
          <div className="hidden md:block">
             <button className="px-10 py-5 bg-amber-500 text-black font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-rotate-2">
                Launch the Engine
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-zinc-900 bg-zinc-900 border">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: '#000' }}
              className="bg-black p-10 space-y-6 flex flex-col justify-between h-80 transition-all duration-500"
            >
              <div className="space-y-6">
                {feature.icon}
                <h4 className="text-2xl font-bold uppercase italic text-white">{feature.title}</h4>
              </div>
              <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Action button for mobile */}
        <div className="md:hidden mt-12 w-full">
          <button className="w-full py-6 bg-amber-500 text-black font-black uppercase tracking-widest">
            Launch Engine
          </button>
        </div>
      </div>
    </section>
  );
}
