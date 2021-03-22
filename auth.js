//Variablen
var xhr = new XMLHttpRequest(),
    url = "https://stundenplan.berufskolleg-bottrop.de/",
    schuelUser = "schueler",
    schuelPass = "stundenplan",
    lehrData = loadlehr(),
    lehrMode = false;

//EventListener
xhr.addEventListener("readystatechange", readyAuth);

//Funktionen
function readyAuth(){
  var selector = document.querySelector("#art");
  if(xhr.readyState == 4){
    selector.dispatchEvent(new Event("change"));

    console.log("Anmeldedaten geladen");
  }
}

function lehrAuth(){
  var lehrUser = lehrData[1],
      lehrPass = lehrData[2];
  xhr.open("POST", url + "lehrer/", true, lehrUser, lehrPass);
  xhr.send();
  lehrMode = true;
}

//Anderes
xhr.open("POST", url + "schueler/", true, schuelUser, schuelPass);
xhr.send();

if (lehrData !=null && lehrData[0]) {
  lehrAuth();
}
