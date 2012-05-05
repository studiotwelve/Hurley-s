$(function(){

	if ($(window).innerWidth() < 1140) {
		window.scrollTo(0, 1);
	}
	
	$('#gmap-link').bind('click', function(event) {
		window.open(this.href, '_blank');
		return false;
	});
	
	$('#gmap').gmap().bind('init', function(evt, map) { 
	        $('#gmap').gmap('addMarker', { /*id:'m_1',*/ 'position': '35.518622,-83.101101', 'bounds': true }).click(function(event) {
				$('#gmap-link').trigger('click');
	        });
	        $('#gmap').gmap('option', 'zoom', 17);                                                                                                                                                                                                                
	});
	
	$('html').removeClass('no-js');
		
	$('#slides, #slides_ipad').slides({
		preload: true,
		preloadImage: '/img/loading.gif',
		play: 7500,
		pause: 7500,
		hoverPause: true,
		slideEasing: "easeInOutSine"
	});
	
	var startSlide = 8;
				
	$('#slides_menu').slides({
		autoHeight: true,
		generatePagination: false,
		start: startSlide,
		animationComplete: function(current) {
			// @todo research this, seems overly complex and redundant...
			var bl = $('.book-left-y');
			var br = $('.book-right-y');
			
			if (($('.book-left-y').outerHeight()+23) > $('.book-right-y').outerHeight()) {
			
				$('.book-left-y').animate({height: $('.book-left-y').children('#menu-wrapper').outerHeight()+47}, 0, '', function () {
					if (($('.book-left-y').outerHeight()+23) > $('.book-right-y').outerHeight()) {	
						$('.book-right-y').animate({height: $('.book-left-y').outerHeight()+25}, 0, '');
					}
					
					if (($('.book-left-y').outerHeight()+23) < $('.book-right-y').outerHeight()) {
					
						$('.book-right-y').animate({height: $('.book-right-y').children('#slides_menu').outerHeight()+25}, 0, '', function () {
							if (($('.book-left-y').outerHeight()+23) < $('.book-right-y').outerHeight()) {	
								$('.book-left-y').animate({height: $('.book-right-y').outerHeight()+23}, 0, '');
							}	
						});
						
					}	
				});
				
			}
			
			if (($('.book-left-y').outerHeight()+23) < $('.book-right-y').outerHeight()) {
			
				$('.book-right-y').animate({height: $('.book-right-y').children('#slides_menu').outerHeight()+25}, 0, '', function () {
					if (($('.book-left-y').outerHeight()+23) < $('.book-right-y').outerHeight()) {	
						$('.book-left-y').animate({height: $('.book-right-y').outerHeight()+23}, 0, '');
					}
					
					if (($('.book-left-y').outerHeight()+23) > $('.book-right-y').outerHeight()) {
					
						$('.book-left-y').animate({height: $('.book-left-y').children('#menu-wrapper').outerHeight()+47}, 0, '', function () {
							if (($('.book-left-y').outerHeight()+23) > $('.book-right-y').outerHeight()) {	
								$('.book-right-y').animate({height: $('.book-left-y').outerHeight()+25}, 0, '');
							}	
						});
						
					}	
				});
				
			}
			
			if (($('.book-right-y').outerHeight()+25)<($('.book-left-y').outerHeight()+23)) {
				$('.book-right-y').animate({height: parseInt($('.book-left-y').outerHeight()+25)}, 0, '');
			}
			
			if (($('.book-right-y').outerHeight()+25)>($('.book-left-y').outerHeight()+23)) {
				$('.book-left-y').animate({height: parseInt($('.book-right-y').outerHeight()+23)}, 0, '');
			}
		}
	});
	
	$(window).load(function () {		
		$('#slides_menu ul.pagination a.'+(startSlide+1)).trigger('click');
		$('.slides_menu-pagination a.'+(startSlide+1)).addClass('active');		
	});
			
	$('.slides_menu-pagination a').each(function(e) {
		
		$(this).click(function() {
			$('#slides_menu ul.pagination a.'+(e+1)).trigger('click');
			$('.slides_menu-pagination a.active').removeClass('active');
			$(this).addClass('active');
			return false;
		}).addClass(''+(e+1)+'').hover(function() {
			//Figure out the current slide number & make corresponding nav item inactive
			
				$('.slides_menu-pagination a.active').addClass('inactive').hover(function() {
					$(this).removeClass('inactive');
				});
			
		}, function() {
			//Figure out the current slide number & make corresponding nav item active
			
				$('.slides_menu-pagination a.active').removeClass('inactive');
			
		});
			
	});
	
	$(window).load(function () {		
		$('#slides_menu ul.pagination a.'+(startSlide+1)).trigger('click');
		$('.slides_menu-pagination a.'+(startSlide+1)).addClass('active');		
	});
	
	if ($('.book-left-y').outerHeight() < $('.book-right-y').outerHeight()) {
		$('.book-left-y').animate({height: $('.book-right-y').outerHeight()+23}, 0, '');
	}
	
	if ($(window).innerWidth() > 1140) {		
		var win = $(window);
		var sBarWrap = $('#main-sidebar-wrapper');
		var sBar = $('#main-sidebar');
		
		win.bind('scroll resize', function() {
			if ((win.scrollTop() > sBarWrap.offset().top) && (win.scrollTop() != sBar.offset().top)) {
				sBar.css({'position': 'absolute', 'top': (win.scrollTop()-64)});
			} else if (win.scrollTop() < sBarWrap.offset().top) {
				sBar.css({'top': sBarWrap.offset().top});
			}
		});
	}
			
});		
