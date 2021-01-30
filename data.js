//Variables
var data = window.localStorage;
var input;
var json;
var filename = "data.txt";
var audio = new Audio('audio1.mp3');

//EventListener
document.querySelector("#saveBtn").addEventListener("click", saveData);
document.querySelector("#end").addEventListener("load", loadData);
document.querySelector("#end").dispatchEvent(new Event("load"));

//Functions
function saveData() {

  input = String(document.querySelector("body > select").selectedOptions[0].value);

  data.setItem("selected", input);

  audio.play();
  alert("Klasse Gespeichert!");
}

function loadData() {
  console.log("Ende");
  var selector = document.querySelector("body > select");
  selector.value = data.getItem("selected");
  selector.dispatchEvent(new Event("change"));
}
