const express = require('express');

var password ='EM1QQkgf2QcIXKe5';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:EM1QQkgf2QcIXKe5@cluster0.fg2cz.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => {
    res.send('I am working...');
})



client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  const product = {name:"modhu", price:30, quantity: 15};
    collection.insertOne(product)
    .then(result => {
      console.log("one product added")
    })
  console.log("Database Connected..");
  // client.close();
});

app.listen(3000);
