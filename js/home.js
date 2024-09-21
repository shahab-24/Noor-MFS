document.getElementById('btn_add_money').addEventListener('click', function(e){
  e.preventDefault();
  console.log("add clicked");
  const pinNumber = document.getElementById('input_pin_number').value;
  
  const amount = document.getElementById('input_amount').value;
  const inputAmount = parseFloat(amount);
  
  console.log(pinNumber, amount);

  if(pinNumber === '1234'){
    const balance = document.getElementById('current_amount').innerText;
    const newBalance = parseFloat(balance);
    const updatedBalance = newBalance + inputAmount;
    document.getElementById('current_amount').innerText = updatedBalance;
    
    // const p = document.createElement('p')
    // p.innerText = `${amount} ${updatedBalance}`
    
    // document.getElementById('trans_container').appendChild(p)
    
  
  }
  else{
    alert('wrong pin')

  }

})