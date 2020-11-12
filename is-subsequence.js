"use strict";
// add whatever parameters you deem necessary
/* takes two strings, and return true if the first string is a subsequence of second string, order matters */
function isSubsequence(str1, str2) {
  let str1Idx=0;
  let str2Idx=0;
  while (str1Idx<str1.length && str2Idx<str2.length){
    let letter1=str1[str1Idx];
    let letter2=str2[str2Idx];
    // if the letters match, both idx goes up 
    if (letter1===letter2){
      str1Idx++;
      str2Idx++;
    }
    // if they don't match, idx2 goes up 
    else {
      str2Idx++;
    }
  }
  // if idx1 is at the end, return true
  return str1Idx===str1.length;
}
