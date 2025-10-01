import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('.card').classList.add(generateRandomSuits());
  document.querySelector('.number').innerHTML = generateRandomNumber();

;

function generateRandomNumber ()  {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumbers];
}
function generateRandomSuits ()  {
  let suits = ["heart", "spade", "club", "diamond"];
  let raondomSuits = Math.floor(Math.random() * suits.length);
  return suits[raondomSuits];

}
}
