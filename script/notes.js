const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".note-btn");
let notes = document.querySelectorAll(".input-box");
showNotes();

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");

}
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createButton.addEventListener("click", (e) => {
  let inputBox = document.createElement("h2");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  //this works but isn't perfect
  inputBox.innerHTML = '&nbsp';

  notesContainer.appendChild(inputBox);
  img.src = "./images/trash.png";
  img.alt = "Delete note"
  inputBox.appendChild(img);
});
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    ///delete image
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "P") {

    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
      note.onkeyup = function () {
        updateStorage();
      }
    })
  }
});