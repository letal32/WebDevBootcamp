var ul = document.querySelector("ul"); 
var input = document.querySelector("input[type=text]"); 

init();


function init() {

  addListeners();
    
  input.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        var li = document.createElement("li");
        var span = document.createElement("span");
        var textSpan = document.createTextNode("X");
        var textLi = document.createTextNode(" " + this.value);
        span.appendChild(textSpan);
        li.appendChild(span);
        li.appendChild(textLi);
        ul.appendChild(li);
        addListeners();
        this.value = "";
    }
  });

}

//Add the event listeners
function addListeners(){

    var lis = document.getElementsByTagName("li");
    var ulSpans = document.querySelectorAll("ul span");

    for (var i = 0; i < lis.length; i++){
        lis[i].removeEventListener("click", markCompleted);
        lis[i].addEventListener("click", markCompleted);
    }

    for (var i = 0; i < ulSpans.length; i++){
        ulSpans[i].removeEventListener("click", removeTodo);
        ulSpans[i].addEventListener("click", removeTodo);
    }
}


//Mark completion of an element whenever click on a li element
function markCompleted() {
    this.classList.toggle("completed");
}

//Remove a todo from the calling span element
function removeTodo(event) {
    var parent = this.parentNode;
    fadeOut(parent, 0.05, function(){
        parent.parentNode.removeChild(parent);
    });
    event.stopPropagation();
}

//Fade an element with the given rate (0-1) and then executes the specified function
function fadeOut(element, rate, func){

    element.style.opacity = 1;

    (function fade() {
        element.style.opacity -= rate;
        if (Number(element.style.opacity) < 0){
            element.style.display = "none";
            func();
        } else {
            requestAnimationFrame(fade);
        }
    })();
}