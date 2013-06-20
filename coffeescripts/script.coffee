

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
		$('.ours').click ->
			$.ajax 
				url: 'http://127.0.0.1:8071/motion-control/update'
				type: 'POST'
				data: forward: 1
				dataType: 'jsonp'

		$(window).keypress (event)->
			console.log('hit')
			if  event.keyCode == 119
				$.ajax 
					url: 'http://127.0.0.1:8071/motion-control/update'
					type: 'POST'
					data: forward: 1
					dataType: 'jsonp'
			else if event.keyCode == 115
				$.ajax 
					url: 'http://127.0.0.1:8071/motion-control/update'
					type: 'POST'
					data: forward: -1
					dataType: 'jsonp'
			else if event.keyCode == 101
				$.ajax 
					url: 'http://127.0.0.1:8071/motion-control/update'
					type: 'POST'
					data: turn: 1
					dataType: 'jsonp'
			else if event.keyCode == 113
				$.ajax 
					url: 'http://127.0.0.1:8071/motion-control/update'
					type: 'POST'
					data: turn: -1
					dataType: 'jsonp'
			else if event.keyCode == 100
				$.ajax 
					url: 'http://127.0.0.1:8071/motion-control/update'
					type: 'POST'
					data: strafe: 1
					dataType: 'jsonp'
			else if event.keyCode == 97
				$.ajax 
					url: 'http://127.0.0.1:8071/motion-control/update'
					type: 'POST'
					data: strafe: -1
					dataType: 'jsonp'


			

					