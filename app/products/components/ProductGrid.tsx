import { ProductDTO } from '@/lib/types/product_types';
import { FC } from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps{
  products: ProductDTO[]
}

const ProductGrid: FC<ProductGridProps> = ({products}) => {

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
