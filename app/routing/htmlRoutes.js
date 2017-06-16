// Include GET route to /survey which will display the survey page
// default USE route that leads to home.html which displays home page 

var path = require('path');
var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;