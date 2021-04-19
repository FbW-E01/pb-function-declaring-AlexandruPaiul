// # Declaring Functions

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function multiply(number1, number2) {
  const mult = number1 * number2;
  console.log(mult);
}
multiply(5, 3);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const multiply1 = function () {
  let number1 = 3;
  let number2 = 6;
  const mult = number1 * number2;
  console.log(mult);
};
multiply1();

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const multiply3 = (number1, number2) => {
  const mult = number1 * number2;
  console.log(mult);
};
multiply3(8, 9);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. /*  */
function div1(number1, number2) {
  const div = number1 % number2;
  console.log(div);
}
div1(6, 3);
const div2 = function (number1, number2) {
  const div = number1 % number2;
  console.log(div);
};
div2(6, 4);
const div3 = (number1, number2) => {
  const div = number1 % number2;
  console.log(div);
};
div3(6,5);
