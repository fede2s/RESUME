/* This script calculates my age so i don't need to remember about changing it every year*/

const birthday = '1996-09-06';
const calculateAge = (date) => {
    var today = new Date();
    var birthday = new Date(date);
    var year = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        year--;
    }
    return year;
}

let age = calculateAge(birthday);
document.getElementById("age").innerHTML = age;



/* Script to skip video */
const videoContainer = document.getElementById("videoContainer");
const viewVideo = () => {
    videoContainer.style.display="block";
    videoContainer.style.animationDuration = '1s';
    videoContainer.classList.replace("videoContainerHide","videoContainer");
    closeMenu();
}
const presentVideo = () => {
    videoContainer.style.display="block";
    videoContainer.style.animationDuration = '3s';
    videoContainer.classList.replace("videoContainerHide","videoContainer");
    closeMenu();
}
document.getElementById('xButton').addEventListener('click', () => {
    //videoContainer.style.display = "none";
    videoContainer.className = "videoContainerHide";
    setTimeout(() => {
        videoContainer.style.display = "none"
      }, 1000);
});

//Menu desplegable
const menu = document.getElementById("menu");
let menuClosed = true;

const deployMenu = () => {
    menu.style.display="flex";
    videoContainer.style.display='none';
    menuClosed=false;
}
const closeMenu = () => {
    menu.style.display="none";
    menuClosed=true;
}
const buttonMenu = () => {
    menuClosed ? deployMenu() : closeMenu();
}
document.getElementById("button-menu").addEventListener('click',buttonMenu);

//Menu-Options
//view video resume
const videoButton = document.getElementById('viewVideo').addEventListener('click',viewVideo);


//print my resume
const printRESUME = () => {
    closeMenu();
    print();
}
const menuPrint = document.getElementById('printRESUME').addEventListener('click',printRESUME);

//At five secconds, my web will be present my video with de properly animation speed
setTimeout(presentVideo,5000);

