// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
      if (Array.isArray(value)) {
        return true; //return true if value is an array
    }
    else {
        return false; //otherwise return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
if( Object.prototype.toString.call(value) === '[object Object]' ) { //if value is a string, true is returned
    return true;
}
else { //otherwise false is returned
    return false;
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
if( (Object.prototype.toString.call(value) === '[object Object]') || Array.isArray(value)) {
    return true; //returns true if value is an array or object
} 
else { //otherwise false is returned
    return false;
}
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof(value) === 'string') {
        return 'string'; //string is returned if value is a string
    }
    else if (typeof(value) === 'undefined') {
        return 'undefined'; //undefined is returned if value is a undefined
    }
    else if (typeof(value) === 'number') {
        return 'number'; //number is returned if value is a number
    }
    else if (typeof(value) === 'boolean') {
        return 'boolean'; // boolean is returned if value is a boolean
    }
    else if (typeof(value) === 'function') {
        return 'function'; //function is returned if value is a function
    }
    else if (Array.isArray(value)) {
        return 'array'; //array is returned if value is a array
    }
    else if (Object.prototype.toString.call(value) === '[object Object]') {
        return 'object'; //object is returned if value is a object
    }
    else if (value instanceof Date === true) {
        return 'date'; //date is returned if value is a date
    }
    else {
        return 'null'; //otherwise null is returned
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
