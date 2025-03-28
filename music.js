document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("image/music.mp3"); // Make sure the path is correct
    audio.loop = true;

    let playButton = document.getElementById("playMusicBtn");

    // Check if music was playing before
    if (localStorage.getItem("audioPlaying") === "true") {
        audio.currentTime = localStorage.getItem("musicTime") ? parseFloat(localStorage.getItem("musicTime")) : 0;
        audio.play().catch(() => {
            // If autoplay fails, show the button
            playButton.style.display = "block";
        });
    } else {
        playButton.style.display = "block";
    }

    // When user clicks, play music and hide button
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none";
        localStorage.setItem("audioPlaying", "true");
    });

    // Save playback time
    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
});
