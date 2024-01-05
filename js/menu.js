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
      console.log("mouseout");

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
      // quand je suis dans le menu
      // mouse mouve
      console.log("mousemove");
      // event.page = evenement qui recupere la position de ma souris
      $(".hover").css({
        top: eventMouseMove.pageY - theTop, // On veut que la cible commence verticalement au niveau de la souris
      });
      $(".top-side").css({
        height: eventMouseMove.pageY - theTop - focusZoneHeight / 2, // On veut que la zone du haut s'arrete verticalement au niveau de la souris
      });

      // On calcule la nouvelle hauteur de la zone du bas
      var bottomHeight =
        containerHeight -
        (eventMouseMove.pageY - theTop + focusZoneHeight - focusZoneHeight / 2);
      $(".bottom-side").css({
        top:
          focusZoneHeight + eventMouseMove.pageY - theTop - focusZoneHeight / 2, // nouvelle posisition verticale de la zone du bas
        // cad, la position de la souris plus la hauteur de la zone nette
        height: bottomHeight, // on applique
      });
    });
  }
  detectMouseMove();
})();
console.log("ici");
