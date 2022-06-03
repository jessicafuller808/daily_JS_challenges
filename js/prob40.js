/**
 **8kyu - Transportation on vacation
 * You will need a rental car in order for you to get around in your vacation. 
 * Every day you rent the car costs $40. 
 * If you rent the car for 7 or more days, you get $50 off your total.
 * Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
 * TODO: Write a code that gives out the total amount for different days(d).
 */

 function rentalCarCost(d) {
    // Your solution here
    if (d >= 7) {
        d = (d * 40) - 50;
    } else if (d >= 3) {
        d = (d * 40) - 20;
    } else {
        d *= 40;
    }
    return d;
  }

  console.log(rentalCarCost(2));