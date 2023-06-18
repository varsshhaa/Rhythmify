console.log("Welcome to Spotify");
//initialize the variables
let songIndex=0;
let audioElement=new Audio("2.mp3");
let masterPlay=document.getElementById("masterPlay");
let masterSongName=document.getElementById("masterSongName");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"wolves", filePath:"1.mp3",coverPath: "1.jpg"},
    {songName:"without me", filePath:"2.mp3",coverPath: "2.jpg"},
    {songName:"champagne problems", filePath:"3.mp3",coverPath: "3.jpg"},
    {songName:"you belong with me", filePath:"4.mp3",coverPath: "4.jpg"},
    {songName:"blank space", filePath:"5.mp3",coverPath: "5.jpg"},
    {songName:"red", filePath:"1.mp3",coverPath: "6.jpg"},
    {songName:"light switch", filePath:"2.mp3",coverPath: "7.jpg"},
    {songName:"let me down slowly", filePath:"3.mp3",coverPath: "8.jpg"},
    {songName:"xxtentacion", filePath:"4.mp3",coverPath: "9.jpg"},
    {songName:"sing me to sleep", filePath:"5.mp3",coverPath: "10.jpg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.pause()|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play"); 
        gif.style.opacity=0;
    }
})
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate");
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    if(!isFinite(progress))
    // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;

}) 
const makeAllPlays =()=>{
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
})
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
    // console.log(e.target);
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src="$(songIndex+1).mp3";
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src="$(songIndex+1).mp3";
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src="$(songIndex+1).mp3";
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})
