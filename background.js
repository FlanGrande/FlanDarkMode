let darkModeEnabled = false;

chrome.action.onClicked.addListener((tab) => {
    if(!darkModeEnabled)
    {
        chrome.action.setIcon({ path: "icon_on.png", tabId: tab.id });
        chrome.scripting.insertCSS(
            {
                target: {tabId: tab.id},
                files: ["flan_dark_mode.css"]
            }
        );
    }
    else
    {
        chrome.action.setIcon({ path: "icon_off.png", tabId: tab.id });
        chrome.scripting.removeCSS(
            {
                target: {tabId: tab.id},
                files: ["flan_dark_mode.css"]
            }
        );
    }

    darkModeEnabled = !darkModeEnabled;
});
