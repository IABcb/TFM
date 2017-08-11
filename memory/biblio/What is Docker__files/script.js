(function ($) {

/* ********* WOW ********* */
/*wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       false,       // default
    live:         true,        // default
    callback:     function(box) {
			var an2 = $(box).find('#canvas2');
			var an3 = $(box).find('#canvas3');
			var an4 = $(box).find('#canvas4');
			if(an2.length > 0) {
				init2();
			}
			if(an3.length > 0) {
				init3();
			}
			if(an4.length > 0) {
				init4();
			}
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
  }
)
wow.init(); */
 if ($('body').hasClass('page-node-1')) {
	init2();
	init3();
}
var loadAgain = 'ture';
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var height_header = $('.main-header') .outerHeight(true);
	var height_banner = $('.title_section') .outerHeight(true);
    if (loadAgain == "ture" && scroll >= height_banner-height_header-200 && $('body').hasClass('page-node-1')) {
		loadAgain = false;
		// $('.animation_image_container2').hide();
		// $('#animation_container2').height(280);
		// $('#animation_container3').height(280);
		// init2();
		// init3();
    } 
});

/* ********* smoothScroll ********* */
  $(document).on('click', 'a[href*="#"]:not(.noanchor , .find_a_partner_section .cbp-caption-defaultWrap, .docker_captian_section .cbp-caption-defaultWrap, #job-content a, .government_partners_tabs li a, .partners_tabs li a, .strategic_alliances_tabs li a)', function() {
      if ( this.hash && this.pathname === location.pathname ) {
        $.bbq.pushState( '#/' + this.hash.slice(1) );
        return false;
      }
    }).ready(function() {
      $(window).bind('hashchange', function(event) {
        var tgt = location.hash.replace(/^#\/?/,'');
        if ( document.getElementById(tgt) ) { 
			if ($('body').hasClass('node-type-products') || $('body').hasClass('node-type-product') || $('body').hasClass('node-type-use-cases') || $('body').hasClass('node-type-use-case') || $('body').hasClass('node-type-enterprise') || $('body').hasClass('node-type-government') || $('body').hasClass('node-type-partners') || $('body').hasClass('node-type-partner-programs') || $('body').hasClass('node-type-support-services') || $('body').hasClass('node-type-careers') || $('body').hasClass('node-type-careers-department') || $('body').hasClass('node-type-what-is-docker') || $('body').hasClass('node-type-product-editions') || $('body').hasClass('node-type-projects')) { 
				if ($(window).width() > 991 ) {
					$('html,body').animate({ scrollTop: $('#' + tgt).offset().top - 51}, 'slow');
				} else if($(window).width() > 768 && $(window).width() < 991 ) {
					$('html,body').animate({ scrollTop: $('#' + tgt).offset().top - 51}, 'slow');
				} else {
					$('html,body').animate({ scrollTop: $('#' + tgt).offset().top - 51}, 'slow');
				} 
			} else {
				$.smoothScroll({scrollTarget: '#' + tgt});
			}
        }
      });
      $(window).trigger('hashchange');
    });
/* ********* No Link ********* */
$(".nolinkhere").on('click', function(e) {
	e.preventDefault();
});
$(".nav-main .heading").on('click', function(e) {
	e.preventDefault();
});
/* ********* Job application ********* */
$('#job-content a.apply_button').on('click', function() {
      $.smoothScroll({scrollTarget: '#application'});
  });
/* ********* Slider ********* */
/* $(window).load(function() {
	$('.banner_slides').flexslider({
		animation: "slide",
		slideshowSpeed: 8000,
		animationLoop:true,
		controlNav:false,
		directionNav:false
	});
}); */
$('.banner_slides .slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true
});	

  $('#animation_slides .slides').on('init', function(e, slick) {
    var $firstAnimatingElements = $('#animation_slides .slides li:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);    
  });
  $('#animation_slides .slides').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $currentAnimatingElements = $(this).find('[data-animation]');
    var $animatingElements = $('#animation_slides .slides li[data-slick-index="' + nextSlide + '"]').find('[data-animation]');  
    doAnimations($animatingElements);
  });
  $('#animation_slides .slides').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    fade: true,
	speed: 1000,
    arrows: false
  });
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }
$('.quotes_slider').flexslider({
	animation: "slide",
	smoothHeight: true,
	directionNav: false
});
$(window).load(function() {
  $('.customer_spotlight_section,.resources_video_slider').flexslider({
	selector: ".slides > .slide",
    animation: "fade",
	controlNav: true,
	directionNav: false
  });
});
/*
$(window).load(function() {
  $('.demo_product_slides').flexslider({
	 animation: "slide",
    animationLoop: false,
	itemWidth: 210,
    maxItems: 2,
    minItems: 2
  });
});
 */
