const express = require('express');
const bodyPArser = require('body-parser');
const controller = require ('./controller');
const massive = require ('massive');


const app = express();
app.use(bodyPArser.json());











massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err))

const port = process.env.PORT || 3005;
app.listen( port, () => { console.log (`I hear ya loud and clear on ${port}.`); });







