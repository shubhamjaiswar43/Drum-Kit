const btn = document.getElementsByClassName('drum')
let aud = [];
aud.push(new Audio('./sounds/crash.mp3'));
aud.push(new Audio('./sounds/kick-bass.mp3'));
aud.push(new Audio('./sounds/snare.mp3'));
aud.push(new Audio('./sounds/tom-1.mp3'));
aud.push(new Audio('./sounds/tom-2.mp3'));
aud.push(new Audio('./sounds/tom-3.mp3'));
aud.push(new Audio('./sounds/tom-4.mp3'));
let buttonAnimation = (drum) => {
    let clickBtn = document.querySelector("."+drum);
    setTimeout(()=>{
        clickBtn.classList.remove('pressed');
    },10);
    clickBtn.classList.add('pressed');
}
let handleClick = (drum) => {
    if (drum == 'w') {
        aud[0].play();
    } else if (drum == 'a') {
        aud[1].play();
    } else if (drum == 's') {
        aud[2].play();
    } else if (drum == 'd') {
        aud[3].play();
    } else if (drum == 'j') {
        aud[4].play();
    } else if (drum == 'k') {
        aud[5].play();
    } else if (drum == 'l') {
        aud[6].play();
    }
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        handleClick(btn[i].innerHTML);
        buttonAnimation(btn[i].innerHTML);
    })
}
addEventListener('keypress', (e) => {
    handleClick(e.key);
    buttonAnimation(e.key);
})