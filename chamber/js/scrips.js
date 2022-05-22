const currentDate = document.querySelector("#currentDate");

const current = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(current);

currentDate.innerHTML = fulldateUK;

function toggleMenu(){
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


let year = current.getFullYear();
document.getElementById("year").textContent = year

document.getElementById("lastModification").textContent = document.lastModified;

// banner part 
const currentDay = current.getDay();
const message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
if (currentDay == 1 || currentDay == 2) {
	const el = document.createElement("div");
	el.setAttribute("id","banner")
	document.querySelector("#body").prepend(el);
	const el2 = document.createElement("span");
	el2.setAttribute("id", "message");
	document.querySelector("#banner").appendChild(el2);
	document.querySelector("#message").textContent = message;
}

