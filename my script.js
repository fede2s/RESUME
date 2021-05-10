/* This script calculates my age so i don't need to remember about changing it every year*/

function calculateAge(date) {
    var today = new Date();
    var birthday = new Date(date);
    var year = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        year--;
    }

    return year;
}

function sayhello(){
    console.log("Hello, bro. Please hire me");
}

//Menu desplegable
let menu = document.getElementById("menu");
menuClosed = true;

function deployMenu(){
    menu.style.display="flex";
    videoContainer.style.display='none';
    menuClosed=false;
}
function closeMenu(){
    menu.style.display="none";
    menuClosed=true;
}
function buttonMenu(){
    menuClosed ? deployMenu() : closeMenu();
}

const viewVideo = () => videoContainer.style.display="block"

const sorry = () => alert("Sorry, i still working on that section");

let birthday = '1996-09-06';

let age = calculateAge(birthday);

document.getElementById("age").innerHTML = age;


const videoContainer = document.getElementById("videoContainer");
document.getElementById('xButton').addEventListener('click', () => {
    videoContainer.style.display = "none";
});

document.getElementById("button-menu").addEventListener('click',buttonMenu);
