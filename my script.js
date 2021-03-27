/* This script calculate's my age so i don't need to remember about changing it every year*/

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

let birthday = '1996-09-06';

let age = calculateAge(birthday);

document.getElementById("age").innerHTML = age;
