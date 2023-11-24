////////////////////////////////////////////////////////////////////////////////////////////////////////////
//when btn-number class member is clicked
$('.btn-number1').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  console.log(fieldName);
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();


      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }
    } else if (type == 'plus') {
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
});

//when btn-number class member is clicked
$('.btn-number2').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  console.log(fieldName);
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();


      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }
    } else if (type == 'plus') {
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
});

//when btn-number class member is clicked
$('.btn-number3').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  console.log(fieldName);
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();


      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }
    } else if (type == 'plus') {
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
});
//when btn-number class member is clicked
$('.btn-number4').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  console.log(fieldName);
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();


      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }
    } else if (type == 'plus') {
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
});
//when btn-number class member is clicked
$('.btn-number5').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  console.log(fieldName);
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();


      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }
    } else if (type == 'plus') {
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
});
//when btn-number class member is clicked
$('.btn-number6').click(function (e) {
  e.preventDefault();
  fieldName = $(this).attr('data-field');
  console.log(fieldName);
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();


      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }
    } else if (type == 'plus') {
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
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.input-number1').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number1').change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number1[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')

  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number1[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number1[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }
});

$(".input-number1").keydown(function (e) {
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
/////////////////////////////////////////////////
$('.input-number2').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number2').change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number2[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')

  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number2[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number2[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }
});

$(".input-number2").keydown(function (e) {
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
///////////////////////////////////////////
$('.input-number3').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number3').change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number3[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')

  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number3[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number3[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }
});

$(".input-number3").keydown(function (e) {
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
///////////////////////////////////////////
$('.input-number4').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number4').change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number4[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')

  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number4[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number4[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }
});

$(".input-number4").keydown(function (e) {
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

///////////////////////////////////////////
$('.input-number5').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number5').change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number5[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')

  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number5[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number5[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }
});

$(".input-number5").keydown(function (e) {
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
///////////////////////////////////////////
$('.input-number6').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number6').change(function () {
  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number6[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')

  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(8);

  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number6[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number6[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')

  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(15);

  }
});

$(".input-number6").keydown(function (e) {
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////ANCESTRY DROPDOWNS AND WHAT NOT

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

  document.getElementById("str-anc").textContent = "+" + ancStr;
  document.getElementById("dex-anc").textContent = "+" + ancDex;
  document.getElementById("con-anc").textContent = "+" + ancCon;
  document.getElementById("int-anc").textContent = "+" + ancInt;
  document.getElementById("wis-anc").textContent = "+" + ancWis;
  document.getElementById("cha-anc").textContent = "+" + ancCha;
  

  
});

// Function to add options to a dropdown
function addOption(selectElement, value, text) {
  var option = document.createElement('option');
  option.value = value;
  option.text = text;
  selectElement.add(option);
}


//////

 // JavaScript to dynamically populate the subrace dropdown based on the selected race
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

  document.getElementById("str-anc").textContent = "+" + ancStr;
  
document.getElementById("dex-anc").textContent = "+" + ancDex;
document.getElementById("con-anc").textContent =   "+" + ancCon;

document.getElementById("int-anc").textContent =   "+" + ancInt;

document.getElementById("wis-anc").textContent =   "+" + ancWis;

document.getElementById("cha-anc").textContent =   "+" + ancCha;


})
/////

///////////////////// THIS IS MODIFYING MODIFIER


let attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

for (let i = 0; i < attributes.length; i++) {

  //let base = document.getElementById(`${i}-form`).innerHTML;
  let plus = document.getElementById(`${attributes[i]}-plus`);
  let minus = document.getElementById(`${attributes[i]}-minus`);

plus.onclick= function () {

let vars = [ancStr,ancDex,ancCon,ancInt,ancWis,ancCha];
let input = vars[i];

console.log(vars[i] + 'attrb');
let sum = parseInt(input) + parseInt(document.getElementById(`quantity-${attributes[i]}`).value);
  document.getElementById(`${attributes[i]}-mod`).innerHTML = Math.floor((sum-10)/2);
}

minus.onclick= function () {
  let vars = [ancStr,ancDex,ancCon,ancInt,ancWis,ancCha];
  let input = vars[i];

console.log(vars[i] + 'attrb');
let sum = parseInt(input)+ parseInt(document.getElementById(`quantity-${attributes[i]}`).value);
  document.getElementById(`${attributes[i]}-mod`).innerHTML = Math.floor((sum-10)/2);
  
}


}

// let dexBase = document.getElementById("dex-form").innerHTML;
// let dexPlus = document.getElementById("dex-plus");
// let dexMinus = document.getElementById("dex-minus");
// 
// dexPlus.onclick= function () {
  // let sum = parseInt(ancDex)+ parseInt(document.getElementById('quantity-dex').value);
// 
  // document.getElementById('dex-mod').innerHTML = Math.floor((sum-10)/2);
  // 
// }
// dexMinus.onclick= function () {
  // let sum = parseInt(ancDex)+ parseInt(document.getElementById('quantity-dex').value);
// 
  // document.getElementById('dex-mod').innerHTML = Math.floor((sum-10)/2);
// }
// 
// let conBase = document.getElementById("con-form").innerHTML;
// let conPlus = document.getElementById("con-plus");
// let conMinus = document.getElementById("con-minus");
// 
// conPlus.onclick= function () {
  // let sum = parseInt(ancCon)+ parseInt(document.getElementById('quantity-con').value);
  // document.getElementById('con-mod').innerHTML = Math.floor((sum-10)/2);
// }
// conMinus.onclick= function () {
  // let sum = parseInt(ancCon)+ parseInt(document.getElementById('quantity-con').value);
  // document.getElementById('con-mod').innerHTML = Math.floor((sum-10)/2);
// }
// 
// let intBase = document.getElementById("int-form").innerHTML;
// let intPlus = document.getElementById("int-plus");
// let intMinus = document.getElementById("int-minus");
// 
// intPlus.onclick= function () {
  // let sum = parseInt(ancInt)+ parseInt(document.getElementById('quantity-int').value);
  // document.getElementById('int-mod').innerHTML = Math.floor((sum-10)/2);
// }
// intMinus.onclick= function () {
  // let sum = parseInt(ancInt)+ parseInt(document.getElementById('quantity-int').value);
  // document.getElementById('int-mod').innerHTML = Math.floor((sum-10)/2);
// }
// let wisBase = document.getElementById("wis-form").innerHTML;
// let wisPlus = document.getElementById("wis-plus");
// let wisMinus = document.getElementById("wis-minus");
// 
// wisPlus.onclick= function () {
  // let sum = parseInt(ancWis)+ parseInt(document.getElementById('quantity-wis').value);
  // document.getElementById('wis-mod').innerHTML = Math.floor((sum-10)/2); 
// }
// wisMinus.onclick= function () {
  // let sum = parseInt(ancWis)+ parseInt(document.getElementById('quantity-wis').value);
  // document.getElementById('wis-mod').innerHTML = Math.floor((sum-10)/2);
// }
// let chaBase = document.getElementById("cha-form").innerHTML;
// let chaPlus = document.getElementById("cha-plus");
// let chaMinus = document.getElementById("cha-minus");
// 
// chaPlus.onclick= function () {
  // let sum = parseInt(ancCha)+ parseInt(document.getElementById('quantity-cha').value);
  // document.getElementById('cha-mod').innerHTML = Math.floor((sum-10)/2);}
// chaMinus.onclick= function () {
  // let sum = parseInt(ancCha)+ parseInt(document.getElementById('quantity-cha').value);
  // document.getElementById('cha-mod').innerHTML = Math.floor((sum-10)/2);}
// 