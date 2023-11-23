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
///////////////////// THIS IS MODIFYING MODIFIER
let strBase = document.getElementById("str-form").innerHTML;
let strPlus = document.getElementById("str-plus");
let strMinus = document.getElementById("str-minus");

strPlus.onclick= function () {
  document.getElementById('str-mod').innerHTML = document.getElementById('quantity-str').value;
}
strMinus.onclick= function () {
  document.getElementById('str-mod').innerHTML = document.getElementById('quantity-str').value;
}

let dexBase = document.getElementById("dex-form").innerHTML;
let dexPlus = document.getElementById("dex-plus");
let dexMinus = document.getElementById("dex-minus");

dexPlus.onclick= function () {
  document.getElementById('dex-mod').innerHTML = document.getElementById('quantity-dex').value;
}
dexMinus.onclick= function () {
  document.getElementById('dex-mod').innerHTML = document.getElementById('quantity-dex').value;
}

let conBase = document.getElementById("con-form").innerHTML;
let conPlus = document.getElementById("con-plus");
let conMinus = document.getElementById("con-minus");

conPlus.onclick= function () {
  document.getElementById('con-mod').innerHTML = document.getElementById('quantity-con').value;
}
conMinus.onclick= function () {
  document.getElementById('con-mod').innerHTML = document.getElementById('quantity-con').value;
}

let intBase = document.getElementById("int-form").innerHTML;
let intPlus = document.getElementById("int-plus");
let intMinus = document.getElementById("int-minus");

intPlus.onclick= function () {
  document.getElementById('int-mod').innerHTML = document.getElementById('quantity-int').value;
}
intMinus.onclick= function () {
  document.getElementById('int-mod').innerHTML = document.getElementById('quantity-int').value;
}
let wisBase = document.getElementById("wis-form").innerHTML;
let wisPlus = document.getElementById("wis-plus");
let wisMinus = document.getElementById("wis-minus");

wisPlus.onclick= function () {
  document.getElementById('wis-mod').innerHTML = document.getElementById('quantity-wis').value;
}
wisMinus.onclick= function () {
  document.getElementById('wis-mod').innerHTML = document.getElementById('quantity-wis').value;
}
let chaBase = document.getElementById("cha-form").innerHTML;
let chaPlus = document.getElementById("cha-plus");
let chaMinus = document.getElementById("cha-minus");

chaPlus.onclick= function () {
  document.getElementById('cha-mod').innerHTML = document.getElementById('quantity-cha').value;
}
chaMinus.onclick= function () {
  document.getElementById('cha-mod').innerHTML = document.getElementById('quantity-cha').value;
}
