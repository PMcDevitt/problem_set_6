window.onload = function () {
  var button = document.getElementById('calculateBtn')
  var textInput = document.getElementById('billAmount')
  var selectInput = document.getElementById('tipOption')

  button.addEventListener('click', updateDOM)
  textInput.addEventListener('keyup', updateDOM)
  selectInput.addEventListener('change', updateDOM)
};

// pure function
function calculateTip(total, tipPercentage){
  return total*tipPercentage
}

// pure function
function getBillAmount(){
  var totalAmount = document.getElementById('billAmount').value
    if(totalAmount[0]==='$'){
      return totalAmount.substring(1,totalAmount.length)
    }
    return totalAmount
}

// pure function
function getTipValue(){
  return document.getElementById('tipOption').options[tipOption.selectedIndex].value
}

// non pure function
function updateDOM(){
  var tip = calculateTip(getBillAmount(), getTipValue())
  document.getElementById('tipAmount').innerHTML = 'You should tip $' + tip.toFixed(2)
}