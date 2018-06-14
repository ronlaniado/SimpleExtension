chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "timer");
    port.onMessage.addListener(function(msg) {
        let time = msg.time;
        const startInterval = setInterval(() => {
            port.postMessage({
                time: time - 1
            });
            time--;
            console.log(time);
        }, 1000);

    });
})