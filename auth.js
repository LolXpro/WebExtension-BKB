//XHR Authentification
var xhr = new XMLHttpRequest();
var url = "https://stundenplan.berufskolleg-bottrop.de/schueler/",
 user = "schueler",
 pass = "stundenplan";

xhr.open("POST", url, true, user, pass);
xhr.send();

xhr.onreadystatechange = function(){
  var selector = document.querySelector("body > select");
  if(xhr.readyState == 4){
    selector.dispatchEvent(new Event("change"));
  }
}

console.log("Anmeldedaten geladen");
