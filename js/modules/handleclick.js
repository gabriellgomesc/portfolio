export default function handleClick(event) {
  event.preventDefault()
  this.classList.add('active')
  outsideClick(this, ['touchstart', 'click'], () => {
    this.classList.remove('active')
  })
}