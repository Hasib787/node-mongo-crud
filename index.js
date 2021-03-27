const express = require('express');
const bodyParser = require('body-parser');
var password = 'EM1QQkgf2QcIXKe5';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:EM1QQkgf2QcIXKe5@cluster0.fg2cz.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})



client.connect(err => {
  const productCollection = client.db("organicdb").collection("products");

  app.get('/products', (req, res) => {
    productCollection.find({})
      .toArray((err, documents) => {
        res.send(documents);
      })
  })

  app.post('/addProduct', (req, res) => {
    const product = req.body;
    productCollection.insertOne(product)
      .then(result => {
        console.log('Data are added successfully');
        res.send('success')
      })

  })
});

app.listen(3000);
