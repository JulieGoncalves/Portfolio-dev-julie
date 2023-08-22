// je recupere l'element path
let path = document.getElementById('courbe');
// j'invoque la methode getTotalLength
// sur l'element path
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength+ '' + pathLength;

window.addEventListener('scroll',()=>{
    //console.log('ca scroll');
 var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
 console.log('ca scroll a '+scrollPercentage+'%');

var drawLength = pathLength + scrollPercentage ;

path.style.strokeDashoffset= pathLength - drawLength;
 
} )