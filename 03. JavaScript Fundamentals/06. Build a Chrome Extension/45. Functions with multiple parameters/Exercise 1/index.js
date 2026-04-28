const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting = "Hi there!", name = "Niloy") {
  // Rewrite the expression using template literals
  welcomeEl.textContent = `${greeting} , ${name}  👋`;
}

greetUser("Howdy", "James");
