document.addEventListener("DOMContentLoaded", function () {
    // Create audio element if it doesn't exist in localStorage
    let audio;
    
    // Check if audio element already exists (created by another page)
    if (!window.musicPlayer) {
        audio = new Audio("image/music.mp3");
        audio.loop = true;
        window.musicPlayer = audio;
        
        // Set initial state from localStorage or default to paused
        if (localStorage.getItem("audioPlaying") === "true") {
            const savedTime = localStorage.getItem("musicTime");
            if (savedTime) {
                audio.currentTime = parseFloat(savedTime);
            }
            audio.play();
        }
    } else {
        audio = window.musicPlayer;
    }
    
    // Get or create the button
    const playButton = document.getElementById("playMusicBtn") || document.createElement("button");
    if (!document.getElementById("playMusicBtn")) {
        playButton.id = "playMusicBtn";
        document.body.appendChild(playButton);
    }
    
    // Update button text based on current state
    function updateButtonState() {
        playButton.textContent = audio.paused ? "Play Music" : "Pause Music";
    }
    
    // Initial button text update
    updateButtonState();
    
    // Play/Pause functionality
    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("audioPlaying", "true");
        } else {
            audio.pause();
            localStorage.setItem("audioPlaying", "false");
        }
        updateButtonState();
    });
    
    // Save playback time periodically
    setInterval(() => {
        if (!audio.paused) {
            localStorage.setItem("musicTime", audio.currentTime);
        }
    }, 1000);
    
    // Listen for before unload to save the current state
    window.addEventListener("beforeunload", function() {
        localStorage.setItem("audioPlaying", audio.paused ? "false" : "true");
        localStorage.setItem("musicTime", audio.currentTime);
    });
});