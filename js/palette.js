var elementsDeCouleur = document.querySelectorAll(".changeCouleur");
var btnVert = document.getElementById("palette1");
var btnNoir = document.getElementById("palette2");
var btnRose = document.getElementById("palette3");

var paletteActive = "rose";

btnVert.addEventListener("click", function () {
  if (paletteActive == "vert") {
    return;
  }

  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("rose");
    element.classList.remove("bleu");
    element.classList.add("vert");
  });
  paletteActive = "vert";
});

btnRose.addEventListener("click", function () {
  if (paletteActive == "rose") {
    return;
  }
  elementsDeCouleur.forEach(function(element) {
  element.classList.remove("bleu");
  element.classList.remove("vert");
  element.classList.add("rose");
});
paletteActive = "rose";
});

btnNoir.addEventListener("click", function(){
if (paletteActive == "noir") {
return;
}
elementsDeCouleur.forEach(function(element){
  element.classList.remove("vert");
  element.classList.remove("rose");
  element.classList.add("noir");
});
paletteActive = "noir";
});