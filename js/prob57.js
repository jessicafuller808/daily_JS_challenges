/**
 * *7kyu - The Highest Profit Wins
 * TODO: Write a function that returns both the minimum and maximum number of the given list/array.
 * 
 */

 function minMax(arr){
    let newArr = [];
    newArr.push(Math.min(...arr));
    newArr.push(Math.max(...arr));
    return newArr;
  }


  console.log(minMax([1, 2, 3, 4, 5])); //[1, 5]
  console.log(minMax([2334454, 5])); //[5, 2334454]