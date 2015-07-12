chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
	  code: 'changeThings();'
	  });
 });
 
chrome.tabs.onUpdated.addListener(function(tab){
	chrome.tabs.executeScript({
	  code: 'changeThings();'
	  });
});

document.addEventListener("DOMContentLoaded", changeThings());
 
function changeThings(){
	document.body.style.backgroundColor="#a4a9ab";
	document.getElementById("content").style.backgroundColor = "#a4a9ab";
	document.getElementById("sidebar").style.backgroundColor = "#a4a9ab";
	var all = document.getElementsByClassName("summary");
	for(var i = 0; i < all.length;i++)
	{
		all[i].style.color = "#000000"
	};
}
