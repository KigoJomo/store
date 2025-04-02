/** 
  fetch collections from wix
  employ auth check where necessary
*/

import { wixClient } from '@/lib/config/wix/client';
import { CollectionDTO, WixCollection } from '@/lib/types/collection_types';
import 'server-only';

function getCollectionsDTO(items: WixCollection[]){
  const collections: CollectionDTO[] = items.map(item => {
    return {
      id: item._id,
      title: item.name,
      description: item.description,
      image: item.media?.mainMedia?.image?.url,
      slug: item.slug
    }
  })

  return collections
}

export async function queryCollections() {
  /* no need for auth at this point */
  const { items } = await wixClient.collections.queryCollections().find();

  return getCollectionsDTO(items);
}

function getCollectionDTO(item: WixCollection){
  const collection: CollectionDTO = {
    id: item._id,
    title: item.name,
    description: item.description,
    image: item.media?.mainMedia?.image?.url,
    slug: item.slug
  }

  return collection
}

export async function getCollectionBySlug(slug: string){
    /* no need for auth at this point */
const response = await wixClient.collections.getCollectionBySlug(slug)

  return getCollectionDTO(response.collection as WixCollection);
}
