const requestURL = "json/data.json";
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

async function getCompanies() {
  let response = await fetch(requestURL);
  if(response.ok) {
    let data = await response.json();
    console.log(data);
    buildSpotlight1(data);
    buildSpotlight2(data);
    buildSpotlight3(data);
  } else {
    throw Error(response.statusText);
  };
};

function buildSpotlight1(data) {

  let card = document.createElement('div');
  let p = document.createElement("p");
  let p3 = document.createElement("p");
  let h4 = document.createElement("h4");
  let img = document.createElement("img");


  img.setAttribute("src", data.companies[7].img);
  img.setAttribute("alt", `logo image of ${data.companies[7].name}`);
  img.setAttribute("loading", "lazy");

  p.innerHTML =`<a href="${data.companies[7].websiteurl}" target="_blank">${data.companies[7].websiteurl}</a><span> | ${data.companies[7].phoneNumber}</span>`;
  p3.textContent = "Learn to invest as a proffesional!";
  h4.textContent = "Come! be part of Us!";

  card.append(h4);
  card.append(img);
  card.append(p3);
  card.append(p);
  box1.append(card);
}

function buildSpotlight2(data) {

  let card = document.createElement('div');
  let p = document.createElement("p");
  let p3 = document.createElement("p");
  let h4 = document.createElement("h4");
  let img = document.createElement("img");


  img.setAttribute("src", data.companies[5].img);
  img.setAttribute("alt", `logo image of ${data.companies[5].name}`);
  img.setAttribute("loading", "lazy");

  p.innerHTML =`<a href="${data.companies[5].websiteurl}" target="_blank">${data.companies[5].websiteurl}</a><span> | ${data.companies[5].phoneNumber}</span>`;
  p3.textContent = "Instant delivery for you!";
  h4.textContent = "Best Package Service ever!";

  card.append(h4);
  card.append(img);
  card.append(p3);
  card.append(p);
  box2.append(card);
}

function buildSpotlight3(data) {

  let card = document.createElement('div');
  let p = document.createElement("p");
  let p3 = document.createElement("p");
  let h4 = document.createElement("h4");
  let img = document.createElement("img");


  img.setAttribute("src", data.companies[8].img);
  img.setAttribute("alt", `logo image of ${data.companies[8].name}`);
  img.setAttribute("loading", "lazy");

  p.innerHTML =`<a href="${data.companies[8].websiteurl}" target="_blank">${data.companies[8].websiteurl}</a><span> | ${data.companies[8].phoneNumber}</span>`;
  p3.textContent = "Because we know you want to grow your business!";
  h4.textContent = "Best interest rates for you!";

  card.append(h4);
  card.append(img);
  card.append(p3);
  card.append(p);
  box3.append(card);
}

getCompanies();