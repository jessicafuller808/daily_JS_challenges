/* *
6 kyu Replace with Alphabet Position
TODO: In this kata you are required to, given a string, replace every letter with its position in the alphabet.
* If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example:
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/ 

let alphabet = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'};

//converts the alphabet object into an array
let alphaArr = Object.entries(alphabet);

// filters the alphabet array and establishes sub arrays of key value pairs converted to strings.
const filtered = alphaArr.filter(([key, value]) => typeof value === 'string');

console.log(alphaArr);

function alphaPos(str) {
    for (i = 0; i < str.length; i++) {
        str[i].toLowerCase();
        //for each character compare it to a value in the alphabet object. When the value is found, return the key.
    }
}

//alphaPos("Let's see if this will work out");
