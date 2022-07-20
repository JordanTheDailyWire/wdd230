let numVisits = document.querySelector('.daysOfVisit');

let numOfVisits = Number(window.localStorage.getItem('visits'));
let lastVisit= Number(window.localStorage.getItem('lastVisits'));

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numOfDays = Math.ceil(daysBetween / FACTOR);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits != 0) {

    numVisits.textContent = 'It\'s been ' + numOfDays + ' day(s) since your last visit.'

} else {
    numVisits.textContent = 'This is your first page visit.'
}

numOfVisits++;

localStorage.setItem("visits", numOfVisits);