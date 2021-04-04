"use strict"

let destination = [];
destination.push("Detroit", "Ann Arbor", "Lansing", "Troy", "Traverse City", 
"Chicago", "Romoulus");

let restaurants = [];
restaurants.push("Capers","White Castle", "Golden Coral", "Taco Bell", "Kow Loons",
"Red Lobster", "Steak and Shake");

let transportation = [];
transportation.push("Personal Vehicle", "Uber", "Train", "Taxi", "Bike");


let entertainment = [];
entertainment.push("a History Museum Tour", "a Tour of the City", " a Fishing Tour", 
"a Local Theater", "an Arcade", "the Local Shopping Outlet", "a Local Bar");

let finalArray = [];

//As I misunderstood the assignment, I realized that I would need to completely change everything. The Arrays were fine
// but I edited the text and added two more to get rid of the unwanted values and one to store the wanted values. The function 
//below selects// a random value from the given array and prompts the user type "Yes" or "No".If the user types no, value will be 
//stored in the "trash" array and the code will loop selecting another value. If yes the value will be stored in the
//"final" array.

function randomizer(anArray){
    let randomValue = null;
    let userInput = "No";
    while (userInput === "No"){
        randomValue = anArray[Math.floor(Math.random() * anArray.length)];
        userInput = prompt("We randomly chose " + randomValue + "! If you want a new roll TYPE 'No'. ANY OTHER ACTION"
        + " will confirm " + randomValue + "!");        
    }return finalArray.push(randomValue);
}

//I need to run my functions in an order that allows me to console.log them out and display a user friendly message.
randomizer(destination)
randomizer(transportation)
randomizer(restaurants)
randomizer(entertainment)

console.log("Congratulations! Your trip is complete! You will be traveling to " + finalArray[0] + " via " + finalArray[1] + ". When"
+ " you get hungry you can stop by " + finalArray[2] + " for some food! For entertainment, you can check out " 
+ finalArray[3] + "!")
