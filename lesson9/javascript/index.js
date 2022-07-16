// script for hamburger menu
function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
}

let x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu


// script for time and date
const datefield = document.querySelector("#now");
const datefield2 = document.querySelector("#currentDateandTime");

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();

datefield.innerHTML = `<em>${fulldate}<em>`;
datefield2.innerHTML = `<em>${fulldate}<em>`;


// script for footer year and date modified
document.querySelector('#year').innerHTML = new Date().getFullYear();

// JavaScript for banner
const banner = document.querySelector('#top-page-banner');

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})