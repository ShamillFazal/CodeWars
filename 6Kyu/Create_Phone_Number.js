function createPhoneNumber(numbers) {
  // Take the first three numbers and put them inside brackets
  const areaCode = `(${numbers.slice(0, 3).join("")})`;

  // Take the next three numbers and join together
  const firstNum = `${numbers.slice(3, 6).join("")}`;

  // Take the last four numbers and add a hyphen
  const secondNum = `-${numbers.slice(6).join("")}`;

  // Concatenate the parts and return the phone number
  return `${areaCode} ${firstNum}${secondNum}`;
}
