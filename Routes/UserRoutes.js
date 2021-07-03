const router = require('express').Router();
const {
    getAllUsers
   
} = require('../Controller/UserController')



const userRoutes = (app) =>{

router.get('/',getAllUsers);
app.use('/api/user',router);
}

module.exports  = userRoutes;
