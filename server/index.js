const express = require('express');
const bodyParser = require('body-parser');
const gitHub = require('../helpers/github.js')
const dbhandlers = require('../database/index.js')

let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
 let userName = req.body.term;

 gitHub.getReposByUsername(userName, (err,data) => {
 	if (err){
 		throw err
 	}else{
 		data.forEach((repo)=>{
          dbhandlers.save(repo)
 		})
 	}

 });



  // console.log(userName)

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

