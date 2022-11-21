const numberOfKm = parseFloat(prompt("Quanti chilometri devi percorrere?"));
const passengerAge = parseInt(prompt("Quanti anni hai?"));


document.getElementById('km').innerHTML = numberOfKm + " Km";
document.getElementById('età').innerHTML = passengerAge + " anni";


let ticketFull = numberOfKm * 0.21;

console.log(ticketFull);

let ticketTwenty = ticketFull - (ticketFull * 0.20);
let ticketSixtyFive = ticketFull - (ticketFull * 0.40);

console.log(ticketTwenty);
console.log(ticketSixtyFive);


if (passengerAge <= 20) {

  document.getElementById('prezzo').innerHTML = ticketTwenty.toFixed(2) + "€";

} else if (passengerAge >= 65) {

  document.getElementById('prezzo').innerHTML = ticketSixtyFive.toFixed(2) + "€";

} else {
  
  document.getElementById('prezzo').innerHTML = ticketFull.toFixed(2) + "€";

};

