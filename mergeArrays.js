// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).
// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:
const myArray = [2, 3, 4, 5, 6, 10, 11, 15];
const alicesArray = [7, 8, 12, 14, 19];


function mergeArrays(arrayOne, arrayTwo) {
  const mergedArray = [];
  const combinedLength = arrayOne.length + arrayTwo.length;
  
  let firstArrayStartIdx = 0;
  let secondArrayStartIdx = 0;
  
  for (let i = 0; i < combinedLength; i++) {
    if (firstArrayStartIdx >= arrayOne.length) {
      return mergedArray.push(...arrayTwo.splice(secondArrayStartIdx));
    } else if (secondArrayStartIdx >= arrayTwo.length) {
      return mergedArray.push(arrayOne.splice(firstArrayStartIdx);
    }

    if (arrayOne[firstArrayStartIdx] < arrayTwo[secondArrayStartIdx]) {
      mergedArray[i] = arrayOne[firstArrayStartIdx];
      firstArrayStartIdx++
    } else {
      mergedArray[i] = arrayTwo[secondArrayStartIdx];
      secondArrayStartIdx++;
    }
  }

  return mergedArray;
}


console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]