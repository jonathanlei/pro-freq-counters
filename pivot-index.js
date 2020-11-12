"use strict";
// add whatever parameters you deem necessary
/* accept an array of integers, and return the first index 
where the left of the index sums to the right of the index */
function pivotIndex(numsArr) {
  //get the total sum
  let sum = numsArr.reduce((acc, val) => acc + val, 0);
  let leftSum = numsArr[0];
  for (let i = 1; i < numsArr.length; i++) {
    let rightSum = sum - leftSum - numsArr[i];
    // if the left is equal to the right 
    if (leftSum === rightSum) return i;
    else {
      leftSum += numsArr[i];
    }
  }
  return -1;
}
