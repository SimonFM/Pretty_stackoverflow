chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
	  code: 'document.body.style.backgroundColor="#B6B6B8";document.getElementById("content").style.backgroundColor = "#B6B6B8";document.getElementById("sidebar").style.backgroundColor = "#B6B6B8";var all = document.getElementsByClassName("summary");for(var i = 0; i < all.length;i++){all[i].style.color = "#000000"};document.getElementsByClassName("details").style.backgroundColor = "#B6B6B8";'
	  });
 });
 
chrome.tabs.onUpdated.addListener(function(tab){
	chrome.tabs.executeScript({
	  code: 'changeThings();'
	  });
});

document.addEventListener("DOMContentLoaded", changeThings());
 
function changeThings(){
	document.body.style.backgroundColor="#B6B6B8";
	document.getElementById("content").style.backgroundColor = '#B6B6B8';
	document.getElementById("middleContainer").style.backgroundColor = '#B6B6B8';
	document.getElementById("sidebar").style.backgroundColor = '#B6B6B8';
	document.getElementsByClassName("yt-user-info").style.backgroundColor = "#B6B6B8";
	var all = document.getElementsByClassName("summary");
	for(var i = 0; i < all.length;i++)
	{
		all[i].style.color = "#000000"
	};
}
