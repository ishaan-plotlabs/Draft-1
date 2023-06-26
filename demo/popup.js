let tabId;

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");

  startButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        tabId = tabs[0].id;
        chrome.runtime.sendMessage({ action: "start", tabId: tabId });
      }
    });
  });

  stopButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "stop" });
  });
});
