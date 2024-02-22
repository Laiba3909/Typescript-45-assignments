"use strict";
//Task 1:Install Node.js, TypeScript and VS Code on your computer.//
//Done//
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task 2Personal Message: Store a person's name in a variable, and print a message to that person. Your message should be simple, such as, "Hello Eric, would you like to learn some Python today?"//
var personName = "Javeria,";
console.log("hellow ".concat(personName, "would you like to learn with me python?"));
console.log("\n");
//Task 3Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.//
var personName = "Laiba Noman";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("\n");
//Task4:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation//
// TypeScript Code
var quote = ("“Expect the best, prepare for the worst.”");
var author = ("Quaid e Azam:");
var variables = ("Once said,");
console.log(" ".concat(author, variables, quote));
console.log("\n");
//Task 5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person's name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.//
var message = ("“Expect the best, prepare for the worst.”");
var famous_person = ("Quaid e Azam:");
var variables = ("Once said,");
console.log(" ".concat(famous_person, variables, message));
console.log("\n");
//Task 6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.//
var personName = ("\t\n Laiba Noman \t\n");
console.log("stripping:", personName.trim());
console.log("\n");
//Task 7 and 8:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.//
console.log(4 + 4);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2);
console.log("\n");
//Task no 9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = ("2");
var message = ("i am reveal my favourite number:");
console.log(" ".concat(message, favoriteNumber));
console.log("\n");
//Task no 10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log(4 + 4);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2);
var Comments = ("This is my task 7 where i am add,sub,multiply,and div with the help console.log");
console.log(" ".concat(Comments));
var variable = ("2");
var message = ("Reveal my favourite number:");
console.log(" ".concat(message, variable));
var Comments = ("This is task 8 here i write a message of revealing my favourite number");
console.log(" ".concat(Comments));
console.log("\n");
//Task no 11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Ayesha", "Sana", "Sonia", "Inshaal"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("\n");
//Task no 12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name//
var names = [" ayesha", " sana", " sonia", " inshaal"];
var message = (" How are you ");
console.log(" ".concat(message, names[0]));
console.log(" ".concat(message, names[1]));
console.log(" ".concat(message, names[2]));
console.log(" ".concat(message, names[3]));
console.log("\n");
//Task no 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”//
var transportation = ["Honda car", "Mercedes car", " BMW bike"];
var message = ("“I would like to own a ");
console.log(" ".concat(message, transportation[0], ". ”"));
console.log(" ".concat(message, transportation[1], ". ”"));
console.log(" ".concat(message, transportation[2], ". ”"));
console.log("\n");
//Task no14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Nani,", "Alishba api,", "Sonia,"];
var message = ("My dear ");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[2], "I would like to invite you to dinner at home."));
console.log("\n");
//Task no 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestList = ["Nani,", "Alishba api,", "Sonia,", "Saima mami,"];
var message = ("My dear ");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[2], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("Sorry, ".concat(guestList[2], "you cannot attend the dinner."));
console.log("\n");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log("\n");
//Task 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Nani,", "Alishba api,", "Sonia,", "Saima mami,"];
var message = ("My dear ");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[2], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("Sorry, ".concat(guestList[2], "you cannot attend the dinner."));
console.log("\n");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("We got a bigger table. ");
console.log("\n");
var insertnewGuest = ("Alia");
var insertinmiddlenewGuest = ("Sania");
var appendnewGuest = ("fauzia");
console.log(" ".concat(message, insertnewGuest), "I would like to invite you to dinner at home");
console.log(" ".concat(message, guestList[0]), "I would like to invite you to dinner at home");
console.log(" ".concat(message, insertinmiddlenewGuest), "I would like to invite you to dinner at home");
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, appendnewGuest), "I would like to invite you to dinner at home");
console.log("\n");
//Task 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Nani,", "Alishba api,", "Sonia,", "Saima mami,"];
var message = ("My dear ");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[2], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("Sorry, ".concat(guestList[2], "you cannot attend the dinner."));
console.log("\n");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("We got a bigger table. ");
console.log("\n");
var insertnewGuest = ("Alia");
var insertinmiddlenewGuest = ("Sania");
var appendnewGuest = ("fauzia");
console.log(" ".concat(message, insertnewGuest), "I would like to invite you to dinner at home");
console.log(" ".concat(message, guestList[0]), "I would like to invite you to dinner at home");
console.log(" ".concat(message, insertinmiddlenewGuest), "I would like to invite you to dinner at home");
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, appendnewGuest), "I would like to invite you to dinner at home");
console.log("\n");
console.log("Sorry, we can only invite two people to dinner.");
console.log("\n");
console.log("Sorry, ".concat(insertnewGuest), "you cannot be invited at dinner");
console.log("Sorry, ".concat(appendnewGuest), "you cannot be invited at dinner");
console.log("Sorry, ".concat(insertinmiddlenewGuest), "you cannot be invited at dinner");
console.log("Sorry, ".concat(guestList[3]), "you cannot be invited at dinner");
console.log("\n");
console.log("My dear, ".concat(guestList[0]), "you are invted at dinner");
console.log("My dear, ".concat(guestList[1]), "you are invted at dinner");
console.log("\n");
delete (guestList[0]);
delete (guestList[1]);
console.log("\n");
console.log(guestList[0]);
console.log(guestList[1]);
//Task 18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var visitplaces = ['Makkah', 'Madinah', 'Paris', 'Pakistan tour', 'Maldives', 'America', 'IceLand,'];
//• Print your array in its original order.
console.log("Original Order:", [visitplaces]);
//• Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order", __spreadArray([], visitplaces, true).sort());
//• Show that your array is still in its original order by printing it
console.log("Original Order:", [visitplaces]);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetical reversed Order", __spreadArray([], visitplaces, true).sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Original Order:", [visitplaces]);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed Order", __spreadArray([], visitplaces, true).reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
visitplaces.reverse();
console.log("Reversed order: ", visitplaces);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted Order", __spreadArray([], visitplaces, true).sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sorted reversed Order", __spreadArray([], visitplaces, true).sort().reverse());
console.log("\n");
//Task 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var dinnerguest = ['Nani,Alishba api'];
console.log("2 guest: ".concat(dinnerguest[0]), "are invited to my dinner party");
console.log("\n");
//Task 20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items
var languagesnames = ["urdu", "English", "French", "Hindi"];
console.log("Languages Names");
console.log(languagesnames);
console.log("\n");
//Task no21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
var person = { name: "Mehak", fname: "Noman", age: 18 };
console.log(person);
console.log("\n");
//Task no:22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//console.log(day{3})
console.log(day[3]);
//Task no 23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
var Mobile = 'samsung';
console.log("is Mobile == 'samsung'? I predict True.");
console.log(Mobile == 'samsung');
console.log("\n");
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var Laptop = 'Hp';
console.log("Laptop == 'Hp'? I predict true.");
console.log(Laptop == 'Hp');
console.log("\n");
var subject = 'Math';
console.log("subject == Math? I predict true.");
console.log(subject == 'Math');
console.log("\n");
var Mango = 'fruit';
console.log("Mango == fruit? I predict true");
console.log(Mango == 'fruit');
console.log("\n");
var Strawberry = 'fruit';
console.log("Strawberry == fruit? I predict true");
console.log(Strawberry == 'fruit');
console.log("\n");
var Cherry = 'fruit';
console.log("Cherry == fruit? I predict true");
console.log(Cherry == 'fruit');
console.log("\n");
console.log("5>6 ? I predict false");
console.log(5 > 6);
console.log("\n");
console.log("9>10 ? I predict false");
console.log(9 > 10);
console.log("\n");
console.log("1000>3000 ? I predict false");
console.log(1000 > 3000);
console.log("\n");
console.log("100>900 ? I predict false");
console.log(1000 > 3000);
console.log("\n");
console.log("1000<2 ? I predict false");
console.log(1000 > 3000);
console.log("\n");
// Task 24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
var number_1 = "1";
var number_2 = "2";
var number_3 = "1";
if (number_1 == number_2) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
if (number_1 == number_3) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
console.log("\n");
//• Tests using the lower case function
if (number_1 == number_3) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
console.log("\n");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number_1 = "18";
var number_2 = "40";
if (number_1 == "18") {
    console.log(" eligible for vote");
}
var number_1 = "18";
var number_2 = "40";
if (number_2 == "40") {
    console.log(" olders are eligible for votes");
}
console.log('\n');
//greater than and less than
var number_1 = "10";
var number_2 = "20";
if (number_2 < number_1) {
    console.log("less than");
}
else {
    console.log("greater than");
}
console.log('\n');
var number_1 = "10";
var number_2 = "20";
if (number_1 < number_2) {
    console.log("less than");
}
else {
    console.log("greater than");
}
console.log("\n");
//greater than and equal to
var boy_1 = "18";
var boy_2 = "14";
if (boy_1 <= boy_2) {
    console.log("younger");
}
else {
    console.log("older");
}
var number_1 = "3";
var number_2 = "5";
if (number_1 == number_2) {
    console.log("equal not");
}
else {
    console.log("equal to");
}
console.log("\n");
//• Tests using "and" and "or" operators
var age_1 = "20";
var age_2 = "18";
if (age_1 && age_2) {
    console.log("person is eligible for vote");
}
var age_1 = "20";
var age_2 = "18";
if (age_1 || !age_2) {
    console.log("person is not eligible for vote");
}
console.log("\n");
//• Test whether an item is in a array
var languages_1 = ('("urdu") ("English") ("French") ("Hindi")');
if (languages_1.indexOf('English') !== -1) {
    console.log("English is  in an array");
}
var languages = ('("urdu") ("English") ("French") ("Hindi")');
if (!!languages.indexOf("arabic")) {
    console.log("Arabic is not in an array");
}
//Task 25:Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alien_color = 'green';
if (alien_color == 'green')
    console.log("you earn 5 points");
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "red";
if (alien_color == 'yellow')
    console.log("no output");
