document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("image/music.mp3"); // Ensure correct path
    audio.loop = true;

    let playButton = document.getElementById("playMusicBtn");

    // Play music on button click
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Hide button after play
        localStorage.setItem("audioPlaying", "true");
    });

    // Check if audio was playing before
    if (localStorage.getItem("audioPlaying") === "true") {
        audio.play();
        playButton.style.display = "none"; // Auto-hide if already played
    }

    // Save playback time
    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
});
