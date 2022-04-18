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

// filters the alphabet array and establishes sub arrays of the key value pairs converted to strings.
const filtered = alphaArr.filter(([key, value]) => typeof value === 'string');



// Accepts a string as a parameter
function alphaPos(str) {
    // Creates new string to transform str param into all lower case
    let lowerStr = str.toLowerCase();
    // setups a new string to house alphabet keys as strings
    let newStr = "";
    // iterates through the string's characters
    for (i = 0; i < lowerStr.length; i++) {
        //for each string character, check if it's included in the alphabet array. If found, return the string at the 0 index (houses our alphabet obj).
        alphaArr.forEach(element => {
            if (element.includes(lowerStr[i])) {
                newStr += (element[0] + " ");
                console.log(newStr);
            }
        });
    }
}

alphaPos("Let's see if this will work out");
