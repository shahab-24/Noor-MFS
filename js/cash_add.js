document.getElementById('btn_cash').addEventListener('click',function(){
  console.log('cash click');
  document.getElementById('btn_display_cash').classList.remove('hidden');
  document.getElementById('btn_display_add').classList.add('hidden');

})
document.getElementById('btn_add').addEventListener('click',function(){
  console.log('add click');
  document.getElementById('btn_display_add').classList.remove('hidden');
  document.getElementById('btn_display_cash').classList.add('hidden');

})