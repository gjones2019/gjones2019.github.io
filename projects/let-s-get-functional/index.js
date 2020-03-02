// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-gjones");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let malesArray = _.filter  (array, function (customerObj //filter thru array and take in customer object 
) {
   return customerObj.gender === 'male';  //return customer object whose gender is male
}
);
    return malesArray.length; //return the number of males
}
;

var femaleCount = function(array) {
    return _.reduce (array, function (seed, currentObj, index) { //use reduce and use seed as a counter
        if (currentObj.gender === "female") { //if gender is female add 1 to seed
            return seed += 1;
        }
        return seed; //return final seed count
    }, 0); //0 is the seed data type
}
;

var oldestCustomer = function(array) {
    let young; //young var to test age against
    _.each(array, function(e, i, a) { //test each element with each
        if (!young) { //if no young the set young to the current element
            young = e;
        } else if (young.age < e.age) { // if young age is less then element age then assigen young to element
            young = e;
        }
    });
    return young.name; //return young name
    };

var youngestCustomer = function(array) {
    let old; //old var to test age against
    _.each(array,function(e, i, a) { //test eachelement with each
        if (!old) { //if no old then set oldto the current element
            old = e;
        } else if (old.age > e.age) { //if old age is greater then element age then assigen young to element
            old = e;
        }
    });
    return old.name; //return old name
};

var averageBalance = function(array){
     var balances = _.reduce (array, function (accumulator, customerObj){ //set variable = to our array function
       var removeSign = customerObj.balance.slice(1);  //slice off the $
       removeSign = removeSign.split(",").join("");  //split it up with a comma and rejoin
       removeSign = Number.parseFloat(removeSign);  //return floating point number
       accumulator += removeSign;  //add balanceto accumulator
       return accumulator; //return balances added together
   }, 0);
   return balances / array.length; //get average of balances and return it
};


var firstLetterCount = function(array, letter) {
    return _.reduce(array, function (accumulator, array) { //use reduce 
        if (array.name.charAt(0).toUpperCase() === letter.toUpperCase()){ //if array name char[0] is = char add 1 to accumulator
            accumulator += 1;
        }
        return accumulator; //return accumulator
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    let count = 0; //create counter var
    _.each(array, function(e, i, a) { //for each thru array
        if (e.name === customer) { //if element name = customer loop thru element's friends 
            for (var i = 0; i < e.friends.length; i++) {
                if (e.friends[i].name[0].toUpperCase() === letter.toUpperCase()) { //if elements friends[i] name[0] = letter then add to count
                    count++; 
                }
            }
        }
    });
    return count;
};

var friendsCount = function(array, name) {
    return _.pluck (_.filter (array, customer =>  //pluck items out of filtered array 
        _.some (customer.friends, friend => //if friend is in customer friends, set friend name = name
            friend.name === name)), "name");
};

var topThreeTags = function(array) {
    let tag = _.reduce(array, function(tagsObj, current) { //used reduce on the array
        let arrayOfTags = current.tags; //create an array of current tags
        _.each(arrayOfTags, function(tag) { //on each tag in the array, add 1 to the tagsobj if the tag occurs
            if (tagsObj[tag]) {
                tagsObj[tag]++;
            } else { //if no just set the tag count equal to 1
                tagsObj[tag] = 1;
            }
        });
        return tagsObj; //return our tags obj counts
    }, {});
    let hold = []; //create a holder var
    _.each(tag, function(value, key, obj) {
        hold.push([key,value]); //for each tag pusy the key and value into our holder array
    });
    hold.sort(function(x, y) {
        return y[1] - x[1]; //sort our holder array from top to bottom
    }); 
    var topThree = hold.slice(0, 3); //slice off the extras and only keep the toop3
    let tester = _.map(topThree, function(nested) { //run map as a tester 
        return nested[0];
    });
    return tester; //return our final testser
};

var genderCount = function(array) {
    let genderObj = {male: 0, female: 0, "non-binary": 0}; //creates genderObj var
    _.filter(array, function(customerObj, i, a) { //filters the array
        if (customerObj.gender === "male") { //if gender is male in the customer obj then add 1 to genderObj male count
            genderObj.male += 1;
        } else if (customerObj.gender === "female") {  //if gender is female in the customer obj then add 1 to genderObj female count
            genderObj.female +=1;
        } else if (customerObj.gender === "non-binary") {  //if gender is non-binary in the customer obj then add 1 to genderObj non-binary count
            genderObj["non-binary"] += 1;
        }
    });
    return genderObj; //return our final gender object count of genders
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
