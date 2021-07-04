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

    const query = "SELECT * from user";

    return new Promise((resolve,reject)=>{

        pool.query(query,(err,result)=>{

            if(err){
                return reject(err);
            }
            return resolve(result);
    
        });
    });

}

userDB.registerUser = (user) => {

    const query = `INSERT INTO user (user_email,user_firstname,user_lastname,user_password) values('${user.emailid}','${user.firstname}','${user.lastname}','${user.password}')`;
    console.log(query);

    return new Promise((resolve,reject)=>{

        pool.query(query,(err,results)=>{
            if(err){
                reject(err);
            }
            else {
                resolve(results);
            }


        });

    });

}

userDB.login = (user)=> {
    const query = `SELECT emailid from user WHERE user_email=${user.emailid} and user_password=${user.password}`;

    return new Promise((resolve,reject)=>{
        pool.query(query,(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);

        });
    });
}



module.exports = userDB