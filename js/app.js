'use strict';

console.log('Hi');

alert('Welcome to my About Me page ! ');

let username = prompt('What is your name?');

alert('Hello ' + username + '!');

console.log('Nice to meet you ' + username);


let doILikeSoccer = prompt('Do I like soccer? Hint: Yes or No ').toLowerCase();

if ((doILikeSoccer === 'yes') || (doILikeSoccer === 'y')) {
  alert('Yes! You got it right! One of my favorite teams is from the English Premier League called Arsenal FC! ');
  
  console.log('Yes, who doesn\'t like soccer?! ');
 
} else if ((doILikeSoccer === 'no') || (doILikeSoccer ==='n')) {

  console.log('Im a die hard fan!');

  alert('Jokes on you, I LOVE soccer, my brother, dad and I all played soccer together!!');

} else {
  console.log('Yes, who doesn\'t like soccer?!'); 

}


let doILikeAlpacas = prompt('Do I like Alpacas? Hint: Yes or No ').toLowerCase();

if ((doILikeAlpacas === 'yes') || (doILikeAlpacas === 'y')) {
  alert('Is it that obvious? They\'re one of my favorite animals, If I ever get to own one, I would name it Chewpaca! Get it? ');
  
  console.log('Alpacas are so adorable! ');
 
} else if ((doILikeAlpacas === 'no') || (doILikeAlpacas === 'n')) {

  console.log('Alpacas are so fluffy, Im gonna die!!');

  alert('Sorry to break it to you BUT wrong, I love alpacas!');

}


let doILikeToDance = prompt('Do I like to dance? Hint: Yes or No').toLowerCase();

if ((doILikeToDance === 'yes') || (doILikeToDance === 'y')) {
  alert('YOU BET I LIKE TO DANCE! Dance is one of my biggest passion, I\'ve been dancing since I was 13 years old! ');
  
  console.log('Dancing is also a great workout! ');
 
} else if ((doILikeToDance === 'no') || (doILikeToDance ==='n')) {

  console.log('BATTLE ME!');

  alert('Dancing is a big part of my life!');

}



let doILikeWorkingOut = prompt('Do I enjoy working out? Hint: Yes or No ').toLowerCase();

if ((doILikeWorkingOut === 'yes') || (doILikeWorkingOut ==='y')) {
  alert('Even though I dance and play soccer, I am NOT a fan of traditional gyms and working out! ');
  
  console.log('I dont like working out in gyms! ');
 
} else if ((doILikeWorkingOut === 'no') || (doILikeWorkingOut ==='n')) {

  console.log('No gym for me!');

  alert('No is correct, I like the work out I get in dance and soccer but Im not a fan of going to a gym and lifting weights!!');

}

let doILikeMakeup = prompt('Do I like doing makeup? Hint: Yes or No ').toLowerCase();

if ((doILikeMakeup === 'yes') || (doILikeMakeup === 'y')) {
  alert('Another obvious one right? I was a makeup artist for a couple of years and I enjoyed it while it lasted!');

  console.log('I don\'t wear makeup that much anymore!');

} else if ((doILikeMakeup === 'no') || (doILikeMakeup === 'n')) {
  console.log('I enjoy the natural look these days.');
  
  alert('Even though I don\'t do makeup that often, I still enjoy it.');
}
