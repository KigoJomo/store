import React from 'react';
import CollectionCard from './components/CollectionCard';
import { getCollections } from '@/data/collections';

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <>
      <section className="">
        <h1 className="text-3xl font-bold text-gradient-foreground mb-6">
          Collections
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.length > 0
            ? collections.map((collection) => (
                <CollectionCard key={collection.id} {...collection} />
              ))
            : Array(4)
                .fill(0)
                .map((_, index) => (
                  <CollectionCard
                    key={index}
                    id={`placeholder-${index}`}
                    title={`Collection ${index + 1}`}
                    description="A beautiful collection of our finest products."
                    loading={true}
                  />
                ))}
        </div>
      </section>
    </>
  );
}
