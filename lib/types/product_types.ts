import { products } from '@wix/stores';

export type WixProduct = products.Product;

export type ProductDTO = {
  id: products.Product['_id']
  name: products.Product['name']
  description: products.Product['description']
  images?: products.MediaItemUrlAndSize['url'][]
  slug?: products.Product['slug']
  price?: products.PriceData
}
