/**
 * 8kyu - Convert Number to Reversed Array of Digits
 * TODO: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 * Example:
    348597 => [7,9,5,8,4,3]
    0 => [0]
 */

    function digitize(n) {
        //code here
        let arr = [];
        for(let i = 0; i < n.length; i++) {
            arr.push(n[i]);
        }
        console.log(arr);
      }

    console.log(digitize(1234567));