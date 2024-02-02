let masterPlay = document.getElementById('masterPlay');
let audioElemet = new Audio('au1.mp3');


masterPlay.addEventListener('click', () => {
    if(audioElemet.currentTime <= 0 || audioElemet.paused){
        audioElemet.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElemet.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});
