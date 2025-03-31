import React from 'react';
import { Tags, Filter } from 'lucide-react';
import Button from '@shared/components/ui/Button';
import ProductCard from './components/ProductCard';
import { getProducts } from '@/data/products';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <section className="">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gradient-foreground">
            Products
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={18} />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Tags size={18} />
              Categories
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0
            ? products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            : // Show loading state if no products
              Array(8)
                .fill(0)
                .map((_, index) => (
                  <ProductCard
                    key={index}
                    id={`placeholder-${index}`}
                    name="Product Name"
                    price={99.99}
                    loading={true}
                  />
                ))}
        </div>
      </section>
    </>
  );
}
