//Variablen
var xhrOL = new XMLHttpRequest(),
  url = "https://stundenplan.berufskolleg-bottrop.de/schueler/frames/navbar.htm",
  user = "schueler",
  pass = "stundenplan",
  classesRaw, classes,
  selector = document.querySelector("#sel");

//EventListener
xhrOL.addEventListener("readystatechange", ready);
function ready() {
  if(xhrOL.readyState == 4){
    var response = xhrOL.response;
    var x = response.indexOf("var classes = [");
    var y = response.indexOf("];", x)+2;
    classesRaw = response.slice(x, y);
    x = classesRaw.indexOf('"')+1;
    y = classesRaw.lastIndexOf('"');
    classes = classesRaw.slice(x, y).split('","');

    makeOptions(classes, selector);
    loadSettings();
  }
}

//Funktionen
function makeOptions(type, target) {
  for(var i=0; i < types.length; i++){
    var option = document.createElement("option");
    option.value = i+1;
    option.text = type[i];
    target.appendChild(option);
  }
  //document.querySelector("#end").dispatchEvent(new Event("load"));

  console.log("Klassen geladen")
}

//Anderes
xhrOL.open("Get", url, true, user, pass);
xhrOL.send();
