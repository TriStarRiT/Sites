var i;
function recolor(i){
  document.getElementById(i).style.color="black"
}
function uncolor(i){
  document.getElementById(i).style.color="#4f4f4f"
}
function spin(){
  document.getElementById('call').innerHTML="<strong>Black</strong>&timesWhite"
}
function unspin(){
  document.getElementById('call').innerHTML="<strong>Black</strong>+White"
}