var $modal = document.querySelector('.modal');
var $addEntryButton = document.querySelector('.add-entry-button');
var $bodyBackground=document.querySelector("body");
var $days = document.querySelectorAll('.day');
console.log($days);

/**function scheduledEventsDay(event){

   //var h2 = document.createElement('h2');
  // for (var i = 0; i < $days.length; i++){
  //   if ()
  // }
}**/

var $tableTitle = document.querySelector(".table-title")

document.addEventListener('click', function (event) {
  if (event.target === $addEntryButton) {
    $modal.className = 'modal white-background';
    $bodyBackground.className="gray-background"
  } if (event.target.innerText === "Sunday" || event.target.innerText === "Monday" || event.target.innerText === "Tuesday" || event.target.innerText === "Wednesday" || event.target.innerText === "Thursday" || event.target.innerText === "Friday" || event.target.innerText === "Saturday"){
    $tableTitle.textContent="Schedule Events for " + event.target.innerText
  } if (event.target.innerText){}

});

var $addSection = document.querySelector(".add")
var $viewSection= document.querySelector(".view")

function swap (name){
  if (name==="add"){
    $addSection.className="add"
    $viewSection.className="hidden"
  }else if (name==="view"){
    $viewSection.className="view"
    $addSection.className="hidden"
  }
}

var $formAdd = document.querySelector("#form-add-entry")
var data = {
  day:"",
  time:"",
  description:""
}

$formAdd.addEventListener("submit", function(event){
  //event.preventDefault()//
  data.time=$formAdd.elements.time.value
  data.description=$formAdd.elements.description.value
  var dataJSON=JSON.stringify(data)
  localStorage.setItem("data", dataJSON)


  swap("view")
})

document.addEventListener("DOMContentLoaded",function(event){
  swap("add")
})