console.log("\n");
//Task 26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien 
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("you earn 5 points for shooting an alien");
}
else {
    console.log("you earn 10 points");
}
var alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("you earn 5 points for shooting an alien");
}
else {
    console.log("you earn 10 points");
}
//Task 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
var alien_color = 'green';
if (alien_color == 'green')
    console.log("you earn 5 points");
console.log("\n");
var alien_color = 'yellow';
if (alien_color == 'yellow')
    console.log("you earn 15 points");
console.log("\n");
var alien_color = 'red';
if (alien_color == 'red')
    console.log("you earn 10 points");
console.log("\n");
//Task 28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder
var age = 1;
if (age < 2) {
    console.log("You are a baby");
}
else if (age < 4) {
    console.log("You are a toddler");
}
else if (age < 13) {
    console.log("You are a kid");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 65) {
    console.log("You are a adult");
}
else {
    console.log("You are a older");
}
var age = 3;
if (age < 2) {
    console.log("You are a baby");
}
else if (age < 4) {
    console.log("You are a toddler");
}
else if (age < 13) {
    console.log("You are a kid");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 65) {
    console.log("You are a adult");
}
else {
    console.log("You are a older");
}
var age = 12;
if (age < 2) {
    console.log("You are a baby");
}
else if (age < 4) {
    console.log("You are a toddler");
}
else if (age < 13) {
    console.log("You are a kid");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 65) {
    console.log("You are a adult");
}
else {
    console.log("You are a older");
}
var age = 14;
if (age < 2) {
    console.log("You are a baby");
}
else if (age < 4) {
    console.log("You are a toddler");
}
else if (age < 13) {
    console.log("You are a kid");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 65) {
    console.log("You are a adult");
}
else {
    console.log("You are a older");
}
var age = 64;
if (age < 2) {
    console.log("You are a baby");
}
else if (age < 4) {
    console.log("You are a toddler");
}
else if (age < 13) {
    console.log("You are a kid");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 65) {
    console.log("You are a adult");
}
else {
    console.log("You are a older");
}
var age = 88;
if (age < 2) {
    console.log("You are a baby");
}
else if (age < 4) {
    console.log("You are a toddler");
}
else if (age < 13) {
    console.log("You are a kid");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 65) {
    console.log("You are a adult");
}
else {
    console.log("You are a older");
}
// Task no 29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["strawberry", "rasberry", "Grapes"];
if (favorite_fruits.indexOf("Banana") !== -1) {
    console.log("you really like  banana");
}
if (favorite_fruits.indexOf("Apple") !== -1) {
    console.log("you really like  banana");
}
if (favorite_fruits.indexOf("rasberry") !== -1) {
    console.log("you really like  rasberry");
}
if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("you really like  strawberry");
}
if (favorite_fruits.indexOf("Grapes") !== -1) {
    console.log("you really like  Grapes");
}
console.log("\n");
// Task no 30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var username = ["admin", "Sana", "Sania", "eric", "hala"];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var users_1 = username_1[_i];
    if (users_1 === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users_1), ", thankyou for logging in again");
    }
}
console.log("\n");
// Task 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = [];
if (users.length == 0) {
    console.log("We need to find some users");
}
else {
    for (var _a = 0, username_2 = username; _a < username_2.length; _a++) {
        var users_2 = username_2[_a];
        if (users_2 === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(users_2), ", thankyou for logging in again");
        }
    }
}
console.log('\n');
//   Task no 32:  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Sana", "alia", "sakina", "Zara", "amna"];
var new_userss = ["Samaina", "sakina", "amna", "Erica", "alia"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_userss_1 = new_userss; _b < new_userss_1.length; _b++) {
    var new_users = new_userss_1[_b];
    if (current_users_lower.indexOf(new_users.toLowerCase()) !== -1) {
        console.log("Sorry ".concat(new_users), "that username is taken😌");
    }
    else {
        console.log("Welcome ".concat(new_users), "to our website 🎉");
    }
}
// Task no 33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var message = ("st");
var message1 = ("nd");
var message2 = ("rd");
var message3 = ("th");
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log(" ".concat(number.toString(), message));
    }
    else if (number === 2) {
        console.log(" ".concat(number.toString(), message1));
    }
    else if (number === 3) {
        console.log(" ".concat(number.toString(), message2));
    }
    else {
        console.log(" ".concat(number.toString(), message3));
    }
}
// // task 34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favorite_pizza = ['cheese lover', 'Afghani', 'Malai boti'];
for (var _d = 0, favorite_pizza_1 = favorite_pizza; _d < favorite_pizza_1.length; _d++) {
    var pizza = favorite_pizza_1[_d];
    console.log(" ".concat(pizza));
}
for (var _e = 0, favorite_pizza_2 = favorite_pizza; _e < favorite_pizza_2.length; _e++) {
    var pizza = favorite_pizza_2[_e];
    console.log("I love ".concat(pizza), "pizza so much");
}
console.log("\n");
//Task no 35:Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var different_animal = ['lion', 'tiger', 'leopard'];
for (var _f = 0, different_animal_1 = different_animal; _f < different_animal_1.length; _f++) {
    var animal = different_animal_1[_f];
    console.log(" ".concat(animal));
}
for (var _g = 0, different_animal_2 = different_animal; _g < different_animal_2.length; _g++) {
    var animal = different_animal_2[_g];
    console.log("The ".concat(animal), "eat animals");
}
console.log("They all eat animals");
console.log("\n");
//Task no 36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
function make_shirt1(size, message) {
    console.log("I order a ".concat(size), "shirt that says".concat(message));
}
make_shirt1('large', '"i love java"');
make_shirt1('medium', '"i want to learn code"');
console.log('\n');
// Task no 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    console.log("I order a ".concat(size), "t-shirt");
    console.log("It will say ".concat(message));
}
make_shirt('large', '"i love typescript"');
make_shirt('medium', '"i need knowledge"');
make_shirt('small', '"i love to do coding"');
console.log('\n');
// Task 38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    console.log(" ".concat(city), "is in".concat(country));
}
describe_city('karachi', '"Pakistan"');
describe_city('Dehli', '"India"');
describe_city('Makkah', '"Saudia Arabia"');
console.log('\n');
// Task 39:  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    console.log(" ".concat(city, country));
}
city_country('"karachi', ',Pakistan"');
city_country('"Dehli', '",India"');
city_country('"Makkah', ',Saudia Arabia"');
console.log('\n');
// Task 40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
function make_album(album, artistname) {
    console.log("{'Title': ".concat(album), ",'Artist':".concat(artistname));
}
make_album("'Purple Rain'", "'Prince'");
make_album("'Little Earthquakes.'", "'Tori Amos '");
make_album("'The Cross of Changes'", "'Enigma'");
//Task 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians1(magiciansnames) {
    console.log(" ".concat(magiciansnames));
}
var magic1 = ['Harry Houdini', 'Doug Henning', 'Dai Vernon'];
show_magicians1(magic1.toString());
console.log("\n");
// Task 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
function show_magicians(magiciansnames) {
    console.log(" ".concat(magiciansnames));
}
var magic = ["Harry Houdini", "Doug Henning", "Dai Vernon"];
show_magicians(magic.toString());
function make_great(great) {
    console.log(" ".concat(great), "the great magician");
}
var magic3 = ["Harry Houdini"];
var magic4 = ["Doug Henning"];
var magic5 = ["Dai Vernon"];
make_great(magic3.toString());
make_great(magic4.toString());
make_great(magic5.toString());
console.log("\n");
//Task no 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function show_magicians2(magiciansnames) {
    console.log(" ".concat(magiciansnames));
}
var magic = ["Harry Houdini", "Doug Henning", "Dai Vernon"];
show_magicians2(magic.toString());
function make_great2(great) {
    console.log(" ".concat(great), "the great magician");
}
console.log("Great Magicians");
var magic3 = ["Harry Houdini"];
var magic4 = ["Doug Henning"];
var magic5 = ["Dai Vernon"];
make_great2(magic3.toString());
make_great2(magic4.toString());
make_great2(magic5.toString());
console.log("\n");
console.log("Original magicians");
show_magicians2(magic3.toString());
show_magicians2(magic4.toString());
show_magicians2(magic5.toString());
console.log("\n");
//Task no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
function make_sandwich(ingredients) {
    console.log("i am adding ".concat(ingredients), "to your sandwich");
}
var items = ["cheese", "chicken", "lettuce", "cucumber", "beef", "mayonise", "egg", "ketchup", "onion"];
console.log("i am making great sandwich for you");
make_sandwich(items[0]);
make_sandwich(items[1]);
make_sandwich(items[2]);
console.log("your sandwich is ready");
console.log('\n');
console.log("i am making great sandwich for you");
make_sandwich(items[3]);
make_sandwich(items[4]);
make_sandwich(items[5]);
console.log("your sandwich is ready");
console.log('\n');
console.log("i am making great sandwich for you");
make_sandwich(items[6]);
make_sandwich(items[7]);
make_sandwich(items[8]);
console.log("your sandwich is ready");
console.log('\n');
// Task:45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(car, color, established) {
    console.log("{'Manufacturer:' ".concat(car), "'color:'".concat(color), "'Established:'"
        .concat(established));
}
make_car("'Honda,'", "'Black',", "'1995'}");
make_car("'Subaru'", "'white'", "'1993'}");
