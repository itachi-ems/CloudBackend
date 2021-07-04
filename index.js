//Requires
const express = require('express');
const routes = require('./Routes/index');

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

routes(app);

app.use("/",(req,res)=>{
    res.sendStatus(200);
})

const port = process.env.port || 3000;
app.listen(port,()=>{

    console.log("Server Is Running");
});

