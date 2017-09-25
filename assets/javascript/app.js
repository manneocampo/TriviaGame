var triviaGame = {
	var questions = [
			questionOne: "What does the alohamora spell do?",
			answerChoicesOne: ,
			questionTwo: "What's Harry's mom's name?",
			answerChoicesTwo: ,
			questionThree: "Who does Harry end up with?",
			answerChoicesThree: ,
			questionFour: "What is the spell to levitate?",
			answerChoicesFour: ,			
			questionFive: "Which book talks about students getting petrified?",
			answerChoicesFive: ,
			questionSix: "Fill in the blank for the station name: ___ Platform 9 3/4",
			answerChoicesSix: ,
			questionSeven: "What was Harry's first address?": ,
			answerChoicesSeven: ,
			questionEight: "Which professor turned into a werewolf?",
			answerChoicesEight: ,
			questionNine: "What was the sixth Horcrux?",
			answerChoicesNine: ,
			questionTen: "What is Voldemort's real name?",
			answerChoicesTen: ,
		],
	var answers = [
			answerOne: "unlocks doors", 
			answerTwo: "Lily", 
			answerThree: "Ginny", 
			answerFour: "Levioso", 
			answerFive: "Chamber of Secrets", 
			answerSix: "King's Cross", 
			answerSeven: "4 Privet Drive", 
			answerEight: "Remus Lupin", 
			answerNine: "Nagini", 
			answerTen: "Tom Riddle", 
		],
			 
			correctAnswers: 0,
			incorrectAnswers: 0,
			unanswered: 0, 
		reset: function() {
			$("#triviaResults").html(this.correctAnswers);
			$("#triviaResults").html(this.incorrectAnswers);
			$("#triviaResults").html(this.unanswered);
			/*idea is that I will replace the div with the objects 
			upon reset and will display only once press done*/
		},
		gamePlay: function() {
			this.reset();
			/* should have a function activate on click for start btn*/
			/*should use the slideshow ideas for selecting each question obj
			but should only switch after like 5s after the end of the timer, need
			a timer for each question*/
			/*Need to figure out how to do multiple choice*/
			/*the idea is to maybe make a for loop thru questions with the multiple choice
			answers and just go in order of them to display in like a slide show fashion
			then show the correct answer and image or gif depending on two situations 
			(if select an answer & press done btn, or if the timer runs out) 
			then to switch to next depending on two conditions 
			(if select an answer & press done btn, or if timer runs out)
			at the end of all the  */
		}, 
		display: function(){
			/*display the image or gif once answer chosen and press done btn or if 
			the timer runs out*/
		}
}
triviaGame();