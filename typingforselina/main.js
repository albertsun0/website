
var words = ["sadge","first","time","slowly","believe","albert", "yeah", "cary", "excited", "chungus", "calm","think","problems","mwah","regina"];

console.log("I love selina");


var start = false;

var right = 0;
var wrong = 0;

var timeElapsed = 0;
var myTimer;

function tick(){
    timeElapsed++;
    document.getElementById("time").innerHTML = timeElapsed;
}

function starttimer(){
    //call the first setInterval
    myTimer = setInterval(tick, 1000);
}

function stoptimer(){
    clearInterval(myTimer);
}

var currentword = "Selina"
function begin() {
	console.log("start");
	time = 0;
	start = true;
	document.getElementById('startb').style.display = "none";
	document.getElementById('inputbox').value = "";
	starttimer();
}

function checktext(){
	if(start = true){
		console.log("update");
		textbox = document.getElementById('inputbox');

		console.log(textbox.value);
		if (textbox.value == currentword) {
			console.log("correct");
			right++;
			newword();
			textbox.style.color = "black";
			textbox.value = "";
			correctadd();
		}
		else{
			wrong++;
			textbox.style.color = "red";
			incorrectadd();
		}
	}
	else{
		alert("please click start");
	}
	
}

function newword(){
	currentword = words[Math.floor(Math.random() * words.length)];
	console.log(currentword);
	document.getElementById("word").innerHTML = currentword;
}

function correctadd(){
	document.getElementById("correct").innerHTML = right + ' correct';
}

function incorrectadd(){
	document.getElementById("incorrect").innerHTML = wrong + ' incorrect';
}