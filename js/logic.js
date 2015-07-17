/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/
var array1 = [1,2,3,4];
function sumAll(options){
    var sumOf =0;
  for (var i = 0; i < options.length; i++) {
    sumOf += options[i];

  }
    console.log(sumOf);
    return sumOf;
}
// sumAll(array1);

function averageAll(options){
  for (var i = 0; i < options.length; i++) {
  

  }
}
averageAll(array1);
