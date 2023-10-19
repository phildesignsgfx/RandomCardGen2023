/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "k"];
  const suits = ["Hearts", "♦", "Spades", "Clubs"];

  function randomCard() {
    const randomValue = Math.floor(Math.random() * values.length);
    const randomSuit = Math.floor(Math.random() * suits.length);
    const cardValue = values[randomValue];
    const cardSuit = suits[randomSuit];

    let entity;
    if (cardSuit === "♦") {
      entity = "♦";
    } else {
      entity = "&" + cardSuit.toLowerCase() + ";";
    }

    const top = document.querySelector(".top");
    top.innerHTML = `<span>${cardValue} </span><span>${entity} </span>`;
    const middle = document.querySelector(".middle");
    middle.innerHTML = `<h1>${entity}</h1>`;
    const bottom = document.querySelector(".bottom");
    bottom.innerHTML = `<span>${entity} </span><span>${cardValue}</span>`;
  }

  // Function to change card with button //
  document.getElementById("button").onclick = function() {
    myFunction();
  };

  function myFunction() {
    document.getElementById("button").innerHTML = "YOU CLICKED ME!";
  }
  //write your code here
  randomCard();
};
