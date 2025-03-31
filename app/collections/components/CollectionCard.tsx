import React from 'react';
import Image from 'next/image';
import Button from '@shared/components/ui/Button';

interface CollectionCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  loading?: boolean;
}

export default function CollectionCard({
  id,
  title,
  description,
  image,
  loading = false,
}: CollectionCardProps) {
  if (loading) {
    return (
      <div className="relative bg-background-light rounded-lg shadow-md overflow-hidden group">
        <div className="h-64 bg-gradient-background animate-pulse"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black bg-opacity-40">
          <div className="h-8 w-2/3 bg-gradient-background animate-pulse rounded mb-4"></div>
          <div className="h-4 w-full bg-gradient-background animate-pulse rounded mb-4"></div>
          <div className="h-10 w-full md:w-auto bg-gradient-background animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-background-light rounded-lg shadow-md overflow-hidden group">
      {image ? (
        <div className="h-64 relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="h-64 bg-gradient-background"></div>
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black bg-opacity-40 transition-opacity opacity-100 group-hover:opacity-90">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <Button
          href={`/collections/${id}`}
          variant="primary"
          className="w-full md:w-auto">
          Explore Collection
        </Button>
      </div>
    </div>
  );
}
