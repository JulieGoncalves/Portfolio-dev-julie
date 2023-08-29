var cle = "etoile";
var soleil = "soleil";
var lune = "lune";
var oeil = "oeil";
var motifs = [cle, oeil, lune, soleil];
var gridContainer = document.querySelector(".grid-2");

function rajouterMotifs(largeurDeFenetre) {
  var copy = 25; // Nombre de copie à faire
  if (largeurDeFenetre <= 420) {
    copy = 75;
  }

  // Nettoyer la grille avant d'ajouter de nouveaux motifs
  gridContainer.innerHTML = "";

  for (var i = 0; i < copy; i++) {
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

function handleResize() {
  var largeurDeFenetre = window.innerWidth;
  rajouterMotifs(largeurDeFenetre);
}

// Ajouter un écouteur d'événement pour l'événement 'resize'
window.addEventListener('resize', handleResize);

// Appeler la fonction une première fois pour afficher les motifs initiaux
handleResize();


