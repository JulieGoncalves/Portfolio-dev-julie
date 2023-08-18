var elementsDeCouleur = document.querySelectorAll(".changeCouleur");
var btnBleu = document.getElementById("palette1");
var btnBlan = document.getElementById("palette2");
var btnRose = document.getElementById("palette3");

var paletteActive = "rose";

btnBleu.addEventListener("click", function () {
  if (paletteActive == "bleu") {
    return;
  }

  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("rose");
    element.classList.remove("blan");
    element.classList.add("bleu");
  });
  paletteActive = "bleu";
});

btnRose.addEventListener("click", function () {
  if (paletteActive == "rose") {
    return;
  }
  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("blan");
    element.classList.remove("bleu");
    element.classList.add("rose");
  });
  paletteActive = "rose";
});

btnBlan.addEventListener("click", function () {
  if (paletteActive == "blan") {
    return;
  }
  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("bleu");
    element.classList.remove("rose");
    element.classList.add("blan");
  });
  paletteActive = "blan";
});
