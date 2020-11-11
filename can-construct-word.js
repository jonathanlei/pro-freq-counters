// add whatever parameters you deem necessary & write doc comment

/* takes in a word string and a letters string, and return true if the word can be constructed out of the letters*/
function canConstructWord(word, letters) {
  // create fcs for word and letter 
  let wordFrequencyCounter = createFrequencyCounter(word);
  let lettersFrequencyCounter = createFrequencyCounter(letters);
  // compare frequencies 
  for (let key in wordFrequencyCounter) {
    if (lettersFrequencyCounter[key] === undefined) {
      return false;
    }
    if (wordFrequencyCounter[key] > lettersFrequencyCounter[key]) {
      return false;
    }
  }
  return true;
}
/* takes in a string and return an object with letters as key and their frequencies as values */
function createFrequencyCounter(str) {
  let frequencyCounter = {};
  for (let letter of str) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }
  return frequencyCounter;
}

