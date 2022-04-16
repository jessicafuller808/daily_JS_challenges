/* * 7 kyu
TODO: Return the number (count) of vowels in the given string.

*We will consider a, e, i, o, u as vowels for this Kata (but not y).

*The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    
    for (var i = 0; i < str.length; i++) {
        for (const element of vowels) {
            str.charAt(i) === element ? vowelsCount++ : vowelsCount = vowelsCount;
        };
      }
    console.log(vowelsCount);
  } 

  getCount("refrejadadora");