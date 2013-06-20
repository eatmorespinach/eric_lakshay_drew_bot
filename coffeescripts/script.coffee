

# request = $.get '/'

# $ ?= require 'jquery' # For Node.js compatibility

$(document).ready ->

	$('.example').click ->
		$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"});

# 	# Basic Examples
# 	$.get '/', (data) ->
# 		$('body').append "Successfully got the page."

# 	$.post '/',
# 		userName: 'John Doe'
# 		favoriteFlavor: 'Mint'
# 		(data) -> $('body').append "Successfully posted to the page."

# 	# Advanced Settings
$('.example').click ->
	$.ajax '127.0.0.1:8071/motion-control/update',
		type: 'POST'
		data: forward: 1
		dataType: 'jsonp'
		error: (jqXHR, textStatus, errorThrown) ->
			$('body').append "AJAX Error: #{textStatus}"
		success: (data, textStatus, jqXHR) ->
			$('body').append "Successful AJAX call: #{data}"