document.getElementsByName('save').addEventListener("saveData", saveData());

function saveData() {
  var input = document.querySelector("body > table > tbody > tr > td > form > table > tbody > tr > td:nth-child(3) > span > nobr > select").selectedOptions[0].value;
  var data =
  {
      "selected": ""
  };
  if(input!=null) {
    alert("Saved");
  };

}

function loadData() {

}
