
document.getElementById("form").reset();

let dice = {
  sides: 1,
  count: 1,

  roll: function () {

    let sum = 0;
    let dicearray = [];
    for (i = 0; i < this.count; i++) {
      var randomNumber = (Math.floor(Math.random() * this.sides) + 1);
      sum += randomNumber;
    }
    return sum;
  }

}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var rollButton = document.getElementById('roll-button');

rollButton.onclick = function () {
  dice.count = document.getElementById('quantity').value;
  console.log(document.getElementById('quantity').value);

  var result = dice.roll();
  printNumber(result);
};


function buttonHighlight(clicked) {

  let number = document.getElementById("placeholder");
  number.innerHTML = 0;

  let buttons = document.getElementsByClassName("btn-secondary");

  console.log(buttons);

  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'rgb(26, 26, 167)';
  }
  clicked.style.backgroundColor = 'red';


}

var rollButton = document.getElementById('roll-button');

var d4 = document.getElementById('d4');
d4.onclick = function () {
  dice.sides = 4;
  buttonHighlight(d4);
  rollButton.innerHTML = "Roll " + dice.count + "d4";
};
var d6 = document.getElementById('d6');
d6.onclick = function () {
  dice.sides = 6;
  buttonHighlight(d6);
  rollButton.innerHTML = "Roll " + dice.count + "d6";
};
var d8 = document.getElementById('d8');
d8.onclick = function () {
  dice.sides = 8;
  buttonHighlight(d8);
  rollButton.innerHTML = "Roll " + dice.count + "d8";
};
var d12 = document.getElementById('d12');
d12.onclick = function () {
  dice.sides = 12;
  buttonHighlight(d12);
  rollButton.innerHTML = "Roll " + dice.count + "d12";
};
var d20 = document.getElementById('d20');
d20.onclick = function () {
  dice.sides = 20;
  buttonHighlight(d20);
  rollButton.innerHTML = "Roll " + dice.count + "d20";
};
var d100 = document.getElementById('d100');
d100.onclick = function () {
  dice.sides = 100;
  buttonHighlight(d100);
  rollButton.innerHTML = "Roll " + dice.count + "d100";
};




$('.btn-number').click(function (e) {
  e.preventDefault();

  fieldName = $(this).attr('data-field');
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {





    if (type == 'minus') {

      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
        dice.count = currentVal - 1;
        rollButton.innerHTML = "Roll " + dice.count + "d" + dice.sides;
      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);

      }

    } else if (type == 'plus') {

      if (currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
        dice.count = currentVal + 1;
        rollButton.innerHTML = "Roll " + dice.count + "d" + dice.sides;
      }
      if (parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);

      }

    }
  } else {
    input.val(0);
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
    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    dice.count = valueCurrent;
    // rollButton.innerHTML = "Roll " + dice.count + "d" + dice.sides; 
  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val(1);
    dice.count = 1;
  }
  if (valueCurrent <= maxValue && valueCurrent > 0) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    dice.count = valueCurrent;
    // rollButton.innerHTML = "Roll " + dice.count + "d" + dice.sides; 
  }
  else if (valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    dice.count = 1;
  }
  else {
    alert('Sorry, the maximum value was reached');
    $(this).val(20);
    dice.count = 20;
  }

  rollButton.innerHTML = "Roll " + dice.count + "d" + dice.sides;

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


// Code below adjusts the orientation and position of the button row and slightly
// adjusts the alignment of the results display.
var wideScreen = 800;

var toggleBtnDirection = function () {
  var windowWidth = $(window).width();

  if (windowWidth > wideScreen) {
    document.getElementById('dice-row').classList.add('btn-group-vertical')
    document.getElementById('dice-row').classList.remove('btn-group');

    document.getElementById('switcher').classList.add('row');
    document.getElementById('switcher').classList.remove('col');

    document.getElementById('dice-row-container').classList.remove('row');
    document.getElementById('result-container').classList.remove('shifted')
  }

  else {
    document.getElementById('dice-row').classList.add('btn-group')
    document.getElementById('dice-row').classList.remove('btn-group-vertical');

    document.getElementById('switcher').classList.add('col');
    document.getElementById('switcher').classList.remove('row');

    document.getElementById('dice-row-container').classList.add('row');
    document.getElementById('result-container').classList.add('shifted');
  }

}

toggleBtnDirection();
window.addEventListener('resize', toggleBtnDirection);

