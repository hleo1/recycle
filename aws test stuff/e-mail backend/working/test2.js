const AWS = require("aws-sdk"); 
AWS.config.update({region: 'us-east-1'});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const params = {
  "Source": "leo.hubert3@gmail.com",
  "Template": "RegistrationTemplate",
  "ConfigurationSetName": "TestConfig",
  "Destination": {
    "ToAddresses": [ "leo.hubert3@gmail.com"
    ]
  },
  "TemplateData": "{ \"name\":\"Alejandro\", \"favoriteanimal\": \"alligator\" }"
}

ses.sendTemplatedEmail(params, (err, data) =>  {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});