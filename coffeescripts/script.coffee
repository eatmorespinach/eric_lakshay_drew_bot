

# request = $.get '/'

# $ ?= require 'jquery' # For Node.js compatibility
$(document).ready ->

# 	# Basic Examples
# 	$.get '/', (data) ->
# 		$('body').append "Successfully got the page."

# 	$.post '/',
# 		userName: 'John Doe'
# 		favoriteFlavor: 'Mint'
# 		(data) -> $('body').append "Successfully posted to the page."

# 	# Advanced Settings
	degree = 0
	$('.ours').click ->
		$.ajax 
			url: 'http://127.0.0.1:8071/motion-control/update'
			type: 'POST'
			data: forward: 1
			dataType: 'jsonp'

	$(window).keypress (event)->
		console.log('hit')
		console.log(degree)
		if  event.keyCode == 119
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: forward: 1
				dataType: 'jsonp'
			$('.main').animate({top: '-=2'}, 0)

		else if event.keyCode == 115
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: forward: -1
				dataType: 'jsonp'
			$('.main').animate({top: '+=2'}, 0)
		else if event.keyCode == 101
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: turn: 1
				dataType: 'jsonp'
			degree += 2
			$('.main').css('-webkit-transform': 'rotate(' + degree + 'deg)')
		else if event.keyCode == 113
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: turn: -1
				dataType: 'jsonp'
			degree -= 2
			$('.main').css('-webkit-transform': 'rotate(' + degree + 'deg)')
		else if event.keyCode == 100
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: strafe: 1
				dataType: 'jsonp'
			$('.main').animate({left: '+=2'}, 0)
		else if event.keyCode == 97
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: strafe: -1
				dataType: 'jsonp'
			$('.main').animate({left: '-=2'}, 0)
		else if event.keyCode == 32
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: strafe: 0
				dataType: 'jsonp'


		

				