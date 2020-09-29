// var canvas = document.getElementById("canvas")
// var context = canvas.getContext('2d')

var mazeEasy = [
	[0,0,0,1,1],
	[1,1,0,1,0],
	[0,0,0,0,0],
	[0,1,1,1,1],
	[0,0,0,0,0]
]

var mazeMedium = [
	[0,1,0,1,0,1,0],
	[0,1,0,1,0,0,0],
	[0,0,0,1,1,1,0],
	[1,1,0,0,0,0,0],
	[0,1,0,0,1,1,0],
	[0,1,0,1,1,1,1],
	[0,0,0,0,0,0,0]
]



var end = 44
var keyAt = 14
var key2At = undefined

var bomb1 = undefined
var bomb2 = undefined
var bomb3 = undefined



for(var i = 0; i < mazeEasy.length; i++) {
	for(var j = 0; j < mazeEasy[i].length; j++) {
		if(mazeEasy[i][j] === 0) {
			$('#' + i.toString() + j).css("background-color", "white")
		}
		else {
		$('#' + i.toString() + j).css("background-color", "gray")
		}
	}
}


$("#00").css("background-color", "gold")
$("#"+keyAt).append("<img id = 'key' src = 'key.png' alt = 'key'>")
$("#key").css({"width": "90px", "height": "90px", "margin": "8px"})
$("#"+end).css("background-color", "red")


window.addEventListener("keydown", checkPress, false);
var x = 0
var y = 0
var keyVerifier = false
var keyVerifier2 = false
var moves = 0
$("#outline").append('<h2 id = "moves">'+moves+ ' moves</h2')
$('#moves').css({ "font-size": "45px", "float": "right", "margin-left": "40%"})

if(parseInt(""+x+(y)) === keyAt) {
	$("#14").attr("src", "")

}

