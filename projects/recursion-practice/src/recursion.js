// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
 if(n === 0) {  //check if n is = 0, if so return 1
        return 1;
    } else if (n < 0) { //if n is negative return null
      return null;
      } else {  //otherwise multiply each n by itself - 1
        return factorial(n - 1) * n;
    }

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) { 
  if (array.length === 0) { //if the array is empty return 0
    return 0;
  }
    else { // otherwise return the first array and add it to the next  array item 
      return array[0] + sum(array.slice(1));
    }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) { 
  if (n === 0) { //check if number is even 
    return true;
  }
  else if (n === 1) 
    return false;
  else if (n < 0) //if it is even, return it
    return isEven(-n);
  else
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n > 0) {
    return n - 1 + sumBelow(n - 1); //if n > 0 return the n - 1 and add it to the sumBelow - 1
  }
  else if( n === 0){
    return 0; // return 0 if n = 0
  } else{
    return n + 1 + sumBelow(n + 1);  //if not then return n + 1 + sumBelow
  }};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, newResult = []) {
 if(x > y){
    if( x - 1 === y){
      return newResult; //if x is = y return the array
    }
    newResult.push(x - 1);  //push item into the array
    return range(x - 1, y, newResult);
  }else if(x === y){ //if x = y return the array
    return newResult;
  }else{
    if(x + 1 === y){ 
      return newResult; 
    }
    newResult.push(x + 1); //push x into array 
    return range(x + 1, y, newResult); //return the range
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){ 
    return 1; //return 1 if the exponent = 0
  } return exp > 0 ? base * exponent(base, exp - 1) : 1 / (base * exponent(base, -1 * exp - 1));  //if exponet > 0 is true return base*exponent,
  //if false return 1 / base*exponent
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) { 
    return true; 
    
  }  //if n is 1 return true
  if (n === 0 || n % 2 === 1) { 
    return false; 
    //if n = 0, n is not divisible by 2  return false
  }
  return powerOfTwo(n / 2); //return the function wiht n/2
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  return string === '' ? '' : reverse(string.substr(1)) + string.charAt(0); //return the string and reverse it
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  if (string.length <= 1) {
    return true; //if string < 1 retunr true
  }
  string = string.split(' ').join('').toLowerCase();  //split str
  let firstLetter = string[0];  //assign first letter
  let lastLetter = string[string.length - 1];  //assign last letter
  if (firstLetter === lastLetter) { //if = slice off first and last letters
    let stringWithoutFirstAndLastLetters = string.slice(1, string.length - 1);
    return palindrome(stringWithoutFirstAndLastLetters); //return string in function with out first and last letters
  } else {
    return false;  //otherwisre return false
  }
}; 


// 11. Write a function that returns the remainder of x divided by y without using the
// **don't do 
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.


 //return 0 if y = 0
 //if y < 0 return -x + multiply function
 //otherwise return x + multiply functio
var multiply = function(x, y) {
if (y === 0) { 
  return 0; 
} else if (y < 0) { 
  return -x + multiply(x, y + 1); 
} else {
  return x + multiply(x, y - 1); 
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// **don't do
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// **don't do
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;  //if both strings areempty, return true
    
  } 
  if (str1.charAt(0) !== str2.charAt(0)) { 
    return false;   //if the first char of both stringsnot equalthen return false
    
  }
  return compareStr(str1.substr(1), str2.substr(1));//recusrion on the string if neither conditino was met
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  
  return str.length === 1 ? [str.charAt(0)] : [str.charAt(0)].concat(createArray(str.substr(1)));
}; //return ternary operator for str.length

// 17. Reverse the order of an array
var reverseArr = function(array) {
  return !array.length ? array : reverseArr(array.slice(1)).concat(array[0]); //reverse the reversed array using the ternary operator
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  return length === 0 ? [] : [value].concat(buildList(value,length - 1)); //return new array w/ the values and lengths
};
// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  if (array.length === 0) { 
    return 0;//if length =0 return 0
  } 

  var increment = array[0] === value ? 1 : 0;
  return increment + countOccurrence(array.slice(1), value);   //return the incrementer + counter
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if(array.length === 1) { 
  	return callback(array);  //run callback function if array length is 1
  }
    return [callback(array[0])].concat(rMap(array.slice(1), callback));  //return callback and concat it
};


// 21. Write a function that counts the number of times a key occurs in an object.
// **don't do
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// **don't do
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// **don't do
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// **don't do
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n < 0) { 
    	return null; //return null if n is negative
    } else if(n === 1) {
		return 1;  //otherwise return 1
	}
  	return nthFibo(n - 1) + nthFibo(n - 2); 
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    let result = []; //result arary
    if(input.length === 0) { 
        return result; //return array if input length is 0
    }
    result.push(input[0].toUpperCase());  //push input capitalized into result array
    result = result.concat(capitalizeWords(input.slice(1)));  //concat all words 
    return result; //return final array
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    let result = []; //results array
    if(!array.length) {  //no array length then return empty array
      return result; 
      
    }
    result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));  //push 1st capitalized into array
    result = result.concat(capitalizeFirst(array.slice(1))); //concat alll
    return result; //return final array
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// **don't do
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// **don't do
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    let result = Array.from(arguments)[1] || {};
    if(str.length === 0) {
        return result; //if string length is 0 return array
    }
    if(!result[str[0]]) {  
        result[str[0]] = 1; //assign to 1 
    } else
     {
        result[str[0]]++; //++ on result 
    }
    return letterTally(str.slice(1), result); //slice result and return lettertally
};
// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, listResult = []) {
  if(list.length === 0){ 
    return listResult; //return listresult
  }else if(list[0] === listResult[listResult.length - 1]){
    return compress(list.slice(1), listResult); //compress it and return  
  }
  else{
    listResult.push(list[0]); //push into listresult
    return compress(list.slice(1), listResult); //compress it and return it
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// **don't do
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length === 0) { 
      return array; //return empty array if empty
    }
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));  //return minimize0s
    } else {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));  //return concated array with less 0s
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) {
      return array; //if empty array return array
      
      }
    if(array[0] < 0) { //assign -array[0] to array[0]
      array[0] = -array[0]; 
    }
    if(array[1] > 0) { //if > 0 assign array[1] to -array[1]
      array[1] = -array[1] ; 
      }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));  //return concated array
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let finalText = ""; //counter string
  let numsObject = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"}; //assign object
  if (!str.length){ //string empty retunr empty string
    return ""; 
  }else if(numsObject[str[0]]){
    finalText = finalText + numsObject[str[0]] + numToText(str.slice(1)); //convert digits and assign
  }else {
    finalText = finalText + str[0] + numToText(str.slice(1));  //assign again
  }
  return finalText;  //return final
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
