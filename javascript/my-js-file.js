let date = new Date();
let year = date.getFullYear();
document.getElementById("year").textContent = year

document.getElementById("currentdate2").textContent = document.lastModified;

/*try {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"
  };
  document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US");
} catch (e) {
  alert("Error with code or your browser does not support locale");
}*/
