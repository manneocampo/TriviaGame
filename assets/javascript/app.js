$(document).ready(function(){
			$(".questions").hide();
			$(".results").hide();
			$(".answers").hide();	
			
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
						"Jim Riddle"
					],
				},	
			],
					indexCounter: 0,
					waitTime: 5,
					timer: 30, 	 
					correctAnswers: 0,
					incorrectAnswers: 0,
					unanswered: 10,
					nIntervId: null, 
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
				thirtySeconds: function() {
								
					triviaGame.nIntervId = setInterval(function() {
						// console.log("timer", triviaGame.timer);
						$("#timerHolder").html("Time Left:" + triviaGame.timer);
						triviaGame.timer--;
							if(triviaGame.timer < 0) { 
								clearInterval(triviaGame.nIntervId);
								
								 
							}
					}, 1000);
					
				},
				
				gamePlay: function() { //function to display questions and handle answers
					// triviaGame.reset()

					/*var created to make position of answer and incorrect answers random
					and also .empty removes the first set of Q & A so the next one can replace*/
					$('#answersHolder').empty();
					var choices = triviaGame.questions[triviaGame.indexCounter].incorrectAnswers;
					var random = Math.floor(Math.random()*4);
					choices.splice(random, 0, triviaGame.questions[triviaGame.indexCounter].answer);
					

					//run ten second timer
					triviaGame.thirtySeconds();

					//display questions 
					$(".questions").show();
					$("#done").show();	
					$(".answers").show();
					$("#questionsHolder").html(triviaGame.questions[triviaGame.indexCounter].question);
					// $("#answersHolder").html('<div><button class="answer">' + triviaGame.questions[triviaGame.indexCounter].answer);
					
					//showing the answer and incorrect choices as buttons
					for(var i=0; i<choices.length; i++){
					$("#answersHolder").append('<div><button class="answer">' + choices[i]);
					}

					//event handler for clicking on btns
					$(".answer").click(function() {
						console.log($(this).text());//checking that the text of btn shows, means working
						clearInterval(triviaGame.nIntervId);//clears timer
						triviaGame.timer=30;//resets timer to 30 once clears
						if(triviaGame.questions[triviaGame.indexCounter].answer === $(this).text()) {
							console.log("correct answer");
							triviaGame.correctAnswers++;
							$("#correctPoints").html(triviaGame.correctAnswers);//meant to show points


						}else {
							console.log("incorrect answer");
							triviaGame.incorrectAnswers++;
							$("#incorrectAnswers").html(triviaGame.incorrectAnswers);//meant to show points
						}
						triviaGame.indexCounter++;
							triviaGame.gamePlay();
					});

					
					
					
				
					/*then switch to next question 5s after the end of the timer or answer selected, need
					a timer for each question*/
				
					
				}, 
				display: function(){
					/*display the image or gif once answer chosen and press done btn or if 
					the timer runs out*/
				}
				
		}
		$("#start").click(triviaGame.gamePlay);
		
});		


