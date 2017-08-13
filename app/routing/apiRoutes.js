// Load Data ////////////////////////////////////////////////////

const friendData = require("../data/friend.js");

// Routing ////////////////////////////////////////////////////

module.exports = function (app) {
    // API GET Requests
    // ---------------------------------------------------------

    app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

    // API POST Requests////////////////////////////////////////////////////

//       app.post("/api/friend", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     if (friendData.length < 5) {
//       friendlsData.push(req.body);
//       res.json(true);
//     }
   
//   });
}