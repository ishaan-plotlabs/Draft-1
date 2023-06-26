chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // If the message is a start message, start the extension.
  if (message.data == "start") {
    chrome.runtime.getBackgroundPage().isStarted = true;
  }

  // If the message is a stop message, stop the extension.
  if (message.data == "stop") {
    chrome.runtime.getBackgroundPage().isStarted = false;
  }
});
