// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value; //returns the value unchanged
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(value) {
    if (Array.isArray(value)) { 
        return 'array'; //checks for array and returns array
    }else if (typeof(value) === 'boolean') { 
        return 'boolean'; //checks for boolean and returns boolean
    } else if (typeof(value) === 'function') {
        return 'function'; //checks for function and returns function
    } else if (typeof(value) === 'undefined') {
        return 'undefined'; //checks for undefined and returns undefined
    } else if (value === null) { 
        return 'null'; //checks for null and returns null
    } else if (typeof(value) === "object" && value instanceof Date) { 
        return "date"; //returns date if  its a date
    } else if (typeof(value) === 'number') { 
        return 'number'; //checks for number and returns number
    }else if (typeof(value) === 'string') {
        return 'string'; //checks if a string and returns string
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
        return 'object'; //checks for object and returns object
    } else{ //otherwise it is null and will return null
        return 'null'; 
    }
};



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
   var results = []; //create our result counter 
    if(isNaN(number)) { //checks if number isNan, then returns array[0] if so
        return array[0];
    }
    else if (number > array.length - 1) { //if number > last number in array then array is returned
        return array;
    } else if (Array.isArray(array) == false || number < 0) { //if the array is not an array or the a number is less than 0, empty array is returned
        return [];
    }else { 
        for (let i = 0; i < number; i++) { //otherwise loop thru number and push each into results array
            results.push(array[i]);
        }
        return results; //finally return our final results array
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    var results = []; //empty array for our results
    var finalResults = []; //empty array for our final results
    if (isNaN(number)) { //checks if number isNAN, if so it returns the last index of the array
        return array[array.length - 1];
    }else if (number > array.length - 1) { //if number > the length of the array, we return the array
        return array;
    } else if (Array.isArray(array) == false || number < 0) {  //if array is not an array or number < 0, then we return results 
        return results;
    }
    else { 
        for (let i = array.length - 1; i >= 0; i--) { //otherwise loop backwars thru the array and push array[i] into results
            results.push(array[i]);
        }
        for (let o = 0; o < number; o++) { //or loop thru number and push into finalResults array
            finalResults.unshift(results[o]);
        }
        return finalResults; //return finalResults array
    }
}
;

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf= function(array, value) {
     for(let i = 0; i < array.length; i++) { //loop thru array
         if (array[i] === value) { //if array[i] includes the value, return the array index it was located in
             return i;
         }
     } return -1; //if not found, return -1
 }
 ;


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
         var contain = (array.includes(value) ? true : false); //uses ternary operator to return true or false if the array includes the value
         return contain; //return the variable we assigned the ternary operator to
}
;

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, action){
    if (Array.isArray(collection)) { //if the collection is an array run a for loop on the array
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection); //run each index of the collection on the action
        }
    } else {
        for (var  key in collection) { //if the collection is not an array, run a for-in loop on the object
            action(collection[key],key, collection); //run the action on each index of the collection
        }
    }}
;

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    let result = []; //for our results
    for (var i = 0; i < array.length; i++) { //loops over array
        if((_.indexOf(array, array[i])) === i) { //if array[i] is in array and === i then push array[i] into our results
            result.push(array[i]);
        }
    }
    return result; //return our final results with no duplicates
}
;



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(collection, test) {
    let filtered = []; //create new empty array we can push our results into 
    _.each(collection, function(value,index, collection) {  //cycles thru each part of the collection and runs the function on it
        if (test(value,index,collection)) {  //if the test is passed, we push the valut into our filtered array
            filtered.push(value); 
        }
    }
);
    return filtered; //finally we return our filtered array
}

;

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(collection, test) {
    var newArray = _.filter(collection, test);  //filters our collection and sets it equal to our newArray variable
    var rejected = [] ; //new variable for our rejected items
    _.each(collection, function(e, i, a){ //for each function run on collection
        if (newArray.includes(e)) {
        }  //if NewArray includes the element do nothing
        else {rejected.push(e)}  //otherwise push the element into our rejected array
    });
    return rejected; //returns our final rejected array 
}
;


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, funct) {
    let failed =[]; // created failed array
    let passed = array.filter((element, index, arr)=> { //passed variable for filtered items in array
        if (funct(element, index, arr)) 
        return true; //if funct returns true push elements into failed
        failed.push(element); 
    }
    );
    return[passed, failed]; //returns passed and failed inside of one array
}
;

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection,action){
    let alter = []; //our counter array
    _.each(collection, function(element, index, collection) {  //run each function on the collection
      alter.push(action(element, index, collection) );  //push our changed items into our altered array
    }) ; 
    return alter;//return our counter array
} 
 ;


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck= function (array,prop) {   
    return _.map(array, function(value) {  //return map on our array
        return  value[prop]; //return array containing the value of the property for each elemennt in the array
    }) ;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

   _.every = function (collection, func) {
    var checker = func ||   _.identity; //checker is our function arguement or _.identity function
    for (var i = 0; i < collection.length; i++)  {  //loop thru collection
        if (!checker(collection[i])) { //run our checker on each iteration of the collection
            return false; //if it doesn't pass checker, return false 
        }
    } return true; //return true otherwise
  }
  ;




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


_.some = function ( collection, func){
   if (typeof func !== 'function') { //if func isnt a function loop thruthe collection and if it has elemetns return true
       for(let element of collection) {
           if (element) return true; 
       }
        return false; //if no element return false
   }
 let mapedArr =_.map(collection, (element, index, collection) => func(element, index, collection)); //set our mapped array to _.map on collection,
   for (let element of mapedArr) { //loop over the mappedArr and if it has an element return true
       if (element) return true;
   }return false; //if not, return false
}
;

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, func, seed){
    var curr =  seed; //assigns seed to our curret var
    if (undefined === curr){ //if current is undefined=, assign it to array[0]
        curr = array[0]; 
        for ( let i = 1; i < array.length; i++){ //loop thru array and assign current to our func parameter with parameters pf current array[i] and i
            curr = func (curr, array[i], i);
        }
        
        return curr; //finally return current
    }
    for (let i = 0; i < array.length; i++) {
       curr = func (curr, array[i], i); //for loop thru array and set current equal to func with parameters of current array[i] and i
    }
    return curr; // finally return current
    }
    ;



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (object) {
 _.each (arguments, function (item){ //uses each on the arguements 
 
  _.each (item, function (value, prop){ ///runs each onthe items
   object[prop] = value; //overwrites the property  on object with the value arguement
  });
 }
 );return object; //return obj
}
;


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
