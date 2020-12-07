var $modal = document.querySelector('.modal');
var $addEntryButton = document.querySelector('.add-entry-button');
var $bodyBackground=document.querySelector("body");
var $days = document.querySelectorAll('.day');
console.log($days);

function scheduledEventsDay(event){
  
  // var h2 = document.createElement('h2');
  // for (var i = 0; i < $days.length; i++){
  //   if ()
  // }
}



document.addEventListener('click', function (event) {
  if (event.target === $addEntryButton) {
    $modal.className = 'modal white-background';
    $bodyBackground.className="gray-background"
  }

});
