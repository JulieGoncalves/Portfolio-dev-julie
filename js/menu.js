(function () {
  var focusZoneWidth = "100%";
  var focusZoneHeight = 40;

  var isMouseOutsideContainer = true;

  function detectMouseMove() {
    // Initial container width
    var containerHeight = $(".container").outerHeight();
    var containerWidth = $(".container").outerWidth();

    document.addEventListener("mousemove", function (eventMouseMove) {
      const position = $(".container").offset();
      theTop = position.top;
      theLeft = position.left;
      // console.log(theLeft);
      if (
        eventMouseMove.pageX < theLeft ||
        eventMouseMove.pageX > theLeft + containerWidth
      ) {
        console.log("a l exterieur horizontal");
        // Quand ma souris est a l exterieur de notre container on veut que notre zone de floue haute prenne toute la hauteur du container, et la zone de floue du bas soit a 0.

        isMouseOutsideContainer = true;
        $(".top-side").css({
          height: containerHeight,
        });
        $(".bottom-side").css({
          height: 0,
        });
      } else {
        console.log("a l interieur horizontal");
        // event.page = evenement qui recupere la position de ma souris
        $(".hover").css({
          top: eventMouseMove.pageY - theTop, // On veut que la cible commence verticalement au niveau de la souris
        });
        $(".top-side").css({
          height: eventMouseMove.pageY - theTop - focusZoneHeight / 2, // On veut que la zone du haut s'arrete verticalement au niveau de la souris
        });

        // On calcule la nouvelle hauteur de la zone du bas
        var bottomHeight =
          containerHeight - (eventMouseMove.pageY - theTop + focusZoneHeight - focusZoneHeight / 2);
        $(".bottom-side").css({
          top:
            focusZoneHeight +
            eventMouseMove.pageY -
            theTop -
            focusZoneHeight / 2, // nouvelle posisition verticale de la zone du bas
          // cad, la position de la souris plus la hauteur de la zone nette
          height: bottomHeight, // on applique
        });
      }
    });
  }
  detectMouseMove();
})();
