import React from 'react';
import { getProduct } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@shared/components/ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative aspect-square w-full">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-gradient-background rounded-lg" />
        )}
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-foreground-light">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <p className="text-foreground-light">{product.description}</p>

        <Button className="flex items-center gap-2 w-full md:w-auto">
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </div>
    </section>
  );
}
