console.log ("version: 1.01.0");
var Nominated;

fetch('https://nobeldata.herokuapp.com/votes')
         .then(response => response.json())
         .then(data => Nominated = data)
         .catch(err => {
          // Catch and display errors
          console.log("Now you done it");
     });
function voteYeet(){
  fetch('https://nobeldata.herokuapp.com/vote', {
        method: 'PUT',
        body: "id = 0"
      }).then(response => response.json())
      .catch(err => {
        throw err;
  });
}

var NominatedNotInUse = [
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

function voteAPI(){
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

function date(){
  var date = new Date();
  
  var months = ["January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

  console.log(date.getFullYear());
  console.log(date.getMonth()+1);
  console.log(months[date.getMonth()]);
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  lastTimeTooVote();
}

function lastTimeTooVote(){
  var date = new Date();
  
  const lastMonthTooVote = 11;
  const lastDayTooVote = 10;
  const lastHourTooVote = 10;
  const lastMinTooVote = 10;

  if (date.getMonth() + 1 >= lastMonthTooVote){
    if (date.getDate() >= lastDayTooVote){
      if (date.getHours() >= lastHourTooVote){
        if (date.getMinutes() > lastMinTooVote){
          console.log("Voteing time have expired");
          disableVote();
        }else{
          canVote();
        }
      }else{
        canVote();
      }
    }else{
      canVote();
    }
  }
  else{
    canVote();
  }
}

function canVote(){
  console.log("You can still vote");
}

function disableVote(){
  const button = document.getElementById('button');
  button.disabled = true;
}

function getVoteResult(){
  const sort_by = (field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }
  Nominated.sort(sort_by('votes', true, parseInt));
  console.log(Nominated[0].name + " " + Nominated[0].votes);
  Nominated.sort(sort_by('id', false, parseInt));
}