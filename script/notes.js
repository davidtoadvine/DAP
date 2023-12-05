const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".note-btn");
const deleteAllButton = document.getElementById("delete-all-btn");
const deleteAllConfirm = document.getElementById("delete-all-confirm");
const blobExportButton = document.getElementById("blob-btn");
const fileInput = document.getElementById("file-input");

let notes = document.querySelectorAll(".input-box");

const openDeleteButton = document.getElementById('delete-all-btn');
const closeDeleteButton = document.getElementById('closePopupButton');
const deleteOverlay = document.getElementById('popupOverlay');


//display notes that are stored
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
  populatePageWithJSON(localStorage.getItem("notes"))
}
showNotes();

//event listeners for deletion process buttons
openDeleteButton.addEventListener('click', () => {
  deleteOverlay.style.display = 'flex';
});

closeDeleteButton.addEventListener('click', () => {
  deleteOverlay.style.display = 'none';
});

deleteAllConfirm.addEventListener("click", () => {
  deleteOverlay.style.display = 'none';
  localStorage.clear();
  showNotes();
});

//updates note storage 
function updateStorage() {
  localStorage.setItem("notes", JSON.stringify(Array.from(notesContainer.children).map(note => ({ content: note.textContent.trim() }))));
}

//creates a new note box
function createNote() {
  let inputBox = document.createElement("h2");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.innerHTML = '&nbsp';

  notesContainer.appendChild(inputBox);
  img.src = "./images/trash.png";
  img.alt = "Delete note";
  inputBox.appendChild(img);
  updateStorage();
}

//updates stores when notes are removed or typed in
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
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

//exports JSON blob when button is clicked
blobExportButton.addEventListener("click", () => {
  var notesArray = Array.from(notesContainer.children).map(note => ({ content: note.textContent.trim() }));
  var jsonData = JSON.stringify(notesArray);
  var blob = new Blob([jsonData], { type: 'application/json' });
  var downloadLink = document.createElement('a');
  downloadLink.download = 'exported_data.json';
  downloadLink.href = window.URL.createObjectURL(blob);0
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

//allowing for upload of JSON file
fileInput.addEventListener("change", function (event) {
  var fileInput = event.target;

  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var jsonContent = e.target.result;
      populatePageWithJSON(jsonContent);
    };
    reader.readAsText(file);
  }
});

//populates page with uploaded JSON data
function populatePageWithJSON(jsonContent) {
  var notesArray = JSON.parse(jsonContent);

  notesContainer.innerHTML = '';

  notesArray.forEach(note => {
    let inputBox = document.createElement("h2");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.innerHTML = note.content;
    notesContainer.appendChild(inputBox);
    img.src = "./images/trash.png";
    img.alt = "Delete note";
    inputBox.appendChild(img); //////////////
    updateStorage();
  });}


  //functionality for creating new notes
  let makeNote = document.getElementById("make-note-btn");

  makeNote.addEventListener("click", ()=>{
    createNote();
  });