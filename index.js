//Requires
const express = require('express');
const routes = require('./Routes/index');

const app = express();

app.use(express.json());

app.use("/",(req,res)=>{
    res.sendStatus(200);
})
routes(app);

const port = process.env.port || 3000;
app.listen(port,()=>{

    console.log("Server Is Running");
});
