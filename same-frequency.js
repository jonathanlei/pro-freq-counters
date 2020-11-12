'use strict';

/*this function takes in two positive integers and returns 
a boolean indicating whether the frequency of digits of the two integers are the same */

function sameFrequency(integer1, integer2) {
	let int1String = String(integer1);
	let int2String = String(integer2);

	if (int1String.length !== int2String.length) return false;

	let int1FrequencyCounter = createFrequencyCounter(int1String); 
	let int2FrequencyCounter = createFrequencyCounter(int2String);

	for (let key in int1FrequencyCounter) {
		if (int1FrequencyCounter[key] !== int2FrequencyCounter[key]) {
			return false;
		}
	}

	return true;
}

function createFrequencyCounter(str) {
  let frequencyCounter = {};
  for (let letter of str) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }
  return frequencyCounter;
}
