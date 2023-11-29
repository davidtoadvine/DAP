
let attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];


// Reset input on load
function resetInput() {
  for (let i = 0; i < attributes.length; i++) {
    var base = document.getElementById(`quantity-${attributes[i]}`);
    base.value = 10;
  }
}
window.onload = resetInput();

////UPDATE FUNCTIONS////////////////////////////////////////////////////////////////////////////////////

// Updates all total scores whenever an adjustment is made to
// a base score or ancestry. Could possibly be more targeted, but this
// was a convenient solution that could be called after complex
// ancestry and subrace choices.
function updateTotal(){
  //let attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

  for(let i =0; i<6;i++){
  fieldName = $(`.btn-number${i+1}`).attr('data-field');
var input = $("input[name='" + fieldName + "']");
var currentVal = parseInt(input.val());
let target = document.getElementById(`total-score-${attributes[i]}`);
  
  target.textContent = parseInt(document.getElementById(`${attributes[i]}-anc`).innerText )+ currentVal;
  }
  }

// Updates modifier column
  function updateMod() {
    
 //   let attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

for (let i = 0; i < attributes.length; i++) {

  let base = document.getElementById(`quantity-${attributes[i]}`);
  let mod = document.getElementById(`${attributes[i]}-mod`);
  let baseValue = parseInt(base.value);
  let vars = [ancStr,ancDex,ancCon,ancInt,ancWis,ancCha];
  let ancScore = vars[i];
  let sum = parseInt(ancScore) + baseValue;
  
  let finalMod =  Math.floor((sum-10)/2);
  if (finalMod >=0){
    mod.innerHTML = "+" + finalMod;
    }
  else{
    mod.innerHTML = "-" + finalMod;
  }}
}

// Calculates and displays total points spent
function updateCost(){
 // let attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  let total = 0;

for (let i = 0; i < attributes.length; i++) {

  let base = document.getElementById(`quantity-${attributes[i]}`);
  let cost = document.getElementById(`${attributes[i]}-cost`);
  let baseValue = parseInt(base.value);

  if(baseValue <= 13){
    cost.innerHTML = baseValue - 8;
  }
  else if(baseValue == 14){
    cost.innerHTML = 7;
  }
  else if(baseValue == 15){
    cost.innerHTML = 9;
  }
  total += parseInt(cost.innerText);
  console.log(total);
  document.getElementById('total-cost').innerText = total + "/27";
}}

////BASE SCORE BUTTONS AND FORMS////////////////////////////////////////////////////////////////////////////////////////

// Functionality for plus and minus buttons
// Because plus and minus button trigger input box change,
// updates to display happen inside input box functionality.
for (let i = 1; i<7;i++){

$(`.btn-number${i}`).click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());

  if (!isNaN(currentVal)) {

    if (type == 'minus') { // decrement value if possible, disable btn if at floor
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
      }

      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }

      
    } else if (type == 'plus') { // increment value if possible, disable btn if at ceiling

      if (currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
      }
      if (parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);
      }
    }
  } else {
    input.val(8);
  }
  ;
});
}


// Functionality for input boxes
for(let i = 1; i < 7; i++){
$(`.input-number${i}`).focusin(function () {
  $(this).data('oldValue', $(this).val());
});


$(`.input-number${i}`).change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');


  // Enable minus button if we're above the floor, make input adhere to floor value
  if (valueCurrent >= minValue) {
    $(`.btn-number${i}[data-type='minus'][data-field="${name}"]`).removeAttr('disabled');
  }
  else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }

//Enable plus button if we're below ceiling, make input adhere to ceiling value
  if (valueCurrent <= maxValue) {
    $(`.btn-number${i}[data-type='plus'][data-field="${name}"]`).removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }

  //update display
  valueCurrent = parseInt($(this).val());
  updateTotal();
  updateMod();
  updateCost();
});

$(`.input-number${i}`).keydown(function (e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode == 65 && e.ctrlKey === true) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
  }
});
}

////DROPDOWNS////////////////////////////////////////////////////////////////////////////////////////////////////////////

////ANCESTRY DROPDOWNS
function resetDropdowns() {
  var dropdown1= document.getElementById('anc-select');
  var dropdown2= document.getElementById('subrace-select');
  dropdown1.selectedIndex = 0; // Set the default selected index (0 for the first option)
  dropdown1.selectedIndex = 0;
}

// Call the resetDropdown function when the page is refreshed
window.onload = resetDropdowns;

