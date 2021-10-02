window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}`);
    console.log(audio);
    if (!audio) {
        return;
    } else {
        audio.play();
        audio.currentTime = 0;
    }
    const key = document.querySelector(`.key[data-key=${e.key}`);
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key'); 
keys.forEach(key => key.addEventListener('transitionend', function(e) {
    key.classList.remove('playing');
}));