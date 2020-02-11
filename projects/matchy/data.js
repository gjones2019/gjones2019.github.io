/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; //create animal obj
animal.species = 'dog'; //create dog species
animal['name'] = 'Cane'; //dog name Cane
animal.noises = []; //empty noises array on animal
console.log(animal); //check work


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; //empty noises array
noises[0] = 'bark'; //add bark
noises.push('growl'); // add growl to end
noises.unshift('yelp'); //add yelp to beginning
noises[noises.length] = 'woof'; //set last element to woof




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises; //set animal noises key to noises var
animal.noises.unshift('moan'); //add moan to our animal noises 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; //create empty array on animals
animals.push(animal); //push animal into animals array
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }; //create duck variable
animals.push(duck); //push in duck variable
var cat = {species: 'cat', name: 'Oliver', noises: ['meow', 'purr']}; //create cat variable
animals.push(cat); //push in cat array
var lion = {species: 'lion', name: 'Simba', noises: ['roar', 'rarr']}; //create lion var
animals.push(lion); //push in lion obj



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; //create empty friends array
function getRandom(animals) {
     return Math.floor(Math.random() * animals.length); //use math.floor to get random animal
}

friends.push(animals[getRandom(animals)].name); //push  random animal into friends 

lion.friends = friends; //assign friends to liion friends property

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
