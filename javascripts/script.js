// Generated by CoffeeScript 1.6.3
(function() {
  $(document).ready(function() {
    $('.ours').click(function() {
      return $.ajax({
        url: 'http://127.0.0.1:8071/motion-control/update',
        type: 'POST',
        data: {
          forward: 1
        },
        dataType: 'jsonp'
      });
    });
    return $(window).keypress(function(event) {
      console.log('hit');
      if (event.keyCode === 119) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          type: 'POST',
          data: {
            forward: 1
          },
          dataType: 'jsonp'
        });
        return $('.main').animate({
          top: '-=1'
        }, 0);
      } else if (event.keyCode === 115) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          type: 'POST',
          data: {
            forward: -1
          },
          dataType: 'jsonp'
        });
        return $('.main').animate({
          top: '+=1'
        }, 0);
      } else if (event.keyCode === 101) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          type: 'POST',
          data: {
            turn: 1
          },
          dataType: 'jsonp'
        });
        return $('.main').animate({
          transform: 'rotate(' + '+=10' + 'deg)'
        }, 0);
      } else if (event.keyCode === 113) {
        return $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          type: 'POST',
          data: {
            turn: -1
          },
          dataType: 'jsonp'
        });
      } else if (event.keyCode === 100) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          type: 'POST',
          data: {
            strafe: 1
          },
          dataType: 'jsonp'
        });
        return $('.main').animate({
          left: '+=1'
        }, 0);
      } else if (event.keyCode === 97) {
        $.ajax({
          url: 'http://127.0.0.1:8071/motion-control/update',
          type: 'POST',
          data: {
            strafe: -1
          },
          dataType: 'jsonp'
        });
        return $('.main').animate({
          left: '-=1'
        }, 0);
      }
    });
  });

}).call(this);
