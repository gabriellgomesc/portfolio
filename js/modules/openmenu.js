import outsideClick from './outsideclick.js';

export default function initMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');
  const clique = ['click'];
  function openMenu() {
    menuLista.classList.remove('desactive');
    menuButton.classList.remove('desactive');
    menuLista.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuLista, clique, () => {
      menuLista.classList.remove('active');
      menuButton.classList.remove('active');
      menuLista.classList.add('desactive');
      menuButton.classList.add('desactive');
    });
  }

  if (menuButton) {
    clique.forEach((evento) => { menuButton.addEventListener(evento, openMenu); });
  }
}
