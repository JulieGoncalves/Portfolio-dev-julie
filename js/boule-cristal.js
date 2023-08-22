// au click de l image, je veux qu'un encadré apparaisse et et devoile une phrase selectionné au hasard dans mon tableau 

var citation = [
'"Les apparences sont trompeuses."',
'"Qui veut gravir une montagne commence par le bas."',
'"L\'espoir fait vivre."',
'"Nos connaissances sont une goutte, notre ignorance, un océan."',
'"La persévérance vient à bout de tout."',
'"Ce qui ne nous tue pas nous rend plus fort."',
'"Le courage n\'est qu\'une accumulation de petits pas."',
'"Le plus difficile est la décision d\'agir, le reste n\'est que ténacité."'
];

// Declaration
function citationAleatoire(){
    var rand = Math.floor(Math.random()*citation.length);
    var resultat = citation[rand];
    return resultat;
    console.log(resultat)
}
const h3citation = document.getElementById("resultat-citation");
const boules = document.getElementsByClassName("boule-cristal");
for (let boule of boules) {
    boule.addEventListener("click", (event) => {
        // appel
        var resultat = citationAleatoire(citation);
        h3citation.textContent = resultat;
    });
};
