const vignette = document.querySelector("#list-user");

/**
 * Ici on écoute un événement sur une balise <ul></ul>. 
 * Et on cible ensuite un élément dans cette balise
 * Pour ensuite modifier les classe et le contenu du body
 */
vignette.addEventListener('click', e => {
  // Target click element
  const cible = e.target

  // Verifie si l'élément cibler contient la classe "vignettes"
  if (cible.classList.contains('vignettes')) {
    // Retire la class active de l'élément ayant la class
    vignette.querySelector(".active").classList.remove('active')
    // ajoute à la cible la class active
    cible.classList.add('active')

    // Ajout du contenu cibler au body
    const bodyImg = document.querySelector('#body-content')
    bodyImg.innerHTML = `
        <li><img src="${cible.src}" alt="${cible.alt}"></li>
      `
  }



})
