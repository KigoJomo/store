/** 
  fetch products from wix
  employ auth check where necessary
*/

import { wixClient } from '@/lib/config/wix/client';
import { ProductDTO, WixProduct } from '@/lib/types/product_types';

function getProductsDTO(items: WixProduct[]) {
  const products: ProductDTO[] = items.map((item) => {
    return {
      id: item._id,
      name: item.name,
      description: item.description,
      images: item.media?.items?.map((mediaItem) => mediaItem.image?.url),
      slug: item.slug,
      price: item.priceData,
    };
  });

  return products;
}

export async function getProductsByCollection(collectionId: string) {
  const { items } = await wixClient.products
    .queryProducts()
    .hasSome('collectionIds', [collectionId])
    .find();

  return getProductsDTO(items);
}

export async function getAllProducts() {
  // no auth needs to be done here

  const { items } = await wixClient.products.queryProducts().find();

  return getProductsDTO(items);
}

function getProductDTO(item: WixProduct) {
  const product: ProductDTO = {
    id: item._id,
    name: item.name,
    description: item.description,
    images: item.media?.items?.map((mediaItem) => mediaItem.image?.url),
    slug: item.slug,
    price: item.priceData,
  };

  return product;
}

export async function getProductBySlug(slug: string) {
  const { items } = await wixClient.products
    .queryProducts()
    .eq('slug', slug)
    .limit(1)
    .find();

  /*
  TODO: remember to test this later

  const response = await wixClient.products.getProduct(id, { includeMerchantSpecificData: true }) 
  */

  return getProductDTO(items[0]);
}
