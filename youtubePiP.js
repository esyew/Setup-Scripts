// Add this file to a extension that adds custom javascript to websites. Makes the 'P' key enable picture in picture on macOS Safari.

// ==UserScript==
// @name        Youtube PiP
// @description Youtube Picture in Picture Mod
// @match       *://*/*
// ==/UserScript==

document.body.addEventListener("keydown", function(event) {
    if (event.keyCode == 80) {
        PiPer_1.webkitSetPresentationMode(PiPer_1.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");
    }
});

