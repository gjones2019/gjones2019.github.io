
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) {
for (var i = '#'; i.length <= x; i += '#') { //starts at #, ends at x, and adds # to i
  console.log(i); // console logs i
}
}

//triangles(7); //runs triangles(7)
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
    for (var i = num1; i <= num2; i++) { //loop over num1 and num2 
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz"); // => fizzbuzz for 3 + 5
        } else if (i % 3 == 0) {
            console.log("fizz"); //  => fizz for 3
        } else if (i % 5 == 0) {
            console.log("buzz"); // => buzz for 5
        } else {
        console.log(i); // => i otherwise
        }
    }
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
var board = ''; //create var for chessboard string
for (var row = 0; row < num; row++) { //loop to create every row
  for (var col = 0; col < num; col++) { //loop to create column
    if ((row+col) % 2 === 0) { //conditional test for row + col; % === 0
      board += " ";
    }
    else {
      board += "#"; //prints # every other space
    }
  }
    board += "\n"; //adds line break when row is finsihed
  }
console.log(board); //prints board to console
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}