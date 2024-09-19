document.getElementById('btn_cash_out').addEventListener('click', function(e){
  e.preventDefault();
  console.log("add clicked");
  const pinNumber = document.getElementById('input_pin').value;
  
  const amount = document.getElementById('cash_amount').value;
  const inputAmount = parseFloat(amount);
  
  console.log(pinNumber, amount);

  if(pinNumber === '1234'){
    const balance = document.getElementById('current_amount').innerText;
    const newBalance = parseFloat(balance);
    const updatedBalance = newBalance - inputAmount;
    document.getElementById('current_amount').innerText = updatedBalance;
    

    
  
  }
  else{
    alert('wrong pin')

  }

})