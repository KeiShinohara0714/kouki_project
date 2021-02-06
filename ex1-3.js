function txtchange1() {
  document.getElementById('txt1').innerHTML = 'オポジット';  
}
function imgchange1() {
  document.getElementById('logo').src = './image/opposite.jpeg';    
}
function show_innerHTMLtxt1(){
  var result1 = document.getElementById('txt1').innerHTML;
alert(result1);    
}
function show_innerHTML(){
  var result = document.getElementById('logo').innerHTML;
alert(result);    
}