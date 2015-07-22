
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
