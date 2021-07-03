const router = require('express').Router();
const {
    getAllUsers,register
   
} = require('../Controller/UserController')



const userRoutes = (app) =>{

router.get('/',getAllUsers);
router.post('/',register);
app.use('/api/user',router);
}

module.exports  = userRoutes;
