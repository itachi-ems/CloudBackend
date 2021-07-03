const router = require('express').Router();
const {
    getUser
   
} = require('../controllers/UserController')



const userRoutes = (app) =>{

router.get('/',getUser);

}

module.exports  = userRoutes;