function getInputValueById(id){
 const inputAmount = document.getElementById(id).value;
 const inputAmountNumber = parseFloat(inputAmount);
return inputAmountNumber;
}


function getTextValueById(id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}