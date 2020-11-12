
"use strict";
// add whatever parameters you deem necessary
/* takes an array of non-zero numbers and return the original array with positive numbers on the left and 
negative numbers on the right, orders doesn't matter */
function separatePositive(numsArray) {
  let start=0; 
  let end= numsArray.length-1;
  while (start<end){
    // if both are positive, start goes up
    if (numsArray[start]>0 &&numsArray[end]>0){
      start++;
    }
    // if both negative, end goes down 
    else if (numsArray[start]<0 &&numsArray[end]<0){
      end--;
    }
    // if start is negative and end is positive,swap, both index change  
    else if (numsArray[start]<0 && numsArray[end]>0) {
      // swap
      [numsArray[start],numsArray[end]]=[numsArray[end],numsArray[start]];
      start++;
      end--;
    }
    // if start is  positive , end is negative, both index change, don't swap
    else {
      start++;
      end--;
    }
  }
  return numsArray;
}
