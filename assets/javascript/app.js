$(document).ready(function(){
	var maxTimerNumber = 30;


	function run() {
		intervalID = setInterval(decrement, 1000)
	}

	function decrement() {
		maxTimerNumber--;

		$(".timer").html("<h2>" + maxTimerNumber + "</h2>")
	}

	run();

});