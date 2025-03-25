'use client';

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gradient-foreground mb-6">
          Search Products
        </h1>

        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 border border-background-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-foreground-light" />
            </div>
            <Button type="submit" variant="primary">
              Search
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2">
              <Filter size={18} />
              Filter
            </Button>
          </form>
        </div>

        {/* Placeholder search results */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-background-light rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-background animate-pulse"></div>
                <div className="p-4">
                  <div className="h-4 bg-foreground-light opacity-30 rounded animate-pulse mb-2"></div>
                  <div className="h-6 bg-foreground-light opacity-30 rounded animate-pulse mb-4 w-2/3"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-5 bg-foreground-light opacity-30 rounded animate-pulse w-1/3"></div>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center my-8 text-foreground-light">
          {searchQuery
            ? 'No results found for your search. Try different keywords.'
            : 'Enter a search term to find products.'}
        </div>
      </div>
    </>
  );
}