/* ********* title_content_height ********* 
	if ($(window).width() > 600 ) {
		var title_content_height, title_padding;
		title_content_height = $('.title_section .container').height();
		title_padding = (500 - 64 - title_content_height)/2;
		$('.title_section').css('paddingTop', title_padding-30);
		$('.title_section').css('paddingBottom', title_padding+48);
		$('.title_section.docker_class').css('paddingBottom', title_padding+48);
	} else {
	}*/
$(document).ready(function() {

		var title_content_height, title_padding;
		title_content_height = $('.title_section .container').height();
		title_padding = (500 - 64 - title_content_height)/2;
		title_top_padding = title_padding-30;
		title_bottom_padding = title_padding+48;
		title_top_slide_padding = title_padding-30;
		title_bottom_slide_padding = title_padding+48+20;
		if(title_top_padding <= 30){
			title_top_padding = 32;
			title_bottom_padding = 100;
			title_top_slide_padding = 42;
			title_bottom_slide_padding = 130;
		} else {
			
		}
		$('.title_section').css('paddingTop', title_top_padding);
		$('.title_section').css('paddingBottom', title_bottom_padding);
		$('.title_section.docker_class').css('paddingTop', title_top_slide_padding); 
		$('.title_section.docker_class').css('paddingBottom', title_bottom_slide_padding);
});
/* ********* Retina display ********* */
$(document).ready(loadRetina);
$(window).resize(loadRetina);
function loadRetina() {
    function isRetina(){
	 return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1)) || /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
	}
	if(isRetina()){
		$('html').addClass('is_retina');
		$('html,body').removeClass('is_not_retina');
	}
	else {
		$('html').addClass('is_not_retina');
		$('html,body').removeClass('is_retina');
	}
}
/* ********* heronav section ********* */
if ($(window).width() > 991 ) {
		if ($('.heronav_section').length > 0) {
			$('.heronav_section').affix({
				offset: {
					top:$(".heronav_section").offset().top,
					/* bottom: $('footer').outerHeight(true) + $('.newsletter_section').outerHeight(true)  + 10 */
				}
			});
		}	
} else {
		if ($('.heronav_section').length > 0) {
			$('.heronav_section').affix({
				offset: {
					top:$(".heronav_section").offset().top - 50,
					/* bottom: $('footer').outerHeight(true) + $('.newsletter_section').outerHeight(true)  + 10 */
				}
			});
		}	
} 
if ($(window).width() < 767 ) {
	$(".heronav_section").append('<a class="arrow-left arrow">L</a><a class="arrow-right arrow">R</a>');	
	var box = $(".heronav_section ul"), x;
	$(".arrow").click(function() {
	  if ($(this).hasClass("arrow-right")) {
		x = ((box.width() / 2)) + box.scrollLeft();
		box.animate({
		  scrollLeft: x,
		})
	//	console.log('right');
	  } else {
		x = ((box.width() / 2)) - box.scrollLeft();
		box.animate({
		  scrollLeft: -x,
		})
	//	console.log('left');
	  }
	})
}
$('.heronav_section ul').scroll(function() {
	var widthtotal = 0;
	$('.heronav_section ul li').each(function() {
		var $this = $(this);
		widthtotal += $this.outerWidth(true);	
	});
    if($(this).scrollLeft() == 0) {
        $('.heronav_section .arrow-left').hide();
    }
    else if($('.heronav_section .arrow-left').css('display') != 'block') {
        $('.heronav_section .arrow-left').show();
    }
	if(widthtotal >= $(this).scrollLeft() + $(this).outerWidth(true)) {
	//	console.log('show');
        $('.heronav_section .arrow-right').show();
    }
    else if($('.heronav_section .arrow-right').css('display') != 'none') {
	//	console.log('hide');
        $('.heronav_section .arrow-right').hide();
    }
	// console.log($(this).scrollLeft());
}).scroll();

