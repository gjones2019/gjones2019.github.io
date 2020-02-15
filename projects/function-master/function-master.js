//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);  //return object values in an array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
 //create new string to put new string into
    var string = ""; 
    for (var key in object) {  //loop over object
        string += key + ' ';  //add the keys to the string var and a space
        }
    return string.trim(); //trims off the last space on the string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var string = "";  //create string var to put everything in
    for (var key in object) {   //looops over the object
        if (typeof object[key] === 'string') { //if valu is a string add it to our string var with a space
        string += object[key] + ' '; 
        }
    }
    return string.trim(); //trim the end of our string

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (collection instanceof Date === true) { //if collection is a date return nothing
        return;
    }
    else if (Array.isArray(collection)) { //if collection is a array return array
        return 'array';
    }
    else if (typeof collection === 'object') { //if collection is a object return object
        return 'object';
    }
    else { //otherwise return nothing
        return;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.replace(string[0], string[0].toUpperCase()); //return string but replace the string[0] with a capital letter
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var split = string.split(" ");  //splits string up
    for (var i = 0; i < split.length; i++) { //loops over array of strings
        split[i] = split[i][0].toUpperCase() + split[i].slice(1); //uppercases first chas on string and slices the extra letter
    }
    var finalStr = split.join(' '); // joins split string into one string
    return finalStr; //return final string
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
var capName = object.name.charAt(0).toUpperCase() + object.name.slice(1); //capitalizes first chat on object.nam and slices off the extra letter
return "Welcome" + " " + capName + "!"; //returns our welcome name! senence
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1); //creates capitalized first letter name
var species = object.species.charAt(0).toUpperCase() + object.species.slice(1); //creates capital first letter species
return name + " is a " + species;  //return name is a species sentence
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (object.noises === undefined || object.noises.length === 0) { //if no object noises then there are no noises is printed
    return "there are no noises";
} else {
    return object.noises.join(" "); //otherwise joins noises togeter in a string with a space
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if (string.includes(word)) {
    return true; //returns true if the string includes the word
} else {
    return false; //returns false otherwise
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name); //pushes name in the object.friends array
return object; //returns the updated object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if (object.friends === undefined || object.friends.length === 0) {
   return false; //returns false if the object friends array is empty or undefined
}
 else if (object.friends.includes(name)) { //if name is included in object friends array then true is returned
    return true;
} else { //otherwise false is returned
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var notFriends = []; //makes new array for our collection of not friends names
for (var i = 0; i < array.length; i++) { //loops thru the array
    if (!array[i].friends.includes(name) && array[i].name !== name) { //if array[i] doesnt include name then we oush the name into notfriends array
notFriends.push(array[i].name);
    }
}
    return notFriends; //return our notfriends array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value; //updates our object[key] to the value given/
return object; //returns object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++) { //loops over the arry
    delete object[array[i]]; //deletes the part of the  object with array[i] in it
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var special = [...new Set(array)]; //uses set and the spread operator to delete all duplicates of the array


return special; //returns the special array of values
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}