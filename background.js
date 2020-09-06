chrome.tabs.onUpdated.addListener(() => {
    setTimeout(function () {
        chrome.tabs.executeScript({
            file: "content.js"
        });
    }, 3000);
})
