var config = require('./config.json');
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({'grant_type':'client_credentials'});
var token = '';

//GET ACCESS TOKEN
var consumerKey = config.consumerKey;
var consumerSecret = config.consumerSecret;
var encodedData = Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');
var authorizationHeaderString = 'Basic ' + encodedData;
var token_url = config.token_url;
var endpoint = config.endpoint;
var source = config.source;

var config_token = {
  method: 'post',
  url: token_url,
  headers: {
        'Authorization': authorizationHeaderString,
        'Content-type': 'application/x-www-form-urlencoded'
    },
  data: data
};

axios(config_token)
.then(function (response) {
  //console.log('Token: ' + response.data.access_token);
  token = response.data.access_token;
  //GET DATA FROM WSO2 API USING ACCESS TOKEN
  var config = {
    method: 'get',
    url: endpoint + source,
    headers: {
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token
    }
  };

  axios(config)
  .then(function (response) {
    var responseData = response.data.value[0].Observations;
    console.log(response.data.value[0].name);
    //Time is in UTC - conver it to local time
    var localDate = new Date(responseData[0].resultTime);
    console.log('Timestamp : ' + localDate);
    console.log('Number of free bays: ' + responseData[0].result);
    
  })
  .catch(function(error){
  console.log(error)
  });
})
.catch(function(error){
  console.log(error)
});

