//var express = require('express');
//var router = express.router();

console.log ("version: 1.01.0");


var Nominated = [
    {"name" : "Oskar",
        "votes" : 0,
        "id":1},
    {"name" : "Jesper",
        "votes" : 0,
        "id":2},
    {"name" : "Max",
        "votes" : 0,
        "id":3},
    {"name" : "Viktor",
        "votes" : 0,
        "id":4},
    {"name" : "Någon",
        "votes" : 0,
        "id":5},
    {"name" : "Någon1",
        "votes" : 0,
        "id":6},
    {"name" : "Någon2",
        "votes" : 0,
        "id":7},
    {"name" : "Någon3",
        "votes" : 0,
        "id":8}
];

function seeVotes(){
    console.log("hej");
    var i;
    for (i = 0; i < Nominated.length; i++){
    console.log(Nominated[i].name);
    console.log(Nominated[i].votes);
    }
}

function voteAPI2(){
    switch(true) {
        case document.getElementById("rd1").checked:
            console.log("Radio 1");
            Nominated[0].votes++;
          break;
        case document.getElementById("rd2").checked:
            console.log("Radio 2");
            Nominated[1].votes++;
          break;
        case document.getElementById("rd3").checked:
            console.log("Radio 3");
            Nominated[2].votes++;
          break;
        case document.getElementById("rd4").checked:
            console.log("Radio 4");
            Nominated[3].votes++;
          break;
        case document.getElementById("rd5").checked:
            console.log("Radio 5");
            Nominated[4].votes++;
          break;
        case document.getElementById("rd6").checked:
            console.log("Radio 6");
            Nominated[5].votes++;
          break;
        case document.getElementById("rd7").checked:
            console.log("Radio 7");
            Nominated[6].votes++;
          break;
        case document.getElementById("rd8").checked:
            console.log("Radio 8");
            Nominated[7].votes++;
          break;
        default:
            console.log("Nothing selected");
      }
}

function voteAPI(){
  console.log("you selected " + buttonId);
  Nominated[id].votes++;
}