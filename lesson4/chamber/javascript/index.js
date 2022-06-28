// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefield1 = document.querySelector("#date1");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefield1.innerHTML = `<em>${fulldate}</em>`;

document.querySelector('#year').innerHTML = new Date().getFullYear();
document.querySelector('#currentdate').innerHTML = document.lastModified;

let dayOfWeek = new Date().getDay();

// javascript for banner
if (dayOfWeek == 1 || dayOfWeek == 2) {
    const banner = document.querySelector('#banner');
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}