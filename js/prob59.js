/**
 * *8kyu - Remove First & Last Character
 * TODO: create a function that removes the first and last characters of a string.
 */

 function removeChar(str){
  //let newStr1 = str.replace(str.charAt(0), "");
  //let newStr2 = newStr1.replace(newStr1.charAt(newStr1.length-1), "");
  //return newStr2;
  newStr = str.slice(1, -1);
  return newStr;
 };
 
 
  console.log(removeChar('eloquent')); //loquen
  console.log(removeChar('country')); //ountr
  console.log(removeChar('k8598')); //859