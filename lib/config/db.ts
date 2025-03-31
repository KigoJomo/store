export const DB_CONFIG = {
  name: process.env.MONGODB_DB_NAME || 'store',
  collections: {
    products: 'products',
    collections: 'collections',
    users: 'users',
  },
} as const;
