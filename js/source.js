$(document).ready(function(){


	//use enter to add list items (w/2 boxes)
	

	//use click to add list items (w/2 boxes)
	$('#add').click(function(){
		$('.items').append('<input id="item"> </input>')
	});

	//strike through li when check box clicked
	$('.check').click(function() {
		$(this).siblings('span').css('text-decoration', 'line-through');
		}); 
	

	//hide elements when click delete
	$('.delete').click(function(){
		$(this).siblings('span').slideUp();	
	});

	//make list elements .items draggable
		$('.items').draggable();




}); 