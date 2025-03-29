import React from 'react';
import Button from '../ui/Button';

export default function Community() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background-light/20 rounded-2xl">
      <div className="animate-fade-in-up flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="mb-6">Join Our Community</h2>
          <div className="space-y-4">
            <p>We value your input.</p>
            <p>Share your ideas.</p>
            <p>Help shape our future.</p>
          </div>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/signup">
              Join the Community
            </Button>
          </div>
        </div>

        <div className="flex-1 animate-scale-in animation-delay-200 bg-background-light/30 rounded-xl aspect-[4/3] md:aspect-square relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-foreground-light">[Community Interaction]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
