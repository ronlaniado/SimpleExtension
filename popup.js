const bgpage = chrome.extension.getBackgroundPage();
let sec = 60;
let min = 52;
let timeSeperator = ":";

bgpage.startTimer(sec, min, timeSeperator);
const updateContent = setInterval(() => {
	console.log(
		bgpage.getMinutes + bgpage.getTimeSeperator + bgpage.getBackgroundPage
	);
}, 1000);
