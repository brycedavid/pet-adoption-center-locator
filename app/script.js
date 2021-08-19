const navbarSearchLink = document.getElementById("search-link");
const navbarSearchElement = document.getElementById("navbar-search-container");

function setSearchInvisible() {
  navbarSearchElement.style.visibility = "hidden";
}

function setSearchVisible() {
  navbarSearchElement.style.visibility = "visible";
}

function setSearchActive() {
  navbarSearchLink.classList.add("active");
}

function setSearchInactive() {
  navbarSearchLink.classList.remove("active");
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var param = getParameterByName("search");

if (document.querySelector("#search-result")) {
  const result = document.querySelector("#search-result");
  result.innerHTML = param;
}

var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({
  apiKey: "YeI5i5zLHnqvUoBxfJcjseCpBDQcZSS6ecZKJouXs07aejuKfK",
  secret: "WhuKLwumWocRsjzuQYPVSC6ZybxuMdhVCRXYIIW6",
});

client.animal.search();
