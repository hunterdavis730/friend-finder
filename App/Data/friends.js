// var friends = [{
//         name: "John Snow",
//         photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT2AJk_n2myzt36Thz8RBGe9mIppdkOQO50FXQsQYZ7kyCXEmhA",
//         scores: [
//             1,
//             2,
//             3,
//             4,
//             45,
//             6,
//             7,
//             5,
//             4,
//             56
//         ]
//     },
//     {
//         name: "John Snow",
//         photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT2AJk_n2myzt36Thz8RBGe9mIppdkOQO50FXQsQYZ7kyCXEmhA",
//         scores: [
//             1,
//             2,
//             3,
//             4,
//             45,
//             6,
//             7,
//             5,
//             4,
//             56
//         ]
//     }
// ]


// module.exports = friends;



var friends = [];

var mysql = require("mysql");

function Friend(id, name, photo, scores) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.scoreArr = [];
    this.scoreTotal = 0;
}

Friend.prototype.getArr = function () {
    this.scoreArr = this.scores.split(", ");


}

Friend.prototype.calcScore = function () {
    for (var i = 0; i < this.scoreArr.length; i++) {
        var num = parseInt(this.scoreArr[i]);


        this.scoreTotal += num;

    }
}

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Midwestpest1!",
    database: "friends_db"
});

connection.connect((err) => {
    if (err) throw err;
})

function getFriends() {
    connection.query("SELECT * FROM friends", function (err, resp) {
        if (err) throw err;
        friend = [];
        var id;
        var name;
        var photo;
        var scores;
        for (var i = 0; i < resp.length; i++) {
            id = resp[i].id;
            name = resp[i].name;
            photo = resp[i].photo;
            scores = resp[i].scores;

            var friend = new Friend(id, name, photo, scores)
            friend.getArr();
            friend.calcScore();
            friends.push(friend)

        }




    })

}
getFriends();
// module.exports = friends;
module.exports = {
    friends,
    Friend,
    connection,
    getFriends
}