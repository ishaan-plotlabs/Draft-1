let capturing = false;
let tabId;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "start") {
    capturing = true;
    tabId = message.tabId;
  } else if (message.action === "stop") {
    capturing = false;
  }
});

chrome.tabs.onUpdated.addListener(function (updatedTabId, changeInfo, tab) {
  if (capturing && updatedTabId === tabId && changeInfo.status === "complete") {
    chrome.tabs.executeScript(tabId, { file: "contentScript.js" });
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "screenshot" && message.tabId === tabId) {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
      if (dataUrl) {
        chrome.downloads.download({ url: dataUrl });
      }
    });
  }
});
