var triviaGame = {
	questions : [
		{	
			question: "What does the alohamora spell do?",
			answer: "unlocks",
			incorrectAnswers:[ 
				"greets",
				"locks",
				"increases something"
			],
		},	
		{	
			question: "What's Harry's mom's name?",
			answer: "Lily",
			incorrectAnswers:[ 
				"Katie",
				"Angela",
				"Luna"
			],
		},	
		{	
			question: "Who does Harry end up with?",
			answer: "Ginny", 
			incorrectAnswers:[ 
				"Cho",
				"Hermione",
				"Lavender"
			],
		},
		{	question: "What is the spell to levitate?",
			answer: "Leviosa", 
			incorrectAnswers:[ 
				"Risio",
				"Levioso",
				"Risia"
			],	
		},		
		{	
			question: "Which book talks about students getting petrified?",
			answer: "The Chamber of Secrets", 
			incorrectAnswers:[ 
				"The Goblet of Fire",
				"The Half-Blood Prince",
				"The Deathly Hallows"
			],
		},
			
		{	question: "Fill in the blank for the station name: ___ Platform 9 3/4",
			answer: "King's Cross", 
			incorrectAnswers:[ 
				"Aberdeen",
				"Alexandra Palace",
				"King's Park"
			],
		},	
		{	
			question: "What was Harry's first address?",
			answer: "4 Privet Drive", 
			incorrectAnswers:[ 
				"1 Privet Drive",
				"2 Privet Drive",
				"3 Privet Drive"
			],
		},
		{
			question: "Which professor turned into a werewolf?",
			answer: "Remus Lupin",
			incorrectAnswers:[ 
				"Quirinus Quirrell",
				"Horace Slughorn",
				"Pomona Sprout"
			],
		},
		{	
			question: "What was the sixth Horcrux?",
			answer: "Nagini",
			incorrectAnswers:[ 
				"Hufflepuff Cup",
				"Slytherin Locket",
				"Ravenclaw Diadem"
			],
		},	
		{	
			question: "What is Voldemort's real name?",
			answer: "Tom Riddle", 
			incorrectAnswers:[ 
				"John Riddle",
				"Tim Riddle",
				""
			],
		},	
	],
			indexCounter: 0,
			waitTime: 5,
			timer: 10, 	 
			correctAnswers: 0,
			incorrectAnswers: 0,
			unanswered: 10, 
		reset: function() {
			this.indexCounter = 0;
			this.correctAnswers = 0; 
			this.incorrectAnswers = 0; 
			this.unanswered = 10; 
			this.gamePlay(); 
			$("#triviaResults").html(this.correctAnswers);
			$("#triviaResults").html(this.incorrectAnswers);
			$("#triviaResults").html(this.unanswered);
			/*idea is that I will replace the div with the objects 
			upon reset and will display only once press done*/
		},
		tenSeconds: function() {
			var nIntervId = setInterval(function() {
				console.log("timer", triviaGame.timer);
				triviaGame.timer--;
			}, 1000);
			
			// console.log(nIntervId);
		},
		gamePlay: function() { //function to display questions and handle answers
			// triviaGame.reset();
			triviaGame.tenSeconds();
			
			
			
				

			
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
$("#start").click(triviaGame.gamePlay);