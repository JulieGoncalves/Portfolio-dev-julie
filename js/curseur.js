var $circle = $('.circle');
var $circleInt = $('.circleInt');

function moveCircle(e) {
	gsap.to($circle, 2, {
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

