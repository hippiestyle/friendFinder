var friends = require("../data/friends");


module.exports = function(app){

    app.get("/data/friends", function(req, res){
    res.json(friends);
        console.log("ChECK")
});


app.post("/data/friends", function(req, res){


    var worstFriend = {
        name: "",
        photo: "",
        score: 0
    }
    //give req.body a name so i dont have to keep typing it out. 
    var z = req.body;
    console.log("req.body: ", z)
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

    res.json(worstFriend);


})

} 