// ==UserScript==
// @name       Halo DQ response
// @description Halo DQ reader
// @match     https://*.halo.gcu.edu/*
// ==/UserScript==
console.log("You are on the right page for Halo DQ!");
//currURL = window.location.href;
//console.log(currURL);
//rightPage = false;


// rightPage = currURL.includes("/courses/") && (currURL.includes("/forums/discussion/"));
// if (rightPage ) {
//     console.log("You are here!");
// }
// Create button
var button = document.createElement("Button");
button.id = "AcceptDQs";
button.innerHTML = "Accept all DQs";
button.style = "bottom:0;right:0;position:absolute;z-index: 9999";
document.body.appendChild(button);


// Attach the "click" event to your button
button.addEventListener('click', () => {
    // When there is a "click"
    // it shows an alert in the browser
    console.log('Clicking all the DQs!');

    var buttons = document.querySelectorAll('.ReadTag_readTagButton__wnYqP, .AcknowledgeButton_isNotYetAcknowledged__QgAD7');

    for(var i = 0; i < buttons.length; i++)
        buttons[i].click();



})

// while (rightPage) {
//     button.style.display = 'block';
// }
// while (!rightPage) {
//     button.style.display = 'none';
//     console.log("Hidden");
// }
