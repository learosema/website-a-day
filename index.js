const main = document.querySelector('main')
fetch("README.md").then(res => res.text()).then(text => {
  main.innerHTML = markdown.toHTML(text)
})