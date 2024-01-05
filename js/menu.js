console.log("ici");
(function () {
  var focusZoneWidth = "100%";
  var focusZoneHeight = 40;
  var isMouseOutsideContainer = true;

  function detectMouseMove() {
    var containerHeight = $(".container").outerHeight();
    var containerWidth = $(".container").outerWidth();
    var containerMenu = document.querySelector(".container");

    console.log(containerMenu);
    containerMenu.addEventListener("mouseout", function (eventMouseMove) {
      const position = $(".container").offset();
      theTop = position.top;
      theLeft = position.left;

      isMouseOutsideContainer = true;
      $(".top-side").css({
        height: containerHeight,
      });
      $(".bottom-side").css({
        height: 0,
      });
    });

    containerMenu.addEventListener("mousemove", function (eventMouseMove) {
      const position = $(".container").offset();
      theTop = position.top;
      theLeft = position.left;

      $(".hover").css({
        top: eventMouseMove.pageY - theTop,
      });
      $(".top-side").css({
        height: eventMouseMove.pageY - theTop - focusZoneHeight / 2,
      });

      var bottomHeight =
        containerHeight -
        (eventMouseMove.pageY - theTop + focusZoneHeight - focusZoneHeight / 2);
      $(".bottom-side").css({
        top: focusZoneHeight + eventMouseMove.pageY - theTop - focusZoneHeight / 2,
        height: bottomHeight,
      });
    });
  }
  detectMouseMove();
})();
