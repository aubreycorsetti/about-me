'use strict';

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
}
else if (cookingResposeLower === 'no' || cookingResposeLower === 'n'){
  console.log('That is incorrect');
  alert('No that is incorrect.');
}

let likesCompeting = prompt('Did I compete in Archery?');
console.log(likesCompeting);

let likesArchery = likesCompeting.toLowerCase();

if (likesArchery === 'yes' || likesArchery === 'y') {
  //console.log('Yes, I have been shooting a bow since I was 5!');
  alert('Yes, I have been shooting a bow since I was 5!');
}
else if (likesArchery === 'no' || likesArchery === 'n'){
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}


let likesStates = prompt('Did I grow up in multiple states?');
console.log(likesStates);

let likesMoving = likesStates.toLowerCase();

if (likesMoving === 'yes' || likesMoving === 'y') {
  //console.log('Yes, I would live 6 months in Seattle then go 6 months to Montana');
  alert('Yes, I would live 6 months in Seattle then go 6 months to Montana');
}
else if (likesMoving === 'no' || likesMoving === 'n'){
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}

let likesDesign = prompt('Am I designing a luggage line?');
console.log(likesDesign);

let likesLuggage = likesDesign.toLowerCase();

if (likesLuggage === 'yes' || likesLuggage === 'y') {
  //console.log('Yes, I am currently working on getting a prototype.');
  alert('Yes, I am');
}
else if (likesLuggage === 'no' || likesLuggage === 'n'){
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}

let likesFamily = prompt('Am I the second generation born in the US from my family?');
console.log(likesFamily);

let likesHeritage = likesFamily.toLowerCase();

if (likesHeritage === 'yes' || likesHeritage === 'y') {
  //console.log('Yes, My Oma is from holland on my moms side. My Nonna is from Italy on my fathers side.');
  alert('Yes, I am');
}
else if (likesHeritage === 'no' || likesHeritage === 'n'){
  //console.log('That is incorrect');
  alert('No that is incorrect.');
}