let ancStr=0;
let ancDex=0;
let ancCon=0;
let ancInt=0;
let ancWis=0;
let ancCha=0;

 // JavaScript to dynamically populate the subrace dropdown based on the selected race
 document.getElementById('anc-select').addEventListener('change', function() {
  // Get the selected race
  var selectedRace = this.value;
  
  // Get the subrace dropdown
  var subraceDropdown = document.getElementById('subrace');
  
  // Remove existing options
  subraceDropdown.innerHTML = '<option value="" selected>Select a subrace</option>';
  
  // Populate options based on the selected race
  if (selectedRace === 'dwarf') {
    subraceDropdown.removeAttribute('disabled');
    ancStr=0;
ancDex=0;
ancCon=0;
ancInt=0;
ancWis=0;
ancCha=0;
    addOption(subraceDropdown, 'mountain', 'Mountain Dwarf');
    addOption(subraceDropdown, 'hill', 'Hill Dwarf');
  } else if (selectedRace === 'elf') {
    subraceDropdown.removeAttribute('disabled');
    ancStr=0;
ancDex=0;
ancCon=0;
ancInt=0;
ancWis=0;
ancCha=0;
    addOption(subraceDropdown, 'high', 'High Elf');
    addOption(subraceDropdown, 'wood', 'Wood Elf');
    addOption(subraceDropdown, 'dark', 'Drow');
  } else if (selectedRace === 'gnome') {
    subraceDropdown.removeAttribute('disabled');
    addOption(subraceDropdown, 'forest', 'Forest Gnome');
    addOption(subraceDropdown, 'rock', 'Rock Gnome');
  } 
  else if (selectedRace === 'halfling') {
    subraceDropdown.removeAttribute('disabled');
    ancStr=0;
ancDex=0;
ancCon=0;
ancInt=0;
ancWis=0;
ancCha=0;
    addOption(subraceDropdown, 'lightfoot', 'Lightfoot Halfling');
    addOption(subraceDropdown, 'stout', 'Stout Halfling');
  
  
  }
  else if (selectedRace === 'human'){
    // Disable subrace dropdown for races without subraces
    subraceDropdown.setAttribute('disabled', 'disabled');
    ancStr=1;
ancDex=1;
ancCon=1;
ancInt=1;
ancWis=1;
ancCha=1;
  }else if (selectedRace === 'dragonborn'){
    // Disable subrace dropdown for races without subraces
    subraceDropdown.setAttribute('disabled', 'disabled');
    ancStr = 2;
ancDex=0;
ancCon=0;
ancInt=0;
ancWis=0;
ancCha=1;
  }else if (selectedRace === 'tiefling'){
    // Disable subrace dropdown for races without subraces
    subraceDropdown.setAttribute('disabled', 'disabled');
    ancStr=0;
ancDex=0;
ancCon=0;
ancInt=1;
ancWis=0;
ancCha=2;
  }else if (selectedRace === 'half-orc'){
    // Disable subrace dropdown for races without subraces
    subraceDropdown.setAttribute('disabled', 'disabled');
    ancStr=2;
ancDex=0;
ancCon=1;
ancInt=0;
ancWis=0;
ancCha=0;
  }else if (selectedRace === 'half-elf'){
    // Disable subrace dropdown for races without subraces
    subraceDropdown.setAttribute('disabled', 'disabled');
    ancStr=0;
    ancDex=1;
    ancCon=0;
    ancInt=1;
    ancWis=0;
    ancCha=2;
      }
      else if (selectedRace === '0'){
        // Disable subrace dropdown for races without subraces
        subraceDropdown.setAttribute('disabled', 'disabled');
        ancStr=0;
        ancDex=0;
        ancCon=0;
        ancInt=0;
        ancWis=0;
        ancCha=0;
          }

  document.getElementById("str-anc").textContent = ancStr;
  document.getElementById("dex-anc").textContent = ancDex;
  document.getElementById("con-anc").textContent = ancCon;
  document.getElementById("int-anc").textContent = ancInt;
  document.getElementById("wis-anc").textContent = ancWis;
  document.getElementById("cha-anc").textContent = ancCha;
  
  updateTotal();
updateMod();

});

// Function to add options to a dropdown
function addOption(selectElement, value, text) {
  var option = document.createElement('option');
  option.value = value;
  option.text = text;
  selectElement.add(option);
}


////// SUBRACE DROPDOWN ////////

 // Populate the subrace dropdown based on the selected race
document.getElementById('subrace').addEventListener('change', function() {
  // Get the selected race
  var selectedRace = this.value;
  
  
  // Populate options based on the selected race
  if (selectedRace === 'mountain') {
    
    ancStr=2;
ancDex=0;
ancCon=2;
ancInt=0;
ancWis=0;
ancCha=0;
  } 
  else if (selectedRace === 'hill') {
    ancStr=0;
ancDex=0;
ancCon=2;
ancInt=0;
ancWis=1;
ancCha=0;
  }
  else if (selectedRace === 'lightfoot') {
    ancStr=0;
ancDex=2;
ancCon=0;
ancInt=0;
ancWis=0;
ancCha=1;
  }
  else if (selectedRace === 'stout') {
    ancStr=0;
ancDex=2;
ancCon=1;
ancInt=0;
ancWis=0;
ancCha=0;
  }
  else if (selectedRace === 'rock') {
    ancStr=0;
ancDex=0;
ancCon=1;
ancInt=2;
ancWis=0;
ancCha=0;
  }
  else if (selectedRace === 'forest') {
    ancStr=0;
ancDex=1;
ancCon=0;
ancInt=2;
ancWis=0;
ancCha=0;
  }
  else if (selectedRace === 'high') {
    ancStr=0;
ancDex=2;
ancCon=0;
ancInt=1;
ancWis=0;
ancCha=0;
  }
  else if (selectedRace === 'wood') {
    ancStr=0;
ancDex=2;
ancCon=0;
ancInt=0;
ancWis=1;
ancCha=0;
  }
  else if (selectedRace === 'dark') {
    ancStr=0;
ancDex=2;
ancCon=0;
ancInt=0;
ancWis=0;
ancCha=1;
  }

  document.getElementById("str-anc").textContent = ancStr;
document.getElementById("dex-anc").textContent = ancDex;
document.getElementById("con-anc").textContent =   ancCon;
document.getElementById("int-anc").textContent =   ancInt;
document.getElementById("wis-anc").textContent =   ancWis;
document.getElementById("cha-anc").textContent =   ancCha;


updateTotal();
updateMod();
})



























