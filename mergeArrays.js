function mergeArrays(myArray, aliceArray) {
  const mergedArray = [];

  let currentIdxMergedMine = 0;
  let currentIdxMergedAlice = 0;
  let currentIdxMerged = 0;

  while (currentIdxMerged < (myArray.length + aliceArray.length)) {
    let isEndOfArrayMine = currentIdxMergedMine >= myArray.length;
    let isEndOfArrayAlice = currentIdxMergedAlice >= aliceArray.length;

    if (!isEndOfArrayMine && (isEndOfArrayAlice || myArray[currentIdxMergedMine] < aliceArray[currentIdxMergedAlice])) {
      mergedArray[currentIdxMerged] = myArray[currentIdxMergedMine];
      currentIdxMergedMine++
    } else {
      mergedArray[currentIdxMerged] = aliceArray[currentIdxMergedAlice];
      currentIdxMergedAlice++
    }

    currentIdxMerged++
  }

  return mergedArray;
}