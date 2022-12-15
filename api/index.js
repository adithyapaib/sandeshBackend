const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
  const client = new MongoClient(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const database = client.db();
    const collection = database.collection('events');
    const data = await collection.find({}).toArray();
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  } finally {
    await client.close();
  }
};
