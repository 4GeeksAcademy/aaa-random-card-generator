import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let colores = ["red", "black"];
  let coloresAleatorios = colores[Math.floor(Math.random()*colores.length)]

  let valores = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
  let valoresAleatorios = valores[Math.floor(Math.random()*valores.length)]
  document.getElementById("valorCarta").innerHTML = valoresAleatorios;

  let palos = ["♥", "♦", "♠", "♣"];
  let palosAleatorios = palos[Math.floor(Math.random()*palos.length)]
  document.getElementById("izquierda").innerHTML = palosAleatorios;
  document.getElementById("izquierda").style.color = coloresAleatorios;
  document.getElementById("derecha").innerHTML = palosAleatorios;
  document.getElementById("derecha").style.color = coloresAleatorios;

  if (palosAleatorios === "♥" || palosAleatorios === "♦") {
    document.getElementById("izquierda").style.color = "red";
    document.getElementById("derecha").style.color = "red";
  } else {
    document.getElementById("izquierda").style.color = "black";
    document.getElementById("derecha").style.color = "black";
  }

};