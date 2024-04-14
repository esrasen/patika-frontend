var audio = new Audio();

document.getElementById("btn-a").addEventListener("click", function() {
    playAudio("assets/sound/boom.wav");
});
document.getElementById("btn-s").addEventListener("click", function() {
    playAudio("assets/sound/clap.wav");
});
document.getElementById("btn-d").addEventListener("click", function() {
    playAudio("assets/sound/hihat.wav");
});
document.getElementById("btn-f").addEventListener("click", function() {
    playAudio("assets/sound/kick.wav");
});
document.getElementById("btn-g").addEventListener("click", function() {
    playAudio("assets/sound/openhat.wav");
});
document.getElementById("btn-h").addEventListener("click", function() {
    playAudio("assets/sound/ride.wav");
});
document.getElementById("btn-j").addEventListener("click", function() {
    playAudio("assets/sound/snare.wav");
});
document.getElementById("btn-k").addEventListener("click", function() {
    playAudio("assets/sound/tink.wav");
});
document.getElementById("btn-l").addEventListener("click", function() {
    playAudio("assets/sound/tom.wav");
});

function playAudio(src) {
    audio.src = src;
    audio.play();
}
