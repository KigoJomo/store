import React from 'react';
import Button from '../components/ui/Button';

export default function CollectionsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gradient-foreground mb-6">Collections</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder collection cards */}
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="relative bg-background-light rounded-lg shadow-md overflow-hidden group">
              <div className="h-64 bg-gradient-background animate-pulse"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black bg-opacity-40 transition-opacity opacity-100 group-hover:opacity-90">
                <h2 className="text-white text-2xl font-bold mb-2">Collection {index + 1}</h2>
                <p className="text-white mb-4">A beautiful collection of our finest products.</p>
                <Button variant="primary" className="w-full md:w-auto">Explore Collection</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
