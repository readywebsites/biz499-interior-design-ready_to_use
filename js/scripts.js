( function( $ ) {
    'use strict';

    /* rtl check */
    function rtl_owl(){
    if ($('body').hasClass("rtl")) {
        return true;
    } else {
        return false;
    }};

    /* Check rtl isotop*/
    function rtl_isotop() {
        if ( $( 'body' ).hasClass( 'rtl' ) ) {
           return false;
        } else {
           return true;
        }
    };

    /* OT Custom Nav Arrow Slider */
    var otNavText = [
        '<svg viewBox="0 0 103 16" xmlns="http://www.w3.org/2000/svg"><path d="M102.707 8.70711C103.098 8.31658 103.098 7.68342 102.707 7.29289L96.3431 0.928932C95.9526 0.538408 95.3195 0.538408 94.9289 0.928932C94.5384 1.31946 94.5384 1.95262 94.9289 2.34315L100.586 8L94.9289 13.6569C94.5384 14.0474 94.5384 14.6805 94.9289 15.0711C95.3195 15.4616 95.9526 15.4616 96.3431 15.0711L102.707 8.70711ZM0 9H102V7H0L0 9Z"/></svg>',
        '<svg viewBox="0 0 103 16" xmlns="http://www.w3.org/2000/svg"><path d="M102.707 8.70711C103.098 8.31658 103.098 7.68342 102.707 7.29289L96.3431 0.928932C95.9526 0.538408 95.3195 0.538408 94.9289 0.928932C94.5384 1.31946 94.5384 1.95262 94.9289 2.34315L100.586 8L94.9289 13.6569C94.5384 14.0474 94.5384 14.6805 94.9289 15.0711C95.3195 15.4616 95.9526 15.4616 96.3431 15.0711L102.707 8.70711ZM0 9H102V7H0L0 9Z"/></svg>'
    ];

    
    $('.woocommerce-form-coupon-toggle .showcoupon').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.woocommerce-form-coupon').stop(true, true).slideDown();
        }else{
            $('.woocommerce-form-coupon').stop(true, true).slideUp();
        }
    });

    /* --------------------------------------------------
    * preloader
    * --------------------------------------------------*/
    if ( $('#royal_preloader').length ) {
        var $selector       = $('#royal_preloader'),
            $width          = $selector.data('width'),
            $height         = $selector.data('height'),
            $color          = $selector.data('color'),
            $bgcolor        = $selector.data('bgcolor'),
            $logourl        = $selector.data('url');
        
        Royal_Preloader.config({
            mode           : 'logo',
            logo           : $logourl,
            logo_size      : [$width, $height],
            showProgress   : true,
            showPercentage : true,
            text_colour: $color,
            background:  $bgcolor,
        });        
    };

    $('.octf-search').each( function(){
        var selector = $(this);
        selector.find('.toggle_search').on("click", function(){
            $(this).toggleClass( "active" );
            selector.find('.h-search-form-field').toggleClass('show');
            if ($(this).find('i').hasClass( "ot-flaticon-loupe" )) {
                $(this).find('i').removeClass( "ot-flaticon-loupe" ).addClass("ot-flaticon-close");
            }else{
                $(this).find('i').removeClass( "ot-flaticon-close" ).addClass("ot-flaticon-loupe");
            }
        });
    });

    var element = $('#panel-btn'),
        sidebar = $('#side-panel');
      
    function panel_handler() {
        var isActive = !element.hasClass('active');
  
        element.toggleClass('active', isActive);
        sidebar.toggleClass('side-panel-open', isActive);
        $('body').toggleClass('side-panel-active', isActive);
        return false;
    }
  
    $('#panel-btn, .side-panel-close, .panel-overlay').on('click', panel_handler);

    $('.octf-menu-hamburger-area').each( function(){
        var selector         = $(this),
            btnToggle        = selector.find('.menu-hamburger-toggle'),
            menuHamburger    = selector.find('.octf-menu-hamburger'),
            menuOverlay      = selector.find('.menu-overlay'),
            btnClose         = menuHamburger.find('#menu-hamburger-close');

        function menu_hamburger_handler() {
            var isActive = !btnToggle.hasClass('active');
            btnToggle.toggleClass('active', isActive);
            menuHamburger.toggleClass('open-menu', isActive);
            $('body').toggleClass('side-menu-active', isActive);
            return false;
        }
        
        btnToggle.on('click', menu_hamburger_handler);
        btnClose.on('click', menu_hamburger_handler);
        menuOverlay.on('click', menu_hamburger_handler);
        document.addEventListener('keydown', function(event){
            if(event.key === "Escape" && $('body').hasClass('side-menu-active')){
                menu_hamburger_handler();
            }
        });
    });

    /* --------------------------------------------------
    * Function header bottom begin
    * --------------------------------------------------*/
    var headerBottom = $('.header-bottom').parents('header');

    function otHeaderBottomLoad() {
        var mq = window.matchMedia("(min-width: 1025px)"),
            $document = $(document),
            header_height = parseInt(headerBottom.height(), 10),
            screen_height = parseInt($(window).height(), 10),
            header_mt = screen_height - header_height;

        window.addEventListener('scroll', function(e){
            if (mq.matches) {
                var $document = $(document),
                    header_height = parseInt(headerBottom.height(), 10),
                    screen_height = parseInt($(window).height(), 10),
                    header_mt = screen_height - header_height;

                if ($document.scrollTop() >= header_mt) {
                    headerBottom.css("position", "fixed");
                    headerBottom.css("top", "0");
                } else if ($document.scrollTop() <= header_mt) {
                    headerBottom.css("position", "absolute");
                    headerBottom.css("top", header_mt);
                }
            }
        });
        if (mq.matches) {
            headerBottom.css('position', 'absolute');
            headerBottom.css('top', header_mt);
        }
    }

    function otHeaderBottomResize() {
        var mq = window.matchMedia("(max-width: 1024px)");
        if (mq.matches) {
            headerBottom.css("position", "relative");
            headerBottom.css("top", "0");
        }
    }

    /* Function header bottom close */

    $(window).on('load', function () {
        if( headerBottom.length > 0 ){
            otHeaderBottomLoad();
        }
    });

    $('.ot-accordions-wrapper').each( function () {
        var selector = $(this),
            content = selector.find('.ot-acc-item__content'),
            header  = selector.find('.ot-acc-item__title');

        header.off("click");

        header.each(function(){
            if ($(this).data('default') == 'yes') {
                $(this).next().addClass('active').slideDown(300);
                $(this).parent().addClass('current');
            }
        });

        header.on('click', function(e){
            e.preventDefault();
            var $this = $(this);

            $this.next().toggleClass('active').slideToggle(300);
            $this.parent().toggleClass('current');
            content.not($this.next()).slideUp(300);
            header.not($this).parent().removeClass('current');
        });
    });

    $('.ot-tabs').each(function() {
        var selector = $(this),
            tabs     = selector.find('.ot-tabs__heading li'),
            content  = selector.find('.ot-tabs__content');
        tabs.first().addClass('current');
        content.first().addClass('current');

        tabs.on( 'click', function(){
            var tab_id = $(this).attr('data-tab');
            $(this).siblings().removeClass('current');
            $(this).parents('.ot-tabs').find('.ot-tabs__content').removeClass('current');
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        });
    });

    $('div.yearly').hide();
    $('.ot-switcher').each( function () {
        var selector  = $(this);
        selector.find('span').on( 'click', function() {
            var parent = $(this).parents('section');
            selector.find('span').removeClass('active');
            $(this).addClass('active');
            if( $(this).hasClass('l-switch') ){
                parent.find('div.yearly').hide();
                parent.find('div.monthly').show();
            }else{
                parent.find('div.monthly').hide();
                parent.find('div.yearly').show();
            }
        });
    });

    $($(".ot-cpt-heading")[0]).addClass("active");
    $("ul").on("click", "li", function () {
        var pos = $(this).index() + 2;
        $("tr").find('td:not(:eq(0))').hide();
        $('td:nth-child(' + pos + ')').css('display', 'table-cell');
        $("tr").find('th:not(:eq(0))').hide();
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.ot-countdown').each( function() {
        var selector = $(this),
            date     = selector.data('date'),
            zone     = selector.data('zone'),
            day      = selector.data('day'),
            days     = selector.data('days'),
            hour     = selector.data('hour'),
            hours    = selector.data('hours'),
            min      = selector.data('min'),
            mins     = selector.data('mins'),
            second   = selector.data('second'),
            seconds  = selector.data('seconds');
        selector.countdown({
            date: date,
            offset: zone,
            day: day,
            days: days,
            hour: hour,
            hours: hours,
            minute: min,
            minutes: mins,
            second: second,
            seconds: seconds
        }, function () {
            alert('Done!');
        });
    });

    $(window).on('scroll', function() {
        $('.ot-counter').each( function () {
            var scrollTop   = $(document).scrollTop() + $(window).height();
            var counter     = $(this).find('span.ot-counter__num'),
                countTo     = counter.attr('data-to'),
                during      = parseInt( counter.attr('data-time') );

            if ( scrollTop > counter.offset().top + counter.height() ) {
                $(this).removeAttr('data-counter');
                $({
                    countNum: counter.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        counter.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        counter.text(this.countNum);
                    }
                });
            }
        });

        $('.ot-progress-circle').each(function() {
            var circle    = $(this),
                bar_color = circle.data('color'),
                bar_hei   = circle.data('height'),
                bar_size  = circle.data('size');
            var scrollTop = $(document).scrollTop() + $(window).height();
            if ( scrollTop >  circle.offset().top +  circle.height() ) {
                circle.attr("data-processed", "true");
                circle.find('.ot-progress-circle__inner').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    /*easing: 'easeInOut',*/
                    onStep: function(from, to, percent) {
                        $(this.el).find('.ot-progress-percent').text(Math.round(percent) + '%');
                    }
                });
            }
        });

         $('.ot-progress-line:not([data-processed])').each(function() {
            var bar = $(this),
                line = bar.find(".ot-progress-bar"),
                progressEnd = bar.data('percent'),
                percent = bar.find('.ot-progress-percent');
            var scrollTop = $(document).scrollTop() + $(window).height();

            if ( scrollTop >  bar.offset().top +  bar.height() ) {
                bar.attr("data-processed", "true");
                line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");

                for (var i = 0; i <= 50; i++) {
                    (function (count) {
                        setTimeout(function () {
                            percent.html(Math.round((progressEnd / 50) * count) + "%");
                        }, 30 * count);
                    })(i);
                }
            }
        });
    });

    $(document).ready( function() {
        
        /* --------------------------------------------------
        * mobile menu
        * --------------------------------------------------*/
        $('.mmenu_wrapper li:has(ul)').prepend('<span class="arrow"><i class="ot-flaticon-arrow-point-to-right"></i></span>');
        $(".mmenu_wrapper .mobile_mainmenu > li span.arrow").on('click',function() {
            $(this).parent().find("> ul").stop(true, true).slideToggle()
            $(this).toggleClass( "active" ); 
        });
        
        $( "#mmenu_toggle" ).on('click', function() {
            $(this).toggleClass( "active" );
            $(this).parents('.header_mobile').toggleClass( "open" );
            if ($(this).hasClass( "active" )) {
                $('.mobile_nav').stop(true, true).slideDown(300);
            }else{
                $('.mobile_nav').stop(true, true).slideUp(300);
            }
        });

        var element = $('#mmenu-toggle'),
            mmenu   = $('#mmenu-wrapper');
  
        function mmenu_handler() {
            var isActive = !element.hasClass('active');
  
            element.toggleClass('active', isActive);
            mmenu.toggleClass('mmenu-open', isActive);
            $('body').toggleClass('mmenu-active', isActive);
            return false;
        }
  
        $('#mmenu-toggle, .mmenu-close, .mmenu-overlay').on('click', mmenu_handler);
  
        $('.mmenu-wrapper li:has(ul)').prepend('<span class="arrow"><i class="ot-flaticon-arrow-point-to-right"></i></span>');
        $(".mmenu-wrapper .mobile_mainmenu > li span.arrow").on('click',function() {
            $(this).parent().find("> ul").stop(true, true).slideToggle()
            $(this).toggleClass( "active" ); 
        });

        /* --------------------------------------------------
        * sticky header
        * --------------------------------------------------*/
        $('.header-static .is-fixed').parent().append('<div class="header-clone"></div>');
        $('.header-clone').height($('#site-header .is-fixed').outerHeight());
        $('.header-static .header-clone').hide();   
        $(window).on("scroll", function(){
            var site_header = $('#site-header').outerHeight() + 1;  
                
            if ($(window).scrollTop() >= site_header) {         
                $('.site-header .is-fixed').addClass('is-stuck');   
                $('.header-static .header-clone').show();   
            }else {
                $('.site-header .is-fixed').removeClass('is-stuck');                      
                $('.header-static .header-clone').hide();
            }
        });

        $('a.scroll-target').on('click', function(e) {
            var $anchor = $(this);
            $('html, body').animate({
                scrollTop: $($anchor.attr('href')).offset().top-0
            });
            e.preventDefault();
        });

        /* --------------------------------------------------
        * gallery post
        * --------------------------------------------------*/
        var galleryPost = $('.gallery-post');
        if (galleryPost.length > 0 ) {
            galleryPost.each( function () {
                var selector = $(this).find('.owl-carousel');
                selector.owlCarousel({
                    rtl: rtl_owl(),
                    autoplay:true,
                    autoplayTimeout: 6000,
                    loop:true,
                    margin:0,
                    responsiveClass:true,
                    dotsClass: 'owl-dots ot-dots-classic',
                    dots:true,
                    nav:true,
                    navText: otNavText,
                    responsive : {
                        0 : {
                            items: 1,
                        },
                        768 : {
                            items: 1,
                        },
                        1024 : {
                            items: 1,
                        }
                    }
                });
            });
        }

        $('.ot-client-logo-slider').each( function () {
            var selector     = $(this);
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: true,
                autoplayTimeout: 6000,
                loop: true,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-classic',
                dots: false,
                nav: false,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 2,
                    },
                    768 : {
                        items: 4,
                    },
                    1024 : {
                        items: 7,
                        margin: 80,
                    }
                }
            });
        });

        $('.ot-testimonial-slider').each( function () {
            var selector     = $(this);
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: false,
                autoplayTimeout: 6000,
                loop: true,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-classic',
                dots: true,
                nav: false,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                        margin: 30,
                    },
                    768 : {
                        items: 1,
                        margin: 30,
                    },
                    1024 : {
                        items: 1,
                        margin: 30,
                    }
                }
            });
        });


        $('.ot-testimonial-slider-sarc').each( function () {
            var selector     = $(this);
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: false,
                autoplayTimeout: 6000,
                loop: true,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-classic',
                dots: false,
                nav: true,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                        margin: 30,
                    },
                    768 : {
                        items: 2,
                        margin: 30,
                    },
                    1024 : {
                        items: 2,
                        margin: 30,
                    }
                }
            });
        });

        $('.team-slide-heading').each( function () {
            otOutside();
            var 
                selector     = $(this),
                $item = selector.data("column"),
                $item2 = selector.data("tablet"),
                $dots = selector.data("dots"),
                $nav = selector.data("nav"),
                $auto = selector.data("auto"),
                $loop = selector.data("loop"),
                $gap = selector.data("gap"),
                $gap2 = selector.data("gapmb");

                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: $auto,
                autoplayTimeout: 6000,
                loop: $loop,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-classic',
                dots: $dots,
                nav: $nav,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                    },
                    768 : {
                        items: $item2,
                        margin: $gap2,
                    },
                    992 : {
                        items: $item2,
                        margin: $gap,
                    },
                    1200 : {
                        items: $item,
                        margin: $gap,
                    }
                }
            });
            customNav(selector);
        });

        $('.ot-service-slider-2').each( function () {
            otOutside();
            var selector     = $(this);
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: true,
                autoplayTimeout: 6000,
                loop: true,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-custom',
                dots: true,
                nav: false,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                    },
                    768 : {
                        items: 2,
                    },
                    992 : {
                        items: 2,
                    },
                    1200 : {
                        items: 2.7125,
                    },
                }
            });
            customNav(selector);
        });

        $('.ot-project-slider').each( function () {
            otOutside();
            var selector     = $(this),
                $item = selector.data("column"),
                $item2 = selector.data("tablet"),
                $dots = selector.data("dots"),
                $nav = selector.data("nav"),
                $auto = selector.data("auto"),
                $loop = selector.data("loop"),
                $gap = selector.data("gap"),
                $gap2 = selector.data("gapmb");
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: $auto,
                autoplayTimeout: 6000,
                loop: $loop,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-custom',
                dots: $dots,
                nav: $nav,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                        margin: $gap2,
                    },
                    768 : {
                        items: $item2,
                        margin: $gap2,
                    },
                    992 : {
                        items: $item2,
                        margin: $gap,
                    },
                    1200 : {
                        items: $item,
                        margin: $gap,
                    },
                }
            });
            customNav(selector);
        });

        $('.ot-image-slider').each( function () {
            otOutside();
            var selector     = $(this),
                $item = selector.data("column"),
                $item2 = selector.data("tablet"),
                $dots = selector.data("dots"),
                $nav = selector.data("nav"),
                $auto = selector.data("auto"),
                $loop = selector.data("loop"),
                $gap = selector.data("gap"),
                $gap2 = selector.data("gapmb");
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: $auto,
                autoplayTimeout: 6000,
                loop: $loop,
                responsiveClass:true,
                autoWidth: 'yes',
                dotsClass: 'owl-dots ot-dots-custom',
                dots: $dots,
                nav: $nav,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                        margin: $gap2,
                    },
                    768 : {
                        items: $item2,
                        margin: $gap2,
                    },
                    1200 : {
                        items: $item,
                        margin: $gap,
                    },
                }
            });
            customNav(selector);
        });

        $('.ot-service-slider-title').each( function () {
            otOutside();
            var selector     = $(this);
                
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: true,
                autoplayTimeout: 6000,
                loop: true,
                responsiveClass:true,
                dotsClass: 'owl-dots ot-dots-classic',
                dots: false,
                nav: false,
                autoplayHoverPause: true,
                navText: otNavText,
                responsive : {
                    0 : {
                        items: 1,
                    },
                    768 : {
                        items: 2,
                        margin: 30,
                    },
                    992 : {
                        items: 1.5,
                        margin: 30,
                    },
                    1200 : {
                        items: 2.4175,
                        margin: 30,
                    },
                }
            });
            customNav(selector);
        });

        $('.portfolio-related-posts').each( function () {
            var selector = $(this);
            selector.find('.owl-carousel').owlCarousel({
                rtl: rtl_owl(),
                autoplay: true,
                loop: false,
                dotsClass: 'owl-dots ot-dots-classic',
                dots: false,
                nav: false,
                responsive : {
                    0 : {
                        items: 1,
                        margin: 0,
                    },
                    768 : {
                        items: 2,
                        margin: 30,
                    },
                    1024 : {
                        items: 3,
                        margin: 30,
                    }
                }
            });
        });

        $('.twentytwenty-container').each( function(){
            var $selector     = $(this),
                orientation     = $selector.data('orientation'),
                before      = $selector.data('before'),
                after       = $selector.data('after'),
                before_size     = $selector.data('bsize');      
            $selector.twentytwenty({        
                default_offset_pct: before_size, 
                orientation: orientation, 
                before_label: before, 
                after_label: after, 
                no_overlay: false, 
                move_slider_on_hover: false, 
                move_with_handle_only: true, 
                click_to_move: true,
            });     
        }); 

         $('.single-product').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            callbacks: true,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
        });

        $('.single-product').lightGallery({
            selector: '.link-image-action',
            share: false,
            pager: false,
            thumbnail: false
        });

        function customNav(selector){
            var customNav   = selector.find('.custom-nav'),
                otOwl       = selector.find('.owl-carousel');
            if( customNav.length > 0 ){
                /* Go to the next item */
                customNav.find('.owl-next').on("click", function () {
                    otOwl.trigger('next.owl.carousel', [300]);
                });
                /* Go to the previous item */
                customNav.find('.owl-prev').on("click", function () {
                    otOwl.trigger('prev.owl.carousel', [300]);
                });  
            }
            return false;
        }
            

    });

    function carouselOutside(){
        var otSliderOutside = $('.ot-slider.--outside');
        if (otSliderOutside.length > 0 ) {
            otSliderOutside.each(function() {
                var screen_width = $(window).width();
                if ( screen_width > 1200 ) {                
                    var margin = screen_width - 1170;                
                } else {
                    var margin = 0;
                }
                $(this).css( 'margin-right', -margin/2 );
            });
        }
        return false;
    }

    var otOutside = function () {
        carouselOutside();
        $(window).on( 'resize', function() {
            carouselOutside();
        });
    };

    /* --------------------------------------------------
     * Gallery Outside
     * --------------------------------------------------*/
    function galleryOutside(){
        var otGalleryOutsideWrap = $('.ot-image-gallery.--outside');
        if (otGalleryOutsideWrap.length > 0 ) {
            otGalleryOutsideWrap.each( function(){
                var screen_width = $(window).width();
                if ( screen_width > 1200 ) {                
                    var margin = screen_width - 1170;                
                } else {
                    var margin = 0;
                }
                $(this).css( 'margin-right', -margin/2 );
            })
        }
        return false;
    }

    var otGalleryOutside = function () {
        galleryOutside();
        $(window).on( 'resize', function() {
            galleryOutside();
        });
    };

    $(window).on('load', function () {

        /* --------------------------------------------------
        * popup video
        * --------------------------------------------------*/
        var video_popup = $('.video-popup');
        if (video_popup.length > 0 ) {
            video_popup.each( function(){
                var selector    = $(this),
                    videoPopup  = selector.find('.btn-play');
                selector.lightGallery({
                   selector: videoPopup,
                });
            });
        };
        
    });

    $('.instafeed-gallery').each( function(){
        var selector = $(this),
            popup   = selector.find('.instafeed-item > a');
        popup.append('<span class="overlay"><i class="ot-flaticon-plus-sign"></i></span>');
        selector.lightGallery({
            selector: popup,
            share: false,
            pager: false,
        });
    });

    $('.ot-image-gallery').each( function(){
        otGalleryOutside();
        var selector = $(this),
            popup   = selector.find('.gallery-icon > a');
        popup.append('<span class="overlay"><i class="ot-flaticon-loupe"></i></span>');
        selector.lightGallery({
            selector: popup,
            share: false,
            pager: false,
        });
    });

    /* --------------------------------------------------
    * back to top
    * --------------------------------------------------*/
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, /* px*/
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); 
    }

    function updateFilter() {
        $(window).load( function () {
            $('.project_filters a').each(function() {
                var data_filter = this.getAttribute('data-filter');
                var num = $(this)
                    .closest('.project-filter-wrapper')
                    .find('.project-item')
                    .filter(data_filter).length;
                $(this)
                    .find('.filter-count')
                    .text( num );
                if ( num != 0 && $(this).hasClass('empty') ) {
                    $(this).removeClass('empty');
                }
            });
        });
    }

    /* Filter Portfolio */
    $(window).load( function () {
        $('.project-filter-wrapper').each( function(){
            var $container = $(this).find('.projects-grid'); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                animationEngine : 'css',
                masonry: {
                    columnWidth: '.grid-sizer'
                },
            });

            var $optionSets  = $(this).find('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.on('click', function(){
                var $this = $(this);

                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
            /* popup gallery */
            if( $container.hasClass('img-popup') ){
                $('.img-popup').lightGallery({
                    selector: '.projects-thumbnail',
                    share: false,
                    pager: false,
                    thumbnail: false
                });
            }
            /* count filters */
            updateFilter();
        });
    });
    /* popup gallery */
    if( $('.ot-project-box').hasClass('img-popup') ){
        $('.img-popup').lightGallery({
            selector: '.ot-project-image',
            share: false,
            pager: false,
            thumbnail: false
        });
    }

} )( jQuery );
