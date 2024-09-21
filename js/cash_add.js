document.getElementById('btn_cash').addEventListener('click',function(){
 
  document.getElementById('btn_display_cash').classList.remove('hidden');
  document.getElementById('btn_display_add').classList.add('hidden');
  document.getElementById('btn_display_trans').classList.add('hidden');

})
document.getElementById('btn_add').addEventListener('click',function(){
 
  document.getElementById('btn_display_add').classList.remove('hidden');
  document.getElementById('btn_display_cash').classList.add('hidden');
  document.getElementById('btn_display_trans').classList.add('hidden');

})
document.getElementById('btn_trans').addEventListener('click',function(){

  document.getElementById('btn_display_trans').classList.remove('hidden');
  document.getElementById('btn_display_add').classList.add('hidden');
  document.getElementById('btn_display_cash').classList.add('hidden');

})