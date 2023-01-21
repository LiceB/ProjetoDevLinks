function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute(
      "alt", "Foto de Alice Bianchi sorrindo, usando óculos escuro e camisa preta da série Stranger Things (Netflix), braços cruzados e fundo azul")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute(
      "alt", "Foto de Alice Bianchi sorrindo, usando óculos e camisa preta da série Stranger Things (Netflix), braços cruzados e fundo azul")
  }
}