//XHR Authentification
var xhr = new XMLHttpRequest();
var url = "https://stundenplan.berufskolleg-bottrop.de/schueler/",
 user = "schueler",
 pass = "stundenplan";

xhr.open("POST", url, true, user, pass);
xhr.send();

console.log("Anmeldedaten geladen");
