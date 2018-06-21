var Client = require('node-rest-client').Client;
var client = new Client();
var args = process.argv.slice(2);

if(args[0] === undefined || args[1] === undefined){
    console.log('Pass the Country code and Zip Code');
} else {
  client.get("https://api.zippopotam.us/"+args[0]+"/"+args[1], function (data, response) {
      // parsed response body as js object
      console.log(data);
      // console.log(response);
  });
}
