import { Client } from "@petfinder/petfinder-js";
let client = new Client({
  apiKey: "YeI5i5zLHnqvUoBxfJcjseCpBDQcZSS6ecZKJouXs07aejuKfK",
  secret: "WhuKLwumWocRsjzuQYPVSC6ZybxuMdhVCRXYIIW6",
});

client.animal
  .search({
    type: "Dog",
    breed: "Bernedoodle",
    page: 1,
    limit: 100,
  })
  .then((resp) => {
    console.log(resp);
  });

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
