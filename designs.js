
var width, height, color;

$('#sizePicker').submit(function(event){
	
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
	event.preventDefault();
	
})
 
function makeGrid(n, m) {
	$('tr').remove();
	
	for(var i = 1; i <= n; i++){
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
			for(var j = 1; j <= m; j++) {
			$('#table' + i).append('<td></td>');
		}

	}
	$('td').click(function addColor(){
		color= $('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style')
		}
		else {
			$(this).attr('style', 'background-color:' + color);
		}
	})
}
