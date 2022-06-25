/**
 * 8kyu - Convert a String to an Array
 * TODO: Write a function to split a string and convert it into an array of words.
 * 
 */

 function stringToArray(string){
    let arr = string.split(" ");
    return arr;
}


console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]

console.log(stringToArray("I love arrays they are my favorite")); //["I", "love", "arrays", "they", "are", "my", "favorite"]
