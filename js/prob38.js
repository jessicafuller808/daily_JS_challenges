/**
 * 8kyu - Find Maximum and Minimum Values of a List
 * TODO: make two functions that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
 */

 var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}