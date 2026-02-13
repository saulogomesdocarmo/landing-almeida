// ==============================
// MENU MOBILE
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ==============================
// FORMULÁRIO (SIMULAÇÃO)
// ==============================

const form = document.getElementById("form-contato");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");
    form.reset();
});
