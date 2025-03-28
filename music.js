document.addEventListener("DOMContentLoaded", function () {
    let audio;

    // Check if audio is already playing
    if (!window.localStorage.getItem("audioInitialized")) {
        audio = new Audio("image/music.mp3"); // Ensure correct path
        audio.loop = true;
        audio.play();
        window.localStorage.setItem("audioInitialized", "true");

        // Store the audio instance globally
        window.myAudio = audio;
    } else {
        audio = window.myAudio;
    }

    // Store playback time
    setInterval(() => {
        if (audio) {
            localStorage.setItem("musicTime", audio.currentTime);
        }
    }, 1000);
});
