//Variablen
var data = window.localStorage;
    temp = window.sessionStorage,
    audio = new Audio('src/audio1.mp3');

//Funktionen
function saveData(selector) {
  data.setItem("klasse", String(selector.selectedOptions[0].value));
  audio.play();
  alert("Klasse Gespeichert!");

  console.log("Daten gespeichert");
}

function saveLehr(save, user, pass){
  if(save){
    data.setItem("lehrSave", save);
    data.setItem("lehrUser", user);
    data.setItem("lehrPass", pass);
  }else {
    data.setItem("lehrSave", save);
    temp.setItem("lehrUser", user);
    temp.setItem("lehrPass", pass);
  }
  alert("Lehrerdaten gespeichert");
}

function loadData() {
  var value = data.getItem("klasse");

  console.log("Schueler Daten geladen");
  return value;
}

function loadlehr(){
  var values = [data.getItem("lehrSave"), data.getItem("lehrUser"), data.getItem("lehrPass")];
  if (values == null) {
    values = [data.getItem("lehrSave"), temp.getItem("lehrUser"), temp.getItem("lehrPass")];
  }
  return values;
}
