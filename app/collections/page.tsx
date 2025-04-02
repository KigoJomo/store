import { queryCollections } from '@/data/wix/collections';
import React from 'react';
import CollectionCard from './components/CollectionCard';

export default async function CollectionsPage() {
  const collections = await queryCollections();

  return (
    <>
      <section className="">
        <h3>collections</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map(collection => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </section>
    </>
  );
}
