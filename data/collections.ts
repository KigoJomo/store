import 'server-only';
import { ObjectId } from 'mongodb';
import client from '@/lib/db';
import { Collection, CollectionDTO } from '@/lib/types/collection_types';
import { Product } from '@/lib/types/product_types';
import { DB_CONFIG } from '@/lib/config/db';

const db = client.db(DB_CONFIG.name);

export async function getCollectionDTO(
  collection: Collection
): Promise<CollectionDTO> {
  return {
    id: collection._id.toString(),
    title: collection.title,
    description: collection.description,
    image: collection.image,
  };
}

export async function getCollections(): Promise<CollectionDTO[]> {
  try {
    const collections = await db
      .collection<Collection>(DB_CONFIG.collections.collections)
      .find()
      .toArray();
    return Promise.all(collections.map(getCollectionDTO));
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
}

export async function getCollection(id: string): Promise<CollectionDTO | null> {
  try {
    const collection = await db
      .collection<Collection>(DB_CONFIG.collections.collections)
      .findOne({
        _id: new ObjectId(id),
      });

    if (!collection) {
      return null;
    }

    return getCollectionDTO(collection);
  } catch (error) {
    console.error('Error fetching collection:', error);
    return null;
  }
}

export async function getCollectionProducts(collectionId: string) {
  try {
    const products = await db
      .collection<Product>(DB_CONFIG.collections.products)
      .find({ collectionId })
      .toArray();

    return products;
  } catch (error) {
    console.error('Error fetching collection products:', error);
    return [];
  }
}
