
const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".note-btn");
const deleteAllButton = document.getElementById("delete-all-btn");
const deleteAllConfirm = document.getElementById("delete-all-confirm");


let notes = document.querySelectorAll(".input-box");


// Get the button and popup elements
const openDeleteButton = document.getElementById('delete-all-btn');
const closeDeleteButton = document.getElementById('closePopupButton');
const deleteOverlay = document.getElementById('popupOverlay');

//display current notes
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


//For delete button
// Show the popup when the button is clicked
openDeleteButton.addEventListener('click', () => {
  deleteOverlay.style.display = 'flex';
});

// Close the popup when the close button is clicked
closeDeleteButton.addEventListener('click', () => {
  deleteOverlay.style.display = 'none';
});

deleteAllConfirm.addEventListener("click", () => {
  deleteOverlay.style.display = 'none';
  localStorage.clear();
  showNotes();
})

// Adds notes as they are typed
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


// Deletes a notes
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



// Blob download functionality
document.getElementById("blob-btn").addEventListener("click", () => {
  // Step 1: Retrieve data from localStorage
  var localStorageData = localStorage.getItem('notes'); // Replace 'notes' with the actual key you used to store data

  // Check if data exists in localStorage
  if (localStorageData) {
    // Step 2: Convert data into a format suitable for a Blob (e.g., JSON string)
    var jsonData = JSON.stringify(localStorageData);

    // Step 3: Create a Blob from the formatted data
    var blob = new Blob([jsonData], { type: 'application/json' });

    // Step 4: Create a link element
    var downloadLink = document.createElement('a');

    // Step 5: Set the download link attributes
    downloadLink.download = 'exported_data.json';
    downloadLink.href = window.URL.createObjectURL(blob);

    // Step 6: Append the link to the body
    document.body.appendChild(downloadLink);

    // Step 7: Trigger a click on the link to start the download
    downloadLink.click();

    // Step 8: Remove the link from the body
    document.body.removeChild(downloadLink);
  } else {
    console.log('No data found in localStorage for the specified key.');
  }
});