$(document).ready(function() {
if ($('.sidebarnav_section').length > 0) {
	$('.sidebarnav_section').affix({
		offset: {
			top:$(".sidebarnav_section").offset().top - 25,
			bottom: $('footer').outerHeight(true) + $('.newsletter_section').outerHeight(true) + $('.bottom_cta_section').outerHeight(true)  + 30
		}
	}); 
}
});
/* ********* Tab Section ********* */
$(".government_partners_tabs ul a").click(function(event) {
        event.preventDefault();
		var tab = $(this).attr("href");
        $(this).parent().addClass("current").siblings().removeClass("current");
        $(tab).addClass("current").show().siblings('.government_partners').removeClass("current").hide();
	});
$(".partners_tabs ul a").click(function(event) {
        event.preventDefault();
		var tab = $(this).attr("href");
        $(this).parent().addClass("current").siblings().removeClass("current");
        $(tab).addClass("current").show().siblings('.partners').removeClass("current").hide();
	});
/* ********* Customers Ajax ********* */
function getCustomers(){
	var key = $('#searchCustomers').val()
	,	use_case = $('#searchUserType').val()
	,	industry = $('#searchIndustry').val();
	if(key === ''){ key = 'all'; }
	if(use_case === '' || use_case == 'any'){ use_case = 'all';	}
	if(industry === '' || industry == 'any'){ industry = 'all';	}
	var	url = '/api/customers_ajax/'+key+'/'+use_case+'/'+industry;
	$.get(url).done(function( result ) {
		$('#ajax_customers').html(result);
		$('.docker_customers_section ul.items').each(function() {
			$(this).children('li').matchHeight();
		});
	});
} 
$('#searchCustomers').on('keyup', function() {
		getCustomers();
});
$('#searchUserType').on('change', function() {
		getCustomers();
});
$('#searchIndustry').on('change', function() {
		getCustomers();
});
/* ********* Partners Ajax ********* */
function getPartners(){
	var key = $('#searchPartners').val()
	,	region = $('#searchRegion').val()
	,	type = $('#searchPartnerType').val();
	if(key === ''){ key = 'all'; }
	if(region === '' || region == 'any'){ region = 'all';	}
	if(type === '' || type == 'any'){ type = 'all';	}
	var	url = '/api/find_partner_ajax/'+key+'/'+region+'/'+type;
	$.get(url).done(function( result ) {
		$('#ajax_partners').html(result);
		partnerContainer();
		hascontent_nocontent();
	});
}
$('#searchPartners').on('keyup', function() {
		getPartners(); 
});
$('#searchRegion').on('change', function() {
		getPartners();
});
$('#searchPartnerType').on('change', function() {
		getPartners();
});
 /* ===================== hascontent_nocontent =====================*/
function hascontent_nocontent(){
$(".find_a_partner_section ul.partners_list li.no_info a.cbp-singlePageInline.cbp-nocontent").click(function() {
		var asdasd=	$(this);
       $(asdasd).parents('#grid-container').addClass('nomore').removeClass('nomore2');
		});
 $(".find_a_partner_section ul.partners_list li a.cbp-singlePageInline.cbp-hascontent").click(function() {
		var qweqwe=	$(this);
		$(qweqwe).parents('#grid-container').addClass('nomore2').removeClass('nomore');
	});
}
/* ********* Events Ajax ********* */
function getevents(){
	var key = $('#searchEvents').val()
	,	event_type = $('#searchEventType').val()
	,	event_regions = $('#searchRegions').val();
	if(key === ''){ key = 'all'; }
	if(event_type == null || event_type === '' || event_type == 'any'){ event_type = 'all';	}
	if(event_regions == null || event_regions === '' || event_regions == 'any'){ event_regions = 'all';	}
	var	url = '/api/events_ajax/'+key+'/'+event_type+'/'+event_regions;
	$.get(url).done(function( result ) {
		$('#ajax_events').html(result);
		$('#ajax_events .regions_item').each(function() {
			$(this).not(':has(.event_item)').addClass('hide');				
		});
		
	});
}  
$('#searchEvents').on('keyup', function() {
		getevents();
});
$('#searchEventType').on('change', function() {
		getevents();
});
$('#searchRegions').on('change', function() {
		getevents();
});

