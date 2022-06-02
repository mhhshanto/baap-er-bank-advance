
function getInput(inputid){
  const depositInput =parseFloat(document.getElementById(inputid).value);
   document.getElementById('deposit-input').value = "";
   document.getElementById('withdraw-input').value = "";
  return depositInput;
}



document.getElementById('deposit-button').addEventListener('click',function(){
  // const depositInput =parseFloat(document.getElementById('deposit-input').value);
  const depositInput = getInput('deposit-input');
  const depositTotal =parseFloat(document.getElementById('deposit-total').innerHTML);
  document.getElementById('deposit-total').innerHTML = depositInput + depositTotal;
  const balance = parseFloat(document.getElementById('balance-total').innerHTML);
  document.getElementById('balance-total').innerText = balance + depositInput;
 
})
document.getElementById("withdraw-button").addEventListener('click', function(){
  const withdrawInput = getInput('withdraw-input');
  const withdrawTotal = parseFloat(document.getElementById('withdraw-total').innerHTML);
  const balanceD = parseFloat(document.getElementById('balance-total').innerHTML)
  document.getElementById('withdraw-total').innerHTML = withdrawInput + withdrawTotal;
  document.getElementById('balance-total').innerHTML = balanceD - withdrawInput;
  
 })