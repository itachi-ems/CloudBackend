const router = require('express').Router();
const {
    getUser
   
} = require('../Controller/UserController')



const userRoutes = (app) =>{

router.get('/',getUser);
app.use('/api/user',router);
}

module.exports  = userRoutes;
