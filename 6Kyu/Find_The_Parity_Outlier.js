function findOutlier(integers) {

  // Repeat for odd numbers
  // Whichever new array contains one number
  // Return array

  // Create empty array's to store both odd and even numbers

  let oddNumbers = [];
  let evenNumbers = [];

  // Loop through the input array checking if numbers are even then push to even array.
  // If the number is odd then push to odd array.

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNumbers.push(integers[i]);
    } else {
      oddNumbers.push(integers[i]);
    }
  }

  // Check if the oddNumbers array contains 1 element. If so, return elements
  // If not then return evenNumbers array

  if (oddNumbers.length === 1) {
    return oddNumbers[0]; // Return the outlier integer
  } else {
    return evenNumbers[0]; // Return the outlier integer
  }
}
