/**
 * 7kyu - Shortest Word
 * TODO: Simple, given a string of words, return the length of the shortest word(s).
 */

 function findShort(s){
   let arr = s.split(' ');
   let newArr = arr.map(e => { return e.length })
   console.log(Math.min(...newArr));
}

 findShort("turns out random test cases are easier than writing out basic ones");
 findShort("bitcoin take over the world maybe who knows perhaps");
 findShort("Let's travel abroad shall we");