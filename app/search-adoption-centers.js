var pf = new petfinder.Client({
  apiKey: "YeI5i5zLHnqvUoBxfJcjseCpBDQcZSS6ecZKJouXs07aejuKfK",
  secret: "WhuKLwumWocRsjzuQYPVSC6ZybxuMdhVCRXYIIW6",
});

if (document.querySelector("#search-result")) {
  document.querySelector("#search-result").innerHTML = "Adoption Centers";
}

pf.organization.search().then((resp) => {
  console.log(resp.data.organizations);
  displayResults(resp.data.organizations);
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
    node = document.createTextNode(
      "Location: " + toTitleCase(i.address.city) + ", " + i.address.state
    );
    element.appendChild(node);
    resultDisplay.appendChild(element);

    element = document.createElement("p");
    node = document.createTextNode("Phone: " + i.phone);
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
