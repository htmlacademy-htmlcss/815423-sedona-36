let modalElement = document.querySelector(".modal-container");
let buttonWindow = document.getElementById("buttonModal");
let closeButton = document.querySelector(".modal-close-button");

buttonWindow.onclick = function() {
  modal.style.display = "flex";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
