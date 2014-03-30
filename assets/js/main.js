;(function(){
    // Menu settings
    $('#menuToggle, .menu-close').on('click', function(){
	$('#menuToggle').toggleClass('active');
	$('body').toggleClass('body-push-toleft');
	$('#theMenu').toggleClass('menu-open');
    });
})(jQuery)

$(document).ready(function(){
    $("#img1").click(function(){
	$(this).slideUp("slow");
    });
    $(window).scroll(function(){
	$("#img1").slideUp("slow");
    });
});
