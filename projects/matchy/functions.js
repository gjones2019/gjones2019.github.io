/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    for (var i = 0; i < animals.length; i++) { //loops over  animals array
        if (animals[i].name === name) {
            return animals[i]; //if animals[i] name = name return animals[i]
        }
    }
            return null; // otherwise return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) { //loops over  animals array
        if (animals[i].name === name) { //if animals[i] name = name the nreplace animals[i] with replacement
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for ( var i = 0; i < animals.length; i++) { //loops over  animals array
        if (animals[i].name === name) { //if animals[i] name = name then remove it
            animals.splice(i, 1); //remove using splice
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    for (var i = 0; i < animals.length; i++) { //for loop thru animals 
        if (!animal.name.length || !animal.species.length || animals[i].name == animal.name) {
            return; //return nothing if animals name length > 0, animals species length > 0, or animals[i] name == animal name
        }
    }
    return animals.push(animal); //otherwise we will push animal into animals
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
