chrome.browserAction.onClicked.addListener(function () {
  // Create a toggle button.
  var toggleButton = document.createElement("button");
  toggleButton.textContent = "Start/Stop";

  // Listen for the click event on the toggle button.
  toggleButton.addEventListener("click", function () {
    // Check if the extension is started.
    var isStarted = chrome.runtime.getBackgroundPage().isStarted;

    // If the extension is started, stop it.
    if (isStarted) {
      chrome.runtime.sendMessage({ data: "stop" });
    } else {
      // If the extension is not started, start it.
      chrome.runtime.sendMessage({ data: "start" });
    }
  });

  // Append the toggle button to the popup.
  document.body.appendChild(toggleButton);
});
