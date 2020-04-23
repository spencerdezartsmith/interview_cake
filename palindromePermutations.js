// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return 'Please enter a valid string!' 
  const charMap = str.split('').reduce((charMap, char) => {
    if (!charMap[char]) charMap[char] = 1;
    else charMap[char] += 1;
    return charMap;
  }, {});

  const odd = Object.values(charMap).filter(charCount => charCount % 2 !== 0);

  if (odd.length === 1) return true;
  return false;
}

// isPalindrome("civic")
console.log('civic', isPalindrome("civic"))
console.log('ivicc', isPalindrome("ivicc"))
console.log('civil', isPalindrome("civil"))
console.log('livci', isPalindrome("livci"))

