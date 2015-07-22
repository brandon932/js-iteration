/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
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

function sumAll(){
   answer.innerHTML = sum(allValues());
}
function countSelected(){
  answer.innerHTML = count(selectedValues());
}
function sumSelected(){
  answer.innerHTML = sum(allValues());
}
function averageAll(){
  answer.innerHTML = average(allValues());
}
function averageSelected(){
  answer.innerHTML = average(selectedValues());
}


window.onload = function(){
 var sumAllButton = document.getElementById("sum-all");
 var countSelectedButton = document.getElementById("count-selected");
 var sumSelectedButton = document.getElementById("sum-selected");
 var averageAllButton = document.getElementById("average-all");
 var averageSelectedButton = document.getElementById("average-selected");

  sumAllButton.addEventListener("click", function(){
    sumAll();
  });
  countSelectedButton.addEventListener("click", function(){
    countSelected();
  });
  sumSelectedButton.addEventListener("click", function(){
    sumSelected();
  });
  averageAllButton.addEventListener("click", function(){
    averageAll();
  });
  averageSelectedButton.addEventListener("click", function(){
    averageSelected();
  });



};


//document.getElementById("sum-all").addEventListener("click", function(){console.log("hello")})
//sumAllButton.addEventListener("click", function(){document.getElementById("answer").innerHTML = sum(allValues)})
