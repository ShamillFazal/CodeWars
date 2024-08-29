function numbersOfLetters(integer) {
  // create an object that stores each number 0-9 to its corresponding word
  const wordDigit = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  // convert the number to a string representation of its digits in words
  function numberToWord(number) {
    const numStr = number.toString();
    let word = "";

    // loop through each digit and convert it to its word form
    for (let i = 0; i < numStr.length; i++) {
      let digit = numStr[i];
      word += wordDigit[digit];
    }

    return word;
  }

  // create an array to store the sequence of words
  let sequence = [];

  // start a loop that will continue until we reach a stable equilibrium
  while (true) {
    let word = numberToWord(integer);

    sequence.push(word);

    let wordLength = word.length;

    // check if we have reached a stable equilibrium
    if (wordLength === integer) {
      break; // exit the loop if the length of the word matches the number
    }

    // update the integer to be the length of the word for the next iteration
    integer = wordLength;
  }

  return sequence;
}
