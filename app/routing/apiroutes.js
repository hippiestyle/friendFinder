var friends = require("../data/friends");


module.exports = function(app){

    app.get("/data/friends", function(req, res){
    res.json(friends);
});


app.post("/data/friends", function(req, res){


    var worstFriend = {
        name: "",
        photo: "",
        score: 0
    }
    //give req.body a name so i dont have to keep typing it out. 
    var z = req.body;
    var inputScore = z.scores; 

    var diff = 0; 

    for (var i = 0; i < friends.length; i++) {

        for (var k = 0; i < friends[i].scores[k]; k++) {

            var ik = parseInt(inputScore[k], 10); 
            var fk = parseInt(friends[i].scores[k], 10)

            diff += (fk + ik); 

            console.log("diff:" +  diff)
            if(diff <= worstFriend.score) {
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