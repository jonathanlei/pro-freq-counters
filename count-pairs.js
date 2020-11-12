'use strict';
/* takes in a number array and a target sum, returns how many pairs add up to the sum */

function countPairs(numsArr, targetSum) {
	let numFrequencyCounter = createFrequencyCounter(numsArr);
	let pairCount = 0;

	for (let num of numsArr) {
		let numNeeded = targetSum - num;

		//if num and numNeeded are the same number, check for freq. value greater than 1
		if (num === numNeeded && numFrequencyCounter.get(num) > 1) {
			let numVal = numFrequencyCounter.get(num);
			pairCount++;
			numFrequencyCounter.set(num, numVal - 2);
		} else if (num === numNeeded) {
			//if num and numNeed are the same number, but only one exist in the array, it's not a pair
			continue;
		} else if (numFrequencyCounter.has(numNeeded) && numFrequencyCounter.get(numNeeded) > 0) {
			//if numNeeded is in the frequency counter, decrease value by 1, add  1 to the pair
			let numVal = numFrequencyCounter.get(num);
			let numNeededVal = numFrequencyCounter.get(numNeeded);

			pairCount++;
			numFrequencyCounter.set(num, numVal - 1);
			numFrequencyCounter.set(numNeeded, numNeededVal - 1);
		}
	}

	return pairCount;
}

function createFrequencyCounter(numsArr) {
	let frequencyCounter = new Map();
	for (let num of numsArr) {
		let numCount = frequencyCounter.get(num) || 0;
		frequencyCounter.set(num, numCount + 1);
	}
	return frequencyCounter;
}
