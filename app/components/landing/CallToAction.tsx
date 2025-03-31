import React from 'react';
import Button from '../ui/Button';
import { ShoppingBag, ExternalLink, Star } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="flex flex-col gap-12 relative overflow-hidden not-first:bg-gradient-to-b from-background via-background to-background-light">
      <div className="animate-fade-in-up max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-flex mx-auto mb-2 p-3 rounded-full bg-background-light/40 border border-foreground-light/20 backdrop-blur-sm">
          <Star size={24} className="stroke-accent fill-accent/20" />
        </div>

        <h2 className="animate-fade-in-down">Ready to Experience Quality?</h2>

        <div className="space-y-4 animate-fade-in-up animation-delay-200">
          <p className="text-lg">
            Join thousands of satisfied customers who have discovered our
            premium products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 my-4">
            {['Quality', 'Style', 'Value', 'Satisfaction'].map(
              (value, index) => (
                <div
                  key={index}
                  className="border px-4 py-1 rounded-full relative overflow-hidden capitalize animation-delay-300">
                  <div className="inset-0 bg-accent absolute -z-[5] opacity-50 blur"></div>
                  {value}
                </div>
              )
            )}
          </div>
          <p>Find the perfect item for your collection today.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 animate-scale-in animation-delay-400">
          <Button
            variant="primary"
            size="lg"
            href="/collections"
            className="flex items-center gap-2 group">
            Shop Now
            <ShoppingBag
              size={18}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="/products"
            className="flex items-center gap-2 group">
            View Products
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
