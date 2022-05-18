/**
 * 8kyu - Convert a Boolean to a String
 * TODO: Implement a function which converts the given boolean value into its string representation.
 */

 function booleanToString(b){
    if (b === true) {
        return 'true';
    } else {
        return 'false';
    }
  }

  console.log(booleanToString(`${2*2}`));