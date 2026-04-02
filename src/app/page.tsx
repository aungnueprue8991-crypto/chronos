import React from 'react';
import CinemaForge from '@/components/CinemaForge';
import CompareSlider from '@/components/CompareSlider';
import RestorationForge from '@/components/RestorationForge';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold-500 font-sans">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div className="z-20 text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Waking the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Ancestors</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto tracking-widest uppercase">
            Historical Restoration through the lens of 2026 AI.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all duration-300">
              Enter the Vault
            </button>
            <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              The Restoration Forge
            </button>
          </div>
        </div>
      </section>

      {/* Digital Resurrection: Compare Slider Section */}
      <section className="py-32 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500 mb-4">Historical Fidelity</h2>
                <h3 className="text-5xl font-black uppercase italic leading-none text-white">
                  The Alchemy of <br/><span className="text-zinc-500">Restoration.</span>
                </h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed text-xl">
                We take the "Mirrors and Smoke" of history—the grainy archives, the damaged portraits, the faded recordings—and apply the 2026 Sovereign Synthetic Media pipelines. 
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <span className="text-amber-200 font-bold block text-sm uppercase tracking-widest">Resolution</span>
                  <p className="text-white font-medium">8K Neural Upscaling</p>
                </div>
                <div className="space-y-2">
                  <span className="text-amber-200 font-bold block text-sm uppercase tracking-widest">Color</span>
                  <p className="text-white font-medium">Authentic Pigment Analysis</p>
                </div>
                <div className="space-y-2">
                  <span className="text-amber-200 font-bold block text-sm uppercase tracking-widest">Detail</span>
                  <p className="text-white font-medium">Pore-Level Reconstruction</p>
                </div>
                <div className="space-y-2">
                  <span className="text-amber-200 font-bold block text-sm uppercase tracking-widest">Stability</span>
                  <p className="text-white font-medium">Temporal Flicker Defense</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CompareSlider 
                beforeImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000" 
                afterImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000" 
              />
              <p className="text-center mt-6 text-xs uppercase tracking-[0.2em] text-zinc-600 font-bold">
                Drag to reveal the transition from archival original to neural restoration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Forge: AI API Interface */}
      <RestorationForge />

      {/* CinemaForge Section: Movie Face Swap & Performance Transfer */}
      <CinemaForge />
    </main>
  );
}
