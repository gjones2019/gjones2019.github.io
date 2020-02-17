////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start < end ? 1 : -1) {  
  var arr = []; //our counter

  if (step > 0) { 
    for (let i = start; i <= end; i += step) { //if step is > 0 then loop from start to  end  and add step every increment
    arr.push(i); //push i into the array 
    }
  } 
  else if (start === end) {
    return arr; //if start = end then return array
    }
  else {
    for (let i = start; i >= end; i += step) { //loop from start to end and add step every incrementer
      arr.push(i); //push i into the array
    }
  }
  return arr; //return the final array
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr){
  var arraySum = 0; //counter
  for (var i = 0; i < arr.length; i++){ 
  arraySum += arr[i]; //adds arr[i] to arrsum for every look over the inputarray
  }
  return arraySum; //returns final count
} 

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
   var array = []; //empty array for out counter
    for (var i = arr.length - 1; i >= 0; i--) //loop backwards over array
        array.push(arr[i]); //push arr[i] into array
    return array; //return counter
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) { //loop over the array to the largest integer/2
    let old = array[i]; //sets old to array[i]
    array[i] = array[array.length - 1 - i]; //makes array[i] = to array[last index] 
    array[array.length - 1 - i] = old; //sets old equal to array[last index - i]
  }
  return array; //returns array 
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null; //sets list = null
  for (let i = array.length - 1; i >= 0; i--) { //loop over array backwards
    list = {value: array[i], rest: list}; //makes list  = the value: array[i] and rest: list
  }
  return list; //returns final list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list){
  var listArray = []; //list array for our counter
  for (var node = list; node; node = node.rest){ 
  	listArray.push(node.value); //push node value into the list array
  }
  return listArray; //return final listArray
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(elem, list){
  var newList = {value: elem, rest: list}; //makes new list where value = elem and rest = list
  return newList; //returns the new list
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num){
  	var list2 = !list; //set list2 = opposite of list
  if (list2){ //if there is a list2 then return undefined
  	return undefined;
  } else if (num === 0){ //if the num = 0 then return  the list value
  	return list.value;
  } else {
  	return nth(list.rest, num-1); //otherwise run nth(list.rest, num-1)
  }
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) {
    return true; //if a = b then retuurn true
  }
  if (a == null || typeof a != "object" || b == null || typeof b != "object") //if a or b is null or an object return false
    return false;
  var propsInA = 0, propsInB = 0; //create counters for a and b
  for (var prop in a) //run for-in loop over key properties in a to count them
    propsInA += 1;

  for (var prop in b) { //run for-in loop over key properties in b to count them
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) //if no properties in a or a prop doesn't equal b prop, then return false
      return false;
  }
  return propsInA == propsInB; //return prop a == prop b
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
