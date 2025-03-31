import React from 'react';
import { Award, Users, Eye } from 'lucide-react';
import Background2 from '@/shared/components/ui/Background2';

type PromiseCardProps = {
  title: string;
  description: string[];
  index: number;
  icon: React.ReactNode;
};

function PromiseCard({ title, description, index, icon }: PromiseCardProps) {
  return (
    <div
      className={`animate-fade-in-up animation-delay-${
        index * 200
      } ${index === 2 && 'md:col-start-2 lg:col-start-3'} col-span-1 md:col-span-2 lg:col-span-1 aspect-video rounded-3xl border-2 border-foreground-light/20 bg-transparent bg-gradient-to-bl from-accent/30 to-background-light/30 p-6 md:p-8 flex flex-col gap-6 justify-between hover:-translate-y-2 transition-transform duration-600`}>
      <div className="flex items-center justify-between">
        <p className="!font-normal !text-2xl !text-foreground">{title}</p>
        <div className="!aspect-square px-2 bg-background-light/40 rounded-xl border border-foreground-light/20 flex items-center justify-center">{icon}</div>
      </div>

      <ul className="list-disc pl-4">
        {description.map((line, i) => (
          <li key={i} className="text-foreground-light">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Promise() {
  const promises = [
    {
      title: 'Quality & Value',
      description: [
        'We partner with top-tier manufacturers.',
        'Every product is built to last.',
      ],
      icon: <Award size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Community Driven',
      description: [
        'Your voice shapes our brand.',
        'We listen and create together.',
      ],
      icon: <Users size={24} strokeWidth={1.5} />,
    },
    {
      title: '100% Transparency',
      description: [
        'We show you every step.',
        'From sourcing to production.',
        'No secrets.',
      ],
      icon: <Eye size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="flex flex-col gap-12 relative overflow-y-visible">
      <Background2 />
      <h2 className="animate-fade-in-down text-center">Our Promise</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 md:gap-8">
        {promises.map((promise, index) => (
          <PromiseCard
            key={index}
            index={index}
            title={promise.title}
            description={promise.description}
            icon={promise.icon}
          />
        ))}
      </div>
    </section>
  );
}
