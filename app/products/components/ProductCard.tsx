import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
  loading?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  loading = false,
}: ProductCardProps) {
  if (loading) {
    return (
      <div className="bg-background-light rounded-lg shadow-md overflow-hidden">
        <div className="h-48 bg-gradient-background animate-pulse"></div>
        <div className="p-4">
          <div className="h-4 w-2/3 bg-gradient-background animate-pulse rounded mb-2"></div>
          <div className="h-4 w-1/3 bg-gradient-background animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/products/${id}`} className="block">
      <div className="bg-background-light rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {image ? (
          <div className="relative h-48">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="h-48 bg-gradient-background"></div>
        )}
        <div className="p-4">
          <h3 className="font-medium">{name}</h3>
          <p className="text-foreground-light">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
