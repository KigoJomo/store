import React from 'react';
import { getCollection, getCollectionProducts } from '@/data/collections';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductCard from '@/app/products/components/ProductCard';
import { getProductDTO } from '@/data/products';

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const collection = await getCollection(params.slug);

  if (!collection) {
    notFound();
  }

  const products = await getCollectionProducts(collection.id);
  const productDTOs = await Promise.all(products.map(getProductDTO));

  return (
    <section className="flex flex-col gap-8">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        {collection.image ? (
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-background" />
        )}
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background/90 to-transparent">
          <h1 className="text-4xl font-bold mb-2">{collection.title}</h1>
          <p className="text-foreground-light max-w-2xl">
            {collection.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productDTOs.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
