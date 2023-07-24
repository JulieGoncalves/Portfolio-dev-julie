var $circle = $('.circle');
var $circleInt = $('.circleInt');
function moveCircle(e) {
	gsap.to($circle, 1, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}
$(window).on('mousemove', moveCircle);

function moveCircleInt(e) {
	gsap.to($circleInt, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircleInt);

// ----------

// var circle = document.querySelector('.circle');
// var circleInt = document.querySelector('.circleInt');

// function moveCircle(e) {
//   circle.style.left = e.pageX + 'px';
//   circle.style.top = e.pageY + 'px';
// }

// function moveCircleInt(e) {
//   circleInt.style.left = e.pageX + 'px';
//   circleInt.style.top = e.pageY + 'px';
// }

// window.addEventListener('mousemove', moveCircle);
// window.addEventListener('mousemove', moveCircleInt);
