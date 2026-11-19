// Set current year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

// Smooth scrolling animation
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]')

  if (!link) return

  const href = link.getAttribute('href')

  if (href === '#') {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const section = document.getElementById(href.slice(1))

  if (!section) return

  e.preventDefault()
  section.scrollIntoView({ behavior: 'smooth' })
})

// Changing active tabs
const tabs = document.querySelector('.vehicle-types')
tabs.addEventListener('click', e => {
  e.preventDefault()
  const clicked = e.target
  console.log('clicked', clicked)
  if (clicked.classList.contains('vehicle-type')) {
    document.querySelector('.vehicle-type--active').classList.remove('vehicle-type--active')
    clicked.classList.add('vehicle-type--active')
  }
})
