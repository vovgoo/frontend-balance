'use strict';

(function ($) {

    /* Preloader */
    $(".loader").fadeOut();
    $("#preloader").delay(200).fadeOut("slow");

    $(document).ready(function() {
    $('.featured__controls li').on('click', function () {
        $('.featured__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.featured__filter').length > 0) {
        var containerEl = $('.featured__filter');
        var mixer = mixitup(containerEl);
    }
    });
    

    /* Background Set */
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /* Hamburger Menu */
    $(document).ready(function() {
        $(".hamburger__open").on('click', function () {
            $(".hamburger__menu__wrapper").addClass("show__hamburger__menu__wrapper");
            $(".hamburger__menu__overlay").addClass("active");
            $("body").addClass("over_hid");
        });
    
        $(".hamburger__menu__overlay").on('click', function () {
            $(".hamburger__menu__wrapper").removeClass("show__hamburger__menu__wrapper");
            $(".hamburger__menu__overlay").removeClass("active");
            $("body").removeClass("over_hid");
        });
    });


    /* Navigation */
    $(document).ready(function() {
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    });


    /* OWL CAROUSEL */
    /* Categories Slider */
    // $(".categories__slider").owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     items: 4,
    //     dots: false,
    //     nav: true,
    //     navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"], // left and right arrow
    //     animateOut: 'fadeOut',
    //     animateIn: 'fadeIn',
    //     smartSpeed: 1200,
    //     autoHeight: false,
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         480: {
    //             items: 2,
    //         },
    //         768: {
    //             items: 3,
    //         },
    //         992: {
    //             items: 4,
    //         }
    //     }
    // });

    
    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });


    /* Latest Products Slider */
    // $(document).ready(function () {
    //     $(".latest-product__slider").owlCarousel({
    //         loop: true,
    //         margin: 0,
    //         items: 1,
    //         dots: false,
    //         nav: true,
    //         navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    //         smartSpeed: 1200,
    //         autoHeight: false,
    //         autoplay: true
    //     });
    // });

    /* Product Discount Slider */
    $(document).ready(function () {
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });
    });



    /* Product Details Pic Slider */
    $(document).ready(function () {
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });
    });


    /* SLIDER */
    /* Price Range Slider */
    $(document).ready(function () {
        var rangeSlider = $(".price-range"),
            minamount = $("#minamount"),
            maxamount = $("#maxamount"),
            minPrice = rangeSlider.data('min'),
            maxPrice = rangeSlider.data('max');
        rangeSlider.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                minamount.val('$' + ui.values[0]);
                maxamount.val('$' + ui.values[1]);
            }
        });
        minamount.val('$' + rangeSlider.slider("values", 0));
        maxamount.val('$' + rangeSlider.slider("values", 1));
    });


    /* (Nice) Select */
    $("select").niceSelect();


    /* Single Product */
    $('.product__details__pic__slider img').on('click', function () {
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src'); // e.g. img/product/details/thumb-1.jpg
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });


    /* Quantity change */
    // var proQty = $('.pro-qty');
    // proQty.prepend('<span class="dec qtybtn">-</span>'); // - sign
    // proQty.append('<span class="inc qtybtn">+</span>'); // + sign
    // proQty.on('click', '.qtybtn', function () {
    //     var $button = $(this); 
    //     var oldValue = $button.parent().find('input').val(); // $button.parent() = <div class="quantity"> // $button.parent().find('input') = <input type="text" value="1">
    //     if ($button.hasClass('inc')) {
    //         var newVal = parseFloat(oldValue) + 1;
    //     } else {
    //         // Don't allow decrementing below zero
    //         if (oldValue > 1) {
    //             var newVal = parseFloat(oldValue) - 1;
    //         } else {
    //             newVal = 1;
    //         }
    //     }
    //     $button.parent().find('input').val(newVal);
    // });

    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form').on('submit',function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    $('.validate-form').on('submit',function(){
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }
    });

    $('.validate-form').on('submit',function(){
    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }
    });

    $('.validate-form').on('submit',function(){
    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    });
    

})(jQuery);