// Takes an array of objects as input, where each object has a 'name' property.
// Returns an array containing the 'name' property from each object in the input array.
function getNames(data) {
  // Using the map function to iterate over each object in the input array.
  // For each object, extract and return the 'name' property.
  return data.map(function (item) {
    return item.name;
  });
}
