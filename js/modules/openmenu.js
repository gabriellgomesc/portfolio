import outsideClick from "./outsideclick.js"

export default function initMenu() {
  const menuButton = document.querySelector(`[data-menu="button"]`)
  const menuLista = document.querySelector(`[data-menu="lista"]`)
  const clique = ['click']
  if (menuButton) {
    function openMenu() {
      menuLista.classList.add('active')
      menuButton.classList.add('active')
      outsideClick(menuLista, clique, () => {
        menuLista.classList.remove(`active`)
        menuButton.classList.remove(`active`)
      })
    }
    clique.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu)
    })
  }
}