// Write a function that takes an array of characters and reverses the letters in place.

const strArr = [ 'h', 'e', 'l', 'l', 'o' ];

function reverseStrInPlace(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx < rightIdx) {
    let tempVal = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = tempVal;

    leftIdx++;
    rightIdx--;
  }

  return arr;
}