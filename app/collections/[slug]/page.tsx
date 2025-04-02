import ProductGrid from '@/app/products/components/ProductGrid';
import { getCollectionBySlug } from '@/data/wix/collections';
import { getProductsByCollection } from '@/data/wix/products';
import Link from 'next/link';

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    return (
      <section className="flex flex-col items-center justify-center gap-6">
        <h1>Collection not found</h1>
        <p>The collection you requested does not exist!</p>
        <Link href={'/collections'} className="text-accent">
          Go back to collections page
        </Link>
      </section>
    );
  }

  const collectionProducts = await getProductsByCollection(collection.id!)

  return(
    <section className='flex flex-col gap-6'>
      <h3>{collection.title}</h3>

      <hr className='border-background-light/50' />

      <ProductGrid products={collectionProducts} />
    </section>
  )
}
