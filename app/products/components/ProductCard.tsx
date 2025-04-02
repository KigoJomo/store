import { ProductDTO } from '@/lib/types/product_types';
import Button from '@/shared/components/ui/Button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

const ProductCard: FC<ProductDTO> = (product) => {
  return (
    <div className="w-full flex flex-col gap-2 bg-background-light/20 border border-background-light rounded-2xl overflow-hidden">
      <div className="w-full aspect-[4/3] overflow-hidden">
        {product.images && (
          <Image
            src={product.images[0]!}
            alt={product.name as string}
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        )}
      </div>

      <div className="w-full flex flex-col gap-2 p-4 pt-0">
        <h5 className='font-bold'>{product.name}</h5>
        <div className="w-full flex items-center gap-6 justify-between">
          <p>{product.price?.currency} {product.price?.price}</p>

          <Button href={`/products/${product.slug}`} variant='outline'>
            View
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
