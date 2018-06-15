<<<<<<< HEAD
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "timer");
    port.onMessage.addListener(function(msg) {
        let time = msg.time;
        newPort(time);
    });
 });

function newPort(time){
    let port2 = chrome.runtime.connect({name: "timer2"});
        const startInterval = setInterval(() => {
            port2.postMessage({
                time: time - 1
            });
            time--;
        }, 1000);
}
=======
function startTimer(sec, min, timeSeperator) {
	const timer = setInterval(() => {
		console.log(min + timeSeperator + sec);
		if (sec > 0) {
			if (sec < 11) {
				timeSeperator = ":0";
				sec--;
			} else {
				if (sec === 60) {
					min--;
				}
				sec--;
			}
		} else if (min > 0) {
			min--;
			sec = 59;
			timeSeperator = ":";
		}
		if (min === 0 && sec === 0) {
			clearInterval(timer);
		}
	}, 1000);
}

function getMinutes() {
	return min;
}
function getSeconds() {
	return sec;
}
function getTimeSeperator() {
	return timeSeperator;
}
>>>>>>> 0798c205505c839e3324fa3206eba8e467f91626
