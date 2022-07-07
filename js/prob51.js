/**
 * *7kyu - Wealth equality, finally!
 * The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.
 * Their first act in power is absolute wealth equality through coercive redistribution.
 * TODO: Create a function that redistributes all wealth equally among all citizens.
 * Wealth is represented as an array/list where every index is the wealth of a single citizen. 
 * The function should mutate the input such that every index has the same amount of wealth. 
 * *MUTATE the input array/list, don't return anything.
 * 
 * EXAMPLE:
 * wealth = [5, 10, 6]  # This represents:
                     # citizen 1 has wealth 5
                     # citizen 2 has wealth 10
                     # citizen 3 has wealth 6
                     
redistribute_wealth(wealth) # mutates wealth list
wealth => [7, 7, 7] # wealth has now been equally redistributed
 */

//add all of the indicies together
//divide the sum by the length of the array to get the average
//replace each index with the average

function redistributeWealth(wealth) {
    let sum = 0;
    let avg;
    wealth.forEach(element => sum += element);
    avg = sum / wealth.length;
    wealth.fill(avg);
    console.log(wealth);
  }

console.log(redistributeWealth([5,5,5,5,5]));
console.log(redistributeWealth([0, 10]));