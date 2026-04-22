/**
 * Coachella Headliners Catalog — scripts.js
 * SEA Stage 2 Data Catalog Project
 *
 * Images live in an "images/" folder next to index.html.
 * To add photos: go to each artist's Wikipedia page, right-click
 * their infobox photo, "Save image as", and save it into the
 * images/ folder using the filename shown below.
 *
 * Operations:
 *   1. SEARCH  — live filter by artist name
 *   2. GENRE   — filter by music genre (buttons)
 *   3. SORT    — sort by year, name, or rating (dropdown)
 *   4. REMOVE  — remove the last displayed card (footer button)
 */

// DATA — array of headliner objects
// image: path to a file inside the images/ folder

const headliners = [
  {
    name: "Beyoncé",
    year: 2018,
    genre: "R&B",
    night: "Sunday",
    image: "images/beyonce.jpg",
    facts: [
      "First Black woman to headline Coachella",
      "Reunited Destiny's Child for a surprise guest appearance",
      "Nicknamed 'Beychella' — widely called the greatest festival set ever",
    ],
    rating: 5,
  },
  {
    name: "Radiohead",
    year: 2017,
    genre: "Alternative",
    night: "Friday",
    image: "images/radiohead.jpg",
    facts: [
      "Stepped in to replace Guns N' Roses just two days before the festival",
      "Played an expansive setlist spanning their full catalog",
      "Their atmospheric light show is still talked about by fans",
    ],
    rating: 4,
  },
  {
    name: "Lady Gaga",
    year: 2017,
    genre: "Pop",
    night: "Saturday",
    image: "images/ladygaga.jpg",
    facts: [
      "Replaced Beyoncé, who was pregnant with twins",
      "Flew over the crowd on a wire during the performance",
      "Packed 20+ songs into her electrifying 90-minute set",
    ],
    rating: 4,
  },
  {
    name: "The Weeknd",
    year: 2018,
    genre: "R&B",
    night: "Friday",
    image: "images/theweeknd.jpg",
    facts: [
      "Opened with a jaw-dropping pyrotechnics display",
      "Performed during a rare desert rainstorm — fans stayed the entire set",
      "Blended R&B hits with dark cinematic visuals throughout",
    ],
    rating: 4,
  },
  {
    name: "Childish Gambino",
    year: 2019,
    genre: "Hip-Hop",
    night: "Saturday",
    image: "images/childishgambino.jpg",
    facts: [
      "Performed just weeks before announcing a creative hiatus",
      "Delivered a stripped-back, emotional set unlike his earlier tours",
      "One of the few artists to headline Coachella more than once",
    ],
    rating: 4,
  },
  {
    name: "Ariana Grande",
    year: 2019,
    genre: "Pop",
    night: "Sunday",
    image: "images/arianagrande.jpg",
    facts: [
      "Youngest solo Coachella headliner at the time, at age 25",
      "*NSYNC reunion surprise sparked massive online buzz",
      "Included a heartfelt tribute to Mac Miller during the set",
    ],
    rating: 5,
  },
  {
    name: "Tame Impala",
    year: 2019,
    genre: "Alternative",
    night: "Friday",
    image: "images/tameimpala.jpg",
    facts: [
      "Headlined for the first time after years of intense fan demand",
      "Psychedelic light show praised as one of the best in festival history",
      "Previewed new songs from their then-unreleased album The Slow Rush",
    ],
    rating: 5,
  },
  {
    name: "Billie Eilish",
    year: 2022,
    genre: "Alternative",
    night: "Friday",
    image: "images/billieeilish.jpg",
    facts: [
      "Youngest solo headliner in Coachella history at just 20 years old",
      "Surprise appearances from Khalid and Damon Albarn",
      "Opened the set to a record crowd for a Friday night headliner",
    ],
    rating: 5,
  },
  {
    name: "Doja Cat",
    year: 2022,
    genre: "Hip-Hop",
    night: "Saturday",
    image: "images/dojacat.jpg",
    facts: [
      "Stepped up to headline after Kanye West withdrew from the festival",
      "Featured a surprise appearance from The Weeknd mid-set",
      "High-energy show with elaborate sci-fi costumes and staging",
    ],
    rating: 4,
  },
  {
    name: "Kendrick Lamar",
    year: 2022,
    genre: "Hip-Hop",
    night: "Sunday",
    image: "images/kendricklamar.jpg",
    facts: [
      "Wore a crown of thorns during a visually powerful performance",
      "Paid an emotional tribute to Nipsey Hussle on stage",
      "Performed hits spanning all five of his studio albums",
    ],
    rating: 5,
  },
  {
    name: "Bad Bunny",
    year: 2023,
    genre: "Latin",
    night: "Friday",
    image: "images/badbunny.jpg",
    facts: [
      "First Latin artist ever to headline Coachella",
      "Performed an all-Spanish setlist on the main stage",
      "Drew what many called the largest crowd in Coachella history",
    ],
    rating: 5,
  },
  {
    name: "BLACKPINK",
    year: 2023,
    genre: "K-Pop",
    night: "Sunday",
    image: "images/blackpink.jpg",
    facts: [
      "First K-Pop act ever to headline Coachella",
      "Performed both weekends to record-breaking live audiences",
      "Elaborate production with synchronized choreography and outfit changes",
    ],
    rating: 5,
  },
  {
    name: "Frank Ocean",
    year: 2023,
    genre: "R&B",
    night: "Saturday",
    image: "images/frankocean.jpg",
    facts: [
      "Canceled his Sunday headlining slot due to a leg injury",
      "Unveiled a surprising ice rink-themed stage set",
      "Performed rare live renditions of tracks from his album Blonde",
    ],
    rating: 3,
  },
  {
    name: "Tyler, the Creator",
    year: 2024,
    genre: "Hip-Hop",
    night: "Saturday",
    image: "images/tylerthecreator.jpg",
    facts: [
      "Performed as multiple alter egos including Igor and early Odd Future-era Tyler",
      "Featured a live band and Broadway-level theatrical staging",
      "Widely praised as one of the most creative sets in recent Coachella history",
    ],
    rating: 5,
  },
  {
    name: "Lana Del Rey",
    year: 2024,
    genre: "Alternative",
    night: "Friday",
    image: "images/lanadelrey.jpg",
    facts: [
      "Her long-awaited Coachella debut after years of fan demand",
      "Wore a stunning custom white gown for the entire performance",
      "Surprise guest Jon Batiste joined her for a duet",
    ],
    rating: 4,
  },
  {
    name: "No Doubt",
    year: 2024,
    genre: "Rock",
    night: "Sunday",
    image: "images/nodoubt.jpg",
    facts: [
      "First reunion show in over a decade",
      "Gwen Stefani performed in iconic ska-punk fashion",
      "Played crowd favorites alongside rare deep cuts from their catalog",
    ],
    rating: 4,
  },
];

