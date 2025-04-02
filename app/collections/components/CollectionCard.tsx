import React from 'react';
import Image from 'next/image';
import Button from '@shared/components/ui/Button';
import { CollectionDTO } from '@/lib/types/collection_types';

export default function CollectionCard({
  title,
  description,
  image,
  slug,
}: CollectionDTO) {
  return (
    <div className="bg-transparent border border-background-light rounded-2xl overflow-hidden">
      <div className="w-full aspect-[1.75/1] bg-background-light">
        <Image
          src={image as string}
          alt={title as string}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-end p-6">
        <h4 className="mb-2">{title}</h4>
        <p className="mb-4">{description}</p>
        <Button
          href={`/collections/${slug}`}
          variant="primary"
          className="w-full md:w-auto">
          Explore Collection
        </Button>
      </div>
    </div>
  );
}
