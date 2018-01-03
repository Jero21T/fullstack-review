const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected')
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  repoOwner: String,
  repoWatched: Number

});



let Repo = mongoose.model('Repo', repoSchema);


let save = (repo) => {

  var newRepo = 
    new Repo({
    repoName: repo.name,
    repoOwner: repo.owner.login,
    repoWatched: repo.watchers
  });

  newRepo.save((err)=>{
    if(err){
      console.error(err);
      return
    }
})
}





module.exports.Repo = Repo
module.exports.save = save;