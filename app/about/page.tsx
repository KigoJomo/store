import React from 'react';
import { Users, Award, Clock, Leaf } from 'lucide-react';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gradient-foreground mb-6">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-light mb-6">
              Tappeli is a cutting-edge e-commerce platform founded in 2023 with
              the mission to provide high-quality products at affordable prices.
              Our team is passionate about delivering exceptional customer
              experiences.
            </p>

            <div className="flex flex-col md:flex-row gap-8 my-12">
              <div className="flex-1 flex flex-col items-center text-center p-6 bg-background-light rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Team</h3>
                <p className="text-foreground-light">
                  Dedicated professionals working to serve you better.
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center text-center p-6 bg-background-light rounded-lg shadow-sm">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-foreground-light">
                  Providing the best products at affordable prices.
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center text-center p-6 bg-background-light rounded-lg shadow-sm">
                <Leaf className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <p className="text-foreground-light">
                  Sustainable, ethical, and customer-centric approach.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-foreground-light mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim.
            </p>

            <div className="my-8 text-center">
              <Button href="/contact" variant="primary" className="mr-4">
                Contact Us
              </Button>
              <Button href="/products" variant="outline">
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
