var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

//code here

function last() {
  alert(threeItems[threeItems.length - 1]);
}
last();

console.log(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function evens() {
  for (i = 0; i < evenArray.length; i++) {
    if (evenArray[i] % 2 !== 0)
      evenArray.splice(i, 1);
  }
}
evens();
console.log(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

//code here

function random() {
  var result = false;
  var randomNumber = Math.floor(Math.random() * (30 - 0) + 0);
  for (var i = 0; i < randomArray.length; i++) {
    if (randomNumber === randomArray[i]){
      result = true;
    }
  }
  alert(result);
  console.log(randomNumber);
}
random();
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

//code here

var second = first.slice();
second.push(6,7);




alert(first); //[1,2,3,4,5];
alert(second); //[1,2,3,4,5,6,7];

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

//code here

var sen = sentence.split(" ");

console.log(sen);

var longest = "";

for (i = 0; i < sen.length; i++) {
  if (sen[i].length > longest.length)
    longest = sen[i];
}
console.log(longest);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

//code here

var sen = myPoem.split(" ");
var result = [];
function capitalize() {
  for (i = 0; i < sen.length; i++) {
    var cap = sen[i].charAt(0).toUpperCase() + sen.slice(1);
    result.push(cap);
  }
}
capitalize();
console.log(sen);
console.log(result);

//NOT DONE YET!!!

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
