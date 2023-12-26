var audio = new Audio("./images/erosion.m4a");
var isPlaying = false;

function playpause() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}
