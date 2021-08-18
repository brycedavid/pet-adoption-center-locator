<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pet Adoption Finder</title>
    <link href="./styles.css" rel="stylesheet" />
  </head>
  <body>
    <!-- <img src="../images/paw.png" id="paw-icon" alt="paw-icon" /> -->
    <nav id="navbar-container">
      <div class="subnav active">
        <a class="subnav-button" href="" id="home-link">Home</a>
      </div>
      <div class="subnav">
        <a class="subnav-button" href="app/adopt.html">Adopt</a>
      </div>
      <div class="subnav">
        <a class="subnav-button" href="app/about.html">About</a>
        <div class="navbar-about-container"></div>
      </div>
      <div class="subnav">
        <a class="subnav-button" href="app/donate.html">Donate</a>
      </div>
      <div class="subnav" id="subnav-search">
        <a
          class="subnav-button"
          id="search-link"
          onmouseenter="setSearchVisible()"
          onmouseleave="setSearchInvisible()"
          >Search</a
        >
        <div
          id="navbar-search-container"
          style="visibility: hidden"
          onmouseover="setSearchVisible(), setSearchActive()"
          onmouseleave="setSearchInvisible(), setSearchInactive()"
        >
          <form
            class="search"
            id="navbar-search"
            action="app/search.html"
            method="GET"
          >
            <input name="search" type="search" placeholder="Search" />
            <button type="submit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/480px-Magnifying_glass_icon.svg.png"
                alt="Magnifying_glass_icon"
              />
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div id="body-content">
      <br />
      <br />
      <h1 id="welcome-text">Welcome to:</h1>
      <h1>Pet Adoption Center Locator</h1>
      <h2>Locate Pet Adoption Centers Near You!</h2>
      <br />
      <br />
      <div id="image-container">
        <img
          id="first-image"
          src="https://www.petlink.net/wp-content/uploads/2019/04/Puppy-and-Kitten-Closeup-Over-White-649091176_2052x1466.jpeg"
        />
      </div>
      <br />
      <br />
      <br /><br />
      <p>
        Looking for a furry friend to add to the family? Don't worry, we've got
        you covered!
      </p>
      <p>
        With over *numOfCenters* adoption centers to choose from, you'll find
        the perfect pet in no time!
      </p>
      <br /><br />
      <div id="search-container">
        <p>Search for an adoption center near you!</p>
        <form
          id="search-main"
          class="search"
          action="app/search.html"
          method="GET"
        >
          <input type="search" name="search" placeholder="Search" />
          <button type="submit">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/480px-Magnifying_glass_icon.svg.png"
              alt="Magnifying_glass_icon"
            />
          </button>
        </form>
      </div>
      <br /><br /><br /><br />
    </div>
  </body>
  <script src="app/script.js"></script>
</html>