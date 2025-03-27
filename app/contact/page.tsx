'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="">
        <h1 className="text-3xl font-bold text-gradient-foreground mb-6">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-foreground-light mb-8">
              Have questions about our products, need assistance with your
              order, or want to provide feedback? We&apos;re here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-4" />
                <span className="text-foreground-light">
                  support@tappeli.com
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-4" />
                <span className="text-foreground-light">+1 (234) 567-8901</span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-4" />
                <span className="text-foreground-light">
                  123 Commerce St, Market City, MC 98765
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background-light p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Send us a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground-light mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-background-light rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground-light mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-background-light rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground-light mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-background-light rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="flex items-center">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
