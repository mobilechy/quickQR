// setInterval(function(){
// 	chrome.tabs.query({"url" : "http://pad.zap.jp.net/"}, callback);

// 	function callback(tabs){
// 		if(tabs.length < 1){
// 			chrome.tabs.create({
// 				"url" : "http://pad.zap.jp.net/"
// 			});
// 		}
// 		console.log(tabs[0]);

// 		chrome.tabs.sendMessage(tabs[0].id, {"reload" : 1}, function(){console.log("end");});
// 	}
// },2700000)
