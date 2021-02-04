//Variablen
var data = window.localStorage;
var input, json;
var filename = "data.txt";
var audio = new Audio('src/audio1.mp3');

//EventListener
document.querySelector("#saveBtn").addEventListener("click", saveData);
document.querySelector("#end").addEventListener("load", loadData);

//Events
document.querySelector("#end").dispatchEvent(new Event("load"));

//Funktionen
function saveData() {
  input = String(document.querySelector("body > select").selectedOptions[0].value);
  data.setItem("selected", input);
  audio.play();
  alert("Klasse Gespeichert!");

  console.log("Daten gespeichert");
}

function loadData() {
  var selector = document.querySelector("body > select");
  selector.value = data.getItem("selected");
  selector.dispatchEvent(new Event("change"));

  console.log("Daten geladen");
}
