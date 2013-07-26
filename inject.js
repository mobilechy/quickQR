// // color-> blue = rgb(83,142,252)
// // 		   green = rgb(74,220,144)
// // 		   red = rgb(219,72,72)

// var colorRGBList = {
// 		"blue" : "rgb(83, 142, 252)",
// 		"green" : "rgb(74, 220, 144)",
// 		"red": "rgb(219, 72, 72)"
// 	};
// var groupData = $(".mainTbl tr:nth-child(2) td");//first row is heading

// var dateString = getTodayString();

// var groupsName = ["a","b","c","d","e"];
// var timeGroups = {};
// var colorGroups = {};


// setTimeout(function(){

// 	// loop groups
// 	for(var i = 1; i < groupData.length; i++){
// 		//check it the data for today???
// 		if($(groupData[0]).html() != dateString){
// 			console.log("not today!");
// 			break;
// 		}

// 		if(i==0) continue;//the date column, skip this!!

// 		var thisGroupName = groupsName[i-1];
// 		timeGroups[thisGroupName] = loopRounds(groupData[i])[0];
// 		colorGroups[thisGroupName] = loopRounds(groupData[i])[1];

// 	}
// 	console.log(JSON.stringify(timeGroups));

// 	$.ajax({
// 		type: "get",
// 		// url: "http://127.0.0.1:8080/",
// 		url: "http://botania.synology.me:8088/~pad_dev/",
// 		data: {"time" : JSON.stringify(timeGroups), "color" : JSON.stringify(colorGroups)},
// 		success: ajaxSuccess
// 	});

// },1000);

// function ajaxSuccess(data){
// 	// console.log(data);
// }


// function loopRounds(roundsElm){
// 	var _rounds = $(roundsElm).find("p");

// 	var myGameTime = [];
// 	var myColor = [];
// 	for(var x = 0; x < _rounds.length; x++){
// 		var curElm = $(_rounds[x]);


// 		var value = parseInt($(curElm).html()) - 1;//japan time zone 
// 		var d = new Date();
// 		d.setHours(value,0,0);

// 		myGameTime[x] = d.toTimeString();// myGameTime[x] = d.toTimeString();
// 		myColor[x] = getRowColor($(curElm));
// 	}
// 	return [myGameTime,myColor];	
// }

// function getTodayString(){
// 	var returnFormat = "#MM/#DD";

// 	var today = new Date();
// 	var month = today.getMonth()+1;
// 	var date = today.getDate();

// 	returnFormat = returnFormat.replace("#MM",month);
// 	returnFormat = returnFormat.replace("#DD",date);

// 	return returnFormat;
// }

// function getRowColor(elm){
// 	var cssString = $(elm).css("background");
// 	cssString = cssString.replace(" ", '');

// 	var isRed = cssString.indexOf(colorRGBList["red"]) != -1;
// 	var isBlue = cssString.indexOf(colorRGBList["blue"]) != -1;
// 	var isGreen = cssString.indexOf(colorRGBList["green"]) != -1;

// 	if(isRed) return "red";
// 	if(isBlue) return "blue";
// 	if(isGreen) return "green";
// }

// function reLoadPage(){
// 	window.location = window.location;
// }


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(request);
//     if (request.reload == 1)
//       reLoadPage();
//   });