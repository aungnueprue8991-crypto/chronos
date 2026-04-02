'use client';

import React, { useState } from 'react';
import { Upload, Wand2, History, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RestorationForge() {
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [activeTask, setActiveTask] = useState<string | null>(null);

  const startRestoration = async (task: string) => {
    setIsUploading(true);
    setActiveTask(task);
    
    // Simulate API call to /api/restore
    try {
      const response = await fetch('/api/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: 'uploaded_file', task })
      });
      
      const data = await response.json();
      
      // Simulate processing time
      setTimeout(() => {
        setResult('success');
        setIsUploading(false);
      }, 2000);

    } catch (e) {
      console.error(e);
      setIsUploading(false);
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 border-b border-zinc-900 flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">The Restoration <span className="text-amber-500">Forge</span></h2>
              <p className="text-zinc-500 font-medium">Upload archival media for neural reconstruction.</p>
            </div>
            <div className="hidden md:flex gap-2">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <div className="w-2 h-2 rounded-full bg-zinc-800" />
               <div className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="aspect-square bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center space-y-4 hover:bg-zinc-800/50 hover:border-amber-500/50 transition-all cursor-pointer group">
                   <Upload className="w-12 h-12 text-zinc-700 group-hover:text-amber-500 transition-colors" />
                   <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Drop Archival Image</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                   {['upscale', 'colorize', 'de-age'].map((task) => (
                     <button 
                       key={task}
                       onClick={() => startRestoration(task)}
                       disabled={isUploading}
                       className={`py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTask === task ? 'bg-amber-500 text-black' : 'bg-zinc-900 text-zinc-500 hover:text-white'}`}
                     >
                       {task}
                     </button>
                   ))}
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <AnimatePresence mode="wait">
                  {!isUploading && !result && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="text-center space-y-4"
                    >
                      <History className="w-16 h-16 text-zinc-800 mx-auto" />
                      <p className="text-zinc-600 font-medium italic">"Every archive is a locked door. The Forge is the key."</p>
                    </motion.div>
                  )}

                  {isUploading && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4">
                        <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
                        <span className="text-white font-black uppercase tracking-widest text-sm">Neural Reconstruction in Progress...</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }}
                          className="h-full bg-amber-500"
                        />
                      </div>
                      <p className="text-zinc-500 text-xs italic">Waking pixels from 1924... applying ACES color science... sharpening latent manifolds...</p>
                    </motion.div>
                  )}

                  {result && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="p-8 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-4"
                    >
                      <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto" />
                      <h4 className="text-xl font-bold text-white text-center uppercase tracking-tight">Restoration Complete</h4>
                      <p className="text-zinc-400 text-center text-sm">High-fidelity 4K output ready for the Sovereign Archive.</p>
                      <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest mt-4">Download 8K Master</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
