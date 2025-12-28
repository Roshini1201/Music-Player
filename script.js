const music = [
    {
        songName: "Embrace",
        artist: "Evgeny_Bardyuzha",
        img: "pics/beach.png",
        src: "music/embrace-364091.mp3"
    },
    {
        songName: "Flow",
        artist: "Denys_Brodovskyi",
        img: "pics/flowers.png",
        src: "music/flow-211881.mp3"
    },
    {
        songName: "Tell Me What",
        artist: "Loksii",
        img: "pics/sky.png",
        src: "music/tell-me-what-379638.mp3"
    }
];

const audio = document.getElementById("audio");

const songName = document.getElementById("song_name");
const artist = document.getElementById("artist");
const image = document.getElementById("image");

const timeSlider = document.getElementById("time");
const shuffleBtn = document.getElementById("shuffle");
const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const loopBtn = document.getElementById("loop");

let index = 0;
let isPlaying = false;
let isLooping = false;

function loadSong(i){
    audio.src= music[i].src;
    songName.textContent = music[i].songName;
    artist.textContent = music[i].artist;
    image.src = music[i].img;
}

loadSong(index);

playBtn.addEventListener("click", () =>{
    if (!isPlaying){
        audio.play();
        isPlaying = true;
    }else {
        audio.pause();
        isPlaying = false;
    }
})

prevBtn.addEventListener("click", () => {
    index = (index - 1 + music.length) % music.length;
    loadSong(index);
    audio.play();
    isPlaying = true;
})

nextBtn.addEventListener("click", () => {
    index = (index + 1) % music.length;
    loadSong(index);
    audio.play();
    isPlaying = true;
})

loopBtn.addEventListener("click", () => {
    isLooping = !isLooping;
    audio.loop = isLooping;
})

shuffleBtn.addEventListener("click", () => {
    index = Math.floor(Math.random() * music.length);
    loadSong(index);
    audio.play();
    isPlaying = true;
})

audio.addEventListener("timeupdate", () => {
    timeSlider.max = audio.duration || 0;
    timeSlider.value = audio.currentTime;
})

timeSlider.addEventListener("input", () => {
    audio.currentTime = timeSlider.value;
})

audio.addEventListener("ended", () => {
    isPlaying = false;
})