import { collections } from '@wix/stores';

export type WixCollection = collections.Collection;

export interface CollectionDTO {
  id: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  image?: string | null | undefined;
  slug?: string | null | undefined;
}