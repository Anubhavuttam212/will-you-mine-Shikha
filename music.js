document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("image/music.mp3"); // Ensure correct path
    audio.loop = true;

    let playButton = document.getElementById("playMusicBtn");

    // Function to update button text
    function updateButton() {
        playButton.textContent = audio.paused ? "Play Music" : "Pause Music";
    }

    // Restore playback if already playing
    if (localStorage.getItem("audioPlaying") === "true") {
        audio.currentTime = localStorage.getItem("musicTime") ? parseFloat(localStorage.getItem("musicTime")) : 0;
        audio.play();
    }

    updateButton(); // Set initial button text

    // Play/Pause functionality
    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("audioPlaying", "true");
        } else {
            audio.pause();
            localStorage.setItem("audioPlaying", "false");
        }
        updateButton();
    });

    // Save playback time every second
    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
});
