// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefield1 = document.querySelector(".date-1");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefield1.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

document.querySelector('#year').innerHTML = new Date().getFullYear();
document.querySelector('#currentdate').innerHTML = document.lastModified;

const banner = document.querySelector("#banner");

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
};

const closeBtn = document.querySelector("bannerBtn");

closeBtn.addEventListener("click", function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})