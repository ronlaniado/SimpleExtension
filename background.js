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
