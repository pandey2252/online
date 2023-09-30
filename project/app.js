let playbtn = document.getElementById("playbtn")
let next = document.getElementById("next")
let prew = document.getElementById("prew")
let audio = document.getElementById("audio")
let bar = document.getElementById("bar")
let  v = document.getElementById("sound")


img.classList.remove("img")


let songs = [
    {
        name: "new bhakti song",
        audio: "song/song1.mp3",
        img: "img/img1.jpg"
    },
    {
        name: "honey singh makhna song",
        audio: "song/song2.mp3",
        img: "img/img2.jpg"
    },

    {
        name: " kangna ranawat  song",
        audio: "song/song3.mp3",
        img: "img/img3.jpg"
    },


 {
        name: "new punjabi  song daku",
        audio: "song/song4.mp3",
        img: "img/img4.jfif"
    },

    {
        name: "new bollywood  song kesariya",
        audio: "song/song5.mp3",
        img: "img/img5.jfif"
    },


    {
        name: "   song bom aa gaya",
        audio: "song/song6.mp3",
        img: "img/img6.jpg"
    },

    {
        name: "   Arjeet singh song",
        audio: "song/song7.mp3",
        img: "img/img7.jpg"
    }



] 


let songindex =  0;


function update(){
    let currentSong = songs[songindex]
    document.getElementById("img").src = currentSong.img;
  document.getElementById("audio").src = currentSong.audio;
  document.getElementById("name").innerHTML  = currentSong.name
}


update()

/// play and pause


function playAudio() {
    
    if(audio.paused){
        audio.play()
        playbtn.classList.remove("fa-play")
        playbtn.classList.add("fa-pause")
        img.classList.add("img")
    }
    else{
        audio.pause()

        playbtn.classList.remove("fa-pause")
        playbtn.classList.add("fa-play")
        img.classList.remove("img")
    }
}



playbtn.addEventListener('click', playAudio);



/// next and prew song
  


function nextsong (){
update()
songindex++
audio.play()
if(songindex === songs.length){
    songindex  = 0;
    audio.play()
}

playbtn.classList.remove("fa-play")
playbtn.classList.add("fa-pause")


}

next.addEventListener("click", nextsong)

function prewsong(){
    update()
    songindex = songindex -1
    audio.play()
    if(songindex => songs.length){
        songindex  = 5;
        audio.play()

    }
    playbtn.classList.remove("fa-play")
    playbtn.classList.add("fa-pause")
}

prew.addEventListener("click", prewsong)



audio.addEventListener("ended",()=>{
    songindex = songindex+1;
    if(songindex === songs.length){
        songindex =0;
        audio.play()
    }
    audio.play()
})


// seekbar


/// progress bar 

audio.addEventListener("timeupdate", () => {
    const progressPercentage = audio.currentTime / audio.duration * 100;
    bar.value = progressPercentage;
  
  })
  
  bar.addEventListener('change', () => {
    audio.currentTime = bar.value * audio.duration / 100;
  
  })



  


  /// song list 

  let list = document.getElementById("list")

  let songlist = document.getElementById("songlist")
  let songdata = document.getElementById("songdata")

  var a = 0;



function change(){
    if(a===0){
        songdata.classList.remove("songdata")
        songlist.classList.add("songlist")
        a= 1;
    }
    else{
        a =0;
        songlist.classList.remove("songlist")
        songdata.classList.add("songdata")
    }
}


/// song list audio change
// document.getElementsByClassName("itemplay").addEventListener('click',()=>{
//     audio.src = "song/song5.mp3";
//     audio.play()
// })

function songlistaudio(){
    songindex = 0;
    update()
     audio.play() 
     songdata.classList.remove("songdata")
     songlist.classList.add("songlist")
 
     playbtn.classList.remove("fa-play")
     playbtn.classList.add("fa-pause")
     img.classList.add("img")
 }


 
function songlistaudio2(){
    songindex = 1;
    update()
     audio.play() 
     songdata.classList.remove("songdata")
     songlist.classList.add("songlist")
 
     playbtn.classList.remove("fa-play")
     playbtn.classList.add("fa-pause")
     img.classList.add("img")
 }

 function songlistaudio3(){
    songindex = 2;
    update()
     audio.play() 
     songdata.classList.remove("songdata")
     songlist.classList.add("songlist")
 
     playbtn.classList.remove("fa-play")
     playbtn.classList.add("fa-pause")
     img.classList.add("img")
 }


 
function songlistaudio4(){
    songindex = 3;
    update()
     audio.play() 
     songdata.classList.remove("songdata")
     songlist.classList.add("songlist")
 
     playbtn.classList.remove("fa-play")
     playbtn.classList.add("fa-pause")
     img.classList.add("img")
 }



 function songlistaudio5(){
    songindex = 4;
    update()
     audio.play() 
     songdata.classList.remove("songdata")
     songlist.classList.add("songlist")
 
     playbtn.classList.remove("fa-play")
     playbtn.classList.add("fa-pause")
     img.classList.add("img")
 }

 function songlistaudio6(){
    songindex = 5;
    update()
     audio.play() 
     songdata.classList.remove("songdata")
     songlist.classList.add("songlist")
 
     playbtn.classList.remove("fa-play")
     playbtn.classList.add("fa-pause")
     img.classList.add("img")
 }



function songlistaudio7(){
   songindex = 6;
   update()
    audio.play() 
    songdata.classList.remove("songdata")
    songlist.classList.add("songlist")

    playbtn.classList.remove("fa-play")
    playbtn.classList.add("fa-pause")
    img.classList.add("img")
}



////spekar on off

let sound = document.getElementById("sound")
sound.addEventListener("click", function() {
    if (audio.volume === 0) {
      audio.volume = 1;
      sound.classList.remove("fa-volume-high")
      sound.classList.add("fa-volume-low")

      sound.classList.add("fa-volume-high")
      sound.classList.remove("fa-volume-low")
    
    } else {
      audio.volume = 0;

      sound.classList.remove("fa-volume-high")
      sound.classList.add("fa-volume-low")
      
    }})
  