var qty1 = 0;
var qty2 = 0;
var qty3 = 0;

var fasp1 = document.getElementById("fasp1");
var fasp2 = document.getElementById("fasp2");
var fasp3 = document.getElementById("fasp3");

var fasm1 = document.getElementById("fasm1");
var fasm2 = document.getElementById("fasm2");
var fasm3 = document.getElementById("fasm3");

fasp1.addEventListener("click", function () {
  
  qty1++;
  var target = document.getElementById("q1");
  target.innerText = qty1;
  total();

});
fasp2.addEventListener("click", function () {
  
  qty2++;
  var target = document.getElementById("q2");
  target.innerText = qty2;
  total()
  
});
fasp3.addEventListener("click", function () {
  qty3++;
  var target = document.getElementById("q3");
  target.innerText = qty3;
  total()
});
fasm1.addEventListener("click", function () {
  if(qty1!= 0){
 qty1--;
  var target = document.getElementById("q1");
target.innerText = qty1;
total()
}});
fasm2.addEventListener("click", function () {
  if(qty2!=0){
 qty2--;
  var target = document.getElementById("q2");
  target.innerText = qty2;
total()}});
fasm3.addEventListener("click", function () {
  if(qty3 !=0){
  qty3--;
  var target = document.getElementById("q3");
  target.innerText = qty3;
  total()}
});
var heart1 = document.getElementById("heart1");
heart1.addEventListener("click",function(){

  heart1.classList.toggle("fa-heartt");
});
var heart2 = document.getElementById("heart2");
heart2.addEventListener("click",function(){

  heart2.classList.toggle("fa-heartt");
});
var heart3 = document.getElementById("heart3");
heart3.addEventListener("click",function(){

  heart3.classList.toggle("fa-heartt");
});
var trash1 = document.getElementById("trash1");
trash1.addEventListener("click",function(){
   var remove = document.getElementById("baskets");
  remove.classList.toggle("fa-trashh");
})
var trash2 = document.getElementById("trash2");
trash2.addEventListener("click",function(){
   var remove = document.getElementById("socks");
  remove.classList.toggle("fa-trashh");
})
var trash3 = document.getElementById("trash3");
trash3.addEventListener("click",function(){
   var remove = document.getElementById("bag");
  remove.classList.toggle("fa-trashh");
})
function total(){
var price = document.getElementById("total");
price.innerText = `${qty1*100 + qty2*20 + qty3*50}$`;
}



