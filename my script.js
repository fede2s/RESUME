/* This script calculates my age so i don't need to remember about changing it every year*/

const birthday = '1996-09-06';
const calculateAge = (date) => {
    var today = new Date();
    var birthday = new Date(date);
    birthday.setUTCHours(3);
    var year = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        year--;
    }
    return year;
}

let age = calculateAge(birthday);
document.getElementById("age").innerHTML = age;
document.getElementById("birthdate").innerHTML = birthday;



/* ----------------Script to skip video----------------------- */
const videoContainer = document.getElementById("videoContainer");
let videoClosed = true;
const wantToIntroduceVideo = false;

//When i want to view the video, it could be hidden or it could be closed. It depends on if it was introduced before or not
const viewVideo = () => {
    if(videoClosed){
        const timeToOpenVideo = 1000;
        videoContainer.style.animationDuration = `${timeToOpenVideo/1000}s`;
        videoContainer.classList.replace("videoClose","videoOpen");
        videoContainer.classList.replace("videoHidden","videoOpen");
        closeMenu();
        setTimeout( () => videoClosed = false , timeToOpenVideo);
        alert("This video is deprecated. I already found my dream's job.");
    }
}
//The first time i show the video, the video is hidden, without animation, without display, so i change the style to videoOpen giving an animation and display to the container
const introduceVideo = () => {
    if(videoClosed && wantToIntroduceVideo){
        const timeToOpenVideo = 3000;
        videoContainer.style.animationDuration = `${timeToOpenVideo/1000}s`;
        videoContainer.classList.replace("videoHidden","videoOpen");
        closeMenu();
        setTimeout( () => videoClosed = false , timeToOpenVideo );
    }
}
//If the video is closed, i dont have to close it, so only close when it's open
const closeVideo = () => {
    if (!videoClosed){
        const timeToCloseVideo = 1000;
        videoContainer.style.animationDuration = `${timeToCloseVideo/1000}s`;
        videoContainer.classList.replace("videoOpen","videoClose");
        setTimeout( () => videoContainer.classList.replace("videoClose","videoHidden") , timeToCloseVideo);
    }
    videoClosed = true;
}
//If i press the x button, only have to close the video. The callback closeVideo solves the problem that if it's closed, we don't have to close it and show the unnecesary animation.
document.getElementById('xButton').addEventListener('click', closeVideo);



/*-----------------Deployable menu script-----------------------------*/
//CSS selectors: menuOpen/menuClose/menuHidden
const menu = document.getElementById("menu");
let menuClosed = true;

const deployMenu = () => {
    menu.classList.replace("menuClose","menuOpen");
    menu.classList.replace("menuHidden","menuOpen");
    menuClosed=false;

}
const closeMenu = () => {
    menu.classList.replace("menuOpen","menuClose");
    menuClosed=true;
    
}
const buttonMenu = () => {
    menuClosed ? deployMenu() : closeMenu();
    if (!videoClosed){
        closeVideo();
    }
}
document.getElementById("button-menu").addEventListener('click',buttonMenu);

/*------------------Menu-Options--------------------------*/
//view video resume
const videoButton = document.getElementById('viewVideo').addEventListener('click',viewVideo);

//Print my resume
const printRESUME = () => {
    closeMenu();
    print();
}
const menuPrint = document.getElementById('printRESUME').addEventListener('click',printRESUME);

/*---At five secconds, my web will be introduced my video with the properly animation speed-----*/
setTimeout(introduceVideo,5000);

document.body.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') {
        closeVideo();
        closeMenu();
    }
});

