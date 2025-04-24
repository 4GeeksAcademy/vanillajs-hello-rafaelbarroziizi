import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generalexcuse()
}
  function generalexcuse (){
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let pronoun = Math.floor(Math.random()*who.length)
    let accion = Math.floor(Math.random()*action.length)
    let que = Math.floor(Math.random()*what.length)
    let cuando = Math.floor(Math.random()*when.length)
    return (who[pronoun]+" "+action[accion]+" "+what[que]+" "+when[cuando])
    
  }
