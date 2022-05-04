/**
 * TODO: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
 * ? Could not get this one to work properly with negative numbers, need to revist
 * *Note: a and b are not ordered!
 * Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */

//   function getSum(a, b){
//     let sum = a;
//    for(a = a; a < b; a++){
//     sum += a;
//     console.log(sum);
//    }
//    console.log(sum += b);
// }

// getSum(0,3);

function getSum(a, b) {
    this.a = a;
    this.b = b;

    //creating an object that holds the total and 2 functions that loops through, adding to the total.
    let sum = {
        total: 0,
        loopA: () => {
            for(sum.total = a; a < b; a++){ //sets counter at a, if a is smaller then increments it by one. a is added each time.
                sum.total += a;
            }
            return sum.total; //adds b for complete total
        },
        loopB: () => {
            for(sum.total = b; b < a; b++){//sets counter at b, if b is smaller then increments it by one. b is added each time.
                console.log(sum.total);
                console.log(sum.total += b);
            }
            return sum.total;//adds 'a' for a complete total & returns it
        }
    }
    //conditionals that initialize the total and call either function depending on which variable is smallest
    if (a < b) {
        return sum.loopA();
    } else if (b < a) {
        return sum.loopB();
    } else if (a === b) {
        return a;
    }

}
    

console.log(getSum(0,-1));

