var $modal = document.querySelector('.modal');
var $addEntryButton = document.querySelector('.add-entry-button');

document.addEventListener('click', function (event) {
  if (event.target === $addEntryButton) {
    $modal.className = 'modal';
  }

});
