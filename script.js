const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  message.textContent =
    "Mensagem enviada com sucesso! Entraremos em contato.";

  form.reset();

  setTimeout(() => {
    message.textContent = "";
  }, 4000);
});
