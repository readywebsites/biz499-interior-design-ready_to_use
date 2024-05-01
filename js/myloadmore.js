(function($) {
	"use strict";

	function updateFilter() {
        $('.project_filters a').each(function() {
            var data_filter = this.getAttribute('data-filter');
            var num = $(this)
                .closest('.project-filter-wrapper')
                .find('.project-item')
                .filter(data_filter).length;
            $(this)
                .find('sup')
                .text( num );
            if ( num != 0 && $(this).hasClass('empty') ) {
                $(this).removeClass('empty');
            }
        });
    }

	function loadmore(){
		
		var btn		= $(this),
			grid    = $(this).parents('.project-filter-wrapper').find('.projects-grid'),
			offset  = grid.find('.project-item').length,
			more    = grid.data('load'),
			loaded  = $(this).data('loaded'),
			loading = $(this).data('loading'),
			cat 	= $(this).data('category'),
			count   = grid.data('count'),
			svgLoading = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 100 100"><circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="42" stroke-dasharray="197.92033717615698 67.97344572538566"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg>';

		$.ajax({
			url : ronmi_loadmore_params.ajaxurl, /*AJAX handler*/
			data : {
				'action': 'loadmore', /* the parameter for admin-ajax.php*/
				'ppp'	: more,
				'cat'	: cat,
				'offset': offset,
			},
			type : 'POST',
			beforeSend : function ( xhr ) { 
				btn.text(loading).append(svgLoading); /*some type of preloader*/
			},
			success : function( data ){
				if( data ) {
					var items = $(data);
					btn.text(loaded);
					grid.imagesLoaded().always(function() {
						grid.append(items).isotope('appended', items).isotope('reloadItems'); /*insert new posts*/
						setTimeout(function() {
							grid.isotope('layout');
							updateFilter();
						}, 300);
					});
					if( grid.hasClass('img-popup') ){
						grid.data("lightGallery").destroy(true);
						grid.lightGallery({
							selector: '.projects-thumbnail',
							share: false,
							pager: false,
							thumbnail: false
						});
					}

				} else {
					btn.hide(); /* if no data, HIDE the button as well*/
				}
			}
		});
		offset += more;
		if( count <= offset ){
			btn.fadeOut(1000);
		}
		return false;
	}

	var projectLoadmore = function ($scope, $) {
		$scope.find('.project-filter-wrapper').each(function () {
			var selector = $(this).find('.btn-loadmore');
			selector.on('click', loadmore);
		});
	};

	$(window).on('load', function () {
		/* use for portfolio archive page */   
		$('#btn-loadmore').on('click', loadmore);
	});

	/**
     * Elementor JS Hooks
     */
    $(window).on("elementor/frontend/init", function () {

		/*projects filter isotope*/
		elementorFrontend.hooks.addAction(
            "frontend/element_ready/ot-portfolio-grid.default",
            projectLoadmore
        );

        /*projects filter isotope*/
		elementorFrontend.hooks.addAction(
            "frontend/element_ready/ot-portfolio-scattered.default",
            projectLoadmore
        );

  });

})(jQuery);