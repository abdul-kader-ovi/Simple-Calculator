var txtInput;
var txtResult;
function initialize() {
txtInput = document.getElementById('txtInput');
txtResult = document.getElementById('txtResult');

for (var i = 0; i < 10; i++) {
document.getElementById('btn'+i)
.addEventListener('click', numberClick, false);}

document.getElementById('btnPlus')
.addEventListener('click', plusClick, false);
document.getElementById('btnMinus')
.addEventListener('click', minusClick, false);

document.getElementById('btnClear')
.addEventListener('click', Clear, false);


document.getElementById('btnClearEntry')
.addEventListener('click', ClearEntry, false);
}
function Clear(){
txtInput.value='0';
txtResult.value='0';
}
function ClearEntry(){
txtInput.value='0'
}
function numberClick(){
txtInput.value = txtInput.value=='0'?
this.innerText:txtInput.value+this.innerText;
}
function plusClick(){
txtResult.value=Number(txtResult.value)+Number(txtInput.value);
ClearEntry();
}
function minusClick(){
txtResult.value=Number(txtResult.value)-Number(txtInput.value);
ClearEntry();
}








