// add whatever parameters you deem necessary
/* takes an numbers array and a number, return if there is a pair whose average is equal to the number*/
function countPairs(numsArray, avg) {
  let start= 0;
  let end=numsArray.length-1;
  while (start<end){
    let currentAverage=(numsArray[start]+numsArray[end])/2;
    if (currentAverage===avg){
      return true; 
    }
    if (currentAverage>avg){
      end--;
    }
    if (currentAverage<avg) {
      start++;
    }
  }
  return false; 
}