function checkPress (key) {
	if(key.keyCode === 39 && $("#"+x+(y+1)).css("background-color") !== "rgb(128, 128, 128)" && $("#"+x+(y+1)).attr('class') === "box") {
		if(parseInt(""+x+(y+1)) === end) {
			$("#"+x+y).css("background-color", "white")
			$("#"+x+(y+1)).css("background-color", "red")
		}
		else {
		$("#"+x+y).css("background-color", "white")
		$("#"+x+(y+1)).css("background-color", "gold")
	}
	moves++
	$("#moves").text(moves+" moves")
		console.log("#"+x+(y+1))
		y++
		
	}
	if(key.keyCode === 37 && $("#"+x+(y-1)).css("background-color") !== "rgb(128, 128, 128)" && $("#"+x+(y-1)).attr('class') === "box") {
		if(parseInt(""+x+(y)) === end) {
			$("#"+x+y).css("background-color", "red")
			$("#"+x+(y-1)).css("background-color", "gold")
		}
		else {
		$("#"+x+y).css("background-color", "white")
		$("#"+x+(y-1)).css("background-color", "gold")
	}
	moves++
	$("#moves").text(moves+" moves")
		console.log("#"+x+(y-1))
		y--
		
	}
	if(key.keyCode === 40 && $("#"+(x+1)+y).css("background-color") !== "rgb(128, 128, 128)" && $("#"+(x+1)+y).attr('class') === "box") {
		$("#"+x+y).css("background-color", "white")
		$("#"+(x+1)+y).css("background-color", "gold")
		console.log("#"+(x+1)+y)
		x++
		moves++
		$("#moves").text(moves+" moves")
	}

	if(key.keyCode === 38 && $("#"+(x-1)+y).css("background-color") !== "rgb(128, 128, 128)" && $("#"+(x-1)+y).attr('class') === "box") {
		
		$("#"+x+y).css("background-color", "white")
		$("#"+(x-1)+y).css("background-color", "gold")
		console.log("#"+(x-1)+y)
		x--
		moves++
		$("#moves").text(moves+" moves")
	}
	if(""+x+y === bomb1 || ""+x+y === bomb2 || ""+x+y === bomb3) {
		$('#outline').html('')
		$("#outline").append("<center><h1>Game Over</h1><button>Try again</button></center>")
		$("button").click(function() {
		moves = 0
		$('#outline').html('')
		$("#moves").text(moves+" moves")
		$('#outline').css({"width": "700px", "height": "700px"})
		$('#outline').append('<div class = "container"><div class = "box" id = "00"></div><div class = "box" id = "01"></div><div class = "box" id = "02"></div><div class = "box" id = "03"></div><div class = "box" id = "04"></div><div class = "box" id = "05"></div><div class = "box" id = "06"></div></div><div class = "container"><div class = "box" id = "10"></div><div class = "box" id = "11"></div><div class = "box" id = "12"></div><div class = "box" id = "13"></div><div class = "box" id = "14"></div><div class = "box" id = "15"></div><div class = "box" id = "16"></div></div><div class = "container"><div class = "box" id = "20"></div><div class = "box" id = "21"></div><div class = "box" id = "22"></div><div class = "box" id = "23"></div><div class = "box" id = "24"></div><div class = "box" id = "25"></div><div class = "box" id = "26"></div></div><div class = "container"><div class = "box" id = "30"></div><div class = "box" id = "31"></div><div class = "box" id = "32"></div><div class = "box" id = "33"></div><div class = "box" id = "34"></div><div class = "box" id = "35"></div><div class = "box" id = "36"></div></div><div class = "container"><div class = "box" id = "40"></div><div class = "box" id = "41"></div><div class = "box" id = "42"></div><div class = "box" id = "43"></div><div class = "box" id = "44"></div><div class = "box" id = "45"></div><div class = "box" id = "46"></div></div><div class = container><div class = box id = 50></div><div class = box id = 51></div><div class = box id = 52></div><div class = box id = 53></div><div class = box id = 54></div><div class = box id = 55></div><div class = box id = 56></div></div><div class = container><div class = box id = 60></div><div class = box id = 61></div><div class = box id = 62></div><div class = box id = 63></div><div class = box id = 64></div><div class = box id = 65></div><div class = box id = 66></div></div>')
		$(".container").css("display", "flex")
		for(var i = 0; i < mazeMedium.length; i++) {
			for(var j = 0; j < mazeMedium[i].length; j++) {
				if(mazeMedium[i][j] === 0) {
					$('#' + i.toString() + j).css("background-color", "white")
				}
				else {
					$('#' + i.toString() + j).css("background-color", "gray")
				}
			}
		}
 x = 0
 y = 0
 keyVerifier = false
 keyVerifier2 = false
 end = 66
 keyAt = 14
 key2At = 40
 bomb1 = ""+0+6
 bomb2 = ""+1+2
 bomb3 = ""+4+3

$("#"+bomb1).append('<img src = "bomb.png" alt = "bomb" class = "bombs">')
$("#"+bomb2).append('<img src = "bomb.png" alt = "bomb" class = "bombs">')
$("#"+bomb3).append('<img src = "bomb.png" alt = "bomb" class = "bombs">')
$(".bombs").css({"width": "110px"})
$("#00").css("background-color", "gold")
$("#outline").css("margin-left", "27.5%")
$("#"+keyAt).append("<img id = 'key' src = 'key.png' alt = 'key'>")
$("#key").css({"width": "90px", "height": "90px", "margin": "8px"})
$("#"+end).css("background-color", "red")		
$("#"+key2At).append("<img id = 'key2' src = 'key.png' alt = 'key'>")
$("#key2").css({"width": "90px", "height": "90px", "margin": "8px"})
$("#outline").append('<h2 id = "moves">'+moves+ ' moves</h2')
$('#moves').css({ "font-size": "45px", "float": "right", "margin-left": "40%"})
	

	})

	}
	if(key2At === undefined) {
		if(parseInt(""+x+y) === keyAt) {
			$("#key").css("display", "none")
			$("#"+end).css("background-color", "lightgreen")
			keyVerifier = true
		}
	}
	else {
		if(parseInt(""+x+y) === keyAt) {
			$("#key").css("display", "none")
			keyVerifier = true
		}
		if(parseInt(""+x+y) === key2At) {
			$("#key2").css("display", "none")
			keyVerifier2 = true
		}
		if(keyVerifier2 === true && keyVerifier === true) {
			$("#"+end).css("background-color", "lightgreen")
		}
			
	}
	if(key2At === undefined) {
		if(parseInt(""+x+y) === end && keyVerifier === true) {
			$(".box").css("background-color", "white")
			$("#22").css({"width": "400px"})
			$("#22").append("<center><h1 id = 'winner'>We have a winner!</h1></center>")
			$("#32").append("<center><button id = 'next'>Next Maze</button></center>")
		}

		
	}
	else {
		if(parseInt(""+x+y) === end && keyVerifier === true && keyVerifier2 === true) {
			$("#outline").html("")
			$("#outline").append("<center><h1 id = 'winner'>We have a winner!</h1></center>")
			$("#outline").append("<center><button id = 'reset'>Play again!</button></center>")
		}
	}
	



	$("#reset").click(function() {
		location.reload()
	})



	$("#next").on("click", function() {
		moves = 0
		$('#outline').html('')
		$("#moves").text(moves+" moves")
		$('#outline').css({"width": "700px", "height": "700px"})
		$('#outline').append('<div class = "container"><div class = "box" id = "00"></div><div class = "box" id = "01"></div><div class = "box" id = "02"></div><div class = "box" id = "03"></div><div class = "box" id = "04"></div><div class = "box" id = "05"></div><div class = "box" id = "06"></div></div><div class = "container"><div class = "box" id = "10"></div><div class = "box" id = "11"></div><div class = "box" id = "12"></div><div class = "box" id = "13"></div><div class = "box" id = "14"></div><div class = "box" id = "15"></div><div class = "box" id = "16"></div></div><div class = "container"><div class = "box" id = "20"></div><div class = "box" id = "21"></div><div class = "box" id = "22"></div><div class = "box" id = "23"></div><div class = "box" id = "24"></div><div class = "box" id = "25"></div><div class = "box" id = "26"></div></div><div class = "container"><div class = "box" id = "30"></div><div class = "box" id = "31"></div><div class = "box" id = "32"></div><div class = "box" id = "33"></div><div class = "box" id = "34"></div><div class = "box" id = "35"></div><div class = "box" id = "36"></div></div><div class = "container"><div class = "box" id = "40"></div><div class = "box" id = "41"></div><div class = "box" id = "42"></div><div class = "box" id = "43"></div><div class = "box" id = "44"></div><div class = "box" id = "45"></div><div class = "box" id = "46"></div></div><div class = container><div class = box id = 50></div><div class = box id = 51></div><div class = box id = 52></div><div class = box id = 53></div><div class = box id = 54></div><div class = box id = 55></div><div class = box id = 56></div></div><div class = container><div class = box id = 60></div><div class = box id = 61></div><div class = box id = 62></div><div class = box id = 63></div><div class = box id = 64></div><div class = box id = 65></div><div class = box id = 66></div></div>')
		$(".container").css("display", "flex")
		for(var i = 0; i < mazeMedium.length; i++) {
			for(var j = 0; j < mazeMedium[i].length; j++) {
				if(mazeMedium[i][j] === 0) {
					$('#' + i.toString() + j).css("background-color", "white")
				}
				else {
					$('#' + i.toString() + j).css("background-color", "gray")
				}
			}
		}
 x = 0
 y = 0
 keyVerifier = false
 keyVerifier2 = false
 end = 66
 keyAt = 14
 key2At = 40
 bomb1 = ""+0+6
 bomb2 = ""+1+2
 bomb3 = ""+4+3

$("#"+bomb1).append('<img src = "bomb.png" alt = "bomb" class = "bombs">')
$("#"+bomb2).append('<img src = "bomb.png" alt = "bomb" class = "bombs">')
$("#"+bomb3).append('<img src = "bomb.png" alt = "bomb" class = "bombs">')
$(".bombs").css({"width": "110px"})
$("#00").css("background-color", "gold")
$("#outline").css("margin-left", "27.5%")
$("#"+keyAt).append("<img id = 'key' src = 'key.png' alt = 'key'>")
$("#key").css({"width": "90px", "height": "90px", "margin": "8px"})
$("#"+end).css("background-color", "red")		
$("#"+key2At).append("<img id = 'key2' src = 'key.png' alt = 'key'>")
$("#key2").css({"width": "90px", "height": "90px", "margin": "8px"})
$("#outline").append('<h2 id = "moves">'+moves+ ' moves</h2')
$('#moves').css({ "font-size": "45px", "float": "right", "margin-left": "40%"})
	

	})

}









