/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let top = document.querySelector(".top");
let number = document.querySelector(".number");
let bottom = document.querySelector(".bottom");

const icons = ["corazon", "diamante", "pica", "trebol"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function cardGen(arr1, arr2) {
  let carta = [];
  carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
  carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return carta;
}

function asignarColor(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    top.style.color = "red";
    number.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    number.style.color = "black";
    bottom.style.color = "black";
  }
}

function asignarPalo(arr) {
  if (arr[0] === "corazon") {
    top.innerHTML = "♥";
    bottom.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    top.innerHTML = "♦";
    bottom.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    top.innerHTML = "♣";
    bottom.innerHTML = "♣";
  } else {
    top.innerHTML = "♠";
    bottom.innerHTML = "♠";
  }
}

function asignarValor(arr) {
  number.innerHTML = arr[1];
}
function generateCard() {
  let carta = cardGen(icons, valores);
  asignarColor(carta);
  asignarPalo(carta);
  asignarValor(carta);
}

window.onload = function() {
  generateCard();
};
document.querySelector(".button").addEventListener("click", generateCard);
