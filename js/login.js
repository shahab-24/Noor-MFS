document.getElementById('btn_login').addEventListener('click', function(e){
  e.preventDefault()
  
  
  const phoneNumber = document.getElementById('phone_number').value;
  const pinNumber = document.getElementById('pin_number').value;
  if( phoneNumber === '5' && pinNumber === '1234'){
    console.log('please Login');
    window.location.href ='/home.html';
  }
  else{
    alert('wrong credentials')
  }

})