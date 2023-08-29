// CHANGEMENT DE PALETTE DE COULEURS AU CLIC

var elementsDeCouleur = document.querySelectorAll(".changeCouleur");
var btnBleu = document.getElementById("palette1");
var btnBlanc = document.getElementById("palette2");
var btnRose = document.getElementById("palette3");

const bouleCristalBleue = document.getElementById("boule-cristal-bleue");
const bouleCristalBlanche = document.getElementById("boule-cristal-blanche");
const bouleCristalRose = document.getElementById("boule-cristal-rose");

var paletteActive = "rose";

btnBleu.addEventListener("click", function () {
  if (paletteActive == "bleu") {
    return;
  }

  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("rose");
    element.classList.remove("blanc");
    element.classList.add("bleu");
  });
  paletteActive = "bleu";
});

btnRose.addEventListener("click", function () {
  if (paletteActive == "rose") {
    return;
  }
  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("blanc");
    element.classList.remove("bleu");
    element.classList.add("rose");
  });
  paletteActive = "rose";
});

btnBlanc.addEventListener("click", function () {
  if (paletteActive == "blanc") {
    return;
  }
  elementsDeCouleur.forEach(function (element) {
    element.classList.remove("bleu");
    element.classList.remove("rose");
    element.classList.add("blanc");
  });
  paletteActive = "blanc";
});

btnBleu.addEventListener("click", function () {
  // Lorsque je clique sur la palette bleue, je souhaite
  // afficher la boule bleue et cacher les autres boules
  bouleCristalBleue.classList.remove("cachecristal");
  bouleCristalBlanche.classList.add("cachecristal");
  bouleCristalRose.classList.add("cachecristal");
});

btnBlanc.addEventListener("click", function () {
  // Lorsque je clique sur la palette blanche, je souhaite
  // afficher la boule blanche et cacher les autres boules
  bouleCristalBleue.classList.add("cachecristal");
  bouleCristalBlanche.classList.remove("cachecristal");
  bouleCristalRose.classList.add("cachecristal");
});

btnRose.addEventListener("click", function () {
  // Lorsque je clique sur la palette rose, je souhaite
  // afficher la boule rose et cacher les autres boules
  bouleCristalBleue.classList.add("cachecristal");
  bouleCristalBlanche.classList.add("cachecristal");
  bouleCristalRose.classList.remove("cachecristal");
});

function initBouleConfig() {
  // Lorsque je clique sur la palette rose, je souhaite
  // afficher la boule rose et cacher les autres boules
  bouleCristalBleue.classList.add("cachecristal");
  bouleCristalBlanche.classList.add("cachecristal");
  bouleCristalRose.classList.remove("cachecristal");
}
initBouleConfig();