import React from 'react';

type OfferingProps = {
  title: string;
  items: string[];
  index: number;
};

function Offering({ title, items, index }: OfferingProps) {
  return (
    <div
      className={`animate-fade-in-right animation-delay-${
        index * 100
      } flex flex-col gap-2`}>
      <h4>{title}</h4>
      <ul className="list-disc list-inside">
        {items.map((item, i) => (
          <li key={i} className="text-foreground-light ml-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Offerings() {
  const offerings = [
    {
      title: 'Premium Apparel',
      items: ['T-shirts', 'Hoodies', 'and more'],
    },
    {
      title: 'Tech Accessories',
      items: ['Bags', 'Caps', 'Gadgets'],
    },
    {
      title: 'Limited Editions',
      items: ['Special runs made with you in mind'],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="animate-fade-in-down text-center mb-12">What We Offer</h2>

      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 flex flex-col gap-8">
          {offerings.map((offering, i) => (
            <Offering
              key={i}
              index={i}
              title={offering.title}
              items={offering.items}
            />
          ))}
        </div>

        <div className="flex-1 animate-scale-in animation-delay-400 bg-background-light/30 rounded-xl overflow-hidden aspect-square relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-foreground-light">[Product Collage]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
