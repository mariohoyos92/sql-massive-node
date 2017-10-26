const express = require('express'),
        {json} = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        {getAll,getOne,create,update,deleteProduct} = require('./products_controller'),
        port = process.env.PORT || 3000;
        
require('dotenv').config();

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
})

app.get('/api/products', getAll);
app.get('/api/product/:id', getOne);
app.put('/api/product/:id', update);
app.post('/api/product', create);
app.delete('/api/product/:id', deleteProduct);









app.listen(port, console.log(`I'm up boss check out ${port}`));

