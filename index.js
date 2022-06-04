function isPalindrome(word) {
  // Write your algorithm here
  const string = word.toLowerCase()
  const reversestring = string.split('').reverse().join('')

  if (string === reversestring) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  Initialize function called isPalindrome that uses word as argument

  declare variable for argument: make all letters lowercase

  make every letter in into array
  
  declare another variable: reverse order of each element in the array

  join each element in array

  if variable 1 equals variable 2
  return true 

  else
  return false

*/



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
