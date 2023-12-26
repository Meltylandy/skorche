// 뮤직 플레이어
const songs = [
    { title: '1', singer: '1', file: './images/yoma.m4a' },
    { title: '2', singer: '2', file: './images/emotion_deceive.mp3' },
    { title: '3', singer: '3', file: './images/kanzenkankakudreamer.mp3' },
    { title: '4', singer: '4', file: './images/adipocere.m4a' },
    { title: '5', singer: '5', file: './images/shanti.mp3' }
];

// 노래 목록을 랜덤으로 섞는 함수
function shuffleSongs(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 노래 목록을 랜덤으로 섞음
shuffleSongs(songs);

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].file);

// 시간 변환 함수 (초를 분:초 형식으로 변환)
function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}

// 음악이 로드될 때 호출
audio.onloadedmetadata = function () {
    const finishTime = document.getElementById('finishtime');
    finishTime.textContent = formatTime(audio.duration);
};

function playpause() {
    const playPauseIcon = document.getElementById('playPauseIcon');

    if (audio.paused) {
        audio.play();
        updateTitle();
        playPauseIcon.classList.remove('ri-play-fill');
        playPauseIcon.classList.add('ri-pause-line');
        updateMusicProgress(); // 음악 진행 상태 업데이트
    } else {
        audio.pause();
        playPauseIcon.classList.remove('ri-pause-line');
        playPauseIcon.classList.add('ri-play-fill');
    }
}

function prevsong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateTitle();
    playNewSong();
}

function nextsong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateTitle();
    playNewSong();
}

function playNewSong() {
    audio.pause();
    audio = new Audio(songs[currentSongIndex].file);
    audio.play();
    updateMusicProgress(); // 음악 진행 상태 업데이트
    audio.onended = function () {
        nextsong(); // 노래가 끝나면 다음 노래 재생
    };
}

function updateTitle() {
    const musictitle = document.getElementById('musictitle');
    const musicsinger = document.getElementById('musicsinger');
    musictitle.innerText = songs[currentSongIndex].title;
    musicsinger.innerText = songs[currentSongIndex].singer;
}

function updateMusicProgress() {
    const musicProgressBar = document.getElementById('timeSlider');
    const musicProgressCurrent = document.getElementById('starttime');
    const musicProgressDuration = document.getElementById('finishtime');

    musicProgressBar.addEventListener('input', function () {
        const seekTime = (audio.duration / 100) * this.value;
        audio.currentTime = seekTime;
    });

    audio.addEventListener('timeupdate', function () {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        let progressWidth = (currentTime / duration) * 100;
        musicProgressBar.value = progressWidth;

        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
        if (currentSec < 10) currentSec = `0${currentSec}`;
        musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;

        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });
}