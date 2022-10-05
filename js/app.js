'use strict';

let score = 0;
score++;

console.log('Hello');

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will print in the console');

}
let trueValue = true;
let falseValue = false;

if (trueValue || falseValue) {
  console.log('it evaluated to true');
}


let userName = prompt('What is your name?');
console.log(userName);
alert('Hello ' + userName + '!');

let likesCooking = prompt('Do I like to cook?');
console.log(likesCooking);

let cookingResposeLower = likesCooking.toLowerCase();

if (cookingResposeLower === 'yes' || cookingResposeLower === 'y') {
  console.log('Yes, I LOOOOVE cooking! It is my love language!');
  alert('Yes, I LOOOOVE cooking! It is my love language!');
  score++;
}
else if (cookingResposeLower === 'no' || cookingResposeLower === 'n') {
  console.log('That is incorrect');
  alert('No that is incorrect.');
}

let likesCompeting = prompt('Did I compete in Archery?');
console.log(likesCompeting);

let likesArchery = likesCompeting.toLowerCase();

if (likesArchery === 'yes' || likesArchery === 'y') {
  //console.log('Yes, I have been shooting a bow since I was 5!');
  alert('Yes, I have been shooting a bow since I was 5!');
  score++;
}
else if (likesArchery === 'no' || likesArchery === 'n') {
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}


let likesStates = prompt('Did I grow up in multiple states?');
console.log(likesStates);

let likesMoving = likesStates.toLowerCase();

if (likesMoving === 'yes' || likesMoving === 'y') {
  //console.log('Yes, I would live 6 months in Seattle then go 6 months to Montana');
  alert('Yes, I would live 6 months in Seattle then go 6 months to Montana');
  score++;
}
else if (likesMoving === 'no' || likesMoving === 'n') {
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}

let likesDesign = prompt('Am I designing a luggage line?');
console.log(likesDesign);

let likesLuggage = likesDesign.toLowerCase();

if (likesLuggage === 'yes' || likesLuggage === 'y') {
  //console.log('Yes, I am currently working on getting a prototype.');
  alert('Yes, I am');
  score++;
}
else if (likesLuggage === 'no' || likesLuggage === 'n') {
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}

let likesFamily = prompt('Am I the second generation born in the US from my family?');
console.log(likesFamily);

let likesHeritage = likesFamily.toLowerCase();

if (likesHeritage === 'yes' || likesHeritage === 'y') {
  //console.log('Yes, My Oma is from holland on my moms side. My Nonna is from Italy on my fathers side.');
  alert('Yes, I am');
  score++;
}
else if (likesHeritage === 'no' || likesHeritage === 'n') {
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}

let myFavColors = ['blue', 'gold', 'black', 'red'];

let attemptsRemaining = 7;

while (attemptsRemaining) {
  let userGuess = prompt('What\'s my favorite color?');
  attemptsRemaining--;
  for (let i = 0; i < myFavColors.length; i++) {
    if (userGuess === myFavColors[i]) {
      alert('You are correct. The correct possible answers are blue, gold, black and red.');
      score++;
      attemptsRemaining = 0;
    }
  }
  if (attemptsRemaining) {
    alert(`You have ${attemptsRemaining} attempts remaining.`);
  }
}
console.log('score ', score);

let myNumber = '8';

let numberAttempts = 4;

let guessCorrect = false;

while (numberAttempts) {
  let numberGuess = prompt('What\'s my favorite number? 1-10');
  numberAttempts--;

  if (numberGuess < myNumber) {
    alert('Too low. Try Again');
  }
  else if (numberGuess > myNumber) {
    alert('Too high. Try again.');

  }
  else if (numberGuess === myNumber) {
    alert('You are correct!');
    score++;
    numberAttempts = 0;
    guessCorrect = true;
  }
  if (numberAttempts === 0 && !guessCorrect) {
    alert('The correct answer was ' + myNumber + '!');
  }
}
alert('You scored ' + score);
