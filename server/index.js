require('dotenv').config();
const controller = require ('./controller');
const massive = require ('massive');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json() );


app.get('/api/inventory', controller.getDb)




massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );

app.listen(4000, () => {
    console.log("I hear you loud and clear", 4000);
})



