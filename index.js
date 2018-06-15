let timerTime = 60;
let port = chrome.runtime.connect({name: "timer"});
port.postMessage({time: timerTime});
chrome.runtime.onConnect(function(port2) {
    console.assert(port2.name == "timer2");
    port2.onMessage.addListener(function(msg) {
        console.log(msg.time);
    });
});