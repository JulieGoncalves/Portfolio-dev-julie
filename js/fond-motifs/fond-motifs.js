var cle = "etoile";
var soleil = "soleil";
var lune = "lune";
var oeil = "oeil";
var motifs = [cle, oeil, lune, soleil];
var gridContainer = document.querySelector(".grid-2");

function rajouterMotifs(largeurDeFenetre) {
  var copy = 25; 
  if (largeurDeFenetre <= 420) {
    copy = 75;
  }

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

window.addEventListener('resize', handleResize);

handleResize();


