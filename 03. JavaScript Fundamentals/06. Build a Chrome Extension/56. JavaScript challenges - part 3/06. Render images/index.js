// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const container = document.getElementById("container");

function renderImages(arr) {
  let images = "";
  for (let i = 0; i < arr.length; i++) {
    images += `<img alt= "Employee in the Company" src= "${arr[i]}" class="team-img"/>`;
  }
  container.innerHTML = images;
}

renderImages(imgs);
