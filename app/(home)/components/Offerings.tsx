import { VerifiedIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Offerings() {
  const offerings = [
    {
      title: 'Premium Apparel',
      items: [
        'Cozy pullover hoodies',
        'Soft cotton graphic tees',
        'Stylish seasonal outerwear',
      ],
      image: '/images/offerings/beige_hoodie.webp',
      alt: 'Cozy beige premium hoodie',
    },
    {
      title: 'Tech Accessories',
      items: [
        'Durable laptop travel bags',
        'Embroidered designer caps',
        'Custom branded tech gadgets',
      ],
      image: '/images/offerings/laptop_bag.webp',
      alt: 'Stylish laptop travel bag',
    },
    {
      title: 'Limited Editions',
      items: [
        'Community-inspired specials',
        'Exclusive seasonal releases',
        'Numbered collector items',
      ],
      image: '/images/offerings/limited_edition.webp',
      alt: 'Exclusive limited edition item',
    },
  ];

  return (
    <section className="">
      <div className="w-full md:aspect-[2.5/1] md:rounded-3xl md:border-2 border-foreground-light/20  md:bg-gradient-to-bl from-accent/30 to-background-light/30 p-0 md:p-4 lg:p-8 md:backdrop-blur-2xl      grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="w-full aspect-[3/4] flex flex-col justify-between gap-12 px-4 py-6 bg-background/70 rounded-3xl relative border-4 border-background-light hover:border-accent/40 transition-all duration-600">
            <h4 className="text-center">{offering.title}</h4>

            <div className="image w-full aspect-[1] absolute -z-0 bottom-4 left-0 right-0 px-4">
              <Image
                src={offering.image}
                alt={offering.alt}
                width={1000}
                height={1000}
                className="w-full h-full rounded-2xl"
              />

              <div className="inset-4 absolute bottom-0 rounded-xl bg-gradient-to-b from-transparent to-background"></div>
            </div>

            <ul className="px-4 md:px-2 lg:px-4 flex flex-col gap-2 z-[1]">
              {offering.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 md:text-xs lg:text-base">
                  <VerifiedIcon size={16} className="stroke-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
