//Variablen
var toggleKal = false,
    toggleSet = false,
    togglePrev = 0,
    frame = document.querySelector("#exFrame"),
    btnKal = document.querySelector("#kalender"),
    btnSet = document.querySelector("#settings"),
    divB = document.querySelector("#divB"),
    divF = document.querySelector("#divF");

//EventListner
document.querySelector("#art").addEventListener("change", reload);
btnKal.addEventListener("click", changeToKal);
btnSet.addEventListener("click", changeToSet);
divB.addEventListener("click", function () {
  togglePrev = 0;
  reload();
});
divF.addEventListener("click", function (){
  togglePrev=1;
  reload();
});

//Funktionen
function changeArt(){
  if(lehrMode){

  }
}

function getWeekNumber() {
    var d = new Date();
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function reload(){
  var i = String(getWeekNumber() + togglePrev),
      b = String(document.querySelector("#art").selectedOptions[0].value),
      k = loadData()
      mode = "schueler";

  if(lehrMode){
    mode = "lehrer";
  }

  if(k!=0){

    while(i.length<2){
      i = "0" + i;
    }

    while(k.length<5){
      k = "0" + k;
    }

    var url = "https://stundenplan.berufskolleg-bottrop.de/"+ mode +"/" + i + "/c/c" + k + ".htm";
    frame.src = url;

    if(togglePrev){
      divB.hidden = false;
      divF.hidden = true;
    }else {
        divB.hidden = true;
        divF.hidden = false;
    }
  }else{
    var url = "default.html";
    frame.src = url;

    divB.hidden = true;
    divF.hidden = true;
  }

  console.log("iFrame neu geladen");
}

function changeToKal(){
  if(toggleKal){
    toggleKal = false;
    btnKal.textContent = "Kalender"
    reload();
  }else{
    toggleKal = true;
    toggleSet = false;
    btnKal.textContent = "Stundenplan"
    frame.src = "https://moodle.berufskolleg-bottrop.de/calendar/view.php?view=upcoming";

    divB.hidden = true;
    divF.hidden = true;
  }
}

function changeToSet(){
  if(toggleSet){
    toggleSet = false;
    reload();
  }else{
    toggleSet = true;
    toggleKal = false;
    btnKal.textContent = "Kalender";
    frame.src = "settings.html";

    divB.hidden = true;
    divF.hidden = true;
  }
}

//Anderes
window.onload = function(){
  reload();
}

console.log("frameLoader geladen");