/* ********* Jobs Ajax ********* */
$('#jobsorting a').click(function() {
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	var sortkey = $(this).data('sort'), department = $(this).data('department');
	var	url = '/api/jobs_ajax/'+department+'/'+sortkey; 
	$.get(url).done(function( result ) {
		$('#ajax_jobs').html(result);
	});
});
/* ********* Captains Ajax ********* */
function getCaptains(){
	var key = $('#searchCaptain').val()
	,	expertise = $('#searchExpertise').val()
	,	location1 = $('#searchCaptainsLocation').val()
	,	availablefor = $('#searchCaptainsAvailableFor').val()
	,	operatingsystems = $('#searchCaptainsOperatingSystems').val()
	,	programminglanguage = $('#searchCaptainsProgrammingLanguage').val();
	if(key === ''){ key = 'all'; }
	if(expertise === '' || expertise == 'any'){ expertise = 'all';	}
	if(location1 === '' || location1 == 'any'){ location1 = 'all';	}
	if(availablefor === '' || availablefor == 'any'){ availablefor = 'all';	}
	if(operatingsystems === '' || operatingsystems == 'any'){ operatingsystems = 'all';	}
	if(programminglanguage === '' || programminglanguage == 'any'){ programminglanguage = 'all'; }
	var	url = '/api/docker_captains_ajax/'+key+'/'+expertise+'/'+location1+'/'+availablefor+'/'+operatingsystems+'/'+programminglanguage; 
	$.get(url).done(function( result ) {
		$('#ajax_captains').html(result);
		captiansContainer();
	});
}
$('#searchCaptain').on('keyup', function(e) {
	e.stopImmediatePropagation();
	getCaptains();
});
$('#searchExpertise').on('change', function(e) {
	e.stopImmediatePropagation();
	getCaptains();
});
$('#searchCaptainsLocation').on('change', function(e) {
	e.stopImmediatePropagation();
	getCaptains();
});
$('#searchCaptainsAvailableFor').on('change', function(e) {
	e.stopImmediatePropagation();
	getCaptains();
});
$('#searchCaptainsOperatingSystems').on('change', function(e) {
	e.stopImmediatePropagation();
	getCaptains();
});
$('#searchCaptainsProgrammingLanguage').on('change', function(e) {
	e.stopImmediatePropagation();
	getCaptains();
});
/* ********* select_your_platform ********* */
$(".select_your_platform").on( "click", "a.button,a.simple_link", function(e) {
	e.preventDefault();
	var container = $(this).siblings('ul.platform_nav');
	if($('.select_your_platform').hasClass('platform_expaned') && container.is(':visible')) {
		container.slideUp(300);
		$('.title_section').removeClass('platform_nav_expand');
		$('.select_your_platform').removeClass('platform_expaned');
	} else {
		container.slideDown(300);
		$('.title_section').addClass('platform_nav_expand');
		$('.select_your_platform').addClass('platform_expaned');
	}
});
$(document).mouseup(function (e)
{
		var trigger = $(".select_your_platform");
		var trigger1 = $(".select_your_platform a.button");
		var trigger2 = $(".select_your_platform a.simple_link");
    var container = trigger.children('ul.platform_nav');

    if (container.is(':visible') && !trigger1.is(e.target) && !trigger2.is(e.target) && !container.is(e.target) && container.has(e.target).length === 0)
    {
        container.slideUp(300);
				trigger.removeClass('platform_expaned');
				$('.title_section').removeClass('platform_nav_expand');
    }
});
/* ********* FAQ ********* */
$('.faq-body').each(function() {
	$(this).parent('.faq').addClass('collapsible');
});
$(".faqs-group").on( "click", ".faq-title", function(e) {
	e.preventDefault();
	var $FAQ = $(this).parent(".faq"), $FAQz = $(".faq").not($FAQ);
	$FAQ.toggleClass("active");
	$(".faq-body",$FAQ).slideToggle(300)
	$FAQz.removeClass("active");
	$(".faq-body",$FAQz).slideUp(300);
});
if ($(window).width() > 1199) {
		$(".faqs_section .faqs-group").height($(".faqs-group .col-xs-12").outerHeight(true) + 120);
	} else if ($(window).width() < 1200 && $(window).width() > 991) {
		$(".faqs_section .faqs-group").height($(".faqs-group .col-xs-12").outerHeight(true) + 180);
	} else if ($(window).width() < 992 && $(window).width() > 767) {
		$(".faqs_section .faqs-group").height($(".faqs-group .col-xs-12").outerHeight(true) + 190); 
	} else {
		$(".faqs_section .faqs-group").height($(".faqs-group .col-xs-12").outerHeight(true) + $(".faqs-group .col-xs-12").outerHeight(true) + 70);
	}
