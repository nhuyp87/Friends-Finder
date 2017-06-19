// include GET route with url /api/friends to display JSON of all possible friends
// include POST routes /api/friends to handle incoming survey results and compatibility logic 

var friends = require('../data/friends.js');
var path = require('path');
var express = require('express');
var router = express.Router();

router.post("/api/new/friend", function (req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);
    console.log('New friend match');

    res.json(newFriend);
});


router.get('/api/friends', function (req, res) {
    var data = friends.get();
    console.log(data);
    return res.json(data);
});


module.exports = router;
