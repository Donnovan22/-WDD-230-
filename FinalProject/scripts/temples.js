const requestURL = "json/temples.json";
const cards = document.querySelector(".temple-page-main");

async function getTemples() {
  let response = await fetch(requestURL);
  if(response.ok) {
    let data = await response.json();
    console.log(data);
    buildTemplesCards(data);
  } else {
    throw Error(response.statusText);
  };
};

function buildTemplesCards(data) {
  data.temples.forEach(temple => {

    let card = document.createElement("section");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let name = document.createElement("h3");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let templeImg = document.createElement('img')

    let name1 = document.createElement("h4");
    let name2 = document.createElement("h4");
    let name3 = document.createElement("h4");
    let name4 = document.createElement("h4");


    templeImg.setAttribute("src", temple.img);
    templeImg.setAttribute("alt", `logo image of ${temple.name}`);
    templeImg.setAttribute("loading", "lazy");

    name.setAttribute("class", "temple-name");
    templeImg.setAttribute("class", "temple-img");

    name.textContent = temple.name;
    p.textContent = `${temple.adress}`;
    p2.textContent = `${temple.phoneNumber}`;
    p3.innerHTML = `${temple.service1}<br>${temple.service2}<br>${temple.service3}<br>${temple.service4}<br>`
    p4.innerHTML = `${temple.closure1}<br>${temple.closure2}`;
    name1.textContent = `Adress`;
    name2.textContent = `Phone`;
    name3.textContent = `Services`;
    name4.textContent = `Closures`;


    
    div2.append(templeImg);
    div1.append(name);
    div1.append(name1);
    div1.append(p);
    div1.append(name2);
    div1.append(p2);
    div1.append(name3);
    div1.append(p3);
    div1.append(name4);
    div1.append(p4);

    card.append(div1);
    card.append(div2);

    cards.append(card);
  });
}

getTemples();