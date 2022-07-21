const currentYear = document.querySelector("#year");

const current = new Date();

currentYear.innerHTML = current.getFullYear();



document.getElementById("lastModification").textContent = document.lastModified;