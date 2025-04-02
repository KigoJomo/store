import { getAllProducts } from '@/data/wix/products';
import React from 'react';
import ProductGrid from './components/ProductGrid';

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <>
      <section className="flex flex-col gap-4">
        <h3>products</h3>

        <hr className='border-foreground-light/50' />

        <ProductGrid products={products} />
      </section>
    </>
  );
}
