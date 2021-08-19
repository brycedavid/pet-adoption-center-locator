var pf = new petfinder.Client({
  apiKey: "YeI5i5zLHnqvUoBxfJcjseCpBDQcZSS6ecZKJouXs07aejuKfK",
  secret: "WhuKLwumWocRsjzuQYPVSC6ZybxuMdhVCRXYIIW6",
});

// pf.animal
//   .search({
//     type: "Dog",
//     breed: "Bernedoodle",
//     page: 1,
//     limit: 100,
//   })
//   .then((resp) => {
//     console.log(resp);
//   });

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let query = getParameterByName("search");
let animal = getParameterByName("animal");
let response;

if (document.querySelector("#search-result")) {
  const result = document.querySelector("#search-result");
  result.innerHTML = query + " " + animal;
}

pf.animal
  .search({
    type: animal,
    breed: "american bulldog",
    page: 1,
    limit: 100,
  })
  .then((resp) => {
    if (document.querySelector("#results-display")) {
      const resultDisplay = document.querySelector("results-display");
      // response = JSON.parse(resp);
      console.log(resp);

      resultDisplay.innerHTML = resp.data.animals[0].name;
    }
  });
