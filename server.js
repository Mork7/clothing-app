import { MongoClient } from "mongodb";
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = 3001;

dotenv.config();
// eslint-disable-next-line no-undef
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.use(cors());

// Connect to the MongoDB client outside of the request to avoid repeated connections
client.connect().then(() => {
  console.log('Connected successfully to MongoDB');
}).catch(console.error);

app.get('/api/clothingItems', async (req, res) => {
  try {
    const database = client.db('clothing-app-db');
    const clothingItems = database.collection('clothing-app-collection');
    
    // Query can be adjusted or removed to fetch all documents
    const items = await clothingItems.find().toArray();
    res.json(items); // Send the items as JSON to the client
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching clothing items from database.");
  }
  // Note: We are not closing the MongoDB client after each request to avoid overhead of reconnecting
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
