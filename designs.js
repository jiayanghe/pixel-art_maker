// the makeGrid function generates a grid within the table in the body section, according to users width and height input.
let gridMaker = function makeGrid(event) {

	
	$('table').empty();//clear the table everytime when user click the submit button.
	const rowLength = $('#input_width').val()
	const columnLength = $('#input_height').val()

	for (var columns = 0; columns < columnLength; columns++) {
			$("table").append("<br>");
	        for (var rows = 0; rows < rowLength; rows++) {
	            $("table").append("<div class='grid'></div>");
	        };
	    };
	    //set the size of each grid.
	    $(".grid").width("20px");
	    $(".grid").height("20px");
	    event.preventDefault();//prevent the submit button from reloading the page.
}

//call function makeGrid when user click submit.
$('#sizePicker').on('submit', gridMaker);

let colorTool = function changeColor(){

	let gridColor = $('#colorPicker').val();
	$(this).css('background-color', gridColor);
}

//change the background color of each grid per users' selection when they click on a certain grid.
$('body').on('click','.grid', colorTool);

