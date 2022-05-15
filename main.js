const botaoMenu = document.querySelector(".botao_menu");

/* mostrar menu ao clicar */
function mostraMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector(".nav");
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
