/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
*/

var array1 = [1,2,3,4,0];
function sum(options){
  var sumOf =0;
  for (var i = 0; i < options.length; i++) {
    sumOf += +options[i];
  }
    return sumOf;
}

function average(options){
  var numAverage = 0;
    x = sum(options);
    numAverage = x / options.length;
    return numAverage;
}

function count(options){
  selectedArray = options.length;
  return selectedArray;
}

// Function to get all values within the list named "prices"
function allValues(){
var options = document.getElementsByName("prices")[0];
var values = [];
  for (var i = 0; i < options.length; i++) {
    // values = values.push(options[i].value);
    values.push(options[i].value);
  }
  return values;
}

function selectedValues(){
var options = document.getElementsByName("prices")[0];
var   values = [];
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true){
    values.push(options[i].value);
    }
  }
  return values;
}
