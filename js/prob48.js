/**
 * 8kyu - Removing Elements
 * TODO: Take an array and remove every second element from the array.
 * * Always keep the first element and start removing with the next element.
 * Ex: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 */

 function removeEveryOther(arr){
    let newArr = arr.filter( e => e % 2 == 0);
    return newArr;
  }

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));