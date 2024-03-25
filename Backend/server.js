const express = require('express');
const cors = require('cors');
const { MongoClient,ObjectID } = require('mongodb');

const app = express();
app.use(express.json());
const PORT = 5002;
const multer = require('multer');
// Middleware for handling CORS
app.use(cors());
// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

// MongoDB connection URI
const uri = 'mongodb+srv://user1:Chamu123@cluster0.alycqcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'Ecommerce1'; // Replace 'your_database_name' with your actual database name


// Function to connect to MongoDB and return the collection
async function getDb() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  return client.db(dbName);
}

async function connectToMongoDB(collectionName) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db(dbName).collection(collectionName);
}

// Endpoint to insert a new product with base64 encoded image
app.post('/products',upload.single('image'), async (req, res) => {
  try {
    const db = await getDb();
    const { name, details, stock,type } = req.body;

    // Convert base64 image data to buffer
    const imageBuffer = req.file.buffer; 

    // Insert the new product into the MongoDB collection with the image data
    await db.collection('products').insertOne({ name, details, stock, type:type,image: imageBuffer});

    res.status(201).json({ success: true, message: 'Product inserted successfully' });
  } catch (err) {
    console.error('Error inserting product into MongoDB:', err);
    res.status(500).json({ success: false, error: 'Failed to insert product into MongoDB' });
  }
});

app.get('/getProducts', async (req, res) => {
  try {
    const db = await getDb();
    const products = await db.collection('products').find({}).toArray();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products from MongoDB:', err);
    res.status(500).json({ error: 'Failed to fetch products from MongoDB' });
  }
});

app.delete('/deleteproduct/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await connectToMongoDB('products');
    const result = await collection.deleteOne({ _id: ObjectID(id) });
    if (result.deletedCount === 1) {
      res.send('product deleted successfully');
    } else {
      res.status(404).send('product not found');
    }
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).send('Failed to delete person');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
