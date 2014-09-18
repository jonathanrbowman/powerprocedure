// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require turbolinks
//= require jquery.easing
//= require_tree .

$(document).ready(function() {
	
	var section_width = $('.section-icon-wrapper').width();
	$('.section-icon-wrapper').css({"height" : section_width * 1.5});
	
	var section_height = $('.section-icon-wrapper').height();
	$('.section-icon-wrapper').css({"margin-top" : -(section_height - (section_height / 1.8))});
	
	$('.section-icon').css({"font-size" : section_width / 2});
	$('.section-icon-text').css({"font-size" : (section_width / 7)});
	
	$('.section-icon-inner-wrapper').css({"height" : section_height / 2});
		
	$(window).on('resize', function(){
		var section_width = $('.section-icon-wrapper').width();
		var section_height = $('.section-icon-wrapper').height();
		
		$('.section-icon').css({"font-size" : section_width / 2});
		$('.section-icon-text').css({"font-size" : (section_width / 7)});
		$('.section-icon-wrapper').css({"height" : section_width * 1.5, "margin-top" : -(section_height - (section_height / 1.8))});
		$('.section-icon-inner-wrapper').css({"height" : section_height / 2});
	});

  $('.recout1, .recin1, .create, #create_icon').mouseover(
    function () {
        $(".recin1").css({"background-color" : "rgba(68,55,42,1)"});
        $(".create").css({"color" : "white"});
        $("#create_icon").addClass("hex_icon_hover");
    });

  $('.recout1, .recin1, .create, #create_icon').mouseout(
    function () {
        $(".recin1").css({"background-color" : "#eeba64"});
        $(".create").css({"color" : "rgba(68,55,42,1)"});
        $("#create_icon").removeClass("hex_icon_hover");
	});
	
  $('.recout2, .recin2, .track, #track_icon').mouseover(
    function () {
        $(".recin2").css({"background-color" : "rgba(68,55,42,1)"});
        $(".track").css({"color" : "white"});
        $("#track_icon").addClass("hex_icon_hover");
    });

  $('.recout2, .recin2, .track, #track_icon').mouseout(
    function () {
        $(".recin2").css({"background-color" : "#eeba64"});
        $(".track").css({"color" : "rgba(68,55,42,1)"});
        $("#track_icon").removeClass("hex_icon_hover");
	});
	
  $('.recout3, .recin3, .reach, #reach_icon').mouseover(
    function () {
        $(".recin3").css({"background-color" : "rgba(68,55,42,1)"});
        $(".reach").css({"color" : "white"});
        $("#reach_icon").addClass("hex_icon_hover");
    });

  $('.recout3, .recin3, .reach, #reach_icon').mouseout(
    function () {
        $(".recin3").css({"background-color" : "#eeba64"});
        $(".reach").css({"color" : "rgba(68,55,42,1)"});
        $("#reach_icon").removeClass("hex_icon_hover");
	});
	
  $('.recout4, .recin4, .signup, #signup_icon').mouseover(
    function () {
        $(".recin4").css({"background-color" : "rgba(68,55,42,1)"});
        $(".signup").css({"color" : "white"});
        $("#signup_icon").addClass("hex_icon_hover");
    });

  $('.recout4, .recin4, .signup, #signup_icon').mouseout(
    function () {
        $(".recin4").css({"background-color" : "white"});
        $(".signup").css({"color" : "rgba(68,55,42,1)"});
        $("#signup_icon").removeClass("hex_icon_hover");
	});
	
  $('.recout5, .recin5, .pricing, #pricing_icon').mouseover(
    function () {
        $(".recin5").css({"background-color" : "rgba(68,55,42,1)"});
        $(".pricing").css({"color" : "white"});
        $("#pricing_icon").addClass("hex_icon_hover");
    });

  $('.recout5, .recin5, .pricing, #pricing_icon').mouseout(
    function () {
        $(".recin5").css({"background-color" : "#eeba64"});
        $(".pricing").css({"color" : "rgba(68,55,42,1)"});
        $("#pricing_icon").removeClass("hex_icon_hover");
	});
	
  $('.recout6, .recin6, .community, #community_icon').mouseover(
    function () {
        $(".recin6").css({"background-color" : "rgba(68,55,42,1)"});
        $(".community").css({"color" : "white"});
        $("#community_icon").addClass("hex_icon_hover");
    });

  $('.recout6, .recin6, .community, #community_icon').mouseout(
    function () {
        $(".recin6").css({"background-color" : "#eeba64"});
        $(".community").css({"color" : "rgba(68,55,42,1)"});
        $("#community_icon").removeClass("hex_icon_hover");
	});

	$('#logo').click(function(){
		 $('html,body').unbind().animate({scrollTop: $("html").offset().top}, 750, 'easeInOutCubic');
		return false;
	});
	
	$('#create_mini, .recout1, .recin1, .create, #create_icon').click(function(){
		 $('html, body').animate({scrollTop: $("#create-section").offset().top - 80}, 750, 'easeInOutCubic');
		return false;
	});
	$('#reach_mini, .recout2, .recin2, .reach, #reach_icon').click(function(){
		 $('html, body').animate({scrollTop: $("#reach-section").offset().top - 80}, 750, 'easeInOutCubic');
		return false;
	});
	$('#track_mini, .recout3, .recin3, .track, #track_icon').click(function(){
		 $('html, body').animate({scrollTop: $("#track-section").offset().top - 80}, 750, 'easeInOutCubic');
		return false;
	});
	$('#pricing_mini, .recout5, .recin5, .pricing, #pricing_icon').click(function(){
		 $('html, body').animate({scrollTop: $("#pricing-section").offset().top - 80}, 750, 'easeInOutCubic');
		return false;
	});
	$('#community_mini, .recout6, .recin6, .community, #community_icon').click(function(){
		 $('html, body').animate({scrollTop: $("#community-section").offset().top - 80}, 750, 'easeInOutCubic');
		return false;
	});
	$('#signup_mini, .recout4, .recin4, .signup, #signup_icon').click(function(){
		 $('html, body').animate({scrollTop: $("#signup-section").offset().top - 80}, 750, 'easeInOutCubic');
		return false;
	});
	
	
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() <= 30)
	         {
	            $("#logo-wrapper").css({"box-shadow" : "0px 1px 5px 0px rgba(0,0,0,0)", "padding-top" : "50px"});
	            
	         } else {
	         	$("#logo-wrapper").css({"box-shadow" : "0px 1px 5px 0px rgba(0,0,0,.5)", "padding-top" : "10px"});
	         	$("#logo").css({"width" : "190px", "padding-top" : "5px", "padding-bottom" : "5px", "margin-bottom" : "-10px"});
				
	         }
	     });
	 });
	 
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() <= 300)
	         {
	            
	            setTimeout(function(){$("#track_mini").css({"top" : "-100px"});}, 0);
	            setTimeout(function(){$("#community_mini").css({"top" : "-100px"});}, 0);
	            setTimeout(function(){$("#pricing_mini").css({"top" : "-100px"});}, 100);
	            setTimeout(function(){$("#reach_mini").css({"top" : "-100px"});}, 100);
	            setTimeout(function(){$("#signup_mini").css({"top" : "-100px"});}, 200);
	            setTimeout(function(){$("#create_mini").css({"top" : "-100px"});}, 200);
	            
	         } else {
				
	            setTimeout(function(){$("#track_mini").css({"top" : "0px"});}, 0);
	            setTimeout(function(){$("#community_mini").css({"top" : "0px"});}, 0);
	            setTimeout(function(){$("#pricing_mini").css({"top" : "0px"});}, 100);
	            setTimeout(function(){$("#reach_mini").css({"top" : "0px"});}, 100);
	            setTimeout(function(){$("#signup_mini").css({"top" : "0px"});}, 200);
	            setTimeout(function(){$("#create_mini").css({"top" : "0px"});}, 200);
	            
	         }
	     });
	 });
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() >= 350 && ($win.scrollTop() <= 750))
	         {
	         	
	            $("#create_mini").css({"color" : "white"});
	            
	         } else {
				
	            $("#create_mini").css({"color" : "rgba(68,55,42,1)"});
	            
	         }
	     });
	 });
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() >= 751 && ($win.scrollTop() <= 1151))
	         {
	         	
	            $("#reach_mini").css({"color" : "white"});
	            
	         } else {
				
	            $("#reach_mini").css({"color" : "rgba(68,55,42,1)"});
	            
	         }
	     });
	 });
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() >= 1152 && ($win.scrollTop() <= 1552))
	         {
	         	
	            $("#track_mini").css({"color" : "white"});
	            
	         } else {
				
	            $("#track_mini").css({"color" : "rgba(68,55,42,1)"});
	            
	         }
	     });
	 });
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() >= 1553 && ($win.scrollTop() <= 1953))
	         {
	         	
	            $("#community_mini").css({"color" : "white"});
	            
	         } else {
				
	            $("#community_mini").css({"color" : "rgba(68,55,42,1)"});
	            
	         }
	     });
	 });
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() >= 1954 && ($win.scrollTop() <= 2354))
	         {
	         	
	            $("#pricing_mini").css({"color" : "white"});
	            
	         } else {
				
	            $("#pricing_mini").css({"color" : "rgba(68,55,42,1)"});
	            
	         }
	     });
	 });
	 
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() >= 2355 && ($win.scrollTop() <= 2755))
	         {
	         	
	            $("#signup_mini").css({"color" : "white"});
	            
	         } else {
				
	            $("#signup_mini").css({"color" : "rgba(68,55,42,1)"});
	            
	         }
	     });
	 });
	
	

});