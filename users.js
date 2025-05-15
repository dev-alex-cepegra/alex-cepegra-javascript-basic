const vignettes = document.querySelectorAll(".vignettes");

/**
 * Ici on écoute un événement sur chaque vignette. 
 * Avec 4 Images ce n'est pas grave.
 * Mais si nous avions un nombre infini d'images
 * Ce n'est pas performant
 */
vignettes.forEach(vignette => {
  vignette.addEventListener('click', e => {
    e.preventDefault();
    // Remove active class
    document.querySelector(".active").classList.remove('active')

    // Target click element
    const cible = e.target

    // add class active
    cible.classList.add("active")

    // replace body content by target img
    const bodyImg = document.querySelector('#body-content')
    bodyImg.innerHTML = `
      <li><img src="${e.target.src}" alt="${e.target.alt}"></li>
    `

  })

})
