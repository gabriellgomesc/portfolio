export default function initNavegacao() {
  const tabMenu = document.querySelectorAll(`.js-tabmenu li`)
  const activeClass = `ativo`
  const tabContent = document.querySelectorAll(`.js-tabcontent li`)
  if (tabMenu.length && tabMenu.length) {
    tabContent[0].classList.add(activeClass)
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass)
      })
      tabContent[index].classList.add(activeClass)
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener(`click`, () => {
        activeTab(index)
      })
    })
  }
}