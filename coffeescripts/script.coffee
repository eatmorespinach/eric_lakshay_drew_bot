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
	image = $('.main')

	x = true

	# moveLoop = (move)->
	# 	loop
	# 		console.log("are we here?")
	# 		$('.main').animate(move, 100)
	# 		break if x = false

	# scope = (block) -> block() 
	# fact = scope ->
	# 	self = image.animate {
	# 		top: '-=2'	
	# 		}, 100, 
	# 		'linear',
	# 		-> self
	# newFact = fact
	# fact = "" 
	
	# moveLoop = ->
	# 	image.animate
	# 	top: "-=2"
	# , 100, "linear", ->
	# 	moveLoop()    

	$(window).keypress (event)->
		console.log('hit')
		console.log(degree)
		if event.keyCode == 32
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: strafe: 0
				dataType: 'jsonp'
			image.stop()

			
		else if  event.keyCode == 119
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: forward: 1
				dataType: 'jsonp'
			loop
				console.log("are we here?")
				$('.main').animate({
					top: '-=2'}
				, 500
				)
				break if x == false


			#move = {top: '-=2'}
			#moveLoop({top: '-=2'})
			# image.animate({top: '-=2'}, 0) 
			#newFact		
			

		else if event.keyCode == 115
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: forward: -1
				dataType: 'jsonp'
			image.animate({top: '+=2'}, 0)
		else if event.keyCode == 101
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: turn: 1
				dataType: 'jsonp'
			degree += 2
			image.css('-webkit-transform': 'rotate(' + degree + 'deg)')
		else if event.keyCode == 113
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: turn: -1
				dataType: 'jsonp'
			degree -= 2
			image.css('-webkit-transform': 'rotate(' + degree + 'deg)')
		else if event.keyCode == 100
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: strafe: 1
				dataType: 'jsonp'
			image.animate({left: '+=2'}, 0)
		else if event.keyCode == 97
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: strafe: -1
				dataType: 'jsonp'
			image.animate({left: '-=2'}, 0)
	

# this is for stopping the image and bot when space bar is pressed

		
		

				