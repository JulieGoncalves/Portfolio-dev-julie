const espaceEntreParticules = 30;

function genererParticules() {
  let tableau = [];
  let hauteurParticule = 375;
  let largeurParticule = 450;
  let positionEnX = -largeurParticule / 2;
  (canvas.width - espaceEntreParticules) / largeurParticule +
    espaceEntreParticules;
  let nbParticules = canvas.width / espaceEntreParticules;

  let totalImages = 1000 / 2;
  let nbImagesParInterval = totalImages / nbParticules;

  for (let i = 0; i < nbParticules; i++) {
    let positionEnY;
    let nbImagesPourDisparition = 100;
    let finDisparition = (i + 1) * nbImagesParInterval;
    let debutDisparition = finDisparition - nbImagesPourDisparition;

    if (i <= (2 * nbParticules) / 3) {
      let milieu = canvas.height / 2;
      let proportion = 1 / 6;

      let signe = 1;
      if (Math.random() > 0.5) {
        signe = -1;
      }

      positionEnY = milieu + Math.random() * proportion * canvas.height * signe;
      positionEnY = milieu + Math.random() * proportion * canvas.height;
      if (Math.random() > 0.5) {
        positionEnY = milieu - Math.random() * proportion * canvas.height;
      }
    } else {
      positionEnY = canvas.height / 2;
    }

    let coefGaranti = -0.8 * (i / nbParticules) + 1;
    let coefVariable = Math.random() * 0.8;
    let coefMultiplicateur = coefGaranti + coefVariable;
    hauteurParticule = 250 * coefMultiplicateur;
    largeurParticule = 300 * coefMultiplicateur;

    const particule = new Map([
      ["positionEnX", positionEnX + i * espaceEntreParticules],
      ["positionEnY", positionEnY],
      ["hauteurParticule", hauteurParticule],
      ["largeurParticule", largeurParticule],
      ["rotationInitiale", Math.floor(Math.random() * 360)],
      ["alpha", 1],
      ["debutDisparition", debutDisparition],
    ]);
    tableau.push(particule);
  }
  return tableau;
}

function convertDegreToRadian(degre) {
  radian = (2 * Math.PI * degre) / 350;
  return radian;
}

function dessin(img, canvas, ctx, tabParticules, numImage) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var numImage = numImage;

  for (let i = 0; i < tabParticules.length; i++) {
    const particule = tabParticules[i];
    ctx.translate(espaceEntreParticules * i, particule.get("positionEnY"));

    var debutDisparition = particule.get("debutDisparition");
    var alpha = particule.get("alpha");
    ctx.globalAlpha = alpha;

    if (debutDisparition <= numImage) {
      if (alpha <= 0) {
      } else {
        alpha = Math.max(0, alpha - 1 / 100);
        particule.set("alpha", alpha);
      }
    }

    var rotationInitiale = particule.get("rotationInitiale");
    var largeurParticule = particule.get("largeurParticule");
    var hauteurParticule = particule.get("hauteurParticule");

    ctx.rotate(convertDegreToRadian(numImage / 5 + rotationInitiale));
    ctx.drawImage(
      img,
      -largeurParticule / 2,
      -hauteurParticule / 2,
      largeurParticule,
      hauteurParticule
    );
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}

function mettreAJourDimensions() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function sleep(ms) {
  const a = new Promise((resolve) => setTimeout(resolve, ms));
  return a;
}

const img = new Image();
img.src = "particule.svg";
var numeroImageGlobal = 0;
var animationFinie = true;

/**
 * lancementAnimation est responsable de dessiner
 * chacune des images de l'animation a partir d'un partir
 * d'un tableau de particule
 * @param {*} img le modele de particule a imprimer sur le canvas
 * @param {*} canvas la surface sur laquelle on dessine
 * @param {*} ctx le context du canvas qui permet les operations de dessin (copie, rotation, translation)
 */

async function lancementAnimation(img, canvas, ctx) {
  animationFinie = false;
  var tabParticules = genererParticules();
  var latest = numeroImageGlobal;

  for (; numeroImageGlobal < 1000 / 2; numeroImageGlobal++) {
    if (numeroImageGlobal != latest + 1) {
      console.log("resize detect");
      tabParticules = genererParticules();
    }
    latest = numeroImageGlobal;
    dessin(img, canvas, ctx, tabParticules, numeroImageGlobal);
    await sleep(3);
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  animationFinie = true;
  numeroImageGlobal = 0;
}

img.onload = async function (e) {
  mettreAJourDimensions();
  console.log(e);
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
};

function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}

window.addEventListener(
  "resize",
  debounce(function (e) {
    mettreAJourDimensions();
    numeroImageGlobal = 0;
  })
);

function gestionnaireEvenement(event) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if (animationFinie) {
    lancementAnimation(img, canvas, ctx);
  } else {
    console.log("non finie");
  }
}

const divText = document.getElementById("anim1");
const containerBoule = document.getElementById("anim2");
const divTitre = document.getElementById("anim3");

divText.addEventListener("mouseenter", gestionnaireEvenement);
containerBoule.addEventListener("mouseenter", gestionnaireEvenement);
divTitre.addEventListener("mouseenter", gestionnaireEvenement);