"use strict"
//The code will generate a random destination, restaurant, mode of
//transportation, and a form of entertainment to be slected for a day trip. 
//My first step will be to create arrays to randomly select from.

let destination = [];
destination.push("Detroit", "Ann Arbor", "Lansing", "Troy", "Traverse City", 
"Chicago", "Romoulus");

let restaurants = [];
restaurants.push("Capers","White Castle", "Golden Coral", "Taco Bell", "Kow Loons",
"Red Lobster", "Steak and Shake");

let transportation = [];
transportation.push("personal vehicle", "rideshare", "train", "taxi", "rental");

let entertainment = []
entertainment.push("tour a history museum?!", "go on a city tour?!", "go fishing?!", 
"see a play at the local theater?!", "go to the arcade?!", "check out the local shopping ares?!", "get some drinks at the local bar?!");

//Now that I have my arrays set up, I have write code that will randomly choose 
//an index from the arrays. The methods I will use are Math.floor and Math.random
//I will multiply my array.length by the random number and use the Math.floor to
//method to round the reslut to the nearest integer.

function dayTripGenerator(){
    let randomDestination = destination[Math.floor(Math.random() * destination.length)];
    
    let randomTransportation = transportation[Math.floor(Math.random() * transportation.length)];
    
    let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
   
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
