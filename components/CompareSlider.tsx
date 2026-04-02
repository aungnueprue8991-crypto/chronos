'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function CompareSlider({ beforeImage, afterImage }: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && event.type !== 'mousemove') return;
    
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const relativeX = x - containerRect.left;
    const position = Math.max(0, Math.min(100, (relativeX / containerRect.width) * 100));
    
    setSliderPosition(position);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After Restoration" 
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Before Image (Clip-path) */}
      <div 
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before Restoration" 
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-60 contrast-125"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
          Archival Original
        </div>
      </div>

      {/* After Label */}
      <div className="absolute top-4 right-4 bg-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-xl">
        Restored 2026
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] z-30"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-black">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-full" />
            <div className="w-1 h-3 bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
