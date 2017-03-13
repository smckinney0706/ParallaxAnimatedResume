var animationCount = 0;
var monkeyMoving = false;
var moveMonkeyTimer;

function showNum(){
	animationCount++;
	if(animationCount > 4){
		animationCount = 0;
		clearInterval(moveMonkeyTimer);
		monkeyMoving = false;
	}
	if(animationCount == 1){
		document.getElementById("monkey").style.backgroundPosition = "0px 0px";
		document.getElementById("monkeyBack").style.backgroundPosition = "0px -512.98px";
	} else if(animationCount == 2){
		document.getElementById("monkey").style.backgroundPosition = "-324.59px 0px";
		document.getElementById("monkeyBack").style.backgroundPosition = "-324.59px -512.98px";
	} else if(animationCount == 3){
		document.getElementById("monkey").style.backgroundPosition = "-649.18px 0px";
		document.getElementById("monkeyBack").style.backgroundPosition = "-649.18px -512.98px";
	} else if(animationCount == 4){
		document.getElementById("monkey").style.backgroundPosition = "-973.77px 0px";
		document.getElementById("monkeyBack").style.backgroundPosition = "-973.77px -512.98px";
		//$("#charcter").css("background-position","618px 0px");
	}
	console.log(animationCount);
}

$(document).scroll(function(){
	if(monkeyMoving == false){
		moveMonkeyTimer = setInterval(showNum, 250);
		monkeyMoving = true;
	}
	
	console.log($(document).scrollTop());

	$("#vine").css("top", String($(document).scrollTop()/-8) + "px" );
	$("#background").css("top", String($(document).scrollTop()/-2) + "px" );
	$("#palmLeavesLeft").css("top", String($(document).scrollTop() * .2) + "px" );
	$("#palmLeavesRight").css("top", String($(document).scrollTop() * .2) + "px" );
	$("#bananaLeavesRight").css("top", String($(document).scrollTop() * .5) + "px" );
	$("#bananaLeavesLeft").css("top", String($(document).scrollTop() * .5) + "px" );
	$("#flowersLeft").css("top", String($(document).scrollTop() * .5) + "px" );
	$("#flowersRight").css("top", String($(document).scrollTop() * .5) + "px" );
});


