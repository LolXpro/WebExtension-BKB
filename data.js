var fs = require("fs");
var input, data, json;
var filename = "data.txt";

function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
  audio.play();
}

document.getElementsByName('save').addEventListener("click", saveData);
document.getElementsByName('save').addEventListener("click", play);

function saveData() {

  input = String(document.querySelector("body > select").selectedOptions[0].value);
  data = '{"selected": '+ input +'}';

  json = JSON.stringify(data);

  fs.writeFile(filename, json, "utf8", callback);
  audio.play();
}

function loadData() {

}
