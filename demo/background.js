var isStarted = false;

// Listen for messages from the contentScript.js script.
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // If the message is a screenshot request, take a screenshot and send it back.
  if (message.data == "screenshot") {
    var screenshot = chrome.desktopCapture.captureEntireScreen();
    sendResponse({ screenshot: screenshot });
  }
});

// Start the extension when the page loads.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    if (isStarted) {
      // Take a screenshot of the screen when the page loads.
      chrome.runtime.sendMessage({ data: "screenshot" });
    }
  }
});
