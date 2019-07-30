const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var params = {
    Destination: { /* required */
      ToAddresses: [
        'leo.hubert3@gmail.com',
        /* more To email addresses */
      ]
    },
    Source: 'hleo1@jhu.edu', /* required */
    Template: 'testtemplate', /* required */
    TemplateData: '{ \"username\":\"Hubert\" }', /* required */
    ReplyToAddresses: [
      'leo.hubert3@gmail.com'
    ],
  };
  
  
  // Create the promise and SES service object
  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();
  
  // Handle promise's fulfilled/rejected states
  sendPromise.then(
    function(data) {
      console.log(data);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });


// { "accessKeyId": "AKIAJLN7T32VPAY7XVGA", 
//     "secretAccessKey": "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", 
//     "region": "us-east-1" }
// const ses = new AWS.SES();

// var sendMail = function(callback) {
//     var params = {};

//     var destination = {
//         "ToAddresses": ["leo.hubert3@gmail.com"]
//     };

//     var templateData = {};
//     templateData.userName = "athakur";

//     params.Source = "leo.hubert3@gmail.com"
//     params.Destination = destination;
//     params.Template = "testtemplate";
//     params.TemplateData = JSON.stringify(templateData);

//     ses.sendTemplatedEmail(params, function (email_err, email_data) {
//         if (email_err){
//             console.error("Failed to send the email: " + email_err);
//             callback(email_err, email_data)
//         } else {
//             console.info("Succesfully sent the email : " + JSON.stringify(email_data));
//             callback(null, email_data);
//         }
//     })
// }
// sendMail(function(err, data) {
//     if (err) {
//         console.log("send mail failed");
//     } else {
//         console.log("send mail succedded");
//     }
// })