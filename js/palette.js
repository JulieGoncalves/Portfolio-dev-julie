var elements = document.querySelectorAll(".changeCouleur");
var btnRouge = document.getElementById("palette1");
var btnBleu = document.getElementById("palette2");
var btnRose= document.getElementById("palette3");

btnRouge.addEventListener("click", function () {
  // Parcourir tous les éléments et leur attribuer la classe "rouge"
  elements.forEach(function (element) {
    // Supprimer toutes les classes autres que la classe "rouge"
    element.className = "changeCouleur rouge";
  });
});

btnBleu.addEventListener("click", function () {
  // Parcourir tous les éléments et leur attribuer la classe "bleu"
  elements.forEach(function (element) {
    // Supprimer toutes les classes autres que la classe "bleu"
    element.className = "changeCouleur bleu";
  });
});

btnRose.addEventListener("click", function () {
    // Parcourir tous les éléments et leur attribuer la classe "bleu"
    elements.forEach(function (element) {
      // Supprimer toutes les classes autres que la classe "bleu"
      element.className = "changeCouleur rose";
    });
  });