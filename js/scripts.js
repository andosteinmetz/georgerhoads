$(document).ready(function(){
    var slider = $("#bx-slider").bxSlider();
    $(document).keydown(function(e){
        if(e.keyCode == 39){
            slider.goToNextSlide();
            return false;
        }
        else if(e.keyCode == 37){
            slider.goToPrevSlide();
            return false;
        }
    });
});