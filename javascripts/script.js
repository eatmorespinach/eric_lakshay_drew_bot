$(function(){
  

  $(document).ready(function() {
    var degree = 0;
    
    var interval_delay = 10;
    var original_top = $('.main').css('top');
    var top_position = parseInt(original_top); 
    var original_left = $('.main').css('left');
    var left_position = parseInt(original_left);

    var interval_id = null;


    $(window).keypress(function(event) {
      console.log('hit');
      console.log(degree);

      // space bar stops the robot
      if (event.keyCode === 32) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            strafe: 0
          },
          dataType: 'jsonp'
        });
        return clearInterval(interval_id);
      } else if (event.keyCode === 119) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            forward: 1
          },
          dataType: 'jsonp'
        });
        clearInterval(interval_id);
        // w starts moving image up and sets the interval to interval_id, clear interval_id to stop image
        interval_id = window.setInterval( function(){
          top_position -= 1;
          $('.main').css('top', top_position);
        }, interval_delay);
        // s key moves image down
      } else if (event.keyCode === 115) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            forward: -1
          },
          dataType: 'jsonp'
        });
        clearInterval(interval_id);
        interval_id = window.setInterval( function(){
          top_position += 1;
          $('.main').css('top', top_position);
        }, interval_delay);
      } else if (event.keyCode === 101) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            turn: 1
          },
          dataType: 'jsonp'
        });
        clearInterval(interval_id);
        interval_id = window.setInterval( function(){
          degree += 1;
          $('.main').css({'-webkit-transform': 'rotate(' + degree + 'deg)'
        });
        }, interval_delay);
      } else if (event.keyCode === 113) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            turn: -1
          },
          dataType: 'jsonp'
        });
        clearInterval(interval_id);
        interval_id = window.setInterval( function(){
          degree -= 1;
          $('.main').css({'-webkit-transform': 'rotate(' + degree + 'deg)'
        });
        }, interval_delay);

        return image.css({
          '-webkit-transform': 'rotate(' + degree + 'deg)'
        });
      } else if (event.keyCode === 100) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            strafe: 1
          },
          dataType: 'jsonp'
        });
        clearInterval(interval_id);
        interval_id = window.setInterval( function(){
          left_position += 1;
          $('.main').css('left', left_position);
        }, interval_delay);
      } else if (event.keyCode === 97) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          data: {
            strafe: -1
          },
          dataType: 'jsonp'
        });
        clearInterval(interval_id);
        interval_id = window.setInterval( function(){
          left_position -= 1;
          $('.main').css('left', left_position);
        }, interval_delay);
      }
    });
  });

});

