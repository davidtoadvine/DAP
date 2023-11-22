const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".note-btn");
const deleteAllButton = document.getElementById("delete-all-btn");
const deleteAllConfirm = document.getElementById("delete-all-confirm");

let notes = document.querySelectorAll(".input-box");
showNotes();


 // Get the button and popup elements
 const openPopupButton = document.getElementById('delete-all-btn');
 const closePopupButton = document.getElementById('closePopupButton');
 const popupOverlay = document.getElementById('popupOverlay');

 // Show the popup when the button is clicked
 openPopupButton.addEventListener('click', () => {
   popupOverlay.style.display = 'flex';
 });

 // Close the popup when the close button is clicked
 closePopupButton.addEventListener('click', () => {
   popupOverlay.style.display = 'none';
 });

 deleteAllConfirm.addEventListener("click", ()=>{
  popupOverlay.style.display = 'none';
  localStorage.clear();
  showNotes();

   })

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
  else if (e.target.tagName === "H2") {

    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
      note.onkeyup = function () {
        updateStorage();
      }
    })
  }
});