/* ********* View More Press ********* */
function getPress(){
	var offset = $('#data_offset').text()
		,	list_length = $('#data_list_length').text()
		,	nxtoffset = parseFloat(offset) + 10
		,	url = '/api/press_ajax/'+offset;
	$.get(url).done(function( result ) {
		$('#press-posts').append(result);
		$('#data_offset').text(nxtoffset);
			if(nxtoffset >= list_length) {
				$('#media_viewmore').hide();
			}
	});
}
$(document).on('click', '#view-more-press', function(e) {
	e.preventDefault();
		getPress();
});
/* ********* View More News ********* */
$(document).on('click', '#view-more-news', function(e) {
			e.preventDefault();
			var pg = $('.news_section .paginator .page-numbers a').data('page');
			var	url = '/api/news_ajax/'+pg;
			$.get(url).done(function(result) {
				news_posts = $(result).find('#news-posts').html();
				news_pagination = $(result).find('#news-pagination').html();
				$('#news-posts').append(news_posts);
				$('#news-pagination').html(news_pagination);
				$('.news_section ul.items').each(function() {
					$(this).children('li').matchHeight();
				});
			});
		});

/* ********* matchHeight ********* */
$('.docker_customers_section ul.items ').each(function() {
		$(this).children('li').matchHeight();
		});
$('.resources_items').each(function() {
		$(this).children('.resources_link').matchHeight();
		});
$('.matchHeight').each(function() {
		$(this).children('.mh').matchHeight();
		});
		
/* ********* magnificPopup ********* */
 $('a[target="_video"]').magnificPopup({
	  midClick: true,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  disableOn: 280,
	  fixedContentPos: false
   });
 $('a[rel="video"]').magnificPopup({
	  midClick: true,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  disableOn: 280,
	  fixedContentPos: false
   });

 $('a[rel="video_50s"]').magnificPopup({
	  type: 'iframe',
	  iframe: {
	    	markup: '<div class="mfp-iframe-scaler">'+
            		'<div class="mfp-close"></div>'+
            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            		'</div>', 
	  patterns: {
            youtube: {
	              index: 'youtube.com/', 
	              id: 'v=', 
	              src: '//www.youtube.com/embed/%id%' 
		        }
		     },
		     srcAction: 'iframe_src', 
	  }
   });
/* $(document).ready(function() {
	$('.newsletter').find("#Email").each(function(ev){
		if(!$(this).val()) { 
			$(this).attr("placeholder", "Subscribe to our newsletter");
		}
	});   
	$('.newsletter #Email').attr("placeholder", "Subscribe to our newsletter");
	$(".newsletter button.mktoButton").text('Subscribe');
}); */

/************** Footer **************/
$(".main_footer .footer_links li.first.leaf").append( "<span> </span>" );	
$('.main_footer .footer_links li.first.leaf.showmobileonly').on('click', 'a', function(e) {
	e.preventDefault();
	$(this).siblings("span").toggleClass('active');
	var sibling = $(this).parent('li').siblings("li"); 
	var colsibling = $(this).parent('li').parent('.footer_links').parent('.col-xs-12').siblings(".col-xs-12"); 
	$(sibling).stop().slideToggle('slow');
	$('ul>li:not(li.first)', colsibling).slideUp();
	$('ul>li>span', colsibling).removeClass('active');
});
$('.main_footer .footer_links li.first.leaf').on('click', 'span', function(e) { 
	$(this).toggleClass('active');
	var sibling = $(this).parent('li').siblings("li"); 
	var colsibling = $(this).parent('li').parent('.footer_links').parent('.col-xs-12').siblings(".col-xs-12"); 
	$(sibling).stop().slideToggle('slow');
	$('ul>li:not(li.first)', colsibling).slideUp();
	$('ul>li>span', colsibling).removeClass('active');

});

