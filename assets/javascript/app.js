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
						$("#timerHolder").html("Time Left:" + triviaGame.timer);//not working
						triviaGame.timer--;
							if(triviaGame.timer < 0) { //or if they press done button
								clearInterval(triviaGame.nIntervId);
								//call a fn that pulls up the next question
								//call a fn w a null answer 
							}
					}, 1000);
					
				},
				
				gamePlay: function() { //function to display questions and handle answers
					// triviaGame.reset()
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
					
					for(var i=0; i<choices.length; i++){
					$("#answersHolder").append('<div><button class="answer">' + choices[i]);
					}
					$(".answer").click(function() {
						console.log($(this).text());
						clearInterval(triviaGame.nIntervId);
						triviaGame.timer=30;
						if(triviaGame.questions[triviaGame.indexCounter].answer === $(this).text()) {
							console.log("correct answer");
							triviaGame.correctAnswers++;

						}else {
							console.log("incorrect answer");
							triviaGame.incorrectAnswers++;
						}
						triviaGame.indexCounter++;
							triviaGame.gamePlay();
					});

					
					
					
				
					/*then switch to next question 5s after the end of the timer or answer selected, need
					a timer for each question*/
				
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
		
});		


