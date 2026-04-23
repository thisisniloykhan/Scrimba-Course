let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreCount = 0;
let guestScoreCount = 0;

function home1Increment() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
}

function home2Increment() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
}

function home3Increment() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
}

function guest1Increment() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
}

function guest2Increment() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
}

function guest3Increment() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
}

function resetPoints() {
  homeScoreCount = 0;
  homeScore.textContent = 0;

  guestScoreCount = 0;
  guestScore.textContent = 0;
}
