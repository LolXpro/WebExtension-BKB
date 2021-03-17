var xhrOL = new XMLHttpRequest();
var url = "https://stundenplan.berufskolleg-bottrop.de/schueler/frames/navbar.htm",
 user = "schueler",
 pass = "stundenplan";
 var classesRaw, classes;
 var selector = document.querySelector("#sel");

xhrOL.open("Get", url, true, user, pass);
xhrOL.onreadystatechange = function () {
  if(xhrOL.readyState == 4){
    var response = xhrOL.response;
    var x = response.indexOf("var classes = [");
    var y = response.indexOf("];", x)+2;
    classesRaw = response.slice(x, y);
    x = classesRaw.indexOf('"')+1;
    y = classesRaw.lastIndexOf('"');
    classes = classesRaw.slice(x, y).split('","');

    makeOptions();
  }
}
xhrOL.send();

function makeOptions() {
  for(var i=0; i < classes.length; i++){
    var option = document.createElement("option");
    option.value = i+1;
    option. text = classes[i];
    selector.appendChild(option);
  }
  //Events
  document.querySelector("#end").dispatchEvent(new Event("load"));
  
  console.log("Klassen geladen")
}
