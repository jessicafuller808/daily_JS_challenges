/**
 * 8kyu - Abbreviate a Two Word Name
 * TODO: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 */

 function abbrevName(name){
    let arr = name.split(' ');
    return arr[0].toUpperCase().charAt(0) + '.' + arr[1].toUpperCase().charAt(0);
}

console.log(abbrevName("Sam Harris")); // S.H
console.log(abbrevName("patrick feeney")); // P.F