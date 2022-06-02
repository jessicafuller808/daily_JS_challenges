/**
 * 8 kyu - Do I get a bonus?
 * TODO: Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
 * * If bonus is true, the salary should be multiplied by 10.
 * * If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
 * *Return the total figure the individual will receive as a string prefixed with "£"
 */

 function bonusTime(salary, bonus) {
    // your code here
    bonus === true? salary *= 10 : salary = salary;
    return `£` + salary;
    }

    console.log(bonusTime(10000, true));