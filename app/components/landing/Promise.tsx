import React from 'react';

type PromiseCardProps = {
  title: string;
  description: string[];
  index: number;
};

function PromiseCard({ title, description, index }: PromiseCardProps) {
  return (
    <div
      className={`animate-fade-in-up animation-delay-${
        index * 200
      } flex-1 min-w-[280px] bg-background-light/20 p-6 md:p-8 rounded-xl backdrop-blur-sm`}>
      <h3 className="mb-4">{title}</h3>
      {description.map((line, i) => (
        <p key={i} className="mb-2">
          {line}
        </p>
      ))}
      <div className="mt-6 h-48 bg-background-light/40 rounded-lg flex items-center justify-center">
        <p className="text-foreground-light">[Image {index + 1}]</p>
      </div>
    </div>
  );
}

export default function Promise() {
  const promises = [
    {
      title: 'Exceptional Quality & Value',
      description: [
        'We partner with top-tier manufacturers.',
        'Every product is built to last.',
      ],
    },
    {
      title: 'Community Driven',
      description: [
        'Your voice shapes our brand.',
        'We listen and create together.',
      ],
    },
    {
      title: 'Complete Transparency',
      description: [
        'We show you every step.',
        'From sourcing to production.',
        'No secrets.',
      ],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="animate-fade-in-down text-center mb-16">Our Promise</h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {promises.map((promise, index) => (
          <PromiseCard
            key={index}
            index={index}
            title={promise.title}
            description={promise.description}
          />
        ))}
      </div>
    </section>
  );
}
