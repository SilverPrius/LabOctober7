////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers
// var a = 1
// var b = 2

// if ( a > b ){
//   console.log(a);
// }else{
//   console.log(b)
// }
/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

// let grade = 85
// if (grade >= 90){
//   console.log('A');
// }else if (grade >= 80){
//   console.log('B');
// }else if (grade >= 70){
//   console.log('C');
// }else if (grade >= 55){
//   console.log('D');
// }else{
//   console.log('F')
// }



//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
// let time = 1000
// if ( time >= 500 && time < 1200){
//   console.log("Good Afternoon");
// }else{
//   console.log("Hey there");
// }
////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
// let char = 'Sabrina'
// console.log(char.charAt(4));
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

//Unicode is an international encoding standard for use with different languages and scripts, by which each letter, digit, or symbol is assigned a unique numeric value that applies across different platforms and programs.
// let char= "Teddy"
// console.log(char.charCodeAt(3));
// console.log(String.fromCharCode(100));
// Using fromCharCode() - make it readable for us :). You'll see!

// Take your first and last name and concat()

// let a = 'Long'
// let b = 'Hoang'
// let c = a.concat(' ',b);
// console.log(c)

// Create a string and make it return true using startsWith()
// let color = 'blue'
// console.log(color.startsWith('b'));

// Now use any variable with endsWith() and return false
// let color = 'blue'
// console.log(color.endsWith('b'));

// Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, and smiled'
// console.log(ozgur.includes('Once'));

// // Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
// console.log(joshHadALittleLambOopsCow.indexOf('cow'));
// ////////////////////////////////////////////////////////////////
// // Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d == d)
// console.log(d != a)
// console.log(a < 15)
// console.log(a < b < c)
// console.log(c > b > a != d)


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
// const i = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0; i <= 10; i++){
//   console.log("Ken's room is spinning")
// }
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// const i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i= 0; i <= 20; i++){
//   console.log("Teo's Vision is Spinning")
// }
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// let i = 0 //Starting number
// while (i < 20){ //when to end the loop
// console.log('TeoSaysSorry')
// i++ //add 1 to i, until limit is reached
// }

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// // To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)

//   // Using (FOR IN LOOP), print the indexes of the array.
//   const lana = ['l', 'a', 'n', 'a']
  
//   // USE (FOR OF LOOP)!
//   const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  
//   // Look into forEach() loop, it accepts a callback aka a function inside a function. 
//   // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
//   const perscholas = ['Amira', 'Arely', 'Jonathan']

// ////////////////////////////////////////////////////////////////
// // Arrays:
// ///////////////////////////////////////////////////////////////

// // Look up the following: Make a note of what each one of these methods do
// // push()  The push() method adds one or more elements to the end of an array and returns the new length of the array.
// // pop()   The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// // unshift() The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// // shift() The shift() method removes the first item of an array.
// // concat() The concat function concatenates two or more strings and returns the resulting string.
// // splice() The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// // slice() The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// // sort()  The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
// // includes()  The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// // indexOf() The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// // length The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

// /* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ];
// shoppingList.push('Hendricks Gin');
// console.log(shoppingList)

// //3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
yoda.reverse();
console.log(yoda);

// //4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

// //5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];

// // ===== SPREAD OPERATOR ===== 

// // Create a variable and assign a value of a copied array using the spread operator

// // Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// ////////////////////////////////////////////////////////////////
// // Functions:
// ///////////////////////////////////////////////////////////////

// // Don't forget to CALL your functions

// //1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

// //2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// //3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

// //4. Write a function charCount that takes a string and returns the length of the string.

// //5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

