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
        res.json(results);
    }
    catch(e){
        res.sendStatus(500).json(e);
    }
}



