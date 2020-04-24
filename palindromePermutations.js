// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function isPalindrome(str) {
  const singleChars = new Set();

  for (let char of str) {
    if (singleChars.has(char)) {
      singleChars.delete(char);
    } else {
      singleChars.add(char);
    }
  }

  if (singleChars.size <= 1) return true;
  return false;
}

