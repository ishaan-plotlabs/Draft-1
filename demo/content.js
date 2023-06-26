document.addEventListener("mousedown", function () {
  chrome.runtime.sendMessage({
    action: "screenshot",
    tabId: chrome.tabs.TAB_ID_NONE,
  });
});
