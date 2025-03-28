document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Check if music was already playing
    if (localStorage.getItem("musicTime")) {
        audio.currentTime = localStorage.getItem("musicTime");
    }
    audio.play();

    // Update time in localStorage to keep track
    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
});
