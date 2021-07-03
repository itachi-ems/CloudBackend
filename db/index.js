const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    host:process.env.DBHOST,
    user:process.env.DBUSERNAME,
    password:process.env.DBPASSWORD,
    database:process.env.DBNAME

});

let userDB = {}

userDB.getAll =  () => {

    const query = "SELECT * from users";

    return new Promise((resolve,reject)=>{

        pool.query(query,(err,result)=>{

            if(err){
                return reject(err);
            }
            return resolve(result);
    
        });
    });

}



module.exports.userDB