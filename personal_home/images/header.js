const audio = new Audio('./images/erosion.m4a'); // 음악 파일 경로

function playpause() {
    const playPauseIcon = document.getElementById('playPauseIcon');

    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove('ri-play-line');
        playPauseIcon.classList.add('ri-pause-line');
    } else {
        audio.pause();
        playPauseIcon.classList.remove('ri-pause-line');
        playPauseIcon.classList.add('ri-play-line');
    }
}

