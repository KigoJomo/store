'use client';
import { useRef } from 'react';
import Background from '../ui/Background';
import Button from '../ui/Button';
import { ExternalLink, FlaskConical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const values = ['quality', 'community', 'transparency'];
  const featuredProducts = [
    { image: 'gray_hoodie', category: 'Apparel' },
    { image: 'desk_mat', category: 'Workspace' },
    { image: '10084', category: 'Accessories' },
  ];

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center gap-12 relative overflow-hidden">
      <Background />

      <h2 className="animate-fade-in-down text-center">
        Tech-Inspired Products with Integrity
      </h2>

      <div className="flex items-center gap-2">
        {values.map((value, index) => (
          <div
            key={index}
            className="border px-4 py-1 rounded-full relative overflow-hidden capitalize !text-foreground animate-fade-in-down animation-delay-200">
            <div className="inset-0 bg-accent absolute -z-[5] opacity-50 blur"></div>
            {value}
          </div>
        ))}
      </div>

      <p className="max-w-2xl text-center animate-scale-in animation-delay-400">
        We deliver premium products that offer exceptional value.
        <br />
        Because <strong>you 🫵</strong> deserve the <strong>best</strong>.
      </p>

      <div className="flex items-center gap-2 animate-scale-in animation-delay-600">
        <Button href="/products">Shop Now</Button>
        <Button variant="outline" className="gap-2 backdrop-blur-xs">
          Community
          <FlaskConical size={16} className="rotate-12 stroke-accent" />
        </Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
        {featuredProducts.map((product, index) => {
          const delayClass = `animation-delay-${index + 1}00`;

          return (
            <div
              key={index}
              className={`!aspect-[1] rounded-t-3xl border-none bg-background-light p-2 pb-0 hover:p-0 overflow-hidden relative transition-all duration-300 animate-fade-in-up ${delayClass}`}>
              <Image
                src={`/images/${product.image}.webp`}
                alt="Aqutte premium apparel and accessories"
                width={1000}
                height={1000}
                className="w-full h-full rounded-t-2xl border-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
              <Link href='/collections  ' className="absolute bottom-4 left-4 bg-background/40 border border-background-light px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-2 group">
                {product.category}
                <ExternalLink size={12} className='group-hover:stroke-accent transition-all duration-300' />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
