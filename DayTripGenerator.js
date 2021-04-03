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
entertainment.push("History Museum", "City Tour", "Fishing", 
"Local Theater", "Arcade", "Shopping", 
"Local Bar");

let trash = [];
let finalArray = [];

//As I misunderstood the assignment, I realized that I would need to completely change everything. The Arrays were fine
// but I edited the text and added two more to get rid of the unwanted values and one to store the wanted values. The function 
//below selects// a random value from the given array and prompts the user type "Yes" or "No".If the user types no, value will be 
//stored in the "trash" array and the code will loop selecting another value. If yes the value will be stored in the
//"final" array.

function randomizer(anArray){
    let randomValue = anArray[Math.floor(Math.random() * anArray.length)];
    let userInput = prompt("We randomly chose" + " " + randomValue + "! Type 'Yes' if you like would to continue"
    + " or type 'No' to try again!");
    while (userInput === "No"){
        trash.push(randomValue)
        randomValue = anArray[Math.floor(Math.random() * anArray.length)];
        userInput = prompt("We randomly chose" + randomValue + "! Type 'Yes' if you like would to continue"
        + "or type 'No' to try again!");
        if (userInput === "Yes"){
            break;
        }   else {
            continue;
        }    
    }return finalArray.push(randomValue);
}
