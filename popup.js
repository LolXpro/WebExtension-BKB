//Variablen
var toggleKal = false;
var togglePrev = 0;
var frame = document.querySelector("#exFrame");
var btnKal = document.querySelector("#kalender");
var divB = document.querySelector("#divB");
var divF = document.querySelector("#divF");

//EventListner
document.querySelector("#sel").addEventListener("change", reload);
btnKal.addEventListener("click", changeToKal);
divB.addEventListener("click", function () {
  togglePrev = 0;
  reload();
});
divF.addEventListener("click", function (){
  togglePrev=1;
  reload();
});

//Funktionen
function getWeekNumber() {
    var d = new Date();
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function reload(){
  var i = String(getWeekNumber() + togglePrev);
  var k = String(document.querySelector("body > select").selectedOptions[0].value);
  if(k!=0){

    while(i.length<2){
      i = "0" + i;
    }

    while(k.length<5){
      k = "0" + k;
    }

    var url = "https://stundenplan.berufskolleg-bottrop.de/schueler/" + i + "/c/c" + k + ".htm";
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
    btnKal.textContent = "Stundenplan"
    var url = "https://moodle.berufskolleg-bottrop.de/calendar/view.php?view=upcoming";
    frame.src = url;

    divB.hidden = true;
    divF.hidden = true;
  }
}
