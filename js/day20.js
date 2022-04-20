/* *
TODO: Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

* For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

* Note: The function accepts an integer and returns an integer
*/

 

function squareDigits(num){
    // turn num into a string
    num = num.toString();
    let charStr = "";

    // loop through each character
    for (let i = 0; i < num.length; i++) {
        let char = num.charAt(i);
        // for each char, square it then, add to char string.
        charStr += char.toString() ** 2;
    }
    // convert the string to a number
    charStr = parseInt(charStr);
    // return the number
    return charStr;
    
  }

  squareDigits(45);