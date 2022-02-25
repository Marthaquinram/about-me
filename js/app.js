'use strict';

console.log('Hi');

alert('Welcome to my about me page! :) ');

let username = prompt('What is your name?');

alert('Hello ' + username + '!');
let score = 0;
let numberOfQuestions = 0;

console.log('Nice to meet you ' + username);

// // Question 1

function sportQuestion() {
  let doILikeSoccer = prompt('Do I like soccer? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;
  if ((doILikeSoccer === 'yes') || (doILikeSoccer === 'y')) {
    alert('Yes! You got it right! One of my favorite teams is from the English Premier League called Arsenal FC! ');
    score++;

    // console.log('Yes, who doesn\'t like soccer?! ');

  } else if ((doILikeSoccer === 'no') || (doILikeSoccer ==='n')) {

    console.log('Im a die hard fan!');

    alert('Jokes on you, I LOVE soccer, my brother, dad and I all played soccer together!!');

  } else {
    console.log('Yes, who doesn\'t like soccer?!');

  }
}


// Question 2

function favouriteAnimal() {
  let doILikeAlpacas = prompt('Do I like alpacas? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;

  if ((doILikeAlpacas === 'yes') || (doILikeAlpacas === 'y')) {
    alert('Is it that obvious? They\'re one of my favorite animals, If I ever get to own one, I would name it Chewpaca! Get it? ');
    score++;

    // console.log('Alpacas are so adorable! ');

  } else if ((doILikeAlpacas === 'no') || (doILikeAlpacas === 'n')) {

    console.log('Alpacas are so fluffy, Im gonna die!!');

    alert('Sorry to break it to you BUT wrong, I love alpacas!');

  }
}



// Question 3

function danceQuestion(){
  let doILikeToDance = prompt('Do I like to dance? Hint: Yes or No').toLowerCase();
  numberOfQuestions++;

  if ((doILikeToDance === 'yes') || (doILikeToDance === 'y')) {
    alert('YOU BET I LIKE TO DANCE! Dance is one of my biggest passion, I\'ve been dancing since I was 13 years old! ');
    score++;
    // console.log('Dancing is also a great workout! ');

  } else if ((doILikeToDance === 'no') || (doILikeToDance ==='n')) {

    console.log('BATTLE ME!');

    alert('Dancing is a big part of my life! BATTLE ME!!');

  }
}



// Question 4

function workOut(){
  let doILikeWorkingOut = prompt('Do I enjoy working out? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;

  if ((doILikeWorkingOut === 'yes') || (doILikeWorkingOut ==='y')) {
    alert('Even though I dance and play soccer, I am NOT a fan of traditional gyms and working out! ');
    score++;
    // console.log('I dont like working out in gyms! ');

  } else if ((doILikeWorkingOut === 'no') || (doILikeWorkingOut ==='n')) {

    console.log('No gym for me!');

    alert('No is correct, I like the work out I get in dance and soccer but Im not a fan of going to a gym and lifting weights!!');

  }
}



// Question 5

function makeupQuestion(){
  let doILikeMakeup = prompt('Do I like doing makeup? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;

  if ((doILikeMakeup === 'yes') || (doILikeMakeup === 'y')) {
    alert('Another obvious one right? I was a makeup artist for a couple of years and I enjoyed it while it lasted!');
    score++;

    // console.log('I don\'t wear makeup that much anymore!');

  } else if ((doILikeMakeup === 'no') || (doILikeMakeup === 'n')) {
    console.log('I enjoy the natural look these days.');

    alert('Even though I don\'t do makeup that often, I still enjoy it.');
  }
}


// Question 6

function howManyTattoos(){
  let myTattoos = 4;
  let attempts = 4;
  numberOfQuestions++;
  for (let i = 0; i < attempts; i++) {
    // console.log(`Hello from loop ${i}`);
    let tattoosGuess = prompt('How many tattoos do I have? ');
    tattoosGuess = parseInt(tattoosGuess);
    console.log(`You guessed ${tattoosGuess}`);
    if (tattoosGuess === myTattoos) {
      // console.log('You are correct! WOOH!');
      alert('Woohoo! You guessed correct!');
      score++;
      break;
    } else if(tattoosGuess > myTattoos){
      // console.log('Too high my friend!');
      alert('You\'re too high, my friend!');
    } else if(tattoosGuess < myTattoos){
      // console.log('Too low, oh nooo!');
      alert('Too low, oh noooo!');

    }
  } console.log('The correct answer is 4');
}


//Question 7

function soccerTeam(){
  let arsenalPlayers = ['bellerin', 'saka', 'smithrowe', 'odegarrd'];
  //this is my array, inside of the array has index's starting with bellerin at 0 and saka at 1, smithrowe 2, odegarrd is 3, totaling 4.
  let stopsign = false;
  //we dont have a stopsign
  let guessesRemaining = 6;
  //user has 6 attempts
  let guessCorrectly = false;
  //the user is not correct yet, they start out wrong.
  numberOfQuestions++;
  //while the guesses remain is 6 its greater an 0 AND while we are not at a stopsign, run the loop
  while (guessesRemaining > 0 && stopsign === false){
    let guessPlayer = prompt('Who is my favorite player?').toLowerCase();
    //console.log(guessPlayer);
    //this is asking the user the question
    for(let j = 0; j < arsenalPlayers.length; j++){
      //let player = arsenalPlayers[j];
      //console.log(player);
      if (guessPlayer === arsenalPlayers[j]) {
        //if the users input is equal to my first j player then console.log('Goaaaal, youre correct!');
        alert('GOOOOOOOOAL! You\'re right! He is one of my favorite players!');
        score++;
        //adding up the score
        stopsign = true;
        //this stops the while loop. because the user answered correctly.
        guessCorrectly = true;
        //this is if the user answers correctly then this is true.

      }
    }
    guessesRemaining--;
    //this decreases the amount of attempts each time the user guesses incorrectly, and console.logs how many attempts they have left
    if (guessCorrectly === false){
      //if the user answers incorrectly then itll alert them that theyre wrong.
      alert('Thats incorrect!');
    }
    console.log(`You have ${guessesRemaining}`);
    // this displays in the console.log how many guess they decreased.
    if (guessesRemaining === 0 && guessCorrectly === false){
      //if the user is out of guess, AND theyve guessed incorrectly then run message below.
      alert(`You're out of guesses! The correct answers were  ${arsenalPlayers}`);

    }
  }
}
sportQuestion();
favouriteAnimal();
danceQuestion();
workOut();
makeupQuestion();
howManyTattoos();
soccerTeam();
alert(`You got ${score} out of ${numberOfQuestions}`);
//this is telling the user their score out of how many questions there are.
