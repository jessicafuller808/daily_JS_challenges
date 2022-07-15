/**
 * *8 kyu - Remove Exclamation Marks
 * TODO: Write a function which removes all exclamation marks from a given string.
 */

 function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
  }

  console.log(removeExclamationMarks("Hello World!")); // Hello World
  console.log(removeExclamationMarks("HQknuKnUUM!WDxMNHvuyM GEUhTRlTNv!qWzPEjjvmk")); // HHQknuKnUUMWDxMNHvuyM GEUhTRlTNvqWzPEjjvmk