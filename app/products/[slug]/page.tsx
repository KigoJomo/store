import { getProductBySlug } from '@/data/wix/products';
import Image from 'next/image';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const product = await getProductBySlug(slug);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* image */}

      <div className="w-full aspect-[4/3] border border-background-light rounded-2xl overflow-hidden">
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

      {/* details */}
      <div className="w-full flex flex-col gap-4">
        <h3>{product.name}</h3>
        <p>{product.price?.currency} {product.price?.price}</p>
      </div>
    </section>
  );
}
