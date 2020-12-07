var $modal = document.querySelector('.modal');
var $addEntryButton = document.querySelector('.add-entry-button');
var $bodyBackground=document.querySelector("body")

document.addEventListener('click', function (event) {
  if (event.target === $addEntryButton) {
    $modal.className = 'modal white-background';
    $bodyBackground.className="gray-background"
  }

});
