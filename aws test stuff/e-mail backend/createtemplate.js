var AWS = require('aws-sdk');
// Set the region 

// Create the promise and SES service object
var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).listTemplates({MaxItems: ITEMS_COUNT}).promise();

// Handle promise's fulfilled/rejected states
templatePromise.then(
  function(data) {
    console.log(data);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });