"use client"

import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // Would normally send this to an API
  };

  return (
    <section className="py-20">
      <div className="animate-fade-in-up flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 animate-fade-in-left animation-delay-200 bg-background-light/30 rounded-xl aspect-video relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-foreground-light">[Blog Preview]</p>
          </div>
        </div>

        <div className="flex-1 animate-fade-in-right animation-delay-300">
          <h2 className="mb-6">Stay Informed</h2>
          <div className="space-y-4">
            <p>Our blog is coming soon.</p>
            <p>Expect tips, stories, and behind-the-scenes.</p>
            <p>Sign up for updates.</p>
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
              className="w-full mb-0"
              labelClassName="hidden"
            />
            <Button type="submit" variant="primary">
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
