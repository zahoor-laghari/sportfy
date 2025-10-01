function showDetails(name, info) {
  const modal = document.getElementById("playerModal");
  const modalText = document.getElementById("modalText");

  modalText.innerHTML = `<h2>${name}</h2><p>${info}</p>`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("playerModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("playerModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
