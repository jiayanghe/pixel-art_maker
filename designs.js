// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



let mk = function makeGrid(event) {

	event.preventDefault();
	$('table').empty();
	let rowLength = $('#input_width').val()
	let columnLength = $('#input_height').val()

	for (var columns = 0; columns < columnLength; columns++) {
			$("table").append("<br>");
	        for (var rows = 0; rows < rowLength; rows++) {
	            $("table").append("<div class='grid'></div>");
	        };
	    };
	    $(".grid").width("20px");
	    $(".grid").height("20px");

}

$('#create').on('click', mk);

let cc = function changeColor(){

	let gridColor = $('#colorPicker').val();
	$(this).css('background-color', gridColor);
}

$('body').on('click','.grid', cc);

