<script>
  const CORRECT_PASSWORD = "flapoor1234";

  function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("error");

    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem("authenticated", "true");
      document.getElementById("login-screen").classList.add("d-none");
      document.getElementById("site-content").classList.remove("d-none");
    } else {
      error.classList.remove("d-none");
    }
  }

  // Bij refresh: check of al ingelogd
  if (sessionStorage.getItem("authenticated") === "true") {
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("login-screen").classList.add("d-none");
      document.getElementById("site-content").classList.remove("d-none");
    });
  }
</script>

<script>
  function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return "Goedemorgen";
    } else if (hour >= 12 && hour < 18) {
      return "Goedemiddag";
    } else {
      return "Goedenavond";
    }
  }

  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = `${getGreeting()} mevrouw Tielbeke`;
</script>

  <script>
  // Lijst van namen
  const names = ["Rosan", "Chris", "Super Tielos", "Hoppie", "De hopmeister", "Roosje poosje"];

  const button = document.getElementById("pickNameBtn");
  const modalName = document.getElementById("modalName");

  // Modal object aanmaken via Bootstrap JS
  const nameModal = new bootstrap.Modal(document.getElementById('nameModal'));

  button.addEventListener("click", function(event) {
    event.preventDefault(); // voorkomt dat link naar '#' springt

    // Random naam kiezen
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    // Plaats de naam in de modal
    modalName.textContent = randomName;

    // Modal tonen
    nameModal.show();
  });
</script>
