// J aimerais modifier "var copy = 25" par var "var copy = 50" lorsque je change de format d ecran (plus petit)

var cle = "etoile";
var soleil = "soleil";
var lune = "lune";
var oeil = "oeil";
var motifs = [cle, oeil, lune, soleil];
var largeur = window.innerWidth;
var gridContainer = document.querySelector(".grid-2");

function rajouterMotifs(largeurDeFenetre) {
  var copy = 25; // Nombre de copie à faire
  if (largeurDeFenetre <= 420) {
    copy = 75;
  }

  // J ajoute 1 tant que i est inferieur a copy
  for (var i = 0; i < copy; i++) {
    // J ajoute 1 tant que je n ai pas 4 motifs
    for (var j = 0; j < motifs.length; j++) {
      var cell = document.createElement("div");
      cell.classList.add("grid-cell");

      var imageDiv = document.createElement("div");
      imageDiv.classList.add("image-container");
      var image = document.createElement("img");
      image.src = "js/fond-motifs/" + motifs[j] + ".svg";

      imageDiv.appendChild(image);
      cell.appendChild(imageDiv);

      gridContainer.appendChild(cell);
    }
  }
}

rajouterMotifs(largeur);