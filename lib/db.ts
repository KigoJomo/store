import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.MONGO_DB_URI) {
  throw new Error('Mongo uri not found');
}

const uri = process.env.MONGO_DB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;

// collection name will probably change from test to something else (idk) in a production environment (maybe ...)
if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient
  };
    
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

export default client;