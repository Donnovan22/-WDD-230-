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