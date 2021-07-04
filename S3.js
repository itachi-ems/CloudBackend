const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');


const s3 = new AWS.S3({
    accessKeyId:process.env.AWS_BUCKET_ACCESSKEY,
    secretAccessKey:process.env.AWS_BUCKET_SECRETKEY
});




module.exports.upload = (file) => {


    const myFile = file.originalname.split(".");
    const extension = myFile[myFile.length - 1];

    const params = {
        Bucket:process.env.AWS_BUCKET_NAME,
        Key:`${uuidv4()}.${extension}`,
        Body:file.buffer
    };

    return s3.upload(params).promise();
    
   

   
}