/************** Footer **************/
/************* Header **************/
var burger = document.querySelector('.burger-container'),
header = document.querySelector('.header');
body = document.querySelector('body');
burger.onclick = function() {
	if(!body.classList.contains('calcform-opened')){
		header.classList.toggle('menu-opened');
		body.classList.toggle('overflow-hidden');
	}
	body.classList.remove('calcform-opened');
}
$("header .header ul.nav-main li.has-submenu>a").click(function(a) {
        a.preventDefault();
		$(this).parent().siblings().children('ul.active').removeClass("active").slideToggle(300);
		$(this).siblings('ul').toggleClass('active').stop().slideToggle(300);
	});
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".header").addClass("change");
	} else {
		$(".header").removeClass("change");
	}
});
	
	
$(document).on('click', '.nocasestudy', function(e) {
	e.preventDefault();
});
$('#show_more_filters').click(function(e) {
	e.preventDefault();
	var more_filters = $('.more_filters');
	if(more_filters.hasClass('show_filters')){
		$(this).html('Show More Filters +');
		more_filters.slideUp(200);
		more_filters.removeClass('show_filters');
		$("#searchCaptainsAvailableFor").val("any");
		$("#searchCaptainsOperatingSystems").val("any");
		$("#searchCaptainsProgrammingLanguage").val("any");
		$("#searchCaptainsAvailableFor").prop('disabled', 'disabled');
		$("#searchCaptainsOperatingSystems").prop('disabled', 'disabled');
		$("#searchCaptainsProgrammingLanguage").prop('disabled', 'disabled');
	} else {
		$(this).html('Hide Filters -');
		more_filters.slideDown(200);
		more_filters.addClass('show_filters');
		$("#searchCaptainsAvailableFor").prop('disabled', false);
		$("#searchCaptainsOperatingSystems").prop('disabled', false);
		$("#searchCaptainsProgrammingLanguage").prop('disabled', false);
	}
});
$( ".docker_captian_section .captians_list .cbp-caption div" ).mouseout(function() {
	$(this).closest('.cbp-caption').children('.img_div').removeClass('h4hover');
})
.mouseover(function() {
	$(this).closest('.cbp-caption').children('.img_div').addClass('h4hover');
});	
})(jQuery);
/* ===== captiansContainer ===== */
function captiansContainer(){
    var captiansContainer = $('#captians-container');
	captiansContainer.cubeportfolio({

        animationType: 'rotateSides',

        gapHorizontal: 30,

        gapVertical: 12,
		
        gridAdjustment: 'responsive',

        caption: '',

        displayType: 'sequentially',

        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineShowCounter: true,
        singlePageInlineCallback: function(url, element) {

            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
			if($(url).length == 0) {
			  return false;
			} else { 
				var cont = $(url).html();
				t.updateSinglePageInline(cont);
			} 

        }
		
    });
}	
captiansContainer();

/* ===== partnerContainer ===== */	 
function partnerContainer(){
    var partnerContainer = $('.partnerContainer');

	partnerContainer.cubeportfolio({
		
        animationType: 'rotateSides',

        gapHorizontal: 30,

        gapVertical: 30,
		
        gridAdjustment: 'responsive',

        caption: '',

        displayType: 'sequentially',

        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineShowCounter: true,
        singlePageInlineCallback: function(url, element) {

            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
			if($(url).length == 0) {
			  return false;
			} else { 
				var cont = $(url).html();
				t.updateSinglePageInline(cont);
			} 

        }
		
    });

		$(".find_a_partner_section ul.partners_list li.no_info a.cbp-singlePageInline.cbp-nocontent").click(function() {
		var asdasd=	$(this);
       $(asdasd).parents('#grid-container').addClass('nomore').removeClass('nomore2');
		});
		$(".find_a_partner_section ul.partners_list li a.cbp-singlePageInline.cbp-hascontent").click(function() {
			var qweqwe=	$(this);
			$(qweqwe).parents('#grid-container').addClass('nomore2').removeClass('nomore');
		});
}	
partnerContainer();