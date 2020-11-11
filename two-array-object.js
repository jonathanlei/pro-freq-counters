'use strict';
// add whatever parameters you deem necessary
/* this function takes in two arrays and creates an object
with keys from the first array and values from the second array */

function twoArrayObject(keys, values) {
	let object = {};

	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];

		if (values[i] !== undefined) {
			object[key] = values[i];
		} else {
			object[key] = null;
		}
	}

	return object;
}
