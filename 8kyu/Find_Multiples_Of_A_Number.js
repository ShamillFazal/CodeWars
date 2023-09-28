function findMultiples(integer, limit) {
    //your code here
    // create an empty array
    // find out if integer is divisible by limit
    // if so push all multiples of integer up to and including the limit.
    
    let multiples = [];
    
    for(let i = integer; i <= limit; i+=integer) {
      multiples.push(i)
    }
    return multiples;
  }
  