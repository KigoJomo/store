import { ObjectId } from 'mongodb';

export interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  price: number;
  image?: string;
  collectionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  collectionId?: string;
}
