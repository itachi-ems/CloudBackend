const router = require('express').Router();
const {
    getAllUsers,register,login
   
} = require('../Controller/UserController')



const userRoutes = (app) =>{

router.get('/',getAllUsers);
router.post('/',register);
router.post('/login',login);
app.use('/api/user',router);
}

module.exports  = userRoutes;
