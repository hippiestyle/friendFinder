var express = require("express");
var friends = require("../data/friends.js");

var app = express(); 

module.exports = function(app){
    app.get("../data/friends.js", function(req, res){
    res.json(friends);
    
});
console.log(friends)

app.post("../data/friends.js", function(req, res){

    var worstFriend = {
        name: "",
        photo: "",
        score: 0
    }
    //give req.body a name so i dont have to keep typing it out. 
    var z = req.body;
    console.log(z)
    var inputName = z.name;
    var inputPhoto = z.photo; 
    var inputScore = parseInt(z.scores); 

    var diff = 0; 

    for (var i = 0; i < friends.length; i++) {

        for (var k = 0; i < friends[i].scores[k]; k++) {
            diff += Math.abs(parseInt(friends[i].scores[k] + parseInt(inputScore[k]))); 
            if(diff >= worstFriend.score) {
                worstFriend.name = friends[i].name;
                worstFriend.photo = friends[i].photo; 
                worstFriend.score = diff; 
            }
        }
    }
    friends.push(z);
        console.log("new" + z)
    res.json(worstFriend);
        console.log("worst" + worstFriend);

})
}