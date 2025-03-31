import { ObjectId } from 'mongodb';

export interface Collection {
  _id: ObjectId;
  title: string;
  description: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CollectionDTO {
  id: string;
  title: string;
  description: string;
  image?: string;
}
