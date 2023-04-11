function touchMove(){
    // Initial container width
    var containerWidth = $('.container').outerWidth();
    document.addEventListener('touchmove', function(event) {
        $('.hover').css({
             left:  event.pageX
        });
        $('.left-side').css({
            left: event.pageX + focusZoneWidth
        });
        var rightSideLeft = containerWidth - event.pageX;
        $('.right-side').css({
            right: rightSideLeft
        });

    })
}

touchMove();

function detectTouch() {
    // Initial container width
    var containerWidth = $('.container').outerWidth();
    document.addEventListener('mousemove', function(event) {
        $('.hover').css({
             left:  event.pageX
        });
        $('.left-side').css({
            left: event.pageX + focusZoneWidth
        });
        var rightSideLeft = containerWidth - event.pageX;
        $('.right-side').css({
            right: rightSideLeft
        });
    })
}
detectTouch();

function detectInput(inputType){
    // Detect container width after resizing
    addEvent(window, "resize", function(event) {
        var containerWidth = $('.container').outerWidth();
        $(document).bind(inputType, function(event){
            $('.hover').css({
                 left:  event.pageX
            });
            $('.left-side').css({
                left: event.pageY + focusZoneWidth
            });
            var rightSideLeft = containerWidth - event.pageX;
            $('.right-side').css({
                right: rightSideLeft
            });
        });
    });
}

detectInput('mousemove');
detectInput('touchmove');