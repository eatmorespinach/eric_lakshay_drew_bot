// Generated by CoffeeScript 1.6.3
(function() {
  $(document).ready(function() {
    return $.ajax({
      url: "127.0.0.1:8071/motion-control/update",
      data: {
        forward: 1
      },
      dataType: "jsonp"
    });
  });

  $.ajax('127.0.0.1:8071/motion-control/update', {
    type: 'POST',
    data: {
      forward: 1
    },
    dataType: 'jsonp',
    error: function(jqXHR, textStatus, errorThrown) {
      return $('body').append("AJAX Error: " + textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      return $('body').append("Successful AJAX call: " + data);
    }
  });

}).call(this);
