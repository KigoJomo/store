import 'server-only';
import { ObjectId } from 'mongodb';
import client from '@/lib/db';
import { Product, ProductDTO } from '@/lib/types/product_types';
import { DB_CONFIG } from '@/lib/config/db';

const db = client.db(DB_CONFIG.name);

export async function getProductDTO(product: Product): Promise<ProductDTO> {
  return {
    id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    collectionId: product.collectionId,
  };
}

export async function getProducts(): Promise<ProductDTO[]> {
  try {
    const products = await db
      .collection<Product>(DB_CONFIG.collections.products)
      .find()
      .toArray();
    return Promise.all(products.map(getProductDTO));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProduct(id: string): Promise<ProductDTO | null> {
  try {
    const product = await db
      .collection<Product>(DB_CONFIG.collections.products)
      .findOne({
        _id: new ObjectId(id),
      });

    if (!product) {
      return null;
    }

    return getProductDTO(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
