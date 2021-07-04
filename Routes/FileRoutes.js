const router = require('express').Router();
const fileController = require('../Controller/FileController');
const multer = require('multer');



const storage = multer.memoryStorage({
    destination: (req,file,cb)=>{
        cb(null,'');
    }
});


const upload = multer({storage}).single('document');

const FileRoutes = (app) => {


    router.post('/',upload, fileController.uploadFile);
    router.get('/',async (req,res)=>{
        res.send("HEllo");
    })

    app.use('/api/files',router);
}

module.exports = FileRoutes

//