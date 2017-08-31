var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max){
	return Math.floor(Math.random() * (max-min + 1) + min)
};

var startGame = function(){
	currentScore = 0;
	targetScore = getRandom(19, 120);

	crystal.blue.value = getRandom(1,12);
	crystal.red.value = getRandom(1,12);
	crystal.green.value = getRandom(1,12);
	crystal.yellow.value = getRandom(1,12);

	$("#your-score").html(currentScore);
	$("#target-score").html(targetScore);

	var checkWin = function(){
		if (currentScore > targetScore){
			alert("GAME OVER!");
			console.log("you lost");

			lossCount++;
			$("#losses").html(lossCount);
			startGame();
		}

		else if (currentScore === targetScore){
			alert("YOU WIN!");
			console.log("YOU WIN");

			winCount++;
			$("#wins").html(winCount);
			startGame();
		}
	};
};

	var addValues = function(clickedCrystal){
		currentScore += clickedCrystal.value;
		$("#your-score").html(currentscore);
		checkWin();
		console.log("your score" + currentScore);
	};

startGame();
$("blue").click(function(){
	addValues(crystal.blue);
});

$("green").click(function(){
	addValues(crystal.green);
});

$("red").click(function(){
	addValues(crystal.red);
});

$("yellow").click(function(){
	addValues(crystal.yello);
});




