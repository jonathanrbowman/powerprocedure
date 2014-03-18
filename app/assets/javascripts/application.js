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
//= require turbolinks
//= require_tree .
//= require jquery.ui.all

$(document).ready(function() {

  $('.recout1, .recin1, .create, #create_icon').mouseover(
    function () {
        $(".recin1").css({"background-color" : "rgba(68,55,42,1)"});
        $(".create").css({"color" : "white"});
        $("#create_icon").addClass("hex_icon_hover");
    });

  $('.recout1, .recin1, .create, #create_icon').mouseout(
    function () {
        $(".recin1").css({"background-color" : "rgba(232,179,69,1)"});
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
        $(".recin2").css({"background-color" : "rgba(232,179,69,1)"});
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
        $(".recin3").css({"background-color" : "rgba(232,179,69,1)"});
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
        $(".recin5").css({"background-color" : "rgba(232,179,69,1)"});
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
        $(".recin6").css({"background-color" : "rgba(232,179,69,1)"});
        $(".community").css({"color" : "rgba(68,55,42,1)"});
        $("#community_icon").removeClass("hex_icon_hover");
	});
	
	$('.recout1, .recin1, .create, .createimg, #create_icon').click(function(){

		 $('html,body').unbind().animate({scrollTop: $("#create-section").offset().top-70}, 1000, 'easeOutQuint');

		return false;
	});
	
	$('#logo').click(function(){

		 $('html,body').unbind().animate({scrollTop: $("html").offset().top}, 750, 'easeOutQuint');

		return false;
	});
	
	
	 $(function () {
	     var $win = $(window);
	
	     $win.scroll(function () {
	         if ($win.scrollTop() <= 30)
	         {
	            $("#logo-wrapper").css({"box-shadow" : "0px 1px 5px 0px rgba(0,0,0,0)", "padding-top" : "50px"});
	            $("#logo").css({"width" : "220px"});
	            
	            setTimeout(function(){$("#track_mini").css({"top" : "-100px"});}, 0);
	            setTimeout(function(){$("#pricing_mini").css({"top" : "-100px"});}, 0);
	            setTimeout(function(){$("#reach_mini").css({"top" : "-100px"});}, 100);
	            setTimeout(function(){$("#community_mini").css({"top" : "-100px"});}, 100);
	            setTimeout(function(){$("#signup_mini").css({"top" : "-100px"});}, 200);
	            setTimeout(function(){$("#create_mini").css({"top" : "-100px"});}, 200);
	            
	         } else {
	         	$("#logo-wrapper").css({"box-shadow" : "0px 1px 5px 0px rgba(0,0,0,.5)", "padding-top" : "10px"});
	         	$("#logo").css({"width" : "160px", "padding-top" : "5px", "padding-bottom" : "5px", "margin-bottom" : "-10px"});
				
	            setTimeout(function(){$("#track_mini").css({"top" : "0px"});}, 0);
	            setTimeout(function(){$("#pricing_mini").css({"top" : "0px"});}, 0);
	            setTimeout(function(){$("#reach_mini").css({"top" : "0px"});}, 100);
	            setTimeout(function(){$("#community_mini").css({"top" : "0px"});}, 100);
	            setTimeout(function(){$("#signup_mini").css({"top" : "0px"});}, 200);
	            setTimeout(function(){$("#create_mini").css({"top" : "0px"});}, 200);
	            
	         }
	     });
	 });
	
	

});