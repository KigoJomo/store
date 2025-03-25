import React from 'react';
import { Tags, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ProductsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gradient-foreground">
            Products
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={18} />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Tags size={18} />
              Categories
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Placeholder product cards */}
          {Array(8)
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
      </div>
    </>
  );
}
