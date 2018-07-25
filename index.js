const main = document.querySelector('main')
fetch("README.md", {cache: "no-cache"}).then(res => res.text()).then(text => {
  main.innerHTML = markdown.toHTML(text)
})