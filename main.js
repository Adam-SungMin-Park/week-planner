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
    $bodyBackground.className="gray-background";
  } if (event.target.innerText === "Sunday" || event.target.innerText === "Monday" || event.target.innerText === "Tuesday" || event.target.innerText === "Wednesday" || event.target.innerText === "Thursday" || event.target.innerText === "Friday" || event.target.innerText === "Saturday"){
    $tableTitle.textContent="Schedule Events for " + event.target.innerText;
  }
});

var $addSection = document.querySelector(".add");
var $viewSection= document.querySelector(".view");

function swap (name){
  if (name==="add"){
    $addSection.className="add";
    $viewSection.className="hidden";
  }else if (name==="view"){
    $viewSection.className="view";
    $bodyBackground.className = "";
    $addSection.className="hidden";
  }
}




var $formAdd = document.querySelector("#form-add-entry");

$formAdd.addEventListener("submit", function(event){
  event.preventDefault();
  data.time=$formAdd.elements.time.value;
  data.description=$formAdd.elements.description.value;
  var dataJSON=JSON.stringify(data);
  localStorage.setItem("data", dataJSON);
  swap("view");
  var userData = JSON.parse(localStorage.getItem('data'));
})

document.addEventListener("DOMContentLoaded",function(event){
  swap("add");

})


function renderTable(day){
  var $completeTable =document.createElement('div');
  $completeTable.setAttribute('class','schedule-events-day');

  var $timeTable = document.createElement('div');
  $timeTable.setAttribute('class','time-table');
  $completeTable.appendChild($timeTable);


  var $thead =document.createElement('thead');
  $thead.appendChild($timeTable);

  var $tr = document.createElement('tr');
  $tr.textContent = data.elements.time;
  $tr.appendChild($thead);


  return $completeTable;
}
