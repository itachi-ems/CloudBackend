//Requires
const express = require('express');
const routes = require('./Routes/index');

const app = express();

app.use(express.json());


routes(app);

app.listen(3000,()=>{

    console.log("Server IS Running");
});
