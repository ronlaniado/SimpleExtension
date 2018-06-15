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