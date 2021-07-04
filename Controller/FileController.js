const { upload } = require('../S3');
const fileController = {};

fileController.uploadFile = async (req,res)=>{

    
    
    

    try {

        const result = await upload(req.file);

        res.json({"message":"FileUploaded"});
    }
    catch(err){
        res.json({"message":err});
    }
    


}
module.exports = fileController;