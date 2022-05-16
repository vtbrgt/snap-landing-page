const botaoMenu = document.querySelector(".botao_menu");
const nav = document.querySelector(".nav");
const dropdown = document.getElementsByClassName("dropdown_btn");

/* mostrar menu ao clicar */
function mostraMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");
}

/* troca o ícone de abrir/fechar menu */
function trocarIconeMenu() {
  botaoMenu.classList.toggle("active");
}

botaoMenu.addEventListener("click", mostraMenu);
botaoMenu.addEventListener("click", trocarIconeMenu);
/* responsividade mobile (ux) */
botaoMenu.addEventListener("touchstart", mostraMenu);
botaoMenu.addEventListener("touchstart", trocarIconeMenu);

/* remover o 'active' caso a tela seja redimensionada para resolução de desktop */
window.addEventListener("resize", function () {
  let largura = window.innerWidth;

  if (largura > 1023) {
    nav.classList.remove("active");
  }
});

/* menu dropdown */
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}
