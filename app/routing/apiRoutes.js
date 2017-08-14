
const friendList = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all friends////////////////////////////////////////////////////
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

//Post route////////////////////////////////////////////////////
  app.post('/api/friends', function(req,res){
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      scoresArray.push(scoresDiff);
    }

    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    
    var bestFriend = friendList[bestMatch];
    res.json(bestFriend);

    
    friendList.push(req.body);
  });
};