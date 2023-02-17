// Don't forget prompt() always returns a string, even for numbers
const number = prompt("Enter a number: ");

// Step 1: Rearrange the console logs so that the statements are correct

// the number is greater than 100 because ">" = greater than //
if (number > 100) {
  console.log("The number is greater than 100");

  // the number would be greater than 0 because of ">" and the number would be less than 101 because "<" = less than meaning numbers can only be between 0 and 100 //
} else if (number > 0 && number < 101) {
  console.log("The number is between 1 and 100");

  // number would STRICTLY equal zero, it cannot be anything else because of strict equality //
} else if (number === 0) {
  console.log("The number is 0");

  // would be negative because every other number in the above statements is postive //
} else {
  console.log("The number is negative");
}

// Step 2: Test and refactor your code to ensure these conditional statements are operating correctly
// Don't forget to test zero!
// Hint: Remember that numbers can also be strings.
