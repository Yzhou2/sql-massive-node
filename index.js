const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const app = module.exports = express();
const productsCtrl = require('./products_controller');


app.use(bodyParser.json());
app.use(cors());

const connectionString = 'postgres://cicvzdltbcwkmv:d5727a03fc08c71974bd57bcdbab295a7e4db4b89b36abcbf17ba8af1d9a1e01@ec2-107-20-188-239.compute-1.amazonaws.com:5432/d5rdu8ed3o7l2c?ssl=true'
massive( connectionString ).then(db => app.set('db', db) )


app.get('/api/products', productsCtrl.getAll);
app.get('/api/product/:id', productsCtrl.getOne);
app.put('/api/product/:id', productsCtrl.update);
app.post('/api/product',productsCtrl.create);
app.delete('/api/product/:id', productsCtrl.delete);


app.listen(3000, ()=>{
  console.log('listening on 3000')
})
