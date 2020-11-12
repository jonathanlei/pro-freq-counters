"use strict"
// add whatever parameters you deem necessary
/* takesan an array of numbers and returns the longest consecutive decrease  */
function longestFall(numsArr) {
  if (numsArr.length === 0) return 0;
  let maxCount = 1;
  let currentCount = 1;

  for (let i = 0; i < numsArr.length; i++) {
    // if is descending, count++
    if (numsArr[i] > numsArr[i + 1]) {
      currentCount++;
    }
    // update maxCount, reset current count
    else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 1;
    }
  }
  return maxCount;
}
