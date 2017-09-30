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
					// waitTime: 5, //considering doing setTimeout instead of fn
					timer: 5, //MUST CHANGE BACK TO 10seconds	 
					correctAnswers: 0,
					incorrectAnswers: 0,
					unanswered: 0,
					nIntervId: null, 

				reset: function() {
					this.indexCounter = 0;
					this.correctAnswers = 0; 
					this.incorrectAnswers = 0; 
					this.unanswered = 10;
					this.timer= 10; 
					this.gamePlay(); 
					$("#triviaResults").html(this.correctAnswers);
					$("#triviaResults").html(this.incorrectAnswers);
					$("#triviaResults").html(this.unanswered);
					/*idea is that I will replace the div with the objects 
					upon reset and will display only once game is done*/
				},
				tenSeconds: function() {
								
					triviaGame.nIntervId = setInterval(function() {
						// console.log("timer", triviaGame.timer);
						triviaGame.timer--;
						$("#timerHolder").html("Time Left:" + triviaGame.timer);
						
						// triviaGame.timesUp();
							if(triviaGame.timer == 0) { //can't take out line 125 and 126 to use timesUp, breaks things
								clearInterval(triviaGame.nIntervId);
								/*Tried to get the next two lines to work if timer runs out*/
								triviaGame.indexCounter++; //should have gone to next question set
								triviaGame.timer=5;
								triviaGame.unanswered++;
								triviaGame.gamePlay();// should have invoked game fn	 
							}
					}, 1000);
					
				},
				// timesUp: function(){ //doesn't work the idea was to separate parts of timer to go to next ques when time <0
				// 	if(triviaGame.timer <= 0) { 
				// 	clearInterval(triviaGame.nIntervId);
					
				// 	}
				// }, 
				
				gamePlay: function() { //function to display questions and handle answers
					// triviaGame.reset()

					if (triviaGame.indexCounter > 9) {
						triviaGame.endGame();
					}else {
						/*tried to move the timer variable and jQuery selector here 
						and leave the timer decrement and if statement inside tenSecond fn*/

						/*var created to make position of answer and incorrect answers random
						and also .empty removes the first set of Q & A so the next one can replace*/
						$('#answersHolder').empty();
						var choices = triviaGame.questions[triviaGame.indexCounter].incorrectAnswers;
						var random = Math.floor(Math.random()*4);
						choices.splice(random, 0, triviaGame.questions[triviaGame.indexCounter].answer);
						

						//run ten second timer
						triviaGame.tenSeconds();
						// triviaGame.timesUp();//doesn't work

						$("#timerHolder").html("Time Left:" + triviaGame.timer);
						//display questions 
						$(".questions").show();	
						$(".answers").show();
						$(".button").hide();
						$("#questionsHolder").html(triviaGame.questions[triviaGame.indexCounter].question);
						// $("#answersHolder").html('<div><button class="answer">' + triviaGame.questions[triviaGame.indexCounter].answer);
						
						//showing the answer and incorrect choices as buttons
						for(var i=0; i<choices.length; i++){
						$("#answersHolder").append('<div><button class="answer btn btn-default">' + choices[i]);
						}
						triviaGame.answer();

						/*then switch to next question 5s after the end of the timer or answer selected, need
						a timer for each question, setTimeout? at the end*/	
					}	
				}, 
				answer: function() {
						//event handler for clicking on btns
					$(".answer").click(function() {
						console.log($(this).text());//checking that the text of btn shows, means working
						clearInterval(triviaGame.nIntervId);//clears timer
						triviaGame.timer=5;//resets timer to 10 once clears
						if(triviaGame.questions[triviaGame.indexCounter].answer === $(this).text()) {
							console.log("correct answer");
							triviaGame.correctAnswers++;
							$(".display").html("Correct!Keep it Up!");
							console.log("correct pts:"+ triviaGame.correctAnswers);
							


						}else {
							console.log("incorrect answer");
							triviaGame.incorrectAnswers++;
							$(".display").html("Uh oh, that's not right.");
							console.log("incorrect pts:" + triviaGame.incorrectAnswers);
							
						}
						triviaGame.indexCounter++;
						triviaGame.gamePlay();
					});
				},
				endGame: function() {
					$(".questions").hide();	
					$(".answers").hide();
					$(".button").hide();
					$("#timerHolder").hide();
					$(".display").hide();
					$("#timerHolder", ".questions", ".answer", ".display").empty();
					$("#correctPoints").html("Correct Answers:" + triviaGame.correctAnswers);//meant to show points
					$("#incorrectPoints").html("Incorrect Answers:" + triviaGame.incorrectAnswers);//meant to show points
					$("#unansweredPoints").html("Unanswered:" + triviaGame.unanswered);
				},

				display: function(){
					/*display the image or gif once answer chosen and press done btn or if 
					the timer runs out*/
				}
				
		}
		$("#start").click(triviaGame.gamePlay);
		
});		