// STATE

let displayedHeadliners = [...headliners];
let currentGenre = "All";

// OPERATION 1 + 2 + 3 — SEARCH, GENRE FILTER, SORT

function filterAndRender() {
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();
  const sortValue = document.getElementById("sort-select").value;

  let result = headliners.filter((h) =>
    h.name.toLowerCase().includes(searchQuery),
  );

  if (currentGenre !== "All") {
    result = result.filter((h) => h.genre === currentGenre);
  }

  result = sortHeadliners(result, sortValue);
  displayedHeadliners = [...result];

  showCards(displayedHeadliners);
  updateResultsCount(displayedHeadliners.length);
}

// SORT helper

function sortHeadliners(arr, sortValue) {
  const sorted = [...arr];
  switch (sortValue) {
    case "year-asc":
      return sorted.sort((a, b) => a.year - b.year);
    case "year-desc":
      return sorted.sort((a, b) => b.year - a.year);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "rating-desc":
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}

// GENRE FILTER

function setGenreFilter(genre, buttonEl) {
  currentGenre = genre;
  document
    .querySelectorAll(".genre-btn")
    .forEach((btn) => btn.classList.remove("active"));
  buttonEl.classList.add("active");
  filterAndRender();
}

// showCards — builds cards from a headliner array

function showCards(data) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  if (data.length === 0) {
    const empty = document.createElement("div");
    empty.id = "no-results";
    empty.innerHTML =
      '<span class="no-results-icon">&#127914;</span>No artists found. Try a different search!';
    cardContainer.appendChild(empty);
    return;
  }

  for (let i = 0; i < data.length; i++) {
    const headliner = data[i];
    const nextCard = templateCard.cloneNode(true);
    nextCard.style.animationDelay = `${i * 0.05}s`;
    editCardContent(nextCard, headliner);
    cardContainer.appendChild(nextCard);
  }
}

