import React from 'react';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="py-24 text-center">
      <div className="animate-fade-in-up max-w-2xl mx-auto">
        <h2 className="mb-6">Get Started</h2>
        <div className="space-y-3 mb-10">
          <p>Experience quality and honesty.</p>
          <p>Discover our collection.</p>
          <p>Shop with confidence.</p>
        </div>

        <Button variant="primary" size="lg" href="/collections">
          Shop Now
        </Button>
      </div>
    </section>
  );
}
