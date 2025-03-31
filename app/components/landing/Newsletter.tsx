'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { ArrowRight, BellRing } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="flex flex-col gap-12 relative overflow-hidden">
      <h2 className="animate-fade-in-down text-center">Stay Connected</h2>

      <div className="animate-fade-in-up flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="animate-fade-in-left animation-delay-200 w-full md:w-1/2 rounded-3xl border-2 border-foreground-light/20 bg-gradient-to-bl from-accent/30 to-background-light/30 p-6 md:p-8 aspect-[1] md:aspect-video relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="flex flex-col gap-4 text-center">
              <div className="bg-background/40 p-4 rounded-xl inline-flex mx-auto border border-foreground-light/20 backdrop-blur-sm">
                <BellRing size={24} className="stroke-accent" />
              </div>
              <h3 className="font-medium">Blog Coming Soon</h3>
              <p className="text-foreground-light max-w-sm">
                We&apos;re working on articles about product releases,
                behind-the-scenes content, and community stories.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-right animation-delay-300 w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-center md:text-left">Get the Latest Updates</h3>
            <p className="text-foreground-light">
              Be the first to know about new products, exclusive offers, and
              community events. No spam, just the good stuff.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <Input
              type="email"
              label=""
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
              labelClassName="hidden"
            />

            <Button
              type="submit"
              variant="primary"
              className="flex items-center justify-center gap-2 group">
              Subscribe Now
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>

            <p className="text-xs text-foreground-light text-center mt-2">
              By subscribing, you agree to our Privacy Policy. You can
              unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
