/**
 * *8kyu - Sum Mixed Array
 * TODO: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
 */

 function sumMix(x){
    let sum = 0;
    x.forEach( e => {
      sum += parseInt(e);
    });
    return sum;
  }

console.log(sumMix([9, 3, '7', '3'])); // 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42