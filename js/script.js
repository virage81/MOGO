


$(function() {
    
    var header =$("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();
    
    /*header-fixed*/
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset)
        
    });


    function checkScroll(scrollOffset) {
        
        if( scrollOffset >= introH) { 
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockOffset =  $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate ({
            scrollTop: blockOffset
        }, 600);
    });


    /*nav toggle menu*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    

    /*collapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("collapse");

        
        $(blockId).slideToggle();
        $this.toggleClass("active");
    });


    /*slider*/
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});