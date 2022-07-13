/**
 * *8kyu - How good are you really?
 * TODO: You receive an array with your peers' test scores. Calculate the average and compare your score.
 * Return True if you're better, else False!
 * 
 */

 function betterThanAverage(classPoints, yourPoints) {
    let classSum = 0;
    let avg;

    // Sum all the values of the array.
    classPoints.forEach(element => {
        classSum += element;
    });
    // Divide the sum by the length of the array.
    avg = classSum / classPoints.length;

    return yourPoints > avg ? true : false;
  }

  
  console.log(betterThanAverage([2, 3], 5)) //true
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) //true