const db = require('../db/index');
module.exports.getUser = async (req,res) => {

    res.send("Hello World");

}


module.exports.getAllUsers = async (req,res) => {

    try {

        const results = await db.getAll();

        res.json(results);


    }
    catch(e){

        res.sendStatus(500);

    }
}

module.exports.register = async (req,res)=>{
    
    try {
        const results = await db.registerUser(req.body);
        res.json({"message":"Register Success"});
    }
    catch(e){
        res.status(400);
        res.json({"message":e});
    }
}

module.exports.login = async (req,res)=>{
    try{
        const results = await db.login(req.body);
        if(results.length === 0) {
            res.status(400);
            res.json({"message":"Invalid Credentials"});
        }
        else{
            res.json({"message":"Success"});
        }

    }

    catch(e){
        res.status(500);
        res.json({"message":e})
    }

}



