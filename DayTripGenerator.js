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

let confirmArray = [];
let finalArray = [];

//As I misunderstood the assignment, I realized that I would need to completely change everything. The Arrays were fine
// but I edited the text and added two more to get rid of the unwanted values and one to store the wanted values. The function 
//below selects// a random value from the given array and prompts the user type "Yes" or "No".If the user types no, value will be 
//stored in the "trash" array and the code will loop selecting another value. If yes the value will be stored in the
//"final" array.
//Discovered the confirm method which works alot for what I want. It takes less code and is easier for the ser to navigate.

function randomizer(anArray){
    let randomValue = null;
    let userInput = false;
    while (userInput === false){
        randomValue = anArray[Math.floor(Math.random() * anArray.length)];
        userInput = confirm("We randomly chose " + randomValue + "! Click Ok to continue or Cancel to try again!")     
    }return finalArray.push(randomValue);
}

//I need to run my functions in an order that allows me to display a user friendly message.

randomizer(destination);
randomizer(transportation);
randomizer(restaurants);
randomizer(entertainment);

//The daytrip has been pushed into finalArray. This will be displayed to the user using the confirm method.


let confirmation = confirm("Just to confirm..... You will be traveling to " + finalArray[0] + " via " + finalArray[1] + ". When"
+ " you get hungry you can stop by " + finalArray[2] + " for some food! For entertainment, you can check out " 
+ finalArray[3] + "! Would you like to confirm your trip? Click Ok to confirm or Cancel if you want to make changes");

//Now comes he toughest part. Finding a way for the user to redo their choices if they dont like the end results.
//Not fancy but the if statements get the job done. The .splice method came in handy here! If the user wants to change
//their trip, they now can.

let removed = null;
let newValue0 = null;
let newValue1 = null;
let newValue2 = null;
let newValue3 = null;


while(confirmation === false){
    newValue0 = confirm("Roger Roger! You want to change your trip! Click Ok to change the Destination from " + finalArray[0]
    + "! Click Cancel to review your Transportation!");
  
if (newValue0 === true){
    randomizer(destination);
    let removed = finalArray.splice(0, 1, finalArray[4]);
    finalArray.length = 4;
} 

newValue1 = confirm("Now if you would like to change your Transportation from " + finalArray[1] + ", click Ok! Click Cancel"
    + " to review your Restaurant!");
if (newValue1 === true){
    randomizer(transportation);
    let removed = finalArray.splice(1, 1, finalArray[4]);
    finalArray.length = 4;        
} 

newValue2 = confirm("If you would like to change your Restaurant from " + finalArray[2] + " click Ok! Click Cancel to"
        + " review your Entertainment!");
if (newValue2 === true){
    randomizer(restaurants);
    let removed = finalArray.splice(2, 1, finalArray[4]);
    finalArray.length = 4;
}

newValue3 = confirm("Almost there! To change your Entertainment click Ok! To Confirm your trip click Cancel!");
if (newValue3 === true){
    randomizer(entertainment);
    let removed = finalArray.splice(3, 1, finalArray[4])
    finalArray.length = 4;
}   
    let confirmation = confirm("Just to confirm..... You will be traveling to " + finalArray[0] + " via " + finalArray[1] + ". When"
    + " you get hungry you can stop by " + finalArray[2] + " for some food! For entertainment, you can check out " 
    + finalArray[3] + "! Would you like to confirm your trip? Click Ok to confirm or Cancel if you want to make changes");
    if (confirmation === true){
        break;
    }
}

console.log("Congratulations! Your trip is complete! You will be traveling to " + finalArray[0] + " via " + finalArray[1] + ". When"
+ " you get hungry you can stop by " + finalArray[2] + " for some food! For entertainment, you can check out " 
+ finalArray[3] + "!");
