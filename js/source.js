$(document).ready(function(){


	//use enter to add list items (w/2 boxes)
	var addItem = function (item) {
		var addedItem = '<li class="items">' + '<img class="check" src="images/checkicon.png"> ' + '<span>' + item + '<span>' + 
					'<img class="delete" src="images/deleteicon.png">' + '</li>' ; 
		$('#list').append(addedItem); 
			//make list elements .items draggable again
		$('.items').draggable();
	} ;

	//use click to add list items (w/2 boxes)
	$('#add').click(function(){
		addItem ($('#item').val())
	});

	$('#item').keyup(function(e) {
		if (e.which==13) {
		addItem ($('#item').val())	
		}	
	});	


	//strike through li when check box clicked
	$('.check').click(function() {
		$(this).siblings('span').toggleClass('checked');	
		}); 

	
	

	//hide elements when click delete
	$('.delete').click(function(){
		$(this).closest('.items').slideUp();	
	});

	//make list elements .items draggable
		$('.items').draggable();




}); 