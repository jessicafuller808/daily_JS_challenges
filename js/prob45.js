/**
 * 8kyu - Count of positives / sum of negatives
 * Given an array of integers.
 * TODO: Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
 * 0 is neither positive nor negative.
 * If the input is an empty array or is null, return an empty array.
 * 
 */

 function countPositivesSumNegatives(input) {
    let negSum;
    let posSum;
    let newArr =[];

    input.forEach(e => {
        if (e % 2 === 0) {
            posSum += e;
        } else {
            negSum +=e;
        }
    });

    newArr.push(posSum, negSum);
    return newArr;
}

console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65].