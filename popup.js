//EventListner
document.querySelector("#sel").addEventListener("change", reload);

//functions
function getWeekNumber() {
    var d = new Date();
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

function reload(){
  var i = String(getWeekNumber());
  while(i.length<2){
    i = "0" + i;
  }

  var k = String(document.querySelector("body > select").selectedOptions[0].value);
  while(k.length<5){
    k = "0" + k;
  }

  var url = "https://stundenplan.berufskolleg-bottrop.de/schueler/" + i + "/c/c" + k + ".htm";
  document.querySelector("#exFrame").src = url;
}
