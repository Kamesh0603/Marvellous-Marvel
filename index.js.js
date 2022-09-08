var readlineSync = require('readline-sync');
var score = 0;
var qa = [
  q1 = {
    q1: 'Do u know who is Thor? (Yes/No) ',
    a1: 'yes'
  },
  q2 = {
    q1: 'What is the name of his kingdom? ',
    a1: 'asgard'
  },
  q3 = {
    q1: 'What is the name of his brother? ',
    a1: 'loki'
  },
  q4 = {
    q1: 'what is the name of is father? ',
    a1: 'odin',
  },
  q5 = {
    q1: 'What is the name of his sister? ',
    a1: 'hela'
  },
];
var highscores = [
  highscore = {
    name: "Heimdall",
    score: 5
  },
  secondhighscore = {
    name: "Frigga",
    score: 4
  },
]
qa.forEach(question => {
  var useranswer = readlineSync.question(question.q1);
  if (useranswer.toLowerCase() == question.a1) {
    score++;
    console.log("Right answer");
    console.log(`your score is ${score}`);
    console.log("----------------");
  }
  else {
    console.log("Wrong answer");
    console.log(`your score is ${score}`);
    console.log("----------------");
  };
});

console.log(`your score is ${score}. check out the highscores:`)
highscores.forEach(hs => { console.log(hs.name + " " + hs.score) });