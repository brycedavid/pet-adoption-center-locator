var pf = new petfinder.Client({
  apiKey: "YeI5i5zLHnqvUoBxfJcjseCpBDQcZSS6ecZKJouXs07aejuKfK",
  secret: "WhuKLwumWocRsjzuQYPVSC6ZybxuMdhVCRXYIIW6",
});

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let animal = getParameterByName("animal");

if (document.querySelector("#search-result")) {
  const result = document.querySelector("#search-result");
  result.innerHTML = animal;
}

pf.animal
  .search({
    type: animal,
    breed: "",
    page: 1,
    limit: 100,
  })
  .then((resp) => {
    if (document.querySelector("#results-display")) {
      console.log(resp.data.animals);
      displayResults(resp.data.animals);
    }
  });

function displayResults(data) {
  const resultDisplay = document.querySelector("#results-display");
  for (let i of data) {
    let element = document.createElement("p");
    let node = document.createTextNode(i.name);
    element.appendChild(node);
    resultDisplay.appendChild(element);

    if (i.photos.length != 0) {
      element = document.createElement("img");
      element.setAttribute("src", i.photos[0].small);
      resultDisplay.appendChild(element);
    } else {
      element = document.createElement("p");
      node = document.createTextNode("No photo available");
      element.appendChild(node);
      resultDisplay.appendChild(element);
    }
  }
}
