const btnMobile = document.querySelector(".btn_mobile");
const nav = document.querySelector(".nav");

function mostraMenu() {
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", mostraMenu);

/* remover o 'active' caso a tela seja redimensionada para resolução de desktop */
window.addEventListener("resize", function () {
  let largura = window.innerWidth;

  if (largura > 1023) {
    nav.classList.remove("active");
  }
});
