let modalElement = document.querySelector(".modal-container");
let buttonWindow = document.getElementById("buttonModal");
let closeButton = document.querySelector(".modal-close-button");

buttonWindow.onclick = function() {
  modalElement.style.display = "flex";
}

closeButton.onclick = function() {
  modalElement.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalElement) {
    modalElement.style.display = "none";
  }
}
