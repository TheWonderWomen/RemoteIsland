(function($){
  $(function(){

    $('.button-collapse').sideNav();
    //cycle_background();
    console.log($('search').value);  
  }); // end of document ready
})(jQuery); // end of jQuery name space

function cycle_background() { 
	var image_folder = 'images/';
	var img_array = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg', 'img_4.jpg']; 

	var i = 0; 
	setInterval(function() {
		$('body').css('background-image', 'url(' + image_folder + img_array[i] + ')'); 
		i++; 
		if (i == img_array.length) { 
			i = 0; 
		}
	}, 1000); 
	
}