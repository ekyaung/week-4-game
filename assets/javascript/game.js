var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;
var crystal = {
		blue: {
			name: "blue",
			value:0
		},

		green:{
			name:"green",
			value:0
		},

		yellow:{
			name:"yellow",
			value:0
		},

		red:{
			name:"red",
			value:0
		}
	};

var getRandom = function(min, max){
	return Math.floor(Math.random() * (max-min + 1) + min)
};
console.log(getRandom)

var startGame = function(){
	currentScore = 0;
	targetScore = getRandom(20, 160);

	crystal.blue.value = getRandom(1,16);
	crystal.red.value = getRandom(1,16);
	crystal.green.value = getRandom(1,16);
	crystal.yellow.value = getRandom(1,16);

	$("#your-score").html(currentScore);
	$("#target-score").html(targetScore);
	};
	
	var checkWin = function(){
		if (currentScore > targetScore){
			alert("GAME OVER!");
			console.log("you lost");

			lossCount++;
			$("losses").html(lossCount);
			startGame();
		}

		else if (currentScore === targetScore){
			alert("YOU WIN!");
			console.log("YOU WIN");

			winCount++;
			$("wins").html(winCount);
			startGame();
		}
	};

	var addValues = function(clickedCrystal){
		currentScore += clickedCrystal.value;
		$("#your-score").html(currentScore);
		checkWin();
		console.log("your score" + currentScore);
	};

startGame();
$("#blue").click(function(){
	addValues(crystal.blue);
	console.log("clicked")
});

$("#green").click(function(){
	addValues(crystal.green);
});

$("#red").click(function(){
	addValues(crystal.red);
});

$("#yellow").click(function(){
	addValues(crystal.yello);
});




