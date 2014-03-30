      empty_space = 0;
      var position_mp = $('#moving_photo').offset()['top']; 
      var content_mp = $('#moving_photo').html();

      function logo_pos(){
        var headHeight = $('#headerwrap').outerHeight();
        var logo_imageHeight = $('#logo-image').outerHeight();
        $('#empty-trick').css('height', empty_space + 'px');
      }

      function parallax(){
	  var headHeight = $('#headerwrap').outerHeight();
          var scrolled = $(window).scrollTop();
          if (scrolled < headHeight-200) {
              $('#empty-trick').css('height', 
				    (empty_space + scrolled) + 'px');
          }
      }

      function move_photo(){
        var scrolled = $(window).scrollTop();
	var position_mp1 = $('#start_mp').offset()['top']; 
        var position_about = $('#about').offset()['top']; 
	var position_portfolio = $('#image_stop').offset()['top'];
	var photo_size = $('#moving_photo').height;
	if (scrolled >= position_about && scrolled <= position_portfolio) {    
	  var new_pos = scrolled - position_about;
	  $('#moving_photo').css('top', new_pos);
	  var new_pn = Math.floor(new_pos / 200) % 11;
          var new_p = 'assets/img/C2/F' + new_pn + '.jpg';						      
	  $('#moving_photo').attr("src", new_p);
	}
      } 

      $(window).scroll(function(e){
        parallax();
	move_photo();
      });

      $(document).ready(function(){
	$('#moving_photo').css('position', 'absolute');
        logo_pos();
	});
      
