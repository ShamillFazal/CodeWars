function generateHashtag(str) {
  // split string into array

  const sWords = str.split(" ");

  // check if the word is not empty then loop through the array capitalising first letters

  for (let i = 0; i < sWords.length; i++) {
    if (sWords[i]) {
      sWords[i] = sWords[i][0].toUpperCase() + sWords[i].substr(1);
    }
  }

  // create a new variable and join the array without spaces

  const contents = sWords.join("");

  // join # with string
  let result = "#" + contents;

  if (result.length > 140 || result === "#") {
    return false;
  }

  // if > 140 character || empty return false
  return result;
}
