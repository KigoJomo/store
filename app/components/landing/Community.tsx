import React from 'react';
import { MessageSquare, Heart, Sparkles, Users2 } from 'lucide-react';
import Button from '../ui/Button';
import Image from 'next/image';
import Background2 from '../ui/Background2';
import { Logo } from '../ui/Logo';

type CommunityFeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

function CommunityFeature({
  icon,
  title,
  description,
  index,
}: CommunityFeatureProps) {
  return (
    <div
      className={`animate-fade-in-up animation-delay-${
        index * 100
      } flex items-start gap-3`}>
      <div className="p-2 rounded-lg bg-background-light/40 border border-foreground-light/20">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-foreground-light text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Community() {
  const features = [
    {
      icon: <MessageSquare size={20} className="stroke-accent" />,
      title: 'Share Your Ideas',
      description: 'Participate in discussions that shape our future products.',
    },
    {
      icon: <Heart size={20} className="stroke-accent" />,
      title: 'Support Each Other',
      description:
        'Connect with like-minded enthusiasts in our growing community.',
    },
    {
      icon: <Sparkles size={20} className="stroke-accent" />,
      title: 'Early Access',
      description: 'Be the first to see and test our newest creations.',
    },
    {
      icon: <Users2 size={20} className="stroke-accent" />,
      title: 'Exclusive Events',
      description: 'Join special community gatherings and virtual meetups.',
    },
  ];

  return (
    <section className="flex flex-col gap-12 relative overflow-hidden">
      <Background2 />
      <h2 className="animate-fade-in-down text-center">Join Our Community</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col gap-6 justify-between">
          <div className="space-y-6">
            <p className="max-w-lg animate-fade-in-up">
              Be part of something special. Our community members help shape the
              products we create and enjoy exclusive benefits.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <CommunityFeature
                  key={index}
                  index={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 animate-fade-in-up animation-delay-500 flex items-center justify-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              href="/signup"
              className="flex items-center gap-2">
              Join the Community
              <Users2 size={18} className="stroke-current" />
            </Button>
          </div>
        </div>

        <div className="animate-scale-in animation-delay-200 aspect-square md:aspect-auto rounded-3xl border-2 border-foreground-light/20 bg-gradient-to-bl from-accent/20 to-background-light/30 relative overflow-hidden flex items-center justify-center p-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="aspect-square rounded-xl overflow-hidden flex items-center justify-center bg-background">
              <Logo size={48} />
            </div>

            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/teamwork.webp"
                alt="Community member wearing our premium hoodie"
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 aspect-[3/1] rounded-xl overflow-hidden">
              <div className="w-full h-full bg-background-light/40 rounded-xl flex items-center justify-center p-4">
                <p className="text-foreground text-center">
                  <span className="block text-2xl font-medium">1,000+</span>
                  <span className="text-sm text-foreground-light">
                    Active Members
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
