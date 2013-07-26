var link = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=#link#&choe=UTF-8";


function clickHandler(e) {
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabId = arrayOfTabs[0].id; // or do whatever you need
     console.log(activeTab);
     var imgLink = link.replace("#link#", activeTab.url);
     $("#qrCodeImg").attr("src",imgLink);

  });
}

jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready;
	$("button").click(function(){
		clickHandler(null);
	});
});

