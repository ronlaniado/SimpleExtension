chrome.runtime.onConnect.addListener(function(port) {
    let port2 = chrome.runtime.connect({name: "timer2"});
    console.assert(port.name == "timer");
    port.onMessage.addListener(function(msg) {
        let time = msg.time;
        const startInterval = setInterval(() => {
            port2.postMessage({
                time: time - 1
            });
            time--;
        }, 1000);

    });
});