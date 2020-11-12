'use strict';
// add whatever parameters you deem necessary
/* takes an array of non-zero numbers and return the original array with positive numbers on the left and 
negative numbers on the right, orders doesn't matter */
function separatePositive(numsArray) {
	let start = 0;
	let end = numsArray.length - 1;
	while (start < end) {
		// if both are positive, start goes up
		if (numsArray[start] > 0 && numsArray[end] > 0) {
			start++;
		} else if (numsArray[start] < 0 && numsArray[end] < 0) {
			// if both negative, end goes down
			end--;
		} else if (numsArray[start] < 0 && numsArray[end] > 0) {
			// if start is negative and end is positive,swap, both index change
			// swap
			[ numsArray[start], numsArray[end] ] = [ numsArray[end], numsArray[start] ];
			start++;
			end--;
		} else {
			// if start is  positive , end is negative, both index change, don't swap
			start++;
			end--;
		}
	}
	return numsArray;
}
