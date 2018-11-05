
  function  FB (num){

  if ((num % 3) == 0){
  if ((num % 5) == 0){
    return  "FizzBuzz"}
    else {
      return  "Fizz"
    }}
    else {
     if ((num % 5) == 0){
       return "Buzz"
     }
     else {
       return num
     }
    }}
    var i;
    mas = [];
  for (i = 0; i < 100; i++) { 
    mas[i] = FB (i);
 }

function addElem (rez) {
  var x = document.createElement("LI");
  var t = document.createTextNode(rez);
  x.appendChild(t);
  document.getElementById("bb").appendChild(x);
}
for (i=1; i<=100; i++){
var rez ;
rez = FB(i);
addElem(rez);  
}
  
  
  