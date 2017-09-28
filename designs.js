// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



let mk = function makeGrid(event) {

	event.preventDefault();
	let rowLength = $('#input_width').val()
	let columnLength = $('#input_height').val()

	for (var rows = 0; rows < rowLength; rows++) {
			$("body").append("<br>");
	        for (var columns = 0; columns < columnLength; columns++) {
	            $("body").append("<div class='grid'></div>");
	        };
	    };
	    $(".grid").width(100);
	    $(".grid").height(100);

}

$('#create').on('click', mk);



let cc = function changeColor(){

	$('body').css('color', 'green');
	let gridColor = $('#colorPicker').val();
	$(this).css('background-color', gridColor);
}

$('body').on('click','.grid', cc);