// editCardContent — fills a cloned template card with data

function editCardContent(card, headliner) {
  card.style.display = "block";

  card.querySelector("h2").textContent = headliner.name;

  const cardContent = card.querySelector(".card-content");
  const cardImg = card.querySelector("img");

  const imgWrap = document.createElement("div");
  imgWrap.classList.add("card-img-wrap");
  cardContent.insertBefore(imgWrap, cardContent.firstChild);
  imgWrap.appendChild(cardImg);

  cardImg.src = headliner.image;
  cardImg.alt = headliner.name;

  // Fallback: if image is missing, show the artist's initial on a gradient
  cardImg.onerror = function () {
    this.style.opacity = "0";
    imgWrap.style.background =
      "linear-gradient(135deg, #1a0030, #5c0a3e, #b8420a)";
    const initial = document.createElement("span");
    initial.className = "fallback-initial";
    initial.textContent = headliner.name[0];
    imgWrap.appendChild(initial);
  };

  // Year + Genre badges
  const badges = document.createElement("div");
  badges.classList.add("card-badges");
  badges.innerHTML =
    '<span class="badge-year">' +
    headliner.year +
    "</span>" +
    '<span class="badge-genre">' +
    headliner.genre +
    "</span>";
  imgWrap.appendChild(badges);

  // Night label
  const nightEl = document.createElement("p");
  nightEl.classList.add("card-night");
  nightEl.textContent = headliner.night + " Night Headliner";
  cardContent.insertBefore(nightEl, cardContent.querySelector("ul"));

  // Star rating
  const starsEl = document.createElement("div");
  starsEl.classList.add("card-stars");
  for (let s = 1; s <= 5; s++) {
    const star = document.createElement("span");
    star.className = "star " + (s <= headliner.rating ? "filled" : "empty");
    star.textContent = "★";
    starsEl.appendChild(star);
  }
  cardContent.insertBefore(starsEl, cardContent.querySelector("ul"));

  // Facts list
  const ul = card.querySelector("ul");
  ul.innerHTML = "";
  headliner.facts.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    ul.appendChild(li);
  });

  console.log("Card rendered:", headliner.name, headliner.year);
}

// updateResultsCount

function updateResultsCount(count) {
  const el = document.getElementById("results-count");
  el.textContent = "Showing " + count + " headliner" + (count !== 1 ? "s" : "");
}

// removeLastCard — required by starter code

function removeLastCard() {
  if (displayedHeadliners.length === 0) return;
  displayedHeadliners.pop();
  showCards(displayedHeadliners);
  updateResultsCount(displayedHeadliners.length);
}

// quoteAlert — required by starter code

function quoteAlert() {
  const quotes = [
    '"I am the greatest artist of our generation." — Kanye West, 2011',
    '"This is the most important performance of my career." — Beyoncé, 2018',
    '"I want you to feel everything." — Kendrick Lamar, 2022',
    '"Thank you for having me. This is a dream." — Ariana Grande, 2019',
    '"We\'re all in the desert together tonight." — Frank Ocean, 2023',
  ];
  alert(quotes[Math.floor(Math.random() * quotes.length)]);
}

// Init

document.addEventListener("DOMContentLoaded", filterAndRender);
