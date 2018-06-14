let timerTime = 60;
let port = chrome.runtime.connect({name: "timer"});
port.postMessage({init: "init", time: timerTime});
