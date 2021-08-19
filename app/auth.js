var pf = new petfinder.Client({
  apiKey: "YeI5i5zLHnqvUoBxfJcjseCpBDQcZSS6ecZKJouXs07aejuKfK",
  secret: "WhuKLwumWocRsjzuQYPVSC6ZybxuMdhVCRXYIIW6",
});

pf.animal
  .search({
    type: "Dog",
    breed: "Bernedoodle",
    page: 1,
    limit: 100,
  })
  .then((resp) => {
    console.log(resp);
  });
