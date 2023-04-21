(function(){
	var focusZoneWidth = '100%' ;
	var focusZoneHeight = 70;
	var addEvent = function(object, type, callback) { //fonction travaille avec les param qu on lui donne/ ecrire avec un stylo// 
	    // On s'assure que Object ne soit pas null//
		if (object == null || typeof(object) == 'undefined') return;
	    if (object.addEventListener) {
	        object.addEventListener(type, callback, false); // tous les autres navigateurs //
	    } else if (object.attachEvent) { 
	        object.attachEvent("on" + type, callback); // internet explorer ie et Opera//
	    } else {
	        object["on"+type] = callback;
	    }
	};
	
	function detectMouseMove() { //fonction dormir//
		// Initial container width
		var containerHeight = $('.container').outerHeight();
		document.addEventListener('mousemove', function(event) {

			// event.page = evenement qui recupere la position de ma souris
			$('.hover').css({
				// top <=> y
				// left <=> x

				 top:  event.pageY // On veut que la cible commence verticalement au niveau de la souris
			});
			$('.top-side').css({
				height: event.pageY // On veut que la zone du haut s'arrete verticalement au niveau de la souris
			});
			// On calcule la nouvelle hauteur de la zone du bas
			var bottomHeight = containerHeight - (event.pageY + focusZoneHeight)
			$('.bottom-side').css({
				top: focusZoneHeight + event.pageY, // nouvelle posisition verticale de la zone du bas
				// cad, la position de la souris plus la hauteur de la zone nette
				height: bottomHeight // on applique
			});
		})
	}
	detectMouseMove();
	
	$(document).ready(function(){
		$(".container").mouseenter(function(){
			//Les éléments avec .cacher seront cachés
			$('.circle').hide()
			$('.circleInt').hide()
		});
		$(".container").mouseleave(function(){
			 //Les éléments avec .afficher seront visibles
			$('.circle').show()
			$('.circleInt').show()
		});
	  });
	

})();

// Je veux que lorsque mon curseur entre dans le 'container' il disparaisse //
// au survole de container > le curseur est invisible // 

