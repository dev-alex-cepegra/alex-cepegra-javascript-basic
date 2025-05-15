document.addEventListener('DOMContentLoaded', () => {
  const nomVariable = 'value'
  let number = 14
  let boolean = true // or False
  let array = new Array('ceci', 'est', 'un', 'tableau') // Index begin everytime to 0
  let object = {
    nameKey: 'string in object',
    number: 5,
    array: ['ceci', 'est', 'un', 'tableau', number],
    boolean: false,
    object: {
      nameKeyObjectInObject: 'Same to object',
      number: 45,
    }
  }
  //array = array.join('-')
  const template_html_ul = `

  `
  const template_html_div = `
  <div>
    <p>${nomVariable} => variable string</p>
    <p>${number} => variable number</p>
    <p>${boolean} => variable boolean</p>
    <p>${array} => variable array</p>
    <p>${object.array}</p>
  </div>
`

  const $divSortie = document.querySelector("#sortie")
  $divSortie.insertAdjacentHTML('afterbegin', template_html_div)
  const $ulHobbies = $divSortie.querySelector('#hobbies')
  array.forEach(item => {
    $ulHobbies.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
  })
})



