/**
 * *8kyu - Get the Mean of an Array
 * It's the academic year's end, fateful moment of your school report. 
 * The averages must be calculated. All the students come to you and entreat you to calculate their average for them.
 * You just need to write a script.
 * TODO: Return the average of the given array rounded down to its nearest integer.
 * The array will never be empty.
 */

 function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0;
    marks.map(x => sum += x);
    return Math.floor(sum / marks.length);
  }

  console.log(getAverage([1,2,3,4,5,]));