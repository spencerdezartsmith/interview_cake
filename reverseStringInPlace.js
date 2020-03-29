// Write a function that takes an array of characters and reverses the letters in place.

const strArr = [ 'h', 'e', 'l', 'l', 'o' ];

function reverseStrInPlace(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let splice = arr.splice(i + 1, 1);
    arr.unshift(splice[0]);
  }

  return strArr;
}

console.log(reverseStrInPlace(strArr))