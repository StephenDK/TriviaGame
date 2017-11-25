$(document).ready(function(){
	var setTimerMax = 30;
	var intervalID;

	function run() {
		intervalID = setInterval(decrement, 1000);
	}


	function decrement() {
		setTimerMax--
		$('.timer').html('<h3>' + setTimerMax + '</h2>')
	}

	function stop() {
		clearInterval(intervalID);
	}

	run();
	

var questionsAndAnswers = {
	q1: "Who is the fastest of theses video game characters?",
	answer1: "",

	// Mario , [Sonic], Donkey Kong, The Paperby

	q2: "In Halo combat evolved the flood was introduced in what level?",

	// The pillar of Autumn, [the library], The Maw, 343 Guilty Spark

	q3: "Which of these bands was not featured in Guitar Hero III: Legends of Rock?"
}
	// Metallica, Weezer, [Iron Maiden], Lynard Skynyrd


});



	












// $(document).ready(function() {
// 	var index = 0;					//set global index variable to 0
// 	var countdownTimer = {			// set JSON var tto countdown timer
// 		time : 30,					// set the max time to 30 seconds
// 		reset: function() {				// Create a reset timer function 
// 			this.time = 30;					//reset countdown timer to 30 seconds
// 			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>'); //update html
// 		},
// 		start: function() {						//start timer
// 			counter = setInterval(countdownTimer.count, 1000);	
// 		},
// 		stop: function() {
// 			clearInterval(counter);
// 		},
// 		count: function() {
// 				countdownTimer.time--;
// 				console.log(countdownTimer.time);
// 			if (countdownTimer.time >= 0) {
// 				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
// 			}
// 			else {
// 				index++;
// 				answerWrong();
// 				countdownTimer.reset();
// 				if (index < questionArray.length) {
// 					loadQuestion(index);
// 				} else {
// 					$(".answerchoice").hide();
// 					showScore();
// 				}
// 			}
// 		}
// 	}
