
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

$('.input-number').focusin(function () {
  $(this).data('oldValue', $(this).val());
});

$('.input-number').change(function () {
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

$(".input-number").keydown(function (e) {
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

/////////////////////
let strBase = document.getElementById("str-form").innerHTML;

let strPlus = document.getElementById("str-plus");

let strMinus = document.getElementById("str-minus");

strPlus.onclick = function () {

  console.log(document.getElementById('quantity').value);

  document.getElementById('str-mod').innerHTML = document.getElementById('quantity').value;

}



