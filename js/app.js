'use strict';

console.log('Hi');

alert('Welcome to my about me page! :) ');

let username = prompt('What is your name?');

alert('Hello ' + username + '!');
let score = 0;

console.log('Nice to meet you ' + username);

// // Question 1

function sportQuestion() {
  let doILikeSoccer = prompt('Do I like soccer? Hint: Yes or No ').toLowerCase();

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
sportQuestion();

// Question 2

function favouriteAnimal() {
  let doILikeAlpacas = prompt('Do I like alpacas? Hint: Yes or No ').toLowerCase();

  if ((doILikeAlpacas === 'yes') || (doILikeAlpacas === 'y')) {
    alert('Is it that obvious? They\'re one of my favorite animals, If I ever get to own one, I would name it Chewpaca! Get it? ');
    score++;

    // console.log('Alpacas are so adorable! ');

  } else if ((doILikeAlpacas === 'no') || (doILikeAlpacas === 'n')) {

    console.log('Alpacas are so fluffy, Im gonna die!!');

    alert('Sorry to break it to you BUT wrong, I love alpacas!');

  }
}
favouriteAnimal();


// Question 3

function danceQuestion(){
  let doILikeToDance = prompt('Do I like to dance? Hint: Yes or No').toLowerCase();

  if ((doILikeToDance === 'yes') || (doILikeToDance === 'y')) {
    alert('YOU BET I LIKE TO DANCE! Dance is one of my biggest passion, I\'ve been dancing since I was 13 years old! ');
    score++;
    // console.log('Dancing is also a great workout! ');

  } else if ((doILikeToDance === 'no') || (doILikeToDance ==='n')) {

    console.log('BATTLE ME!');

    alert('Dancing is a big part of my life! BATTLE ME!!');

  }
}
danceQuestion();


// Question 4

function workOut(){
  let doILikeWorkingOut = prompt('Do I enjoy working out? Hint: Yes or No ').toLowerCase();

  if ((doILikeWorkingOut === 'yes') || (doILikeWorkingOut ==='y')) {
    alert('Even though I dance and play soccer, I am NOT a fan of traditional gyms and working out! ');
    score++;
    // console.log('I dont like working out in gyms! ');

  } else if ((doILikeWorkingOut === 'no') || (doILikeWorkingOut ==='n')) {

    console.log('No gym for me!');

    alert('No is correct, I like the work out I get in dance and soccer but Im not a fan of going to a gym and lifting weights!!');

  }
}
workOut();


// Question 5

function makeupQuestion(){
  let doILikeMakeup = prompt('Do I like doing makeup? Hint: Yes or No ').toLowerCase();

  if ((doILikeMakeup === 'yes') || (doILikeMakeup === 'y')) {
    alert('Another obvious one right? I was a makeup artist for a couple of years and I enjoyed it while it lasted!');
    score++;

    // console.log('I don\'t wear makeup that much anymore!');

  } else if ((doILikeMakeup === 'no') || (doILikeMakeup === 'n')) {
    console.log('I enjoy the natural look these days.');

    alert('Even though I don\'t do makeup that often, I still enjoy it.');
  }
}
makeupQuestion();

// Question 6

function howManyTattoos(){
  let myTattoos = 4;
  let attempts = 4;
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
howManyTattoos();

//Question 7

function soccerTeam(){
  let arsenalPlayers = ['bellerin', 'saka', 'smithrowe', 'odegarrd'];
  let lock = 1;
  let guessesRemaining = 6;
  // let victory = false;
  while (guessesRemaining > 0 && lock === 1){
    let guessPlayer = prompt('Who is my favorite player?').toLowerCase();
    console.log(guessPlayer);
    for(let j = 0; j < arsenalPlayers.length; j++){
      //let player = arsenalPlayers[j];
      //console.log(player);
      if (guessPlayer === arsenalPlayers[j]) {
        //console.log('Goaaaal, youre correct!');
        alert(`GOOOOOOOOAL! You're right! He is one of my favorite players!`);
        // victory = true;
        guessesRemaining = 0;
        score++;
        lock = 0;

      }
    }
    guessesRemaining--;
    console.log(`You have ${guessesRemaining}`);
    // this is referring to guesses remaining
    if (guessesRemaining === 0){
      alert(`You're out of guesses! The correct answers were  ${arsenalPlayers}`);

    }
  }
}
soccerTeam();
alert('You got ' + score + ' out of 7! ');
