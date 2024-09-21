document.getElementById('btn_cash_out').addEventListener('click',function(e){
  e.preventDefault();
  const cashOut = getInputValueById('cash_amount')
   const pinNumber = getInputValueById('input_pin')
   console.log(cashOut, pinNumber);
   if(pinNumber === 1234){
    const accountBalance = getTextValueById('current_amount')
   const updatedBalance = accountBalance - cashOut;
   document.getElementById('current_amount').innerText = updatedBalance;
   }
   else{
    alert('wrong input')
   }
})