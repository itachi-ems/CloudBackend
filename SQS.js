const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId:process.env.AWS_BUCKET_ACCESSKEY,
    secretAccessKey:process.env.AWS_BUCKET_AWS_BUCKET_SECRETKEY
})

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

module.exports.pushToQueue = (userDetails) => {

    const params = {
        DelaySeconds:5,
        MessageAttributes:{
            "Email":{
                DataType:"String",
                StringValue:userDetails.emailid
            },
            "FirstName":{
                DataType:"String",
                StringValue:userDetails.firstname
            },
            "LastName":{
                DataType:"String",
                StringValue:userDetails.lastname
            }
        },
        MessageBody:userDetails.emailid,
        QueueUrl:process.env.AWS_SQS_URL
    }


    return sqs.sendMessage(params).promise();


}