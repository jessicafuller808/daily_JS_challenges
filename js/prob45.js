/**
 * *8kyu - Sum of positive
 * TODO: You get an array of numbers, return the sum of all of the positives ones.
 * *Note: if there is nothing to sum, the sum is default to 0.
 */

 function positiveSum(arr) {
   let sum;

   // if there's nothing in the array, set sum to 0 and return it
  if (arr.length === 0) {
    sum = 0;
    return sum;
  }

  //loop through each element and add it to sum if it's > than 0. return sum
  arr.forEach(e => {
    if (e > 0) {
      sum = sum + e;
    }
    return sum;
  });
  
}


console.log(positiveSum([]));
console.log(positiveSum([1,-4,7,12])); //1 + 7 + 12 = 20