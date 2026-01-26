// Lijst van namen voor de modal
const names = [
  "Rosan",
  "Chris",
  "Super Tielos",
  "Hoppie",
  "De hopmeister",
  "Roosje poosje",
  "CHRISTOPHERRRRRR",
  "Lekker spekkie :P"
];

// Correct wachtwoord
const CORRECT_PASSWORD = "flapoor1234";

// Functie voor groet
function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "Goedemorgen";
  if (hour >= 12 && hour < 18) return "Goedemiddag";
  return "Goedenavond";
}

// Wacht tot DOM volledig geladen is
document.addEventListener("DOMContentLoaded", () => {

  // --- LOGIN LOGICA ---
  const loginScreen = document.getElementById("login-screen");
  const siteContent = document.getElementById("site-content");
  const passwordInput = document.getElementById("passwordInput");
  const error = document.getElementById("error");

  function checkPassword() {
    const input = passwordInput.value;
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem("authenticated", "true");
      loginScreen.classList.add("d-none");
      siteContent.classList.remove("d-none");
    } else {
      error.classList.remove("d-none");
    }
  }

  // Bind de login knop (als er een aparte button is)
  const loginButton = document.querySelector("#login-screen button");
  if (loginButton) {
    loginButton.addEventListener("click", checkPassword);
  }

  // Check bij refresh
  if (sessionStorage.getItem("authenticated") === "true") {
    loginScreen.classList.add("d-none");
    siteContent.classList.remove("d-none");
  }

  // --- GREETING LOGICA ---
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = `${getGreeting()} mevrouw Tielbeke`;
  }

  // --- RANDOM NAME MODAL LOGICA ---
  const button = document.getElementById("pickNameBtn");
  const modalName = document.getElementById("modalName");
  const nameModal = new bootstrap.Modal(document.getElementById("nameModal"));

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];

      modalName.textContent = randomName;
      nameModal.show();
    });
  }

  // Extra verrassing knop
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseModal = new bootstrap.Modal(document.getElementById("surpriseModal"));

if(surpriseBtn) {
  surpriseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    surpriseModal.show();
  });
}

  // RELATIESCHAP COUNTER
function startRelationshipCounter() {
  const timerElement = document.getElementById("relationshipTimer");
  
  // Begin datum: 23 juli 2023, 23:10
  const startDate = new Date("2023-07-23T23:10:00");

  function updateTimer() {
    const now = new Date();
    const diff = now - startDate; // verschil in milliseconden

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerElement.textContent = `${days} dagen, ${hours} uur, ${minutes} min, ${seconds} sec`;
  }

  updateTimer(); // meteen updaten
  setInterval(updateTimer, 1000); // update elke seconde
}

// Start de timer
startRelationshipCounter();


});
