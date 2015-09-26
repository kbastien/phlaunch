var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "assets/iconOn.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"scripts/phlaunch.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "assets/icon.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"location.reload()"});
  }
});