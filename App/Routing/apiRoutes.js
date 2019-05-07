var myFriends = require("../Data/friends")
var friends = myFriends.friends;
var Friend = myFriends.Friend;
var connection = myFriends.connection;
var getFriends = myFriends.getFriends;


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        var user = new Friend(1, newFriend.name, newFriend.photo, newFriend.scores)

        var values = [newFriend.name, newFriend.photo, newFriend.scores];
        connection.query("INSERT INTO friends (name, photo, scores) VALUES(?,?,?)", values, function (err, resp) {
            if (err) throw err;

        })

        getFriends()

        user.getArr()
        user.calcScore()

        function addMatch() {
            for (var i = 0; i < friends.length; i++) {
                if (friends[i].id == id) {
                    matches.push(friends[i])
                }
            }
        }

        var score = 50;
        var id;
        var matches = [];
        console.log(friends)
        for (var i = 0; i < friends.length; i++) {
            var newScore = user.scoreTotal - friends[i].scoreTotal;
            if (Math.abs(newScore) < score) {
                score = Math.abs(newScore);
                id = friends[i].id
                // matches.push(friends[i]);
            } else if (Math.abs(newScore) == score) {
                matches.push(friends[i]);
            }
        }
        addMatch();
        console.log(score)
        console.log(id)
        console.log(matches)

        res.json(matches)
    })
}