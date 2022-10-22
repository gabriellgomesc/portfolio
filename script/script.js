function initNavegavcao() {
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
initNavegavcao()

function initMenu() {
  const menuButton = document.querySelector(`[data-menu="button"]`)
  const menuLista = document.querySelector(`[data-menu="lista"]`)

  if (menuButton) {
    function openMenu(event) {
      menuLista.classList.toggle(`active`)
      menuButton.classList.toggle(`active`)
    }

    menuButton.addEventListener(`click`, openMenu)
  }
}
initMenu()

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();