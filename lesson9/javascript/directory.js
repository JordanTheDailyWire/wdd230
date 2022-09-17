const requestURL = "https://raw.githubusercontent.com/JordanTheDailyWire/wdd230/main/lesson9/json/data.json";

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    console.log(jsonObject);
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
    let card = document.createElement("section");
    let name = document.createElement("name");
    let phone = document.createElement("phone");
    let admin = document.createElement("admin");
    let email = document.createElement("email");
    let img = document.createElement("img");
    let member = document.createElement("member");

    let li = document.createElement('section');
    let listName = document.createElement('name');
    let listPhone = document.createElement('phone');
    let listAdmin = document.createElement('admin');
    let listEmail = document.createElement("email");
    let listMember = document.createElement("member");

    name.textContent = `${business.name} ${business.lastname}`;
    phone.textContent = `${business.phone}`;
    admin.textContent = `${business.admin}`;
    email.textContent = `${business.email}`;
    member.textContent = `${business.member}`;
    listName.textContent = `${business.name} ${business.lastname}`;
    listPhone.textContent = `${business.phone}`;
    listAdmin.textContent = `${business.admin}`;
    listEmail.textContent = `${business.email}`;
    listMember.textContent = `${business.member}`;

    img.setAttribute('src', business.imageurl);
    img.setAttribute('alt', `${business.name} ${business.lastname}`);
    
    card.classList.add(`card`);
    img.classList.add(`card-img`);

    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(admin);
    card.appendChild(email);
    card.appendChild(member);
    card.appendChild(img);
    li.appendChild(listName);
    li.appendChild(listPhone);
    li.appendChild(listAdmin);
    li.appendChild(listEmail);
    li.appendChild(listMember);
    document.querySelector(`div.cards`).appendChild(card);
    document.querySelector(`div.list`).appendChild(li);
};

const cardButton = document.querySelector(".grid-active");
const listButton = document.querySelector(".list");

const Card = document.querySelector(".cards");
const List = document.querySelector(".List");

cardButton.onclick = function() {
    const cardBox = document.querySelector(".cards");
    const listBox = document.querySelector(".list");

    cardBox.style.display = "flex";
    listBox.style.display = "none";
};

listButton.onclick = function() {
    const cardBox = document.querySelector(".cards");
    const listBox = document.querySelector(".list");

    cardBox.style.display = "none";
    listBox.style.display = "flex";
};