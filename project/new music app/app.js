
const playbtn = document.getElementById("playbtn");
const next = document.getElementById("next");
const prew = document.getElementById("prew");
const audio = document.getElementById("audio");
const bar = document.getElementById("bar");
const img = document.getElementById("img");
const name = document.getElementById("name");
const listToggle = document.getElementById("listToggle");
const songList = document.getElementById("songlist");
const playlist = document.getElementById("playlist");

const songs = [
    {
        song:'./song/song1.mp3',
        img: "./img/img1.jpg",
        

    }
];

let songIndex = 0;

function update() {
    const currentSong = songs[songIndex];
    img.src = currentSong.img;
    audio.src = currentSong.audio;
    name.innerHTML = currentSong.name;
}

update();

function playAudio() {
    if (audio.paused) {
        audio.play();
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
        img.classList.add("img");
    } else {
        audio.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
        img.classList.remove("img");
    }
}

playbtn.addEventListener("click", playAudio);

function nextSong() {
    songIndex++;
    if (songIndex === songs.length) {
        songIndex = 0;
    }
    update();
    audio.play();
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

next.addEventListener("click", nextSong);

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    update();
    audio.play();
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

prew.addEventListener("click", prevSong);

audio.addEventListener("ended", () => {
    nextSong();
});

audio.addEventListener("timeupdate", () => {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    bar.value = progressPercentage;
});

bar.addEventListener("change", () => {
    audio.currentTime = (bar.value * audio.duration) / 100;
});

function toggleSongList() {
    if (songList.style.display === "none") {
        songList.style.display = "block";
    } else {
        songList.style.display = "none";
    }
}

listToggle.addEventListener("click", toggleSongList);

// Populate the song list dynamically
songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${song.name}`;
    listItem.addEventListener("click", () => {
        songIndex = index;
        update();
        audio.play();
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
    });
    playlist.appendChild(listItem);
});
