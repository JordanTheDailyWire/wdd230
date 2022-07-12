spotlightURL = "http://github.com/JordanTheDailyWire/wdd230/tree/main/lesson4/chamber/json/spotlight.json";
spotlight1Div = document.querySelector(".spotlight1");
spotlight2Div = document.querySelector(".spotlight2");

fetch(spotlightURL)
.then((response) => response.json())
.then((jsonObject) => {
    console.log(jsonObject);

    get_content(`Golf Course`, 'image/golfcourse.webp', 'Golf Course', spotlight1Div);
    get_content(`On-Demand Bus Until Spring`, 'images/on-demand-bus.webp', 'on-demand-bus', spotlight1Div);
    get_content(`Tree Planting Initiatives`, 'images/tree-planting.webp', 'tree-planting-initiatives', spotlight1Div);
    get_content(`Toys for Tots Gift-giving`, 'images/toys-for-tots.webp', 'toys-for-tots', spotlight2Div);
    get_content(`Spring Harvest Parade`, 'images/spring-harvest-parade.webp', 'spring-harvest-parade', spotlight2Div);
    get_content(`Art In The Park Registration Open`, 'images/art-in-the-park.webp', 'art-in-the-park', spotlight2Div);
    
    const Events = jsonObject['Events'];
    Events.forEach(displayGoldMembers);

    function get_content(name, URL, alt, div) {

        key = jsonObject.Events;
        random = key[Math.floor(Math.random() * (key.length))];

        let container = document.createElement('section');

        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let site_link = document.createElement('a');

        h2.textContent = title;
        img.setAttribute('src', URL);
        img.setAttribute('alt', alt);
        phone.textContent = random.phone;
        site_link.setAttribute('href', random.website);
        site_link.textContent = random.name;

        name.appendChild(site_link);

        container.appendChild(h2);
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(phone);

        div.appendChild(container);
    }
});