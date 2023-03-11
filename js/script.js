let modal = document.getElementById('modalWindow');
let buttonWindow = document.getElementById("buttonModal");
let closeButton = document.getElementsByClassName("modal-container-close")[0];

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
