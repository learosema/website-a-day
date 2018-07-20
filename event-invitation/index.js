const $ = document.querySelector.bind(document)
const $$ = (sel, con) => (con||document).querySelectorAll(sel)

NodeList.prototype.toArray = function () {
  return Array.prototype.slice.call(this)
}

NodeList.prototype.addEventListener = function (eventType, listener, options) {
  this.toArray().forEach(element => {
    element.addEventListener(eventType, listener, options)
  })
}

const menu = $`#menu`

$$`.nav__link`.addEventListener('click', (e) => {
  menu.checked = false;
  return true;
})