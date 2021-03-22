//Variablen
var selector = document.querySelector("#sel"),
    saveBtn = document.querySelector("#saveBtn"),
    aktStund = document.querySelector("#aktStund"),
    lehrMod = document.querySelector("#lehrMod"),
    lehrDat = document.querySelector("#lehrDat"),
    lehrUser = document.querySelector("#lehrUser"),
    lehrPass = document.querySelector("#lehrPass"),
    lehrSave = document.querySelector("#lehrSave");

//EventListener
saveBtn.addEventListener("click", function(){
  window.parent.saveData(selector);
});
lehrMod.addEventListener("change", function(){
  lehrDat.hidden = !lehrMod.checked;
});
lehrSend.addEventListener("click", function(){
  window.parent.lehrAuth();
  window.parent.saveLehr(lehrSave.checked, lehrUser.value, lehrPass.value);
});



//Funktionen
function loadSettings(){
  selector.value = window.parent.loadData();

  var lehrData = window.parent.loadlehr();
  if(lehrData[0]){
    lehrMod.checked = lehrData[0];
    lehrUser.value = lehrData[1];
    lehrPass.value = lehrData[2];

    if(lehrUser !="" || lehrPass !=""){
        lehrSave.checked = lehrData[0];
    }
  }

  lehrMod.dispatchEvent(new Event("change"));
}

//Anderes
console.log("Einstellungen geladen");
