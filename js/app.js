'use strict';



alert('Welcome to my about me page! :) ');

let username = prompt('What is your name?');

alert('Hello ' + username + '!');
let score = 0;
let numberOfQuestions = 0;





function sportQuestion() {
  let doILikeSoccer = prompt('Do I like soccer? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;
  if ((doILikeSoccer === 'yes') || (doILikeSoccer === 'y')) {
    alert('Yes! You got it right! One of my favorite teams is from the English Premier League called Arsenal FC! ');
    score++;
  }
  else if ((doILikeSoccer === 'no') || (doILikeSoccer ==='n')) {
    alert('Jokes on you, I LOVE soccer, my brother, dad and I all played soccer together!!');
  }

}




function favouriteAnimal() {
  let doILikeAlpacas = prompt('Do I like alpacas? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;

  if ((doILikeAlpacas === 'yes') || (doILikeAlpacas === 'y')) {
    alert('Is it that obvious? They\'re one of my favorite animals, If I ever get to own one, I would name it Chewpaca! Get it? ');
    score++;



  } else if ((doILikeAlpacas === 'no') || (doILikeAlpacas === 'n')) {



    alert('Sorry to break it to you BUT wrong, I love alpacas!');

  }
}


function danceQuestion(){
  let doILikeToDance = prompt('Do I like to dance? Hint: Yes or No').toLowerCase();
  numberOfQuestions++;

  if ((doILikeToDance === 'yes') || (doILikeToDance === 'y')) {
    alert('YOU BET I LIKE TO DANCE! Dance is one of my biggest passion, I\'ve been dancing since I was 13 years old! ');
    score++;


  } else if ((doILikeToDance === 'no') || (doILikeToDance ==='n')) {



    alert('Dancing is a big part of my life! BATTLE ME!!');

  }
}



function workOut(){

  let doILikeWorkingOut = prompt('Do I enjoy working out? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;

  if ((doILikeWorkingOut === 'yes') || (doILikeWorkingOut ==='y')) {
    alert('Even though I dance and play soccer, I am NOT a fan of traditional gyms and working out! ');


  } else if ((doILikeWorkingOut === 'no') || (doILikeWorkingOut ==='n')) {
    score++;


    alert('No is correct, I like the work out I get in dance and soccer but Im not a fan of going to a gym and lifting weights!!');

  }
}





function makeupQuestion(){
  let doILikeMakeup = prompt('Do I like doing makeup? Hint: Yes or No ').toLowerCase();
  numberOfQuestions++;

  if ((doILikeMakeup === 'yes') || (doILikeMakeup === 'y')) {
    alert('Another obvious one right? I was a makeup artist for a couple of years and I enjoyed it while it lasted!');

  } else if ((doILikeMakeup === 'no') || (doILikeMakeup === 'n')) {

    score++;
    alert('Even though I don\'t do makeup that often, I still enjoy it.');
  }
}




function howManyTattoos(){
  let myTattoos = 4;
  let attempts = 4;
  numberOfQuestions++;
  for (let i = 0; i < attempts; i++) {

    let tattoosGuess = prompt('How many tattoos do I have? ');
    tattoosGuess = parseInt(tattoosGuess);

    if (tattoosGuess === myTattoos) {

      alert('Woohoo! You guessed correct!');
      score++;
      break;
    } else if(tattoosGuess > myTattoos){

      alert('You\'re too high, my friend!');
    } else if(tattoosGuess < myTattoos){

      alert('Too low, oh noooo!');

    }
  }
}




function soccerTeam(){
  let arsenalPlayers = ['bellerin', 'saka', 'smithrowe', 'odegarrd'];

  let stopsign = false;

  let guessesRemaining = 6;

  let guessCorrectly = false;

  numberOfQuestions++;

  while (guessesRemaining > 0 && stopsign === false){

    let guessPlayer = prompt('Who is my favorite player?').toLowerCase();

    for(let j = 0; j < arsenalPlayers.length; j++){

      if (guessPlayer === arsenalPlayers[j]) {

        alert('GOOOOOOOOAL! You\'re right! He is one of my favorite players!');

        score++;

        stopsign = true;

        guessCorrectly = true;


      }
    }
    guessesRemaining--;

    if (guessCorrectly === false){

      alert('Thats incorrect!');
    }


    if (guessesRemaining === 0 && guessCorrectly === false){

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
