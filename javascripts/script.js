$(document).ready(function() {

  var degree = 0;
  
  var interval_delay = 2;
  var original_top = $('.main').css('top');
  var top_position = parseInt(original_top); 
  var original_left = $('.main').css('left');
  var left_position = parseInt(original_left);
  var image_width = $(".main").width();
  var image_height = $(".main").height();
  //image_height and image_width not working in max right/bottom calculation
  var max_right = $(window).width() - 200;
  var max_bottom = $(window).height() - 200;

  var interval_id = null;

  
  function signal_bot(way) {
    $.ajax({
      url: 'http://127.0.0.1:8071/motion-control/update',
      data: way,
      dataType: 'jsonp'
    });
  };

  function tank_movement_forward() {
    var left_over = degree % 360;
    var move_percent = (Math.abs(left_over) % 90) / 90;
    if (left_over > 0 && left_over < 90) {
      top_position -= (1 - move_percent);
      left_position +=  move_percent;
    } else if (left_over > 90 && left_over < 180) {
      top_position += move_percent;
      left_position +=  (1 - move_percent);
    } else if (left_over > 180 && left_over < 270) {
      top_position += (1 - move_percent);
      left_position -=  move_percent;
    } else if (left_over > 270 && left_over < 360) {
      top_position -= move_percent;
      left_position -= (1 - move_percent);
    } else if (left_over < -270 && left_over > -360){
      top_position -= move_percent;
      left_position += (1 - move_percent);
    } else if (left_over < -180 && left_over > -270) {
      top_position += (1 - move_percent);
      left_position +=  move_percent;
    } else if (left_over < -90 && left_over > -180) {
      top_position += move_percent;
      left_position -=  (1 - move_percent);
    } else if (left_over < 0 && left_over > -90) {
      top_position -= (1 - move_percent);
      left_position -= move_percent;
    } else if (left_over == 0) {
      top_position -= 1;
    } else if (left_over == 90 || left_over == -270) {
      left_position += 1;
    } else if (left_over == 180 || left_over == -180) {
      top_position += 1;
    } else if (left_over == 270 || left_over == -90) {
      left_position -= 1;
    }
    $('.main').css('top', top_position);
    $('.main').css('left', left_position);
  }

  function tank_movement_backward() {
    var left_over = degree % 360;
    var move_percent = (Math.abs(left_over) % 90) / 90;
    if (left_over > 0 && left_over < 90) {
      top_position += (1 - move_percent);
      left_position -=  move_percent;
    } else if (left_over > 90 && left_over < 180) {
      top_position -= move_percent;
      left_position -=  (1 - move_percent);
    } else if (left_over > 180 && left_over < 270) {
      top_position -= (1 - move_percent);
      left_position +=  move_percent;
    } else if (left_over > 270 && left_over < 360) {
      top_position += move_percent;
      left_position += (1 - move_percent);
    } else if (left_over < -270 && left_over > -360){
      top_position += move_percent;
      left_position -= (1 - move_percent);
    } else if (left_over < -180 && left_over > -270) {
      top_position -= (1 - move_percent);
      left_position -=  move_percent;
    } else if (left_over < -90 && left_over > -180) {
      top_position -= move_percent;
      left_position +=  (1 - move_percent);
    } else if (left_over < 0 && left_over > -90) {
      top_position += (1 - move_percent);
      left_position += move_percent;
    } else if (left_over == 0) {
      top_position += 1;
    } else if (left_over == 90 || left_over == -270) {
      left_position -= 1;
    } else if (left_over == 180 || left_over == -180) {
      top_position -= 1;
    } else if (left_over == 270 || left_over == -90) {
      left_position += 1;
    }
    $('.main').css('top', top_position);
    $('.main').css('left', left_position);
  }

  function strafe_right() {
    var left_over = degree % 360;
    var move_percent = (Math.abs(left_over) % 90) / 90;
    if (left_over > 0 && left_over < 90) {
      top_position += move_percent;
      left_position += (1 - move_percent);
    } else if (left_over > 90 && left_over < 180) {
      top_position += (1 - move_percent);
      left_position -=  move_percent;
    } else if (left_over > 180 && left_over < 270) {
      top_position -= move_percent;
      left_position -=  (1 - move_percent);
    } else if (left_over > 270 && left_over < 360) {
      top_position -= (1 - move_percent);
      left_position +=  move_percent;
    } else if (left_over < -270 && left_over > -360){
      top_position += (1 - move_percent);
      left_position += move_percent;
    } else if (left_over < -180 && left_over > -270) {
      top_position += move_percent;
      left_position -= (1 - move_percent);
    } else if (left_over < -90 && left_over > -180) {
      top_position -= (1 - move_percent);
      left_position -=  move_percent;
    } else if (left_over < 0 && left_over > -90) {
      top_position -= move_percent;
      left_position +=  (1 - move_percent);
    } else if (left_over == 0) {
      left_position += 1;
    } else if (left_over == 90 || left_over == -270) {
      top_position += 1;
    } else if (left_over == 180 || left_over == -180) {
      left_position -= 1;
    } else if (left_over == 270 || left_over == -90) {
      top_position -= 1;
    }
    $('.main').css('top', top_position);
    $('.main').css('left', left_position);
  }

  function strafe_left() {
    var left_over = degree % 360;
    var move_percent = (Math.abs(left_over) % 90) / 90;
    if (left_over > 0 && left_over < 90) {
      top_position -= move_percent;
      left_position -= (1 - move_percent);
    } else if (left_over > 90 && left_over < 180) {
      top_position -= (1 - move_percent);
      left_position +=  move_percent;
    } else if (left_over > 180 && left_over < 270) {
      top_position += move_percent;
      left_position +=  (1 - move_percent);
    } else if (left_over > 270 && left_over < 360) {
      top_position += (1 - move_percent);
      left_position -=  move_percent;
    } else if (left_over < -270 && left_over > -360){
      top_position -= (1 - move_percent);
      left_position -= move_percent;
    } else if (left_over < -180 && left_over > -270) {
      top_position -= move_percent;
      left_position += (1 - move_percent);
    } else if (left_over < -90 && left_over > -180) {
      top_position += (1 - move_percent);
      left_position +=  move_percent;
    } else if (left_over < 0 && left_over > -90) {
      top_position += move_percent;
      left_position -=  (1 - move_percent);
    } else if (left_over == 0) {
      left_position -= 1;
    } else if (left_over == 90 || left_over == -270) {
      top_position -= 1;
    } else if (left_over == 180 || left_over == -180) {
      left_position += 1;
    } else if (left_over == 270 || left_over == -90) {
      top_position += 1;
    }
    $('.main').css('top', top_position);
    $('.main').css('left', left_position);
  }

  function stop_both() {
    clearInterval(interval_id);
    signal_bot({forward: 0});
  }


  $(window).keypress(function(event) {
    console.log('hit');
    console.log(degree);
    console.log($('.main').height())

    // space bar stops the robot
    if (event.keyCode === 32) {
      return stop_both();
    } else if (event.keyCode === 119) {
      signal_bot({forward: 1});
      clearInterval(interval_id);
      // w starts moving image up and sets the interval to interval_id, clear interval_id to stop image
      interval_id = window.setInterval( function(){
        tank_movement_forward();
      }, interval_delay);
      // s key moves image down
    } else if (event.keyCode === 115) {
      signal_bot({forward: -1});
      clearInterval(interval_id);
      interval_id = window.setInterval( function(){
        tank_movement_backward();
      }, interval_delay);
    } else if (event.keyCode === 101) {
      signal_bot({turn: 1});
      clearInterval(interval_id);
      interval_id = window.setInterval( function(){
        degree += 1;
        $('.main').css({'-webkit-transform': 'rotate(' + degree + 'deg)'
      });
      }, interval_delay);
    } else if (event.keyCode === 113) {
      signal_bot({turn: -1});
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
      signal_bot({strafe: 1});
      clearInterval(interval_id);
      interval_id = window.setInterval( function(){
        strafe_right();
      }, interval_delay);
    } else if (event.keyCode === 97) {
      signal_bot({strafe: -1});
      clearInterval(interval_id);
      interval_id = window.setInterval( function(){
        strafe_left();
      }, interval_delay);
    }
  });
});

