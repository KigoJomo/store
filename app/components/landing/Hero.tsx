"use client"
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="min-h-[80vh] flex flex-col items-center justify-center gap-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-background-light/10 opacity-20 rounded-3xl blur-3xl -z-10"></div>

      <h2 className="animate-fade-in-down text-center">
        Tech-Inspired Products with Integrity
      </h2>

      <div className="animate-fade-in-down animation-delay-300 flex flex-col gap-2 items-center text-center">
        <p className="font-bold text-xl md:text-2xl">
          Quality. Community. Transparency.
        </p>
        <p className="max-w-2xl text-center">
          At Aqutte, we deliver more than clothing.
          <br />
          We deliver values.
        </p>
      </div>

      <div className="animate-fade-in-down animation-delay-600 mt-8 relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden bg-background-light">
        <div className="absolute inset-0 flex items-center justify-center text-foreground-light">
          [Hero Image Placeholder]
        </div>
      </div>
    </section>
  );
}
