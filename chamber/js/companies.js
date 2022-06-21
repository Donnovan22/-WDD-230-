const requestURL = "https://github.com/Donnovan22/wdd230/blob/main/chamber/json/data.json";
const cards = document.querySelector(".directory-cards");

async function getCompanies() {
  let response = await fetch(requestURL);
  if(response.ok) {
    let data = await response.json();
    //console.log(data);
    buildProphetCards(data);
  } else {
    throw Error(response.statusText);
  };
};

function buildCompaniesCards(data) {
  data.companies.forEach(company => {

    let card = document.createElement('section');
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let logo = document.createElement('img');

    p.textContent = `${company.adress}`;
    p2.textContent = `${company.phoneNumber}`;
    p3.textContent = `${company.websiteurl}`;
 

    logo.setAttribute("src", company.img);
    logo.setAttribute("alt", `logo image of ${company.name}`);
    logo.setAttribute("loading", "lazy");

    

    card.append(logo);
    card.append(p);
    card.append(p2);
    card.append(p3);
    cards.append(card);
  });
}

getCompanies();