/**
 * * 8kyu - Find the remainder
 * TODO: Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
 * * Division by zero should return NaN.
 */

 function remainder(n, m){
    let denom = Math.max(n, m);
    let num = Math.min(n, m);
    return denom % num;
    
  }

  console.log(remainder(17,5)); //2
  console.log(remainder(1, 0)); //NAN