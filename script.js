const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const stopBtn = document.getElementById('stop');
const trackTitle = document.getElementById('track-title');

// Update the track title (replace with actual track name)
trackTitle.textContent = "Your Track Title";

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Stop functionality
stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});