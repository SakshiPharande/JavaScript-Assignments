/**
Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x 
 */

// Create a new button
let btn = document.createElement("button");
btn.innerText = "Set Speed 10x";
btn.style.position = "fixed";
btn.style.top = "10px";
btn.style.right = "10px";
btn.style.zIndex = "9999";
btn.style.padding = "10px 15px";
btn.style.fontSize = "16px";
btn.style.backgroundColor = "#FF0000";
btn.style.color = "#FFFFFF";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.borderRadius = "5px";


document.body.appendChild(btn);

// Function to change playback speed
btn.addEventListener("click", function () {
    let video = document.querySelector("video");
    if (video) {
        video.playbackRate = 10; 
        alert("Playback speed set to 10x!");
    } else {
        alert("No video found!");
    }
});
