//var express = require('express');
//var router = express.router();

console.log ("version: 1.01.0");


var array = {
    "1": {"name" : "Oskar",
        "votes" : 0,
        "id":1},
    "2": {"name" : "Jesper",
        "votes" : 0,
        "id":2}
}

console.log(array[1].votes);

function voteAPI(){     
    console.log(array[1].name);
    console.log(array[1].votes);
    
    console.log(array[2].name);
    console.log(array[2].votes);
}

function vote1(){
    var id = 1;

    array[id].votes++;

    console.log(array[1].votes);
}
function vote2(){
    var id = 2;

    array[id].votes++;
    
    console.log(array[2].votes);
}

