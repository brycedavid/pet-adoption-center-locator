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
