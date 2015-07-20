/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

function getAllValues(){
var options = document.getElementsByName("prices")[0];
var values = [];
  for (var i = 0; i < options.length; i++) {
    // values = values.push(options[i].value);
    values.push(options[i].value);
  }
  // return values;
  // console.log(values);
  return values;
}
allValues = getAllValues();

sum(allValues);
average(allValues);

//
var sumAllButton = document.getElementById("sum-all");
function sumAll(){
  sumAllButton.addEventListener("click", function(){
    var answer = sum(allValues);
    }
  );
  console.log(answer);
}
sumAllButton();
//document.getElementById("sum-all").addEventListener("click", function(){console.log("hello")})
//sumAllButton.addEventListener("click", function(){document.getElementById("answer").innerHTML = sum(allValues)})
