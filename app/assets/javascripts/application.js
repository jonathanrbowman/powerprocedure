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

// $primary-color: rgba(232,179,69,1);
// $secondary-color: rgba(68,55,42,1);

$(document).ready(function() {

  $('.recout1, .recin1, .create, .createimg').mouseover(
    function () {
        $(".recin1").css({"background-color" : "rgba(68,55,42,1)"});
        $(".create").css({"color" : "white"});
        $(".createimg").css({"opacity" : "1"});
    });

  $('.recout1, .recin1, .create, .createimg').mouseout(
    function () {
        $(".recin1").css({"background-color" : "rgba(232,179,69,1)"});
        $(".create").css({"color" : "rgba(68,55,42,1)"});
        $(".createimg").css({"opacity" : "0"});
	});
	
  $('.recout2, .recin2, .track, .trackimg').mouseover(
    function () {
        $(".recin2").css({"background-color" : "rgba(68,55,42,1)"});
        $(".track").css({"color" : "white"});
        $(".trackimg").css({"opacity" : "1"});
    });

  $('.recout2, .recin2, .track, .trackimg').mouseout(
    function () {
        $(".recin2").css({"background-color" : "rgba(232,179,69,1)"});
        $(".track").css({"color" : "rgba(68,55,42,1)"});
        $(".trackimg").css({"opacity" : "0"});
	});
	
  $('.recout3, .recin3, .reach, .reachimg').mouseover(
    function () {
        $(".recin3").css({"background-color" : "rgba(68,55,42,1)"});
        $(".reach").css({"color" : "white"});
        $(".reachimg").css({"opacity" : "1"});
    });

  $('.recout3, .recin3, .reach, .reachimg').mouseout(
    function () {
        $(".recin3").css({"background-color" : "rgba(232,179,69,1)"});
        $(".reach").css({"color" : "rgba(68,55,42,1)"});
        $(".reachimg").css({"opacity" : "0"});
	});
	
  $('.recout4, .recin4, .signup, .signupimg').mouseover(
    function () {
        $(".recin4").css({"background-color" : "rgba(68,55,42,1)"});
        $(".signup").css({"color" : "white"});
        $(".signupimg").css({"opacity" : "1"});
    });

  $('.recout4, .recin4, .signup, .signupimg').mouseout(
    function () {
        $(".recin4").css({"background-color" : "white"});
        $(".signup").css({"color" : "rgba(68,55,42,1)"});
        $(".signupimg").css({"opacity" : "0"});
	});
	
	var createTopPosition = jQuery('#create-section').offset().top;
	jQuery('.recout1, .recin1, .create, .createimg').click(function(){

		jQuery('html, body').animate({scrollTop:createTopPosition}, 'slow');

		return false;
	});
	
	var reachTopPosition = jQuery('#reach-section').offset().top;
	jQuery('.recout3, .recin3, .reach, .reachimg').click(function(){

		jQuery('html, body').animate({scrollTop:reachTopPosition}, 'slow');

		return false;
	});
	
	
         $(function () {
             var $win = $(window);

             $win.scroll(function () {
                 if ($win.scrollTop() <= 30)
                 {
                    $("#logo-wrapper").css({"box-shadow" : "0px 1px 5px 0px rgba(0,0,0,0)", "padding-top" : "50px"});
                    $("#logo").css({"width" : "220px"});
                 } else {
                 	$("#logo-wrapper").css({"box-shadow" : "0px 1px 5px 0px rgba(0,0,0,.5)", "padding-top" : "10px"});
                 	$("#logo").css({"width" : "120px"});
                 }
             });
         });
	
	

});