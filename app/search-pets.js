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
document.querySelector("#pet-select").value = animal;

if (animal == "dog") {
  document.querySelector("#search-result").innerHTML = "Adoptable Dogs";
} else if (animal == "cat") {
  document.querySelector("#search-result").innerHTML = "Adoptable Cats";
}

pf.animal
  .search({
    type: animal,
    breed: "",
    page: 1,
    limit: 100,
  })
  .then((resp) => {
    console.log(resp.data.animals);
    displayResults(resp.data.animals);
  });

function displayResults(data) {
  const resultDisplay = document.querySelector("#results-display");
  for (let i of data) {
    let element = document.createElement("h2");
    let node = document.createTextNode(toTitleCase(i.name));
    element.appendChild(node);
    resultDisplay.appendChild(element);

    if (i.photos.length != 0) {
      element = document.createElement("img");
      element.setAttribute("src", i.photos[0].medium);
      resultDisplay.appendChild(element);
    } else {
      element = document.createElement("p");
      node = document.createTextNode("No photo available");
      element.appendChild(node);
      resultDisplay.appendChild(element);
    }

    element = document.createElement("p");
    node = document.createTextNode("Gender: " + toTitleCase(i.gender));
    element.appendChild(node);
    resultDisplay.appendChild(element);

    element = document.createElement("p");
    node = document.createTextNode("Age: " + toTitleCase(i.age));
    element.appendChild(node);
    resultDisplay.appendChild(element);

    element = document.createElement("p");
    let spayedNeutered = i.attributes.spayed_neutered;

    if (spayedNeutered == true) {
      node = document.createTextNode("Spayed/Neutered: Yes");
    } else {
      node = document.createTextNode("Spayed/Neutered: No");
    }

    element.appendChild(node);
    resultDisplay.appendChild(element);

    element = document.createElement("div");
    resultDisplay.appendChild(element);
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
