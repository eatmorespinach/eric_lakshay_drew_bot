

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
				